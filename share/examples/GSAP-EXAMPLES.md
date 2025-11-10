# GSAP 애니메이션 사용 예제

GSAP(GreenSock Animation Platform)을 활용한 고급 애니메이션 예제 모음입니다.

## 목차

1. [기본 GSAP 애니메이션](#기본-gsap-애니메이션)
2. [ScrollMagic + GSAP 통합](#scrollmagic--gsap-통합)
3. [프리셋 사용하기](#프리셋-사용하기)
4. [타임라인 애니메이션](#타임라인-애니메이션)
5. [실전 제품 페이지 예제](#실전-제품-페이지-예제)

---

## 기본 GSAP 애니메이션

### 예제 1: 간단한 페이드 인

```tsx
"use client"

import { useGSAPAnimation } from "@/share/hooks/useGSAP"

export default function SimpleAnimation() {
  const ref = useGSAPAnimation<HTMLDivElement>({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    duration: 1,
    ease: "power2.out",
    trigger: "mount"
  })

  return (
    <div ref={ref} className="feature-box">
      <h3>Amazing Feature</h3>
      <p>This content fades in smoothly</p>
    </div>
  )
}
```

### 예제 2: 스크롤 트리거

```tsx
"use client"

import { useGSAPAnimation } from "@/share/hooks/useGSAP"

export default function ScrollTriggerAnimation() {
  const ref = useGSAPAnimation<HTMLDivElement>({
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0 },
    duration: 1.2,
    trigger: "scroll",
    scrollTrigger: {
      start: "top 80%",
      end: "bottom 20%",
    }
  })

  return (
    <div ref={ref} className="content">
      <h2>Appears on Scroll</h2>
    </div>
  )
}
```

### 예제 3: GSAP Hook으로 직접 제어

```tsx
"use client"

import { useGSAP } from "@/share/hooks/useGSAP"
import { useEffect, useRef } from "react"

export default function DirectControl() {
  const boxRef = useRef<HTMLDivElement>(null)
  const { isReady, gsap } = useGSAP()

  useEffect(() => {
    if (!isReady || !gsap || !boxRef.current) return

    // 복잡한 애니메이션 시퀀스
    const tl = gsap.timeline()

    tl.to(boxRef.current, {
      x: 100,
      duration: 1,
      ease: "power2.inOut"
    })
    .to(boxRef.current, {
      rotation: 360,
      duration: 1,
      ease: "back.out(1.7)"
    })
    .to(boxRef.current, {
      scale: 1.5,
      duration: 0.5
    })

  }, [isReady, gsap])

  return <div ref={boxRef} className="animated-box">Animate Me!</div>
}
```

---

## ScrollMagic + GSAP 통합

### 예제 4: GSAPAnimation 컴포넌트 사용

```tsx
"use client"

import GSAPAnimation from "@/share/components/GSAPAnimation"

export default function ProductFeatures() {
  return (
    <GSAPAnimation
      config={{
        triggerId: "features-section",
        targetSelector: ".feature-card",
        animation: {
          from: { opacity: 0, y: 100, scale: 0.8 },
          to: { opacity: 1, y: 0, scale: 1 },
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2
        },
        scrollTrigger: {
          triggerHook: 0.8,
          duration: 0
        }
      }}
    >
      <div className="feature-card">Feature 1</div>
      <div className="feature-card">Feature 2</div>
      <div className="feature-card">Feature 3</div>
      <div className="feature-card">Feature 4</div>
    </GSAPAnimation>
  )
}
```

### 예제 5: 스크롤 진행도에 따른 애니메이션 (Scrub)

```tsx
"use client"

import GSAPAnimation from "@/share/components/GSAPAnimation"

export default function ParallaxSection() {
  return (
    <GSAPAnimation
      config={{
        triggerId: "parallax-section",
        targetSelector: ".parallax-bg",
        animation: {
          to: { y: "30%", ease: "none" },
          duration: 1
        },
        scrollTrigger: {
          triggerHook: 0,
          duration: "200%",
          pin: true
        },
        scrub: true  // 스크롤 진행도에 맞춰 애니메이션
      }}
      className="parallax-container"
    >
      <div className="parallax-bg">
        <h1>Parallax Effect</h1>
      </div>
    </GSAPAnimation>
  )
}
```

### 예제 6: 핀 고정 애니메이션

```tsx
"use client"

import GSAPAnimation from "@/share/components/GSAPAnimation"

export default function PinnedSection() {
  return (
    <GSAPAnimation
      config={{
        triggerId: "pinned-section",
        targetSelector: ".reveal-text",
        animation: {
          from: { opacity: 0, scale: 0.5 },
          to: { opacity: 1, scale: 1 },
          duration: 1,
          stagger: 0.3
        },
        scrollTrigger: {
          triggerHook: 0,
          duration: "150%",
          pin: true,
          pinClass: "is-pinned"
        }
      }}
    >
      <div className="reveal-text">First</div>
      <div className="reveal-text">Second</div>
      <div className="reveal-text">Third</div>
    </GSAPAnimation>
  )
}
```

---

## 프리셋 사용하기

### 예제 7: 프리셋으로 빠르게 애니메이션 적용

```tsx
"use client"

import { useGSAP } from "@/share/hooks/useGSAP"
import { fadeInPresets, applyPreset } from "@/share/utils/gsap-presets"
import { useEffect } from "react"

export default function PresetExample() {
  const { isReady, gsap } = useGSAP()

  useEffect(() => {
    if (!isReady || !gsap) return

    // 프리셋 적용
    applyPreset(gsap, ".hero-title", fadeInPresets.up)
    applyPreset(gsap, ".hero-subtitle", fadeInPresets.scale)
    applyPreset(gsap, ".feature-items .item", fadeInPresets.stagger)

  }, [isReady, gsap])

  return (
    <div>
      <h1 className="hero-title">Welcome</h1>
      <p className="hero-subtitle">Amazing Product</p>

      <div className="feature-items">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
      </div>
    </div>
  )
}
```

### 예제 8: 제품 페이지 특화 프리셋

```tsx
"use client"

import { useGSAP } from "@/share/hooks/useGSAP"
import { productPagePresets, applyPreset } from "@/share/utils/gsap-presets"
import { useEffect } from "react"

export default function ProductPage() {
  const { isReady, gsap } = useGSAP()

  useEffect(() => {
    if (!isReady || !gsap) return

    // 제품 페이지 최적화 애니메이션
    applyPreset(gsap, ".hero-title", productPagePresets.heroTitle)
    applyPreset(gsap, ".feature-item", productPagePresets.featureItem)
    applyPreset(gsap, ".spec-row", productPagePresets.specRow)
    applyPreset(gsap, ".cta-button", productPagePresets.ctaButton)

  }, [isReady, gsap])

  return (
    <div>
      <h1 className="hero-title">DVIA-MLP2000</h1>

      <div className="features">
        <div className="feature-item">Feature 1</div>
        <div className="feature-item">Feature 2</div>
        <div className="feature-item">Feature 3</div>
      </div>

      <table className="specs">
        <tr className="spec-row"><td>Model</td><td>MLP2000</td></tr>
        <tr className="spec-row"><td>Weight</td><td>2000kg</td></tr>
        <tr className="spec-row"><td>Size</td><td>900x900mm</td></tr>
      </table>

      <button className="cta-button">Contact Us</button>
    </div>
  )
}
```

### 예제 9: 애니메이션 시퀀스 빌더

```tsx
"use client"

import { useGSAP } from "@/share/hooks/useGSAP"
import { AnimationSequence, fadeInPresets, slidePresets } from "@/share/utils/gsap-presets"
import { useEffect } from "react"

export default function SequenceBuilder() {
  const { isReady, gsap } = useGSAP()

  useEffect(() => {
    if (!isReady || !gsap) return

    // 복잡한 애니메이션 시퀀스 쉽게 만들기
    const sequence = new AnimationSequence(gsap)

    sequence
      .add(".logo", fadeInPresets.scale)
      .add(".nav-item", fadeInPresets.stagger, "-=0.5")  // 0.5초 전에 시작
      .add(".hero-title", slidePresets.fromLeft)
      .add(".hero-subtitle", slidePresets.fromRight, "-=0.8")
      .play()

  }, [isReady, gsap])

  return (
    <div>
      <div className="logo">Logo</div>
      <nav>
        <div className="nav-item">Home</div>
        <div className="nav-item">Products</div>
        <div className="nav-item">Contact</div>
      </nav>
      <h1 className="hero-title">Welcome</h1>
      <p className="hero-subtitle">To Our Site</p>
    </div>
  )
}
```

---

## 타임라인 애니메이션

### 예제 10: useGSAPTimeline Hook

```tsx
"use client"

import { useGSAPTimeline } from "@/share/hooks/useGSAP"
import { useEffect } from "react"

export default function TimelineExample() {
  const { ref, addToTimeline, play } = useGSAPTimeline({ paused: true })

  useEffect(() => {
    if (ref.current) {
      // 타임라인에 애니메이션 추가
      addToTimeline(".box1", {
        to: { x: 200, rotation: 360 },
        duration: 1
      })

      addToTimeline(".box2", {
        to: { x: 200, backgroundColor: "#ff0000" },
        duration: 1
      }, "-=0.5")  // 이전 애니메이션과 0.5초 겹침

      addToTimeline(".box3", {
        from: { opacity: 0, scale: 0 },
        to: { opacity: 1, scale: 1 },
        duration: 0.8
      })

      // 1초 후 재생
      setTimeout(() => play(), 1000)
    }
  }, [addToTimeline, play, ref])

  return (
    <div ref={ref}>
      <div className="box1">Box 1</div>
      <div className="box2">Box 2</div>
      <div className="box3">Box 3</div>
    </div>
  )
}
```

### 예제 11: 인터랙티브 타임라인

```tsx
"use client"

import { useGSAPTimeline } from "@/share/hooks/useGSAP"
import { useEffect } from "react"

export default function InteractiveTimeline() {
  const { ref, addToTimeline, play, pause, restart, reverse } = useGSAPTimeline()

  useEffect(() => {
    if (ref.current) {
      addToTimeline(".animated-element", {
        from: { x: -100, opacity: 0 },
        to: { x: 0, opacity: 1 },
        duration: 1,
        stagger: 0.2
      })
    }
  }, [addToTimeline, ref])

  return (
    <div>
      <div ref={ref}>
        <div className="animated-element">Element 1</div>
        <div className="animated-element">Element 2</div>
        <div className="animated-element">Element 3</div>
      </div>

      <div className="controls">
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={restart}>Restart</button>
        <button onClick={reverse}>Reverse</button>
      </div>
    </div>
  )
}
```

---

## 실전 제품 페이지 예제

### 예제 12: dvia-mlp1000 스타일 완성 페이지

```tsx
"use client"

import { ImageSequenceAnimation, ProductPageScripts } from "@/share"
import GSAPAnimation from "@/share/components/GSAPAnimation"
import { useGSAP } from "@/share/hooks/useGSAP"
import { productPagePresets, fadeInPresets, applyPreset } from "@/share/utils/gsap-presets"
import { useLanguage } from "@/hooks/use-language"
import { useEffect } from "react"

export default function AdvancedProductPage() {
  const { language } = useLanguage()
  const isKorean = language === "ko"
  const { isReady, gsap } = useGSAP()

  useEffect(() => {
    if (!isReady || !gsap) return

    // 히어로 섹션 애니메이션
    applyPreset(gsap, ".hero-title", productPagePresets.heroTitle)

    // 아이콘 애니메이션
    gsap.from(".icon-item", {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".icon-list",
        start: "top 80%"
      }
    })

  }, [isReady, gsap])

  return (
    <div className="pa-homepage pa-dark">
      {/* Hero Section with GSAP */}
      <section className="pa-hero pa-centered-section pa-full-height">
        <div className="hero-title">
          <h1>{isKorean ? "혁신적인 제품" : "Innovative Product"}</h1>
        </div>
      </section>

      {/* About Section with Stagger Animation */}
      <GSAPAnimation
        config={{
          triggerId: "about-section",
          targetSelector: ".about-content",
          animation: {
            from: { opacity: 0, y: 50 },
            to: { opacity: 1, y: 0 },
            duration: 1,
            ease: "power2.out"
          },
          scrollTrigger: {
            triggerHook: 0.8
          }
        }}
      >
        <section id="about-section" className="pa-about-us">
          <div className="about-content">
            <h2>About Product</h2>
            <p>Product description...</p>
          </div>

          <div className="icon-list">
            <div className="icon-item">
              <i className="material-icons">check_circle</i>
              <p>Feature 1</p>
            </div>
            <div className="icon-item">
              <i className="material-icons">star</i>
              <p>Feature 2</p>
            </div>
            <div className="icon-item">
              <i className="material-icons">speed</i>
              <p>Feature 3</p>
            </div>
          </div>
        </section>
      </GSAPAnimation>

      {/* Image Sequence with ScrollMagic */}
      <ImageSequenceAnimation
        triggerId="product-motion"
        config={{
          imagePath: "/products/my-product/motion",
          baseFilename: "product-motion",
          frameCount: 120,
          altText: "Product Animation"
        }}
        textOverlays={[
          {
            id: "text1",
            content: isKorean ? "완벽한 성능" : "Perfect Performance"
          },
          {
            id: "text2",
            content: isKorean ? "혁신적인 디자인" : "Innovative Design"
          }
        ]}
      />

      {/* Features with Card Animation */}
      <GSAPAnimation
        config={{
          triggerId: "features-section",
          targetSelector: ".feature-card",
          animation: {
            from: { opacity: 0, y: 100, rotationX: -30 },
            to: { opacity: 1, y: 0, rotationX: 0 },
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.2
          },
          scrollTrigger: {
            triggerHook: 0.8
          }
        }}
      >
        <section id="features-section" className="features">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>Description</p>
          </div>
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>Description</p>
          </div>
          <div className="feature-card">
            <h3>Feature 3</h3>
            <p>Description</p>
          </div>
        </section>
      </GSAPAnimation>

      {/* Specifications with Row Animation */}
      <GSAPAnimation
        config={{
          triggerId: "specs-section",
          targetSelector: ".spec-row",
          animation: {
            from: { opacity: 0, x: -50 },
            to: { opacity: 1, x: 0 },
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.08
          },
          scrollTrigger: {
            triggerHook: 0.8
          }
        }}
      >
        <section id="specs-section" className="spec-sec">
          <ul className="spec-table">
            <li className="spec-row">
              <div className="spec-title">Model</div>
              <div className="spec-value">MLP-2000</div>
            </li>
            <li className="spec-row">
              <div className="spec-title">Weight</div>
              <div className="spec-value">2000 kg</div>
            </li>
            <li className="spec-row">
              <div className="spec-title">Dimensions</div>
              <div className="spec-value">900 x 900 mm</div>
            </li>
          </ul>
        </section>
      </GSAPAnimation>

      <ProductPageScripts />
    </div>
  )
}
```

### 예제 13: 텍스트 애니메이션 효과

```tsx
"use client"

import { useGSAP } from "@/share/hooks/useGSAP"
import { useEffect, useRef } from "react"

export default function TextAnimations() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const { isReady, gsap } = useGSAP()

  useEffect(() => {
    if (!isReady || !gsap || !titleRef.current) return

    // 텍스트를 글자별로 분리
    const text = titleRef.current.textContent || ""
    titleRef.current.innerHTML = text
      .split("")
      .map(char => `<span class="char">${char}</span>`)
      .join("")

    // 글자별 애니메이션
    gsap.from(".char", {
      opacity: 0,
      y: 50,
      rotationX: -90,
      stagger: 0.05,
      duration: 0.8,
      ease: "back.out(1.7)"
    })

  }, [isReady, gsap])

  return (
    <div>
      <h1 ref={titleRef}>AMAZING PRODUCT</h1>
    </div>
  )
}
```

---

## 성능 최적화 팁

### 1. will-change 속성 사용

```tsx
// CSS
.animated-element {
  will-change: transform, opacity;
}

// 애니메이션 후 제거
gsap.to(element, {
  x: 100,
  onComplete: () => {
    element.style.willChange = 'auto'
  }
})
```

### 2. 하드웨어 가속 활용

```tsx
// transform과 opacity는 GPU 가속됨
gsap.to(element, {
  x: 100,        // ✅ Good
  y: 100,        // ✅ Good
  scale: 1.2,    // ✅ Good
  opacity: 0.5,  // ✅ Good

  left: 100,     // ❌ Avoid (레이아웃 재계산)
  width: 200,    // ❌ Avoid (레이아웃 재계산)
})
```

### 3. 조건부 애니메이션

```tsx
const [enableAnimations, setEnableAnimations] = useState(true)

useEffect(() => {
  // 사용자 환경에 따라 애니메이션 비활성화
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    setEnableAnimations(false)
  }
}, [])

// 애니메이션 적용
{enableAnimations && (
  <GSAPAnimation config={...} />
)}
```

---

## 다음 단계

1. `/share/README.md` - 전체 컴포넌트 문서
2. `/share/examples/EXAMPLE-USAGE.md` - 기본 사용 예제
3. `/share/utils/gsap-presets.ts` - 프리셋 라이브러리 코드
