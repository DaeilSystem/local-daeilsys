# 사용 예제

이 문서는 `/share` 컴포넌트를 실제로 사용하는 구체적인 예제들을 제공합니다.

## 예제 1: 기본 제품 페이지

가장 간단한 형태의 제품 페이지입니다.

### 파일 구조

```
app/products/my-product/
  ├── layout.tsx
  ├── page.tsx
  └── client.tsx
```

### layout.tsx

```tsx
import ProductPageLayout from "@/share/components/ProductPageLayout"

export default function MyProductLayout({ children }: { children: React.ReactNode }) {
  return <ProductPageLayout>{children}</ProductPageLayout>
}
```

### page.tsx

```tsx
import Client from "./client"

export const metadata = {
  title: "My Product | DAEIL SYSTEMS",
  description: "Amazing product description",
}

export default function MyProductPage() {
  return <Client />
}
```

### client.tsx

```tsx
"use client"

import { ImageSequenceAnimation, ProductPageScripts } from "@/share"
import { useLanguage } from "@/hooks/use-language"

export default function MyProductClient() {
  const { language } = useLanguage()
  const isKorean = language === "ko"

  return (
    <div className="pa-homepage pa-dark">
      {/* 히어로 섹션 */}
      <section
        className="pa-hero pa-centered-section pa-full-height pa-image-back"
        style={{ backgroundImage: "url(/products/my-product/hero.jpg)" }}
      >
        <div className="pa-hero-content text-center">
          <h1 className="pa-h2-v2-hero-subhead pa-white">
            {isKorean ? "나의 제품" : "My Product"}
          </h1>
        </div>
      </section>

      {/* 이미지 시퀀스 */}
      <ImageSequenceAnimation
        triggerId="product-motion"
        config={{
          imagePath: "/products/my-product/motion",
          baseFilename: "my-product-motion",
          frameCount: 120,
          altText: "Product Animation"
        }}
      />

      <ProductPageScripts />
    </div>
  )
}
```

## 예제 2: dvia-mlp1000 스타일 완전 복사

dvia-mlp1000의 느낌을 그대로 가져가는 예제입니다.

### client.tsx

```tsx
"use client"

import { ImageSequenceAnimation, ProductPageScripts } from "@/share"
import { useLanguage } from "@/hooks/use-language"
import { useState, useEffect } from "react"

export default function DviaStyleProductClient() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isKorean = mounted ? language === "ko" : false

  return (
    <div className="pa-homepage pa-dark">
      {/* Hero Section */}
      <section
        id="top"
        className="main-sec pa-hero pa-centered-section pa-full-height pa-image-back"
        style={{ backgroundImage: "url(/products/my-product/assets/images/main-visual-min.jpg)" }}
      >
        <div className="pa-absolute-fill pa-gradient-back-v1" style={{ opacity: 0 }}></div>
        <div id="particles-js"></div>

        <div className="max-w-7xl mx-auto px-4 pa-hero-content text-center" style={{ marginTop: "6vh" }}>
          <div className="flex flex-wrap pa-hero-typed-text">
            <div className="w-full">
              <div className="typed-text mega-typed">
                <span className="animated-text-effect">
                  {isKorean ? "특별히 설계된" : "Specially Designed"}
                </span>
                <span className="typed-cursor">|</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap" style={{ marginTop: "20px" }}>
            <div className="w-full" style={{ maxWidth: "976px", margin: "0 auto" }}>
              <h1 className="pa-h2-v2-hero-subhead pa-white">
                {isKorean ? (
                  <>혁신적인 제품<br />최고의 <strong>성능</strong></>
                ) : (
                  <>Innovative Product<br />Best <strong>Performance</strong></>
                )}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about-us"
        className="pa-about-us pa-standard-section text-center pa-dark about-us-sec"
        style={{ backgroundImage: "url(/products/my-product/assets/images/about-bg.jpg)" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-10/12 xl:mx-auto">
              <h2 className="pa-h1-v2 pa-bright title-text fadeInDown wow" data-wow-duration="1s" data-wow-delay="0.2s">
                <strong>About</strong> My Product
              </h2>
              <p className="pa-p-v1 pa-bright about-des fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.3s">
                {isKorean ? (
                  <>제품에 대한 설명을 여기에 작성합니다.</>
                ) : (
                  <>Product description goes here.</>
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap icon-list-wrap">
            <ul className="pa-icon-list-horizontal-dark">
              <li className="fadeIn wow" data-wow-duration="1s" data-wow-delay="0.4s">
                <span className="pa-icon-list-icon">
                  <i className="material-icons">task_alt</i>
                </span>
                <p className="pa-icon-list-text pa-p-v1 pa-bright">CONVENIENT</p>
              </li>
              <li className="fadeIn wow" data-wow-duration="1s" data-wow-delay="0.5s">
                <span className="pa-icon-list-icon">
                  <i className="material-icons">track_changes</i>
                </span>
                <p className="pa-icon-list-text pa-p-v1 pa-bright">ACCURATE</p>
              </li>
              <li className="fadeIn wow" data-wow-duration="1s" data-wow-delay="0.6s">
                <span className="pa-icon-list-icon">
                  <i className="material-icons">equalizer</i>
                </span>
                <p className="pa-icon-list-text pa-p-v1 pa-bright">HIGH-PERFORMANCE</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 제품 이미지 시퀀스 애니메이션 */}
      <ImageSequenceAnimation
        triggerId="product-animation"
        config={{
          imagePath: "/products/my-product/assets/images/motion-sample",
          baseFilename: "my-product-motion",
          frameCount: 120,
          altText: "Product Animation"
        }}
        textOverlays={[
          {
            id: "text1",
            content: isKorean ? "세계 최고의 성능" : "World's Best Performance"
          },
          {
            id: "text2",
            content: isKorean ? (
              <>완벽한 설계.<br />최고의 품질.</>
            ) : (
              <>Perfect Design.<br />Supreme Quality.</>
            )
          },
          {
            id: "text0",
            content: isKorean ? (
              <>혁신의 시작.<br />새로운 기준.</>
            ) : (
              <>Innovation Begins.<br />New Standard.</>
            )
          }
        ]}
      />

      {/* Overview Section */}
      <section className="pa-cta-v1 overview-sec">
        <div className="max-w-7xl mx-auto px-4 text-center description">
          <h2 className="pa-h1-v1 pa-bright title-text fadeIn wow" data-wow-duration="1s" data-wow-delay="0.2s">
            <strong>{isKorean ? "개요" : "Overview"}</strong>
          </h2>
          <h4 className="pa-h4-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="0.3s">
            {isKorean ? (
              <>제품의 주요 특징과 장점을 설명합니다.</>
            ) : (
              <>Product's main features and advantages.</>
            )}
          </h4>
        </div>
      </section>

      {/* 분해도 애니메이션 */}
      <ImageSequenceAnimation
        triggerId="product-disassembly"
        config={{
          imagePath: "/products/my-product/assets/images/motion-disassembly",
          baseFilename: "my-product-disassembly",
          frameCount: 60,
          startFrame: 0,
          altText: "Product Disassembly"
        }}
        textOverlays={[
          {
            id: "text3",
            content: isKorean ? "완벽한 하드웨어 구성" : "Perfect Hardware Configuration"
          }
        ]}
      />

      {/* Specifications */}
      <section className="spec-sec">
        <div className="max-w-7xl mx-auto px-4">
          <p className="spec-sec-title title-text text-center fadeInDown wow">
            Specifications
          </p>
          <ul className="spec-table fadeIn wow">
            <li><div className="spec-title">Model</div><div className="spec-value">MY-PRODUCT-2000</div></li>
            <li><div className="spec-title">Dimensions</div><div className="spec-value">900 x 900 x 200 mm</div></li>
            <li><div className="spec-title">Weight</div><div className="spec-value">500 kg</div></li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-us"
        className="pa-contact-us contact-us-sec"
        style={{ backgroundImage: "url(/products/my-product/assets/images/contact-bg.jpg)" }}
      >
        <div className="cover-black"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap text-center">
            <div className="w-full xl:w-10/12 xl:mx-auto">
              <h2 className="pa-h1-v2 pa-bright fadeIn wow">
                {isKorean ? (
                  <>궁금한 점이 <strong>있으신가요?</strong></>
                ) : (
                  <>Do you have any <strong>Questions?</strong></>
                )}
              </h2>
              <div className="form-submit">
                <a className="pa-hvr-sweep-to-right" href="/contact">
                  {isKorean ? "문의하기" : "Contact us"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripts */}
      <ProductPageScripts
        typedConfig={{
          selector: ".typed-text",
          strings: [
            isKorean ? "특별히 설계된" : "Specially Designed",
          ]
        }}
      />
    </div>
  )
}
```

## 예제 3: 커스텀 스타일 적용

기본 스타일에 추가적인 커스텀 스타일을 적용하는 예제입니다.

### layout.tsx

```tsx
import ProductPageLayout from "@/share/components/ProductPageLayout"

const customStyles = `
  /* 커스텀 색상 테마 */
  .pa-icon-list-icon i {
    color: #ff6b6b !important;
  }

  .form-submit a {
    background: #ff6b6b !important;
  }

  .form-submit a:hover {
    background: #ee5a5a !important;
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4) !important;
  }

  /* 커스텀 폰트 크기 */
  .pa-h1-v1 {
    font-size: 4rem !important;
  }

  @media (max-width: 768px) {
    .pa-h1-v1 {
      font-size: 2.5rem !important;
    }
  }

  /* 커스텀 애니메이션 */
  .custom-fade-in {
    animation: customFadeIn 1.5s ease-in-out;
  }

  @keyframes customFadeIn {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export default function CustomProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProductPageLayout additionalStyles={customStyles}>
      {children}
    </ProductPageLayout>
  )
}
```

## 예제 4: 여러 개의 이미지 시퀀스 사용

한 페이지에 여러 개의 이미지 시퀀스를 사용하는 예제입니다.

### client.tsx

```tsx
"use client"

import { ImageSequenceAnimation, ProductPageScripts } from "@/share"

export default function MultiSequenceClient() {
  return (
    <div className="pa-homepage pa-dark">
      {/* 첫 번째 이미지 시퀀스 - 제품 소개 */}
      <ImageSequenceAnimation
        triggerId="intro-animation"
        config={{
          imagePath: "/products/my-product/intro",
          baseFilename: "intro",
          frameCount: 60,
          scrollDuration: "150%",
          altText: "Product Introduction"
        }}
        textOverlays={[
          { id: "intro-text", content: "Introducing Amazing Product" }
        ]}
      />

      {/* 중간 설명 섹션 */}
      <section className="overview-sec">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="pa-h1-v1 pa-bright">Features</h2>
        </div>
      </section>

      {/* 두 번째 이미지 시퀀스 - 기능 소개 */}
      <ImageSequenceAnimation
        triggerId="features-animation"
        config={{
          imagePath: "/products/my-product/features",
          baseFilename: "features",
          frameCount: 90,
          scrollDuration: "200%",
          altText: "Product Features"
        }}
        textOverlays={[
          { id: "feature-1", content: "Feature 1" },
          { id: "feature-2", content: "Feature 2" },
          { id: "feature-3", content: "Feature 3" }
        ]}
      />

      {/* 세 번째 이미지 시퀀스 - 분해도 */}
      <ImageSequenceAnimation
        triggerId="assembly-animation"
        config={{
          imagePath: "/products/my-product/assembly",
          baseFilename: "assembly",
          frameCount: 45,
          startFrame: 0,
          scrollDuration: "150%",
          altText: "Product Assembly"
        }}
        textOverlays={[
          { id: "assembly-text", content: "Premium Build Quality" }
        ]}
      />

      <ProductPageScripts />
    </div>
  )
}
```

## 예제 5: 프리로딩과 진행 상태 표시

이미지를 프리로드하고 로딩 진행 상태를 표시하는 예제입니다.

### client.tsx

```tsx
"use client"

import { ImageSequenceAnimation, ProductPageScripts } from "@/share"
import { preloadImageSequence } from "@/share/utils/image-sequence"
import { useState, useEffect } from "react"

export default function PreloadingClient() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // 이미지 시퀀스 프리로드
    preloadImageSequence(
      "/products/my-product/motion",
      "my-product-motion",
      1,
      120,
      {
        onProgress: (loaded, total) => {
          const progress = Math.round((loaded / total) * 100)
          setLoadingProgress(progress)
        }
      }
    ).then(() => {
      setIsLoaded(true)
    })
  }, [])

  if (!isLoaded) {
    return (
      <div className="loading-screen" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#000",
        color: "#fff"
      }}>
        <div style={{ textAlign: "center" }}>
          <h2>Loading...</h2>
          <div style={{
            width: "300px",
            height: "4px",
            background: "#333",
            marginTop: "20px"
          }}>
            <div style={{
              width: `${loadingProgress}%`,
              height: "100%",
              background: "#4a90e2",
              transition: "width 0.3s"
            }} />
          </div>
          <p style={{ marginTop: "10px" }}>{loadingProgress}%</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pa-homepage pa-dark">
      <ImageSequenceAnimation
        triggerId="product-motion"
        config={{
          imagePath: "/products/my-product/motion",
          baseFilename: "my-product-motion",
          frameCount: 120,
          altText: "Product Animation"
        }}
      />
      <ProductPageScripts />
    </div>
  )
}
```

## 예제 6: 조건부 스크립트 로딩

특정 조건에서만 스크립트를 로드하는 예제입니다.

### client.tsx

```tsx
"use client"

import { ProductPageScripts } from "@/share"
import { useState, useEffect } from "react"

export default function ConditionalScriptsClient() {
  const [enableAnimations, setEnableAnimations] = useState(true)

  useEffect(() => {
    // 사용자 설정이나 디바이스 성능에 따라 애니메이션 활성화 여부 결정
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4

    if (prefersReducedMotion || isLowEndDevice) {
      setEnableAnimations(false)
    }
  }, [])

  return (
    <div className="pa-homepage pa-dark">
      {/* 페이지 컨텐츠 */}

      <ProductPageScripts
        enableParticles={enableAnimations}
        enableTyped={enableAnimations}
        enableWow={enableAnimations}
        enableScrollMagic={enableAnimations}
      />
    </div>
  )
}
```

## 디렉토리 구조 예제

완성된 제품 페이지의 디렉토리 구조입니다:

```
app/products/my-product/
  ├── layout.tsx                 # ProductPageLayout 사용
  ├── page.tsx                   # 메타데이터와 Client 컴포넌트
  └── client.tsx                 # 실제 페이지 내용

public/products/my-product/
  ├── assets/
  │   └── images/
  │       ├── main-visual-min.jpg
  │       ├── about-bg.jpg
  │       ├── contact-bg.jpg
  │       ├── motion-sample/
  │       │   ├── my-product-motion-0001.jpg
  │       │   ├── my-product-motion-0002.jpg
  │       │   └── ... (up to 0120.jpg)
  │       └── motion-disassembly/
  │           ├── my-product-disassembly-0000.jpg
  │           └── ... (up to 0060.jpg)
```

## 다음 단계

1. 위 예제를 참고하여 자신만의 제품 페이지를 만들어보세요
2. 필요에 따라 커스텀 스타일을 추가하세요
3. 이미지 시퀀스를 최적화하여 로딩 속도를 개선하세요
4. 다국어 지원을 추가하세요
