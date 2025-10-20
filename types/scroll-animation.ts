export type AnimationType =
  | 'fade-in'
  | 'fade-out'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale-up'
  | 'scale-down'
  | 'rotate'
  | 'blur'
  | 'apple-scroll-fade'
  | 'parallax'

export type EasingFunction =
  | 'linear'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'cubic-bezier'

export type TriggerType =
  | 'once'
  | 'continuous'
  | 'viewport-center'
  | 'scroll-progress'

export interface AnimationConfig {
  type: AnimationType
  duration?: number
  delay?: number
  easing?: EasingFunction
  threshold?: number
  rootMargin?: string
  trigger?: TriggerType
  triggerOnce?: boolean
  startVisible?: boolean
  customEasing?: string // for cubic-bezier
}

export interface ScrollProgressConfig {
  start?: number // 0-1
  end?: number // 0-1
  direction?: 'vertical' | 'horizontal'
}

export interface ParallaxConfig {
  speed: number
  clamp?: number
  direction?: 'vertical' | 'horizontal'
  reverse?: boolean
}

export interface SequenceConfig {
  frames: string[]
  fps?: number
  loop?: boolean
  autoplay?: boolean
  requireFullPreload?: boolean
  minLoadedRatioToStart?: number
  preloadConcurrency?: number
  minVisibleRatioToStart?: number
  minViewportTopToStart?: number
  sensitivity?: number
  startSlack?: number
  endSlack?: number
  autoRelockWithinSection?: boolean
  relockPixelThreshold?: number
  relockOnReenter?: boolean
  relockReset?: 'auto' | 'start' | 'end' | 'keep'
}

export interface SnapConfig {
  enabled?: boolean
  offsetRatio?: number
  cooldownMs?: number
  minSectionHeightPx?: number
}

export interface MediaQueryConfig {
  query: string
  fallback?: boolean
}

export interface UnifiedAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationConfig
  scrollProgress?: ScrollProgressConfig
  parallax?: ParallaxConfig
  sequence?: SequenceConfig
  snap?: SnapConfig
  mediaQuery?: MediaQueryConfig
  reduceMotion?: boolean
  debug?: boolean
}

export interface SequenceComponentProps {
  frames: string[]
  className?: string
  alt?: string
  config?: SequenceConfig
  onComplete?: () => void
  onProgress?: (progress: number) => void
}

export interface AnimationHookOptions {
  config: AnimationConfig
  scrollProgress?: ScrollProgressConfig
  parallax?: ParallaxConfig
  enabled?: boolean
  debug?: boolean
}
