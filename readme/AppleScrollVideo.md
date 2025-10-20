---

# AppleScrollVideo 컴포넌트 상세 문서

## 개요

`AppleScrollVideo`는 스크롤 위치에 따라 비디오의 프레임을 정밀하게 제어하는 고급 컴포넌트입니다.
Apple 제품 소개 페이지처럼, 사용자가 스크롤을 내리거나 올릴 때 비디오가 정방향/역방향으로 부드럽게 재생됩니다.
여러 섹션 사이에 배치하여, 각 섹션별로 독립적으로 동작할 수 있습니다.

---

## 주요 기능

- **스크롤 위치에 따라 비디오 프레임 실시간 제어**
- **정방향/역방향 모두 지원** (스크롤 방향에 따라 자연스럽게 재생/역재생)
- **섹션 진입/이탈 시 자동 활성화 및 비활성화**
- **비디오가 끝까지 재생되면 다음 섹션으로 자동 스크롤(옵션)**
- **비디오 준비/버퍼링 상태, 진행도, 디버그 정보 실시간 표시**
- **휠 이벤트로도 프레임 미세 제어 가능**
- **오버레이, 진행도, 스크롤 가이드 등 다양한 UI 지원**
- **여러 개의 AppleScrollVideo를 연속 배치해도 각자 독립 동작**

---

## Props (속성)

| 이름              | 타입                | 기본값      | 설명                                                                                   |
|-------------------|---------------------|-------------|----------------------------------------------------------------------------------------|
| `src`             | `string`            | (필수)      | 비디오 파일의 URL (mp4 등)                                                             |
| `className`       | `string`            | `""`        | 비디오 wrapper에 추가할 클래스                                                         |
| `containerClassName` | `string`         | `""`        | 최상위 컨테이너에 추가할 클래스                                                        |
| `startProgress`   | `number`            | `0`         | 비디오가 재생을 시작하는 스크롤 진행도(0~1, 0=섹션 시작)                               |
| `endProgress`     | `number`            | `1`         | 비디오가 재생을 끝내는 스크롤 진행도(0~1, 1=섹션 끝)                                   |
| `sticky`          | `boolean`           | `true`      | 비디오가 섹션 내에서 sticky로 고정될지 여부                                            |
| `stickyTop`       | `string`            | `"top-0"`   | sticky일 때 top 위치 클래스                                                            |
| `overlay`         | `React.ReactNode`   | 없음        | 비디오 위에 표시할 오버레이 UI                                                         |
| `onFrameChange`   | `(frame, totalFrames) => void` | 없음 | 프레임이 바뀔 때마다 호출되는 콜백                                                     |
| `onVideoComplete` | `() => void`        | 없음        | 비디오가 끝까지 재생되었을 때 호출되는 콜백                                            |
| `autoScrollToNext`| `boolean`           | `true`      | 비디오가 끝나면 다음 섹션으로 자동 스크롤할지 여부                                     |
| `nextSectionId`   | `string`            | 없음        | 다음 섹션의 id (자동 스크롤 시 사용)                                                   |
| `scrollSnapAlign` | `"start" | "center" | "end"` | `"start"` | 스크롤 스냅 정렬 방식                                                                  |

---

## 동작 원리

1. **Intersection Observer**로 섹션이 80% 이상 뷰포트에 들어오면 비디오 활성화
2. **비디오가 준비(readyState)되면** 스크롤 위치에 따라 `currentTime`을 실시간으로 제어
3. **requestAnimationFrame**을 활용해 스크롤에 따른 프레임 이동을 부드럽게 처리
4. **휠 이벤트**로도 프레임을 미세하게 앞뒤로 이동 가능
5. **정방향/역방향** 모두 지원 (스크롤 방향에 따라 자동 감지)
6. **비디오가 끝까지 재생되면**(98% 이상) 자동으로 다음 섹션으로 스크롤(옵션)
7. **진행도, 상태, 디버그 정보**를 UI로 실시간 표시

---

## 주요 수치/상수 및 조정 방법

### 1. SCROLL_SENSITIVITY (휠 감도)
- 위치: 파일 상단부
  \`\`\`ts
  const SCROLL_SENSITIVITY = 0.008
  \`\`\`
- 설명: 휠 이벤트로 비디오 프레임을 이동할 때의 감도(값이 클수록 더 많이 움직임)
- 조정법:
  - 더 느리게(정밀하게) → 값을 더 작게
  - 더 빠르게 → 값을 더 크게

### 2. MAX_FRAME_JUMP (휠로 한 번에 이동 가능한 최대 프레임 비율)
- 위치:
  \`\`\`ts
  const MAX_FRAME_JUMP = 0.08
  \`\`\`
- 설명: 휠 한 번에 이동할 수 있는 최대 프레임 비율(0~1)
- 조정법:
  - 더 부드럽게 → 값을 더 작게
  - 더 빠르게 → 값을 더 크게

### 3. ACCUMULATION_DECAY (휠 누적값 감쇠)
- 위치:
  \`\`\`ts
  const ACCUMULATION_DECAY = 0.7
  \`\`\`
- 설명: 휠 이벤트 누적값이 얼마나 빨리 줄어드는지(0~1, 1에 가까울수록 천천히 감쇠)
- 조정법:
  - 더 빠르게 감쇠 → 값을 더 작게
  - 더 천천히 감쇠 → 값을 더 크게

### 4. Intersection Ratio (섹션 활성화 기준)
- 위치: IntersectionObserver threshold
  \`\`\`ts
  const isCompletelyVisible = ratio >= 0.8
  \`\`\`
- 설명: 섹션이 뷰포트에 80% 이상 들어오면 비디오 활성화
- 조정법:
  - 더 일찍 활성화 → 값을 더 작게
  - 더 늦게 활성화 → 값을 더 크게

### 5. 스크롤 대비 비디오 진행 비율(진행도 공식)
- 위치:
  \`\`\`ts
  videoRef.current.currentTime = videoDuration * progress;
  \`\`\`
- 설명: progress(0~1)와 videoDuration(초)의 곱으로 비디오 프레임 결정
- **더 느리게/더 빠르게** 하고 싶으면 아래처럼 상수 곱하기:
  \`\`\`ts
  const SCROLL_TO_VIDEO_RATIO = 0.5; // 0.5면 2배 느리게
  videoRef.current.currentTime = videoDuration * progress * SCROLL_TO_VIDEO_RATIO;
  \`\`\`

### 6. startProgress, endProgress (props)
- 각 AppleScrollVideo마다 비디오가 실제로 재생되는 스크롤 구간을 조정 가능
- 예시:
  \`\`\`tsx
  <AppleScrollVideo
    ...
    startProgress={0.1}
    endProgress={0.9}
  />
  \`\`\`
  → 10%~90% 구간에서만 비디오가 재생됨

---

## 커스텀/확장 포인트

- **오버레이 UI**: overlay prop에 원하는 React 노드 전달
- **진행도/상태 UI**: 필요에 따라 커스텀 가능(코드 하단부 참고)
- **자동 섹션 전환**: autoScrollToNext, nextSectionId로 제어
- **여러 영상 연속 배치**: 각 AppleScrollVideo는 독립적으로 동작, 특별한 추가 로직 필요 없음

---

## 주의사항 및 팁

- **비디오 인코딩**: 키프레임 간격이 너무 길면(10초 이상) seek 시 버벅임이 생길 수 있음 → 1~2초로 인코딩 권장
- **비디오 용량**: 대용량 파일은 preload="auto"로 미리 버퍼링, 네트워크 환경에 따라 로딩 대기 안내 UI 제공
- **모바일 환경**: 네트워크 속도에 따라 startProgress/endProgress, preload 등 조정 가능
- **섹션 높이**: 비디오가 너무 빨리 끝나면, 해당 섹션의 minHeight를 늘려서 스크롤 구간을 길게 할 것

---

## 예시 코드

\`\`\`tsx
<ScrollSectionContainer id="section1">...</ScrollSectionContainer>

<ScrollSectionContainer id="video1">
  <AppleScrollVideo
    src="https://your-supabase-url/video1.mp4"
    nextSectionId="section2"
    autoScrollToNext={true}
    overlay={<div>설명/가이드</div>}
    startProgress={0.1}
    endProgress={0.9}
  />
</ScrollSectionContainer>

<ScrollSectionContainer id="section2">...</ScrollSectionContainer>
\`\`\`

---

## 협업자 참고

- **수치값/상수는 파일 상단에서 바로 조정 가능**
  (SCROLL_SENSITIVITY, MAX_FRAME_JUMP, ACCUMULATION_DECAY 등)
- **props로 각 섹션별로 동작을 세밀하게 제어**
- **코드 하단부의 UI/디버그 영역은 필요에 따라 커스텀/삭제 가능**
- **여러 AppleScrollVideo를 연속 배치해도 문제 없음**

---

### 문의/확장 요청은 담당자 또는 코드 작성자에게 문의 바랍니다!
