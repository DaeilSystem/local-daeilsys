# SmoothScrollVideo 컴포넌트

애플 사이트 스타일의 부드러운 스크롤 비디오 컴포넌트입니다. 스크롤에 따라 비디오가 자연스럽게 제어되며, 다양한 입력 방식(스크롤, 휠, 키보드, 터치)을 지원합니다.

## 🎯 주요 특징

- **부드러운 스크롤 제어**: 스크롤에 따라 비디오가 자연스럽게 재생/정지
- **다양한 입력 지원**: 마우스 휠, 키보드, 터치 스크린 모두 지원
- **반응형 디자인**: 모바일과 데스크톱에서 완벽 작동
- **성능 최적화**: Framer Motion을 활용한 최적화된 애니메이션
- **커스터마이징 가능**: 부드러움, 감도 등 다양한 옵션 제공

## 🚀 기본 사용법

\`\`\`tsx
import { SmoothScrollVideo } from "@/components/scroll-video/smooth-scroll-video"

export default function MyPage() {
  return (
    <SmoothScrollVideo
      src="/your-video.mp4"
      triggerHeight={400}
    />
  )
}
\`\`\`

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | 비디오 파일 경로 (필수) |
| `className` | `string` | `""` | 비디오 요소에 적용할 CSS 클래스 |
| `containerClassName` | `string` | `""` | 컨테이너에 적용할 CSS 클래스 |
| `overlay` | `React.ReactNode` | - | 비디오 위에 표시할 오버레이 |
| `onFrameChange` | `(frame: number, total: number) => void` | - | 프레임 변경 시 호출되는 콜백 |
| `onVideoComplete` | `() => void` | - | 비디오 완료 시 호출되는 콜백 |
| `nextSectionId` | `string` | - | 다음 섹션의 ID |
| `triggerHeight` | `number` | `400` | 비디오가 활성화될 스크롤 높이 (vh) |
| `autoScrollToNext` | `boolean` | `true` | 자동으로 다음 섹션으로 이동할지 여부 |
| `smoothness` | `number` | `0.15` | 부드러움 정도 (0.1 ~ 0.3) |
| `scrollSensitivity` | `number` | `0.005` | 스크롤 감도 (0.001 ~ 0.01) |

## 🎮 제어 방법

### 마우스 휠
- 위/아래 스크롤로 비디오 제어
- 비디오 시작/끝에서 자동으로 이전/다음 섹션 이동

### 키보드
- `↑` / `↓`: 비디오 앞/뒤로 이동
- `PageUp` / `PageDown`: 비디오 앞/뒤로 이동
- `Space`: 비디오 앞으로 이동
- `Home`: 비디오 시작으로 이동
- `End`: 비디오 끝으로 이동

### 터치 (모바일)
- 스크롤 제스처로 비디오 제어

## 🎨 고급 사용법

### 커스터마이징된 설정

\`\`\`tsx
<SmoothScrollVideo
  src="/your-video.mp4"
  triggerHeight={500}
  smoothness={0.12}
  scrollSensitivity={0.004}
  onFrameChange={(frame, total) => {
    console.log(`현재 프레임: ${frame}/${total}`)
  }}
  onVideoComplete={() => {
    console.log("비디오 완료!")
  }}
/>
\`\`\`

### 오버레이 추가

\`\`\`tsx
<SmoothScrollVideo
  src="/your-video.mp4"
  overlay={
    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold mb-4">제목</h2>
        <p className="text-lg">설명 텍스트</p>
      </div>
    </div>
  }
/>
\`\`\`

### 섹션 간 자동 이동

\`\`\`tsx
<SmoothScrollVideo
  src="/your-video.mp4"
  nextSectionId="next-section"
  autoScrollToNext={true}
  onVideoComplete={() => {
    // 비디오 완료 후 실행할 로직
  }}
/>
\`\`\`

## 🔧 성능 최적화 팁

1. **비디오 파일 최적화**
   - 적절한 해상도와 압축률 사용
   - WebM 또는 MP4 포맷 권장

2. **부드러움 설정 조정**
   - `smoothness` 값을 낮추면 더 빠른 반응
   - 높이면 더 부드러운 전환

3. **스크롤 감도 조정**
   - `scrollSensitivity` 값을 조정하여 스크롤 감도 변경

## 🐛 문제 해결

### 비디오가 로드되지 않는 경우
- 비디오 파일 경로 확인
- 브라우저 콘솔에서 오류 메시지 확인
- 비디오 파일 형식 지원 여부 확인

### 스크롤이 부드럽지 않은 경우
- `smoothness` 값을 조정
- `scrollSensitivity` 값을 조정
- 브라우저 성능 확인

### 모바일에서 작동하지 않는 경우
- 터치 이벤트 지원 확인
- 모바일 브라우저 호환성 확인

## 📱 브라우저 지원

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎬 데모

`/smooth-scroll-demo` 페이지에서 실제 동작을 확인할 수 있습니다.

\`\`\`bash
npm run dev
# 또는
pnpm dev
\`\`\`

그 후 브라우저에서 `http://localhost:3000/smooth-scroll-demo`로 접속하세요.
