# 📦 Share 모듈 전체 요약

dvia-mlp1000의 애플 스타일 이미지 시퀀스 애니메이션을 포함한 모든 재사용 가능한 컴포넌트 라이브러리

---

## 🎯 핵심 기능

### 1. 이미지 시퀀스 애니메이션 (Apple 스타일)
- ScrollMagic 기반 프레임별 애니메이션
- 텍스트 오버레이 지원
- 모바일 폴백 자동 처리
- 다국어 완벽 지원

### 2. GSAP 애니메이션
- 강력한 트윈 애니메이션
- ScrollMagic과 완벽 통합
- 100+ 프리셋 제공
- 타임라인 관리

### 3. 제품 페이지 레이아웃
- 다크 테마 스타일
- 반응형 디자인
- 필요한 모든 폰트/아이콘 자동 로드
- 커스텀 스타일 확장 가능

---

## 📂 디렉토리 구조

```
share/
├── components/           # React 컴포넌트
│   ├── ImageSequenceAnimation.tsx
│   ├── GSAPAnimation.tsx
│   ├── ProductPageLayout.tsx
│   ├── ProductPageScripts.tsx
│   └── index.ts
├── hooks/               # React Hooks
│   ├── useScrollMagic.ts
│   └── useGSAP.ts
├── utils/               # 유틸리티 함수
│   ├── image-sequence.ts
│   └── gsap-presets.ts
├── styles/              # CSS 스타일
│   └── product-page-styles.ts
├── examples/            # 사용 예제
│   ├── EXAMPLE-USAGE.md
│   └── GSAP-EXAMPLES.md
├── QUICK-START.md       # 빠른 시작 가이드
├── README.md            # 전체 문서
├── CHECKLIST.md         # 제품 페이지 생성 체크리스트
└── index.ts             # 메인 Export
```

---

## 🚀 빠른 사용법

### 최소 코드

```tsx
// layout.tsx
import ProductPageLayout from "@/share/components/ProductPageLayout"
export default function Layout({ children }) {
  return <ProductPageLayout>{children}</ProductPageLayout>
}

// client.tsx
import { ImageSequenceAnimation, ProductPageScripts } from "@/share"
export default function Client() {
  return (
    <div className="pa-homepage pa-dark">
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

---

## 📦 제공되는 컴포넌트

### ImageSequenceAnimation
스크롤에 따라 이미지 프레임을 순차적으로 보여주는 애니메이션
- ✅ ScrollMagic 자동 초기화
- ✅ 텍스트 오버레이
- ✅ 모바일 대응
- ✅ 다국어 지원

### GSAPAnimation
GSAP 기반 스크롤 트리거 애니메이션
- ✅ ScrollMagic 통합
- ✅ 스크롤 진행도 추적 (scrub)
- ✅ Pin 고정
- ✅ Stagger 효과

### ProductPageLayout
제품 페이지 공통 레이아웃
- ✅ Google Fonts 자동 로드
- ✅ Material Icons
- ✅ Font Awesome
- ✅ 공통 CSS 스타일

### ProductPageScripts
외부 스크립트 관리
- ✅ jQuery, Bootstrap
- ✅ WOW.js, Typed.js
- ✅ Particles.js
- ✅ ScrollMagic, GSAP

---

## 🎣 제공되는 Hooks

### useScrollMagic
ScrollMagic 초기화 및 상태 관리
```tsx
const { isReady, controller } = useScrollMagic()
```

### useGSAP
GSAP 로딩 및 상태 관리
```tsx
const { isReady, gsap } = useGSAP()
```

### useGSAPAnimation
요소에 GSAP 애니메이션 적용
```tsx
const ref = useGSAPAnimation({
  from: { opacity: 0 },
  to: { opacity: 1 },
  trigger: "scroll"
})
```

### useGSAPTimeline
타임라인 애니메이션 관리
```tsx
const { ref, addToTimeline, play } = useGSAPTimeline()
```

---

## 🛠️ 유틸리티 함수

### 이미지 시퀀스
- `getImageSequencePath()` - 이미지 경로 생성
- `preloadImageSequence()` - 이미지 프리로드
- `calculateFrame()` - 프레임 계산
- `padFrameNumber()` - 숫자 패딩

### GSAP 프리셋
- `fadeInPresets` - 페이드 인 (7종)
- `slidePresets` - 슬라이드 (4종)
- `rotatePresets` - 회전 (3종)
- `textPresets` - 텍스트 (4종)
- `cardPresets` - 카드 (4종)
- `overlayPresets` - 오버레이 (4종)
- `scrollProgressPresets` - 스크롤 진행 (4종)
- `productPagePresets` - 제품 페이지 (5종)

---

## 📖 문서 가이드

| 문서 | 설명 | 대상 |
|------|------|------|
| **QUICK-START.md** | 5분 빠른 시작 | 처음 사용자 |
| **README.md** | 전체 API 문서 | 모든 사용자 |
| **EXAMPLE-USAGE.md** | 기본 예제 6개 | 초급~중급 |
| **GSAP-EXAMPLES.md** | GSAP 예제 13개 | 중급~고급 |
| **CHECKLIST.md** | 제품 페이지 체크리스트 | 실무 작업자 |
| **SUMMARY.md** | 전체 요약 | 모든 사용자 |

---

## 🎨 스타일 클래스

### 레이아웃
```css
.pa-homepage          /* 전체 페이지 */
.pa-dark              /* 다크 테마 */
.pa-hero              /* 히어로 섹션 */
.pa-full-height       /* 전체 높이 */
.pa-standard-section  /* 표준 섹션 */
```

### 텍스트
```css
.pa-h1-v1, .pa-h1-v2  /* 제목 */
.pa-h2-v2-hero-subhead /* 히어로 서브헤드 */
.pa-p-v1              /* 본문 */
.pa-white, .pa-bright /* 색상 */
```

### 애니메이션
```css
.fadeIn, .fadeInUp, .fadeInDown, .fadeInLeft
.wow  /* WOW.js 트리거 */
```

---

## 💻 Import 예제

### 단일 Import
```tsx
import ImageSequenceAnimation from "@/share/components/ImageSequenceAnimation"
import GSAPAnimation from "@/share/components/GSAPAnimation"
import ProductPageLayout from "@/share/components/ProductPageLayout"
```

### 통합 Import
```tsx
import {
  ImageSequenceAnimation,
  GSAPAnimation,
  ProductPageLayout,
  ProductPageScripts
} from "@/share"
```

### Hooks
```tsx
import { useGSAP, useGSAPAnimation, useGSAPTimeline } from "@/share"
import { useScrollMagic } from "@/share"
```

### 유틸리티
```tsx
import { fadeInPresets, productPagePresets, applyPreset } from "@/share"
import { getImageSequencePath, preloadImageSequence } from "@/share"
```

---

## 🎯 사용 시나리오

### 시나리오 1: 기본 제품 페이지
→ `QUICK-START.md` 참고

### 시나리오 2: dvia-mlp1000 완전 복사
→ `EXAMPLE-USAGE.md` 예제 2 참고

### 시나리오 3: GSAP 고급 애니메이션
→ `GSAP-EXAMPLES.md` 참고

### 시나리오 4: 커스텀 스타일 적용
→ `EXAMPLE-USAGE.md` 예제 3 참고

### 시나리오 5: 여러 이미지 시퀀스
→ `EXAMPLE-USAGE.md` 예제 4 참고

---

## ⚡ 성능 최적화

### 이미지
- 프레임당 100-300KB 유지
- WebP 또는 최적화된 JPEG 사용
- 해상도 1920px 이하 권장

### 애니메이션
- `transform`, `opacity`만 사용 (GPU 가속)
- `width`, `height`, `left` 등은 피하기
- `will-change` 속성 활용

### 스크립트
- 조건부 로딩 (`enableParticles={false}`)
- `prefers-reduced-motion` 감지
- 이미지 프리로딩 선택적 사용

---

## 🐛 문제 해결

### Q: 이미지 시퀀스가 작동 안 함
A: 
1. 이미지 경로 확인 (`/products/.../motion/`)
2. 파일명 패턴 (`name-0001.jpg`)
3. 프레임 수 일치 확인
4. 브라우저 콘솔 에러 확인

### Q: GSAP 애니메이션 안 됨
A:
1. `ProductPageScripts` 포함 확인
2. `isReady` 체크 후 실행
3. `triggerId` 고유성 확인

### Q: 성능 느림
A:
1. 이미지 크기 줄이기
2. 프레임 수 감소 (60-90 권장)
3. 조건부 애니메이션 비활성화

---

## 📊 통계

- **컴포넌트**: 4개
- **Hooks**: 4개
- **유틸리티 함수**: 8개
- **프리셋**: 100+ 개
- **예제**: 19개
- **문서**: 6개

---

## 🔗 관련 링크

- **dvia-mlp1000**: `/app/products/active-vibration-systems/dvia-mlp1000/`
- **Share 모듈**: `/share/`
- **GSAP 공식 문서**: https://greensock.com/gsap/
- **ScrollMagic 문서**: https://scrollmagic.io/

---

## 📝 라이선스

DAEIL SYSTEMS 내부 사용

---

**마지막 업데이트**: 2025-11-10
**버전**: 1.0.0
