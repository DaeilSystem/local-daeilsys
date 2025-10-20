# PNG Sequence Files

이 폴더는 FFmpeg으로 변환된 PNG 시퀀스 파일들을 저장하는 곳입니다.

## 📁 폴더 구조

\`\`\`
public/frames/
├── frame_0001.png
├── frame_0002.png
├── frame_0003.png
├── ...
└── frame_0150.png
\`\`\`

## 🎬 FFmpeg 변환 명령어

### MP4를 PNG 시퀀스로 변환
\`\`\`bash
ffmpeg -i input.mp4 -vf "fps=30" frame_%04d.png
\`\`\`

### 고품질 PNG로 변환
\`\`\`bash
ffmpeg -i input.mp4 -vf "fps=30" -q:v 1 frame_%04d.png
\`\`\`

### 특정 해상도로 변환
\`\`\`bash
ffmpeg -i input.mp4 -vf "fps=30,scale=1920:1080" frame_%04d.png
\`\`\`

## ⚙️ 컴포넌트 설정

\`\`\`tsx
<PngSequenceScroll
  imagePrefix="frame_"
  imageExtension=".png"
  totalFrames={150} // 실제 프레임 수
  startFrame={1}
  imagePath="/frames/"
  zeroPadding={4} // frame_0001.png 형식
/>
\`\`\`

## 📝 파일명 규칙

- **접두사**: `frame_` (imagePrefix)
- **확장자**: `.png` (imageExtension)
- **자릿수**: 4자리 (zeroPadding)
- **예시**: `frame_0001.png`, `frame_0002.png`, ...

## 🚀 사용법

1. FFmpeg으로 MP4를 PNG 시퀀스로 변환
2. 변환된 PNG 파일들을 이 폴더에 저장
3. `totalFrames` 값을 실제 프레임 수로 설정
4. 컴포넌트에서 사용

## 💡 최적화 팁

- **파일 크기**: PNG 압축률 조정으로 파일 크기 최적화
- **해상도**: 적절한 해상도로 변환하여 로딩 속도 개선
- **프레임 수**: 너무 많은 프레임은 성능에 영향을 줄 수 있음
