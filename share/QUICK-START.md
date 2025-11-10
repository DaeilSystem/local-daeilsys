# 🚀 빠른 시작 가이드

dvia-mlp1000 스타일의 애플 같은 제품 페이지를 5분 안에 만들어보세요!

## 📦 제공되는 기능

### ✨ 애니메이션
- **ScrollMagic** - 스크롤 기반 애니메이션
- **GSAP** - 강력한 트윈 애니메이션
- **이미지 시퀀스** - 애플 스타일 프레임 애니메이션
- **100+ 프리셋** - 바로 사용 가능한 애니메이션 효과

### 🎨 스타일
- **다크 테마** - 전문적인 제품 페이지 스타일
- **반응형** - 모바일/태블릿/데스크톱 완벽 대응
- **Material Icons** - 아이콘 자동 로드
- **커스텀 폰트** - Google Fonts 포함

### 🛠️ 컴포넌트
- `ImageSequenceAnimation` - 이미지 시퀀스
- `GSAPAnimation` - GSAP 애니메이션
- `ProductPageLayout` - 페이지 레이아웃
- `ProductPageScripts` - 스크립트 관리

---

## 1️⃣ 기본 설정 (3단계)

### Step 1: 파일 생성

```bash
app/products/my-product/
  ├── layout.tsx
  ├── page.tsx
  └── client.tsx
```

### Step 2: layout.tsx

```tsx
import ProductPageLayout from "@/share/components/ProductPageLayout"

export default function MyProductLayout({ children }) {
  return <ProductPageLayout>{children}</ProductPageLayout>
}
```

### Step 3: page.tsx

```tsx
import Client from "./client"

export const metadata = {
  title: "My Product | DAEIL SYSTEMS",
  description: "Amazing product",
}

export default function Page() {
  return <Client />
}
```

---

## 2️⃣ 기본 페이지 (client.tsx)

```tsx
"use client"

import { ImageSequenceAnimation, ProductPageScripts } from "@/share"

export default function Client() {
  return (
    <div className="pa-homepage pa-dark">
      {/* 히어로 */}
      <section className="pa-hero pa-centered-section pa-full-height pa-image-back"
               style={{ backgroundImage: "url(/hero.jpg)" }}>
        <h1 className="pa-h2-v2-hero-subhead pa-white">My Product</h1>
      </section>

      {/* 이미지 시퀀스 */}
      <ImageSequenceAnimation
        triggerId="animation"
        config={{
          imagePath: "/products/my-product/motion",
          baseFilename: "motion",
          frameCount: 120,
          altText: "Animation"
        }}
      />

      <ProductPageScripts />
    </div>
  )
}
```

✅ **완성!** 이제 페이지가 작동합니다.

---

## 3️⃣ GSAP 애니메이션 추가

```tsx
"use client"

import { GSAPAnimation, ProductPageScripts } from "@/share"

export default function Client() {
  return (
    <div className="pa-homepage pa-dark">
      {/* 기존 코드... */}

      {/* GSAP으로 카드 애니메이션 */}
      <GSAPAnimation
        config={{
          triggerId: "features",
          targetSelector: ".card",
          animation: {
            from: { opacity: 0, y: 100 },
            to: { opacity: 1, y: 0 },
            stagger: 0.2
          },
          scrollTrigger: { triggerHook: 0.8 }
        }}
      >
        <div className="card">Feature 1</div>
        <div className="card">Feature 2</div>
        <div className="card">Feature 3</div>
      </GSAPAnimation>

      <ProductPageScripts />
    </div>
  )
}
```

---

## 4️⃣ 프리셋 사용하기

```tsx
"use client"

import { useGSAP } from "@/share/hooks/useGSAP"
import { productPagePresets, applyPreset } from "@/share/utils/gsap-presets"
import { useEffect } from "react"

export default function Client() {
  const { isReady, gsap } = useGSAP()

  useEffect(() => {
    if (!isReady || !gsap) return

    // 프리셋으로 빠르게 애니메이션 적용
    applyPreset(gsap, ".hero", productPagePresets.heroTitle)
    applyPreset(gsap, ".feature", productPagePresets.featureItem)
    applyPreset(gsap, ".spec-row", productPagePresets.specRow)
  }, [isReady, gsap])

  return (
    <div className="pa-homepage pa-dark">
      <h1 className="hero">Title</h1>
      <div className="feature">Feature 1</div>
      <div className="feature">Feature 2</div>
    </div>
  )
}
```

---

## 5️⃣ 다국어 지원

```tsx
"use client"

import { ImageSequenceAnimation } from "@/share"
import { useLanguage } from "@/hooks/use-language"

export default function Client() {
  const { language } = useLanguage()
  const isKorean = language === "ko"

  return (
    <div className="pa-homepage pa-dark">
      <h1>{isKorean ? "나의 제품" : "My Product"}</h1>

      <ImageSequenceAnimation
        triggerId="animation"
        config={{
          imagePath: "/motion",
          baseFilename: "motion",
          frameCount: 120,
          altText: isKorean ? "애니메이션" : "Animation"
        }}
        textOverlays={[
          {
            id: "text1",
            content: isKorean ? "완벽한 성능" : "Perfect Performance"
          }
        ]}
      />
    </div>
  )
}
```

---

## 📁 이미지 파일 구조

```
public/products/my-product/
  ├── hero.jpg
  └── motion/
      ├── motion-0001.jpg
      ├── motion-0002.jpg
      ├── ...
      └── motion-0120.jpg
```

**파일 명명 규칙:**
- `{name}-0001.jpg` (4자리 패딩)
- 프레임 번호는 1부터 시작 (또는 0부터)

---

## 🎯 자주 사용하는 CSS 클래스

### 레이아웃
```tsx
<div className="pa-homepage pa-dark">           // 페이지 전체
<section className="pa-hero pa-full-height">    // 히어로 섹션
<section className="pa-standard-section">       // 일반 섹션
```

### 텍스트
```tsx
<h1 className="pa-h1-v1 pa-bright">            // 큰 제목
<h2 className="pa-h2-v2 pa-white">             // 부제목
<p className="pa-p-v1 pa-bright">              // 본문
```

### 애니메이션 (WOW.js)
```tsx
<div className="fadeIn wow" data-wow-duration="1s" data-wow-delay="0.2s">
<div className="fadeInUp wow">
<div className="fadeInLeft wow">
```

---

## 🔧 유용한 Hooks

### useGSAP
```tsx
const { isReady, gsap } = useGSAP()

useEffect(() => {
  if (isReady && gsap) {
    gsap.to(".element", { x: 100 })
  }
}, [isReady, gsap])
```

### useGSAPAnimation
```tsx
const ref = useGSAPAnimation({
  from: { opacity: 0 },
  to: { opacity: 1 },
  trigger: "scroll"
})

return <div ref={ref}>Content</div>
```

### useGSAPTimeline
```tsx
const { ref, addToTimeline, play } = useGSAPTimeline()

useEffect(() => {
  addToTimeline(".box", {
    to: { x: 100 },
    duration: 1
  })
  play()
}, [addToTimeline, play])
```

---

## 📚 더 배우기

1. **기본 예제** → `/share/examples/EXAMPLE-USAGE.md`
2. **GSAP 예제** → `/share/examples/GSAP-EXAMPLES.md`
3. **전체 문서** → `/share/README.md`
4. **체크리스트** → `/share/CHECKLIST.md`

---

## 💡 프리셋 라이브러리

### 페이드 인
```tsx
import { fadeInPresets } from "@/share/utils/gsap-presets"

fadeInPresets.default  // 기본
fadeInPresets.up       // 아래서 위로
fadeInPresets.down     // 위에서 아래로
fadeInPresets.left     // 왼쪽에서
fadeInPresets.right    // 오른쪽에서
fadeInPresets.scale    // 확대
fadeInPresets.stagger  // 순차적
```

### 제품 페이지
```tsx
import { productPagePresets } from "@/share/utils/gsap-presets"

productPagePresets.heroTitle      // 히어로 타이틀
productPagePresets.featureItem    // 기능 아이템
productPagePresets.imageGallery   // 이미지 갤러리
productPagePresets.specRow        // 사양 행
productPagePresets.ctaButton      // CTA 버튼
```

### 카드
```tsx
import { cardPresets } from "@/share/utils/gsap-presets"

cardPresets.lift     // 들어올림
cardPresets.unfold   // 펼치기
cardPresets.flip     // 뒤집기
cardPresets.grid     // 그리드 등장
```

---

## 🎨 완전한 dvia-mlp1000 스타일 페이지

```tsx
"use client"

import {
  ImageSequenceAnimation,
  GSAPAnimation,
  ProductPageScripts
} from "@/share"
import { useLanguage } from "@/hooks/use-language"

export default function Client() {
  const { language } = useLanguage()
  const isKorean = language === "ko"

  return (
    <div className="pa-homepage pa-dark">
      {/* Hero */}
      <section className="pa-hero pa-centered-section pa-full-height pa-image-back"
               style={{ backgroundImage: "url(/hero.jpg)" }}>
        <div id="particles-js"></div>
        <h1 className="pa-h2-v2-hero-subhead pa-white">
          {isKorean ? "혁신적인 제품" : "Innovative Product"}
        </h1>
      </section>

      {/* About */}
      <section className="pa-about-us pa-standard-section text-center">
        <h2 className="pa-h1-v2 pa-bright fadeInDown wow">About</h2>
        <p className="pa-p-v1 pa-bright fadeInUp wow">Description</p>
      </section>

      {/* Image Sequence */}
      <ImageSequenceAnimation
        triggerId="motion"
        config={{
          imagePath: "/products/my-product/motion",
          baseFilename: "motion",
          frameCount: 120,
          altText: "Animation"
        }}
        textOverlays={[
          { id: "text1", content: isKorean ? "완벽함" : "Perfect" }
        ]}
      />

      {/* Features */}
      <GSAPAnimation
        config={{
          triggerId: "features",
          targetSelector: ".feature",
          animation: {
            from: { opacity: 0, y: 100 },
            to: { opacity: 1, y: 0 },
            stagger: 0.2
          },
          scrollTrigger: { triggerHook: 0.8 }
        }}
      >
        <section id="features">
          <div className="feature">Feature 1</div>
          <div className="feature">Feature 2</div>
          <div className="feature">Feature 3</div>
        </section>
      </GSAPAnimation>

      {/* Scripts */}
      <ProductPageScripts
        typedConfig={{
          selector: ".typed-text",
          strings: [isKorean ? "혁신적인" : "Innovative"]
        }}
      />
    </div>
  )
}
```

---

## ✅ 체크리스트

- [ ] 파일 구조 생성
- [ ] layout.tsx 작성
- [ ] page.tsx 작성
- [ ] client.tsx 작성
- [ ] 이미지 준비 및 배치
- [ ] 애니메이션 추가
- [ ] 다국어 지원
- [ ] 반응형 테스트
- [ ] 성능 최적화

---

## 🆘 도움말

### 이미지 시퀀스가 안 보여요
1. 이미지 경로 확인
2. 파일명 패턴 확인 (`name-0001.jpg`)
3. 브라우저 콘솔 에러 확인

### 애니메이션이 작동 안 해요
1. `ProductPageScripts` 포함 확인
2. ScrollMagic/GSAP 로딩 확인
3. triggerId가 고유한지 확인

### 성능이 느려요
1. 이미지 압축 (프레임당 < 300KB)
2. 프레임 수 줄이기 (60-120 권장)
3. 하드웨어 가속 사용 (transform, opacity)

---

**이제 시작하세요! 🚀**

질문이 있으면 `/share/README.md`를 참고하세요.
