# Share - 제품 페이지 공통 컴포넌트

dvia-mlp1000 페이지의 애플 스타일 이미지 시퀀스 애니메이션을 포함한 모든 재사용 가능한 컴포넌트를 제공합니다.

## 📦 포함된 내용

### 컴포넌트

- **ImageSequenceAnimation** - ScrollMagic 기반 이미지 시퀀스 애니메이션
- **ProductPageLayout** - 제품 페이지 공통 레이아웃 (폰트, 아이콘, 스타일)
- **ProductPageScripts** - 필요한 모든 외부 스크립트 로딩 관리

### 훅 (Hooks)

- **useScrollMagic** - ScrollMagic 초기화 및 상태 관리

### 유틸리티

- **image-sequence** - 이미지 시퀀스 경로 생성, 프리로드, 프레임 계산 등

### 스타일

- **product-page-styles** - 공통 CSS 스타일 정의

## 🚀 빠른 시작

### 1. 기본 제품 페이지 설정

```tsx
// app/products/my-product/layout.tsx
import ProductPageLayout from "@/share/components/ProductPageLayout"

export default function MyProductLayout({ children }: { children: React.ReactNode }) {
  return <ProductPageLayout>{children}</ProductPageLayout>
}
```

### 2. 이미지 시퀀스 애니메이션 사용

```tsx
// app/products/my-product/client.tsx
"use client"

import ImageSequenceAnimation from "@/share/components/ImageSequenceAnimation"
import ProductPageScripts from "@/share/components/ProductPageScripts"
import { useLanguage } from "@/hooks/use-language"

export default function MyProductClient() {
  const { language } = useLanguage()
  const isKorean = language === "ko"

  return (
    <div className="pa-homepage pa-dark">
      {/* 히어로 섹션 */}
      <section className="pa-hero pa-centered-section pa-full-height pa-image-back">
        {/* 히어로 컨텐츠 */}
      </section>

      {/* 이미지 시퀀스 애니메이션 */}
      <ImageSequenceAnimation
        triggerId="product-motion"
        config={{
          imagePath: "/products/my-product/motion",
          baseFilename: "my-product-motion",
          frameCount: 120,
          altText: "My Product Animation",
        }}
        textOverlays={[
          {
            id: "text1",
            content: isKorean ? "혁신적인 기술" : "Innovative Technology",
          },
          {
            id: "text2",
            content: isKorean ? "완벽한 성능" : "Perfect Performance",
          },
        ]}
      />

      {/* 스크립트 로드 */}
      <ProductPageScripts
        typedConfig={{
          selector: ".typed-text",
          strings: [isKorean ? "특별히 설계된" : "Specially Designed"],
        }}
      />
    </div>
  )
}
```

### 3. 페이지 구조

```tsx
// app/products/my-product/page.tsx
import Client from "./client"

export const metadata = {
  title: "My Product | DAEIL SYSTEMS",
  description: "Product description",
}

export default function MyProductPage() {
  return <Client />
}
```

## 📚 상세 가이드

### ImageSequenceAnimation

애플 스타일의 스크롤 기반 이미지 시퀀스 애니메이션을 구현합니다.

#### Props

```typescript
interface ImageSequenceConfig {
  imagePath: string          // 이미지 폴더 경로 (예: "/products/my-product/motion")
  baseFilename: string       // 기본 파일명 (예: "my-product-motion")
  frameCount: number         // 총 프레임 수
  startFrame?: number        // 시작 프레임 (기본값: 1)
  framePadding?: number      // 프레임 번호 패딩 (기본값: 4, "0001")
  fileExtension?: string     // 파일 확장자 (기본값: "jpg")
  scrollDuration?: string    // 스크롤 지속 시간 (기본값: "200%")
  imageWidth?: string        // 이미지 너비 (기본값: "80%")
  maxWidth?: string          // 최대 너비 (기본값: "1920px")
  altText: string            // 대체 텍스트
}

interface TextOverlay {
  id: string                 // 고유 ID
  content: React.ReactNode   // 표시할 내용 (다국어 지원)
}
```

#### 예제

**기본 사용:**

```tsx
<ImageSequenceAnimation
  triggerId="my-animation"
  config={{
    imagePath: "/products/my-product/motion",
    baseFilename: "product-motion",
    frameCount: 120,
    altText: "Product Animation"
  }}
/>
```

**텍스트 오버레이 포함:**

```tsx
<ImageSequenceAnimation
  triggerId="my-animation"
  config={{
    imagePath: "/products/my-product/motion",
    baseFilename: "product-motion",
    frameCount: 120,
    altText: "Product Animation"
  }}
  textOverlays={[
    { id: "text1", content: "Amazing Features" },
    { id: "text2", content: "Premium Quality" }
  ]}
/>
```

**다국어 지원:**

```tsx
const { language } = useLanguage()
const isKorean = language === "ko"

<ImageSequenceAnimation
  triggerId="my-animation"
  config={{
    imagePath: "/products/my-product/motion",
    baseFilename: "product-motion",
    frameCount: 120,
    altText: isKorean ? "제품 애니메이션" : "Product Animation"
  }}
  textOverlays={[
    {
      id: "text1",
      content: isKorean ? "놀라운 기능" : "Amazing Features"
    }
  ]}
/>
```

### ProductPageScripts

필요한 모든 외부 스크립트를 관리합니다.

#### Props

```typescript
interface ProductPageScriptsProps {
  enableParticles?: boolean       // Particles.js 활성화 (기본값: true)
  enableTyped?: boolean           // Typed.js 활성화 (기본값: true)
  typedConfig?: {
    selector: string              // 타이핑 적용할 요소 선택자
    strings: string[]             // 타이핑할 문자열 배열
    typeSpeed?: number            // 타이핑 속도 (기본값: 100)
    backSpeed?: number            // 백스페이스 속도 (기본값: 50)
    loop?: boolean                // 반복 여부 (기본값: true)
  }
  enableWow?: boolean             // WOW.js 활성화 (기본값: true)
  enableScrollMagic?: boolean     // ScrollMagic 활성화 (기본값: true)
  onScriptsLoaded?: () => void    // 스크립트 로드 완료 콜백
}
```

#### 예제

**기본 사용:**

```tsx
<ProductPageScripts />
```

**타이핑 애니메이션 설정:**

```tsx
<ProductPageScripts
  typedConfig={{
    selector: ".typed-text",
    strings: ["First Text", "Second Text"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
  }}
/>
```

**특정 기능 비활성화:**

```tsx
<ProductPageScripts
  enableParticles={false}
  enableTyped={false}
  enableWow={true}
  enableScrollMagic={true}
/>
```

### ProductPageLayout

제품 페이지의 공통 레이아웃을 제공합니다.

#### Props

```typescript
interface ProductPageLayoutProps {
  children: React.ReactNode
  additionalStyles?: string     // 추가 CSS 스타일
}
```

#### 예제

**기본 사용:**

```tsx
export default function MyProductLayout({ children }) {
  return <ProductPageLayout>{children}</ProductPageLayout>
}
```

**추가 스타일 적용:**

```tsx
const customStyles = `
  .my-custom-class {
    background: linear-gradient(180deg, #000 0%, #333 100%);
  }
`

export default function MyProductLayout({ children }) {
  return (
    <ProductPageLayout additionalStyles={customStyles}>
      {children}
    </ProductPageLayout>
  )
}
```

### useScrollMagic Hook

ScrollMagic의 로딩 상태와 컨트롤러를 관리합니다.

#### 예제

```tsx
import { useScrollMagic } from "@/share/hooks/useScrollMagic"
import { useEffect } from "react"

function MyComponent() {
  const { isReady, controller } = useScrollMagic({
    onReady: (ctrl) => {
      console.log("ScrollMagic is ready!", ctrl)
    },
    onError: () => {
      console.error("Failed to load ScrollMagic")
    }
  })

  useEffect(() => {
    if (isReady && controller) {
      // ScrollMagic 씬 생성
      const scene = new ScrollMagic.Scene({
        triggerElement: "#my-trigger",
        duration: "100%"
      })
      .addTo(controller)
    }
  }, [isReady, controller])

  return <div>...</div>
}
```

## 🎨 CSS 클래스 가이드

### 레이아웃 클래스

- `.pa-homepage` - 홈페이지 기본 스타일
- `.pa-dark` - 다크 테마
- `.pa-hero` - 히어로 섹션
- `.pa-centered-section` - 중앙 정렬 섹션
- `.pa-full-height` - 전체 높이 섹션
- `.pa-image-back` - 배경 이미지

### 텍스트 클래스

- `.pa-h1-v1`, `.pa-h1-v2` - H1 스타일
- `.pa-h2-v2-hero-subhead` - 히어로 서브헤드
- `.pa-h3-v1` - H3 스타일
- `.pa-h4-v1` - H4 스타일
- `.pa-p-v1` - 문단 스타일
- `.pa-white` - 흰색 텍스트
- `.pa-bright` - 밝은 텍스트

### 섹션 클래스

- `.about-us-sec` - About 섹션
- `.overview-sec` - Overview 섹션
- `.four-feat-sec` - 4개 기능 섹션
- `.software-sec` - 소프트웨어 섹션
- `.spec-sec` - 사양 섹션
- `.contact-us-sec` - Contact 섹션

### 애니메이션 클래스

WOW.js와 함께 사용:

```tsx
<div className="fadeIn wow" data-wow-duration="1s" data-wow-delay="0.2s">
  Content
</div>
```

사용 가능한 애니메이션:
- `.fadeIn` - 페이드 인
- `.fadeInDown` - 위에서 페이드 인
- `.fadeInUp` - 아래에서 페이드 인
- `.fadeInLeft` - 왼쪽에서 페이드 인

## 📁 이미지 시퀀스 파일 구조

이미지 시퀀스는 다음과 같은 구조로 저장해야 합니다:

```
public/
  products/
    my-product/
      motion/
        my-product-motion-0001.jpg
        my-product-motion-0002.jpg
        my-product-motion-0003.jpg
        ...
        my-product-motion-0120.jpg
```

### 파일 명명 규칙

- 기본 파일명 + 하이픈 + 패딩된 프레임 번호 + 확장자
- 예: `product-motion-0001.jpg`
- 프레임 번호는 4자리 패딩이 기본값 (변경 가능)

## 🔧 유틸리티 함수

### 이미지 경로 생성

```tsx
import { getImageSequencePath } from "@/share/utils/image-sequence"

const imagePath = getImageSequencePath(
  "/products/my-product/motion",
  "product-motion",
  1,
  "jpg",
  4
)
// 결과: "/products/my-product/motion/product-motion-0001.jpg"
```

### 이미지 프리로드

```tsx
import { preloadImageSequence } from "@/share/utils/image-sequence"

await preloadImageSequence(
  "/products/my-product/motion",
  "product-motion",
  1,
  120,
  {
    onProgress: (loaded, total) => {
      console.log(`Loaded ${loaded}/${total} images`)
    }
  }
)
```

### 프레임 계산

```tsx
import { calculateFrame } from "@/share/utils/image-sequence"

const frame = calculateFrame(
  0.5,    // 스크롤 진행도 (0-1)
  120,    // 총 프레임 수
  1,      // 시작 프레임
  "ceil"  // 반올림 방법
)
// 결과: 60
```

## 💡 실전 예제

### 완전한 제품 페이지 예제

```tsx
// layout.tsx
import ProductPageLayout from "@/share/components/ProductPageLayout"

export default function ProductLayout({ children }) {
  return <ProductPageLayout>{children}</ProductPageLayout>
}

// client.tsx
"use client"

import { ImageSequenceAnimation, ProductPageScripts } from "@/share/components"
import { useLanguage } from "@/hooks/use-language"

export default function ProductClient() {
  const { language } = useLanguage()
  const isKorean = language === "ko"

  return (
    <div className="pa-homepage pa-dark">
      {/* Hero Section */}
      <section
        className="pa-hero pa-centered-section pa-full-height pa-image-back"
        style={{ backgroundImage: "url(/products/my-product/hero.jpg)" }}
      >
        <div id="particles-js"></div>
        <div className="pa-hero-content text-center">
          <h1 className="pa-h2-v2-hero-subhead pa-white">
            {isKorean ? "혁신적인 제품" : "Innovative Product"}
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="pa-about-us pa-standard-section text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="pa-h1-v2 pa-bright fadeInDown wow">
            About Product
          </h2>
          <p className="pa-p-v1 pa-bright fadeInUp wow">
            {isKorean ? "제품 설명..." : "Product description..."}
          </p>
        </div>
      </section>

      {/* Image Sequence Animation */}
      <ImageSequenceAnimation
        triggerId="product-animation"
        config={{
          imagePath: "/products/my-product/motion",
          baseFilename: "product-motion",
          frameCount: 120,
          altText: "Product Animation"
        }}
        textOverlays={[
          {
            id: "text1",
            content: isKorean ? "첫 번째 기능" : "First Feature"
          },
          {
            id: "text2",
            content: isKorean ? "두 번째 기능" : "Second Feature"
          }
        ]}
      />

      {/* Features Section */}
      <section className="pa-portfolio four-feat-sec">
        {/* Features content */}
      </section>

      {/* Scripts */}
      <ProductPageScripts
        typedConfig={{
          selector: ".typed-text",
          strings: [
            isKorean ? "혁신적인" : "Innovative",
            isKorean ? "강력한" : "Powerful"
          ]
        }}
      />
    </div>
  )
}
```

## 🎯 팁과 모범 사례

### 1. 성능 최적화

- 이미지 시퀀스는 적절한 크기로 압축하세요 (권장: 1920px 이하)
- WebP 또는 최적화된 JPEG 사용
- 필요한 경우 `preloadImageSequence`로 이미지 프리로드

### 2. 모바일 대응

- `motion-box-mo` 클래스를 사용하여 모바일 폴백 제공
- 텍스트 오버레이는 모바일에서 적절히 조정됨

### 3. 다국어 지원

- `useLanguage` 훅 활용
- 모든 텍스트 컨텐츠에 다국어 조건부 렌더링 적용

### 4. 접근성

- 모든 이미지에 적절한 `altText` 제공
- 시맨틱 HTML 사용 (`section`, `h1-h6` 등)

## 🐛 문제 해결

### ScrollMagic이 작동하지 않을 때

1. 스크립트 로딩 순서 확인
2. `useScrollMagic` 훅 사용하여 로딩 상태 확인
3. 브라우저 콘솔에서 에러 확인

### 이미지 시퀀스가 표시되지 않을 때

1. 이미지 경로가 올바른지 확인
2. 파일 명명 규칙이 일치하는지 확인
3. 프레임 번호 패딩이 맞는지 확인

### 애니메이션이 부드럽지 않을 때

1. 이미지 크기 최적화
2. 프레임 수 조정 (60-120 프레임 권장)
3. `scrollDuration` 값 조정

## 📝 라이선스

이 컴포넌트는 DAEIL SYSTEMS 내부 프로젝트에서 사용하기 위해 작성되었습니다.
