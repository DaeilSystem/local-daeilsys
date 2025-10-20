# PngSequenceScroll 컴포넌트

FFmpeg으로 변환된 PNG 시퀀스를 스크롤 기반으로 재생하는 애플 스타일 컴포넌트입니다. 스크롤에 따라 이미지 시퀀스가 자연스럽게 재생되며, 다양한 입력 방식을 지원합니다.

## 🎯 주요 특징

- **PNG 시퀀스 지원**: FFmpeg으로 변환된 PNG 파일들을 스크롤로 제어
- **부드러운 스크롤 제어**: 스크롤에 따라 이미지가 자연스럽게 전환
- **다양한 입력 지원**: 마우스 휠, 키보드, 터치 스크린 모두 지원
- **반응형 디자인**: 모바일과 데스크톱에서 완벽 작동
- **성능 최적화**: Framer Motion을 활용한 최적화된 애니메이션
- **커스터마이징 가능**: 부드러움, 감도, 파일명 패턴 등 다양한 옵션 제공

## 🚀 기본 사용법

\`\`\`tsx
import { PngSequenceScroll } from "@/components/scroll-video/png-sequence-scroll"

export default function MyPage() {
  return (
    <PngSequenceScroll
      imagePrefix="frame_"
      imageExtension=".png"
      totalFrames={150}
      imagePath="https://your-project.supabase.co/storage/v1/object/public/frames/"
    />
  )
}
\`\`\`

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `imagePrefix` | `string` | - | 이미지 파일명 접두사 (예: "frame_") |
| `imageExtension` | `string` | - | 이미지 확장자 (예: ".png") |
| `totalFrames` | `number` | - | 총 프레임 수 (필수) |
| `startFrame` | `number` | `1` | 시작 프레임 번호 |
| `className` | `string` | `""` | 이미지 요소에 적용할 CSS 클래스 |
| `containerClassName` | `string` | `""` | 컨테이너에 적용할 CSS 클래스 |
| `overlay` | `React.ReactNode` | - | 이미지 위에 표시할 오버레이 |
| `onFrameChange` | `(frame: number, total: number) => void` | - | 프레임 변경 시 호출되는 콜백 |
| `onSequenceComplete` | `() => void` | - | 시퀀스 완료 시 호출되는 콜백 |
| `nextSectionId` | `string` | - | 다음 섹션의 ID |
| `triggerHeight` | `number` | `400` | 시퀀스가 활성화될 스크롤 높이 (vh) |
| `autoScrollToNext` | `boolean` | `true` | 자동으로 다음 섹션으로 이동할지 여부 |
| `smoothness` | `number` | `0.15` | 부드러움 정도 (0.1 ~ 0.3) |
| `scrollSensitivity` | `number` | `0.005` | 스크롤 감도 (0.001 ~ 0.01) |
| `imagePath` | `string` | `"https://cxdukqxqwnvvplsuvcki.supabase.co/storage/v1/object/public/frames/"` | 이미지 파일들이 있는 경로 |
| `zeroPadding` | `number` | `4` | 프레임 번호 자릿수 (예: 4 = frame_0001.png) |

## 🎮 제어 방법

### 마우스 휠
- 위/아래 스크롤로 이미지 시퀀스 제어
- 시퀀스 시작/끝에서 자동으로 이전/다음 섹션 이동

### 키보드
- `↑` / `↓`: 시퀀스 앞/뒤로 이동
- `PageUp` / `PageDown`: 시퀀스 앞/뒤로 이동
- `Space`: 시퀀스 앞으로 이동
- `Home`: 시퀀스 시작으로 이동
- `End`: 시퀀스 끝으로 이동

### 터치 (모바일)
- 스크롤 제스처로 시퀀스 제어

## 🎨 고급 사용법

### 커스터마이징된 설정

\`\`\`tsx
<PngSequenceScroll
  imagePrefix="animation_"
  imageExtension=".jpg"
  totalFrames={200}
  startFrame={0}
  imagePath="/animations/"
  zeroPadding={3} // animation_000.jpg 형식
  smoothness={0.12}
  scrollSensitivity={0.004}
  onFrameChange={(frame, total) => {
    console.log(`현재 프레임: ${frame}/${total}`)
  }}
  onSequenceComplete={() => {
    console.log("시퀀스 완료!")
  }}
/>
\`\`\`

### 오버레이 추가

\`\`\`tsx
<PngSequenceScroll
  imagePrefix="frame_"
  imageExtension=".png"
  totalFrames={150}
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
<PngSequenceScroll
  imagePrefix="frame_"
  imageExtension=".png"
  totalFrames={150}
  nextSectionId="next-section"
  autoScrollToNext={true}
  onSequenceComplete={() => {
    // 시퀀스 완료 후 실행할 로직
  }}
/>
\`\`\`

## 🎬 FFmpeg 변환 가이드

### 기본 변환 (6자리)
\`\`\`bash
ffmpeg -i input.mp4 -vf "fps=30" frame_%06d.png
\`\`\`

### 고품질 변환
\`\`\`bash
ffmpeg -i input.mp4 -vf "fps=30" -q:v 1 frame_%06d.png
\`\`\`

### 특정 해상도로 변환
\`\`\`bash
ffmpeg -i input.mp4 -vf "fps=30,scale=1920:1080" frame_%06d.png
\`\`\`

### 특정 구간만 변환
\`\`\`bash
ffmpeg -i input.mp4 -ss 00:00:10 -t 00:00:05 -vf "fps=30" frame_%06d.png
\`\`\`

## 📁 파일 구조 예시

### 로컬 파일
\`\`\`
public/frames/
├── frame_0001.png
├── frame_0002.png
├── frame_0003.png
├── ...
└── frame_0150.png
\`\`\`

### Supabase 스토리지
\`\`\`
frames/ (bucket)
├── frame_000001.png
├── frame_000002.png
├── frame_000003.png
├── ...
└── frame_000150.png
\`\`\`

## 🔧 성능 최적화 팁

1. **이미지 최적화**
   - 적절한 해상도와 압축률 사용
   - PNG 대신 WebP 사용 고려 (더 작은 파일 크기)

2. **프레임 수 조정**
   - 너무 많은 프레임은 성능에 영향을 줄 수 있음
   - 적절한 FPS로 변환 (24-30fps 권장)

3. **부드러움 설정 조정**
   - `smoothness` 값을 낮추면 더 빠른 반응
   - 높이면 더 부드러운 전환

4. **스크롤 감도 조정**
   - `scrollSensitivity` 값을 조정하여 스크롤 감도 변경

## 🐛 문제 해결

### 이미지가 로드되지 않는 경우
- 이미지 파일 경로 확인
- 파일명 패턴 확인 (접두사, 확장자, 자릿수)
- 브라우저 콘솔에서 오류 메시지 확인

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

DVIA-ULF 제품 페이지에서 실제 동작을 확인할 수 있습니다.

\`\`\`bash
npm run dev
# 또는
pnpm dev
\`\`\`

그 후 브라우저에서 해당 제품 페이지로 접속하세요.

## ☁️ Supabase 스토리지 사용법

### 1. Supabase 프로젝트 설정
\`\`\`bash
# Supabase CLI 설치 (선택사항)
npm install -g supabase

# 프로젝트 초기화
supabase init
\`\`\`

### 2. 스토리지 버킷 생성
Supabase 대시보드에서:
1. Storage → New bucket
2. Bucket name: `frames`
3. Public bucket으로 설정

### 3. 파일 업로드
\`\`\`bash
# Supabase CLI로 업로드
supabase storage upload frames/ ./local-frames/

# 또는 대시보드에서 직접 업로드
\`\`\`

### 4. 컴포넌트에서 사용
\`\`\`tsx
<PngSequenceScroll
  imagePrefix="frame_"
  imageExtension=".png"
  totalFrames={150}
  imagePath="https://your-project.supabase.co/storage/v1/object/public/frames/"
  zeroPadding={6} // frame_000001.png 형식
/>
\`\`\`

### 5. 파일 권한 설정
Supabase 대시보드에서 Storage → Policies:
\`\`\`sql
-- 모든 사용자가 읽기 가능하도록 설정
CREATE POLICY "Public Access" ON storage.objects
FOR SELECT USING (bucket_id = 'frames');
\`\`\`
