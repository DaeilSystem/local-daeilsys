# Unified Scroll Animation System

모든 스크롤 애니메이션 기능을 통합한 확장성 있는 애니메이션 시스템입니다.

## 🚀 주요 기능

### 1. 다양한 애니메이션 타입
- **Fade Effects**: fade-in, fade-out
- **Slide Effects**: slide-up, slide-down, slide-left, slide-right
- **Scale Effects**: scale-up, scale-down
- **Special Effects**: rotate, blur, apple-scroll-fade
- **Parallax Effects**: vertical, horizontal

### 2. 고급 시퀀스 애니메이션
- **LockScrollSequence**: 스크롤 잠금 이미지 시퀀스
- **AutoPlaySequence**: 자동 재생 이미지 시퀀스
- **Custom Configurations**: FPS, 루프, 프리로딩 등

### 3. 유틸리티 훅들
- **useMediaQuery**: 미디어 쿼리 감지
- **useAutoSnapToSections**: 섹션 자동 스냅
- **useScrollProgress**: 스크롤 진행도 추적
- **useParallax**: 패럴랙스 효과
- **useReducedMotion**: 모션 감소 설정 감지

## 📦 사용법

### 기본 애니메이션

```tsx
import { FadeInAnimation, SlideUpAnimation } from '@/components/unified'

// 페이드인 애니메이션
<FadeInAnimation delay={200} duration={800}>
  <h1>제목</h1>
</FadeInAnimation>

// 슬라이드업 애니메이션
<SlideUpAnimation threshold={0.3} triggerOnce={false}>
  <p>내용</p>
</SlideUpAnimation>
```

### Apple 스타일 애니메이션

```tsx
import { AppleScrollFadeAnimation } from '@/components/unified'

<AppleScrollFadeAnimation duration={600}>
  <div>뷰포트 중앙 기준으로 페이드</div>
</AppleScrollFadeAnimation>
```

### 패럴랙스 효과

```tsx
import { ParallaxAnimation } from '@/components/unified'

<ParallaxAnimation speed={0.5} clamp={100}>
  <img src="image.jpg" alt="패럴랙스 이미지" />
</ParallaxAnimation>
```

### 스크롤 진행도 애니메이션

```tsx
import { ScrollProgressAnimation } from '@/components/unified'

<ScrollProgressAnimation start={0.8} end={0.2}>
  <div>스크롤에 따라 변화하는 요소</div>
</ScrollProgressAnimation>
```

### 이미지 시퀀스 애니메이션

```tsx
import {
  LockSequenceAnimation,
  AutoPlaySequenceAnimation,
  makeSequencePaths
} from '@/components/unified'

// 경로 생성
const sequenceFrames = makeSequencePaths(
  "/images/sequence.",
  0, 50, 4, "png"
)

// 자동 재생 시퀀스
<AutoPlaySequenceAnimation
  frames={sequenceFrames}
  config={{
    fps: 24,
    loop: false,
    autoplay: true
  }}
/>

// 스크롤 잠금 시퀀스
<LockSequenceAnimation
  frames={sequenceFrames}
  config={{
    sensitivity: 0.0018,
    minLoadedRatioToStart: 0.6,
    autoRelockWithinSection: true
  }}
  onComplete={() => console.log('시퀀스 완료')}
/>
```

### 통합 애니메이션 (모든 옵션)

```tsx
import { UnifiedScrollAnimation } from '@/components/unified'

<UnifiedScrollAnimation
  animation={{
    type: 'apple-scroll-fade',
    duration: 800,
    threshold: 0.2
  }}
  parallax={{
    speed: 0.3,
    clamp: 50
  }}
  scrollProgress={{
    start: 0.8,
    end: 0.2
  }}
  debug={true}
>
  <div>복합 애니메이션 요소</div>
</UnifiedScrollAnimation>
```

### 스태거드 애니메이션

```tsx
import { StaggeredAnimation } from '@/components/unified'

<StaggeredAnimation
  staggerDelay={150}
  animation={{ type: 'slide-up', duration: 600 }}
>
  {items.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
</StaggeredAnimation>
```

## 🎛️ 훅 사용법

### useAutoSnapToSections

```tsx
import { useAutoSnapToSections } from '@/components/unified'

function MyComponent() {
  useAutoSnapToSections({
    enabled: true,
    offsetRatio: 0.6,
    cooldownMs: 700,
    minSectionHeightPx: 400
  })

  return (
    <section data-snap-section>
      <h1>자동 스냅 섹션</h1>
    </section>
  )
}
```

### useParallax

```tsx
import { useParallax } from '@/components/unified'

function MyComponent() {
  const { ref, offset } = useParallax({
    speed: 0.5,
    clamp: 100,
    direction: 'vertical'
  })

  return (
    <div
      ref={ref}
      style={{
        transform: `translateY(${offset.y}px)`
      }}
    >
      패럴랙스 요소
    </div>
  )
}
```

### useScrollProgress

```tsx
import { useScrollProgress } from '@/components/unified'

function MyComponent() {
  const { ref, progress } = useScrollProgress({
    start: 0.8,
    end: 0.2
  })

  return (
    <div ref={ref}>
      진행도: {Math.round(progress * 100)}%
    </div>
  )
}
```

## ⚙️ 설정 옵션

### AnimationConfig
```typescript
{
  type: 'fade-in' | 'slide-up' | 'apple-scroll-fade' | ...,
  duration?: number,
  delay?: number,
  threshold?: number,
  triggerOnce?: boolean,
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'cubic-bezier'
}
```

### SequenceConfig
```typescript
{
  frames: string[],
  fps?: number,
  loop?: boolean,
  autoplay?: boolean,
  sensitivity?: number,
  minLoadedRatioToStart?: number,
  preloadConcurrency?: number,
  autoRelockWithinSection?: boolean
}
```

### ParallaxConfig
```typescript
{
  speed: number,
  clamp?: number,
  direction?: 'vertical' | 'horizontal',
  reverse?: boolean
}
```

## 🎯 성능 최적화

- **Intersection Observer**: 효율적인 가시성 감지
- **RequestAnimationFrame**: 부드러운 애니메이션
- **Canvas 기반**: 고성능 이미지 렌더링
- **프리로딩**: 중요한 이미지 우선 로딩
- **Reduced Motion**: 접근성 지원

## 🔧 접근성

- `prefers-reduced-motion` 자동 감지
- 모션 감소 시 정적 이미지로 폴백
- 키보드 네비게이션 지원
- 스크린 리더 호환

## 📱 반응형 지원

- 모바일/태블릿 최적화
- 터치 제스처 지원
- 뷰포트 크기별 설정
- 미디어 쿼리 기반 조건부 렌더링
