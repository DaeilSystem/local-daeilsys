# Product Components

제품 페이지에서 재사용 가능한 UI 컴포넌트 모음입니다.

## 컴포넌트 목록

### 1. ProductTabs

DVIA-M 스타일의 탭 네비게이션 컴포넌트

**특징:**
- Sticky 포지셔닝으로 스크롤 시 상단 고정
- Light/Dark 테마 지원
- 모바일 대응 (overflow-x-auto)
- 부드러운 hover 및 active 애니메이션

**사용 예시:**

```tsx
import { useState } from "react"
import { ProductTabs, type Tab } from "@/components/products"

type TabType = "overview" | "features" | "specifications"

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState<TabType>("overview")

  const tabs: Tab<TabType>[] = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "specifications", label: "Specifications" },
  ]

  return (
    <div>
      <ProductTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        variant="light" // or "dark"
      />

      {/* Tab Content */}
      {activeTab === "overview" && <div>Overview content</div>}
      {activeTab === "features" && <div>Features content</div>}
      {activeTab === "specifications" && <div>Specifications content</div>}
    </div>
  )
}
```

---

### 2. ProductCarousel

DVIA-M 스타일의 이미지 캐러셀 컴포넌트

**특징:**
- shadcn/ui Carousel 기반
- Light/Dark 테마 지원
- 반응형 디자인 (aspect-video)
- 이전/다음 버튼

**사용 예시:**

```tsx
import { ProductCarousel } from "@/components/products"

export default function ProductPage() {
  const heroImages = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ]

  return (
    <div className="max-w-7xl mx-auto px-4">
      <ProductCarousel
        images={heroImages}
        productName="DVIA-MO"
        variant="light" // or "dark"
        maxWidth="5xl" // "4xl" | "5xl" | "6xl"
      />
    </div>
  )
}
```

---

### 3. ScrollMotionSection

DVIA-MLP1000 스타일의 스크롤 모션 애니메이션 컴포넌트

**특징:**
- 스크롤 진행도에 따라 프레임 전환
- 시퀀스 이미지 기반 애니메이션
- Sticky 포지셔닝
- 커스텀 오버레이 지원 (타이틀, 텍스트 등)

**데이터 구조:**

```json
{
  "heroMotion": {
    "basePath": "https://example.com/frames",
    "filename": "product-motion",
    "startFrame": 1,
    "endFrame": 120,
    "frameDigits": 4,
    "extension": "jpg"
  }
}
```

위 설정은 다음과 같은 URL 패턴을 생성합니다:
- `https://example.com/frames/product-motion-0001.jpg`
- `https://example.com/frames/product-motion-0002.jpg`
- ...
- `https://example.com/frames/product-motion-0120.jpg`

**사용 예시:**

```tsx
import { ScrollMotionSection, type MotionConfig } from "@/components/products"

export default function ProductPage() {
  const motionConfig: MotionConfig = {
    basePath: "https://example.com/frames",
    filename: "dvia-mlp1000-motion",
    startFrame: 1,
    endFrame: 120,
    frameDigits: 4,
    extension: "jpg",
  }

  return (
    <div>
      {/* Hero Motion Section */}
      <ScrollMotionSection
        motionConfig={motionConfig}
        height="200vh"
        className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
        overlay={
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              DVIA-MLP1000
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Low Profile Active Vibration Isolation Platform
            </p>
          </div>
        }
      />

      {/* Other sections */}
      <div className="py-24">
        {/* Content */}
      </div>

      {/* Disassembly Motion Section (Optional) */}
      <ScrollMotionSection
        motionConfig={{
          basePath: "https://example.com/disassembly",
          filename: "dvia-mlp1000-disassembly",
          startFrame: 0,
          endFrame: 60,
          frameDigits: 4,
          extension: "jpg",
        }}
        title={
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Product Disassembly
          </h2>
        }
        height="200vh"
        className="bg-gradient-to-b from-slate-900 to-slate-800"
      />
    </div>
  )
}
```

---

## 조합 사용 예시

모든 컴포넌트를 함께 사용하는 완전한 예시:

```tsx
"use client"

import { useState } from "react"
import {
  ProductTabs,
  ProductCarousel,
  ScrollMotionSection,
  type Tab,
  type MotionConfig,
} from "@/components/products"
import productData from "@/data/products/your-product-full.json"

type TabType = "overview" | "features" | "specifications" | "applications"

export default function YourProductClient() {
  const [activeTab, setActiveTab] = useState<TabType>("overview")

  const tabs: Tab<TabType>[] = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "specifications", label: "Specifications" },
    { id: "applications", label: "Applications" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section with Scroll Motion (Optional) */}
      {productData.heroMotion && (
        <ScrollMotionSection
          motionConfig={productData.heroMotion}
          overlay={
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {productData.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                {productData.fullName}
              </p>
            </div>
          }
        />
      )}

      {/* OR Hero Section with Carousel */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">
              {productData.name}
            </h1>
            <p className="text-xl text-gray-300">{productData.tagline}</p>
          </div>

          <ProductCarousel
            images={productData.heroImages}
            productName={productData.name}
            variant="dark"
            maxWidth="5xl"
          />
        </div>
      </div>

      {/* Tabs Navigation */}
      <ProductTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        variant="dark"
      />

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === "overview" && (
          <div className="text-white">
            <p>{productData.tabs.overview.description}</p>
          </div>
        )}

        {activeTab === "features" && (
          <div className="grid md:grid-cols-2 gap-12">
            {productData.tabs.features.map((feature, index) => (
              <div key={index} className="text-white">
                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* More tab content... */}
      </div>
    </div>
  )
}
```

---

## 디자인 가이드라인

### Light vs Dark Variant

- **Light Variant**: DVIA-M, DVIA-T, DVIA-ML 등 대부분의 제품
  - 배경: `bg-white dark:bg-gray-950`
  - 텍스트: `text-gray-900 dark:text-white`
  - 액센트: `blue-600`

- **Dark Variant**: DVIA-MB, DVIA-MLP, DVIA-MO
  - 배경: `from-slate-900 via-slate-800 to-slate-900`
  - 텍스트: `text-white`
  - 액센트: `blue-400`

### 컴포넌트 선택 가이드

1. **일반 제품 페이지 (Light 테마)**
   - ProductCarousel (variant="light")
   - ProductTabs (variant="light")

2. **프리미엄 제품 페이지 (Dark 테마)**
   - ProductCarousel (variant="dark")
   - ProductTabs (variant="dark")

3. **특수 제품 (스크롤 모션)**
   - ScrollMotionSection + ProductTabs (variant="dark")
   - 프레임 시퀀스 이미지 필요

---

## 추가 정보

모든 컴포넌트는 TypeScript로 작성되었으며, 타입 안정성을 보장합니다.
`variant` prop을 통해 라이트/다크 테마를 쉽게 전환할 수 있습니다.
