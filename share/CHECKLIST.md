# 새 제품 페이지 생성 체크리스트

dvia-mlp1000 스타일의 제품 페이지를 만들 때 사용하세요.

## 📋 사전 준비

- [ ] 제품 이름 및 모델명 결정
- [ ] 제품 이미지 준비
  - [ ] 히어로 이미지 (메인 비주얼)
  - [ ] About 섹션 배경 이미지
  - [ ] Contact 섹션 배경 이미지
  - [ ] 이미지 시퀀스 프레임 (60-120장 권장)
- [ ] 제품 설명 텍스트 작성 (한글/영문)
- [ ] 제품 사양 정리

## 🖼️ 이미지 시퀀스 준비

- [ ] 이미지 시퀀스 프레임 생성
  - 권장 프레임 수: 60-120장
  - 권장 해상도: 1920px 이하
  - 형식: JPEG (최적화) 또는 WebP
- [ ] 파일 명명 규칙 적용
  - 형식: `{제품명}-motion-0001.jpg`
  - 4자리 패딩 숫자 (0001, 0002, ...)
- [ ] 이미지 최적화 수행
  - [ ] 압축 적용 (TinyPNG, ImageOptim 등)
  - [ ] 파일 크기 확인 (프레임당 100-300KB 권장)
- [ ] 올바른 디렉토리에 배치
  - 경로: `public/products/{제품명}/assets/images/motion-sample/`

## 📁 파일 구조 생성

- [ ] 제품 페이지 디렉토리 생성
  ```
  app/products/{카테고리}/{제품명}/
    ├── layout.tsx
    ├── page.tsx
    └── client.tsx
  ```

- [ ] 이미지 디렉토리 생성
  ```
  public/products/{제품명}/
    └── assets/
        └── images/
            ├── main-visual-min.jpg
            ├── about-{제품명}-min.jpg
            ├── contact-background-image-min.jpg
            ├── motion-sample/
            │   └── {제품명}-motion-0001.jpg ~ 0120.jpg
            └── motion-disassembly/ (선택사항)
                └── {제품명}-disassembly-0000.jpg ~ 0060.jpg
  ```

## 💻 코드 작성

### layout.tsx

- [ ] `ProductPageLayout` import
- [ ] 레이아웃 컴포넌트 생성
- [ ] (선택) 커스텀 스타일 추가

```tsx
import ProductPageLayout from "@/share/components/ProductPageLayout"

export default function MyProductLayout({ children }) {
  return <ProductPageLayout>{children}</ProductPageLayout>
}
```

### page.tsx

- [ ] 메타데이터 설정
  - [ ] title
  - [ ] description
  - [ ] keywords
  - [ ] openGraph
- [ ] Client 컴포넌트 import 및 렌더링

```tsx
import Client from "./client"

export const metadata = {
  title: "제품명 | DAEIL SYSTEMS",
  description: "제품 설명",
}

export default function Page() {
  return <Client />
}
```

### client.tsx

- [ ] 필요한 컴포넌트 import
  - [ ] `ImageSequenceAnimation`
  - [ ] `ProductPageScripts`
  - [ ] `useLanguage`
- [ ] 히어로 섹션 작성
  - [ ] 배경 이미지 설정
  - [ ] Particles.js 컨테이너 추가
  - [ ] 제목 및 부제목 추가
- [ ] About 섹션 작성
  - [ ] 제품 설명
  - [ ] 아이콘 리스트
  - [ ] WOW 애니메이션 적용
- [ ] 이미지 시퀀스 애니메이션 추가
  - [ ] `triggerId` 설정
  - [ ] `config` 설정 (경로, 프레임 수 등)
  - [ ] 텍스트 오버레이 추가 (선택)
  - [ ] 다국어 지원
- [ ] 추가 섹션 작성
  - [ ] Overview
  - [ ] Features
  - [ ] Specifications
  - [ ] Contact
- [ ] `ProductPageScripts` 추가
  - [ ] Typed.js 설정 (선택)
  - [ ] 기타 스크립트 옵션 설정

## 🎨 스타일링 체크

- [ ] 히어로 섹션 배경 이미지 표시 확인
- [ ] 텍스트 가독성 확인
- [ ] 아이콘 표시 확인 (Material Icons)
- [ ] 이미지 시퀀스 스크롤 동작 확인
- [ ] 텍스트 오버레이 표시 및 타이밍 확인
- [ ] WOW 애니메이션 동작 확인
- [ ] 반응형 디자인 확인
  - [ ] 데스크톱 (1920px)
  - [ ] 태블릿 (1024px)
  - [ ] 모바일 (375px)

## 🌍 다국어 지원

- [ ] `useLanguage` 훅 사용
- [ ] 모든 텍스트에 한글/영문 버전 작성
  - [ ] 히어로 섹션 제목
  - [ ] About 섹션 내용
  - [ ] 텍스트 오버레이
  - [ ] Features 설명
  - [ ] Specifications
  - [ ] Contact 섹션
- [ ] 이미지 alt 텍스트 다국어 대응

## ⚡ 성능 최적화

- [ ] 이미지 최적화 확인
  - [ ] 적절한 해상도
  - [ ] 압축 적용
  - [ ] WebP 사용 고려
- [ ] (선택) 이미지 프리로딩 구현
- [ ] Lighthouse 성능 테스트
  - [ ] Performance > 80
  - [ ] Accessibility > 90
  - [ ] Best Practices > 80
  - [ ] SEO > 90

## 🧪 테스트

### 기능 테스트

- [ ] 페이지 로딩 확인
- [ ] 이미지 시퀀스 애니메이션 동작
  - [ ] 스크롤 시 프레임 변경 확인
  - [ ] 부드러운 애니메이션 확인
  - [ ] 텍스트 오버레이 표시 확인
- [ ] Particles.js 배경 효과 확인
- [ ] Typed.js 타이핑 애니메이션 확인
- [ ] WOW.js 스크롤 애니메이션 확인
- [ ] 링크 동작 확인
- [ ] 다국어 전환 확인

### 브라우저 호환성

- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 반응형 테스트

- [ ] 데스크톱 (1920px 이상)
- [ ] 노트북 (1366px - 1920px)
- [ ] 태블릿 가로 (1024px)
- [ ] 태블릿 세로 (768px)
- [ ] 모바일 가로 (667px)
- [ ] 모바일 세로 (375px)

## 🐛 일반적인 문제 해결

### 이미지 시퀀스가 작동하지 않는 경우

- [ ] 이미지 경로 확인
- [ ] 파일명 패턴 확인 (`{name}-0001.jpg`)
- [ ] 프레임 수가 올바른지 확인
- [ ] 브라우저 콘솔에서 에러 확인
- [ ] ScrollMagic 로딩 확인

### 애니메이션이 부드럽지 않은 경우

- [ ] 이미지 크기 줄이기
- [ ] 프레임 수 조정
- [ ] 브라우저 하드웨어 가속 확인
- [ ] scrollDuration 값 조정

### 스크립트가 로드되지 않는 경우

- [ ] 네트워크 연결 확인
- [ ] CDN 링크 확인
- [ ] 브라우저 콘솔에서 에러 확인
- [ ] Next.js Script 컴포넌트 strategy 확인

## ✅ 배포 전 최종 확인

- [ ] 모든 이미지 파일이 올바른 위치에 있는지 확인
- [ ] 깨진 링크가 없는지 확인
- [ ] 콘솔 에러가 없는지 확인
- [ ] 메타데이터 (SEO) 확인
- [ ] Open Graph 이미지 설정
- [ ] 성능 최적화 완료
- [ ] 모바일 테스트 완료
- [ ] 다국어 지원 완료

## 📝 추가 작업 (선택사항)

- [ ] 제품 데이터 JSON 파일 생성
  - 경로: `data/products/{제품명}.json`
- [ ] 사양 테이블 데이터 분리
- [ ] 3D 모델링 뷰어 추가
- [ ] 동영상 삽입
- [ ] 이미지 갤러리 추가
- [ ] FAQ 섹션 추가
- [ ] 다운로드 섹션 (브로슈어, 매뉴얼 등)

## 🎉 완료!

모든 항목을 체크했다면 제품 페이지가 완성되었습니다!

문제가 있거나 도움이 필요하면 `/share/README.md`와 `/share/examples/EXAMPLE-USAGE.md`를 참고하세요.
