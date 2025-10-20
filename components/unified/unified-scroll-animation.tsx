"use client"

import { useUnifiedScrollAnimation } from "@/hooks/use-unified-scroll-animation"
import { cn } from "@/lib/utils"
import {
    AnimationConfig,
    ParallaxConfig,
    ScrollProgressConfig,
    SequenceConfig,
    UnifiedAnimationProps
} from "@/types/scroll-animation"
import { ReactNode } from "react"
import { AutoPlaySequence, LockScrollSequence } from "./sequence-components"

// Unified Scroll Animation Component
export function UnifiedScrollAnimation({
  children,
  className,
  animation,
  scrollProgress,
  parallax,
  sequence,
  snap,
  mediaQuery,
  reduceMotion = false,
  debug = false
}: UnifiedAnimationProps) {

  // If sequence is provided, render sequence components
  if (sequence) {
    if (sequence.autoplay) {
      return (
        <AutoPlaySequence
          frames={sequence.frames}
          className={className}
          config={sequence}
        />
      )
    } else {
      return (
        <LockScrollSequence
          frames={sequence.frames}
          className={className}
          config={sequence}
        />
      )
    }
  }

  // Default animation config only if animation is explicitly requested
  const animationConfig = animation

  const { ref, isVisible, progress, animationProgress, parallaxOffset, style } = useUnifiedScrollAnimation({
    config: animationConfig,
    scrollProgress,
    parallax,
    enabled: !reduceMotion,
    debug
  })

  // Apply media query if provided
  if (mediaQuery) {
    // This would need to be handled by the parent component or useMediaQuery hook
    // For now, we'll just render the children
  }

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={style}
    >
      {children}
    </div>
  )
}

// Convenience components for common animations
export function FadeInAnimation({
  children,
  className,
  duration = 800,
  delay = 0,
  threshold = 0.2,
  triggerOnce = false,
  startVisible = false
}: {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  threshold?: number
  triggerOnce?: boolean
  startVisible?: boolean
}) {
  return (
    <UnifiedScrollAnimation
      className={className}
      animation={{
        type: 'fade-in',
        duration,
        delay,
        threshold,
        triggerOnce,
        startVisible
      }}
    >
      {children}
    </UnifiedScrollAnimation>
  )
}

export function SlideUpAnimation({
  children,
  className,
  duration = 800,
  delay = 0,
  threshold = 0.2,
  triggerOnce = false
}: {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  threshold?: number
  triggerOnce?: boolean
}) {
  return (
    <UnifiedScrollAnimation
      className={className}
      animation={{
        type: 'slide-up',
        duration,
        delay,
        threshold,
        triggerOnce
      }}
    >
      {children}
    </UnifiedScrollAnimation>
  )
}

export function AppleScrollFadeAnimation({
  children,
  className,
  duration = 600,
  triggerOnce = true
}: {
  children: ReactNode
  className?: string
  duration?: number
  triggerOnce?: boolean
}) {
  return (
    <UnifiedScrollAnimation
      className={className}
      animation={{
        type: 'apple-scroll-fade',
        duration,
        triggerOnce
      }}
    >
      {children}
    </UnifiedScrollAnimation>
  )
}

export function ParallaxAnimation({
  children,
  className,
  speed = 0.5,
  clamp = 100,
  direction = 'vertical',
  reverse = false
}: {
  children: ReactNode
  className?: string
  speed?: number
  clamp?: number
  direction?: 'vertical' | 'horizontal'
  reverse?: boolean
}) {
  return (
    <UnifiedScrollAnimation
      className={className}
      parallax={{
        speed,
        clamp,
        direction,
        reverse
      }}
    >
      {children}
    </UnifiedScrollAnimation>
  )
}

export function ScrollProgressAnimation({
  children,
  className,
  start = 0.8,
  end = 0.2,
  direction = 'vertical'
}: {
  children: ReactNode
  className?: string
  start?: number
  end?: number
  direction?: 'vertical' | 'horizontal'
}) {
  return (
    <UnifiedScrollAnimation
      className={className}
      scrollProgress={{
        start,
        end,
        direction
      }}
    >
      {children}
    </UnifiedScrollAnimation>
  )
}

// Sequence Animation Components
export function LockSequenceAnimation({
  frames,
  className,
  alt,
  config,
  onComplete,
  onProgress
}: {
  frames: string[]
  className?: string
  alt?: string
  config?: SequenceConfig
  onComplete?: () => void
  onProgress?: (progress: number) => void
}) {
  return (
    <LockScrollSequence
      frames={frames}
      className={className}
      alt={alt}
      config={config}
      onComplete={onComplete}
      onProgress={onProgress}
    />
  )
}

export function AutoPlaySequenceAnimation({
  frames,
  className,
  alt,
  config,
  onComplete,
  onProgress
}: {
  frames: string[]
  className?: string
  alt?: string
  config?: SequenceConfig
  onComplete?: () => void
  onProgress?: (progress: number) => void
}) {
  return (
    <AutoPlaySequence
      frames={frames}
      className={className}
      alt={alt}
      config={config}
      onComplete={onComplete}
      onProgress={onProgress}
    />
  )
}

// Advanced Animation Component with multiple effects
export function AdvancedAnimation({
  children,
  className,
  animations = [],
  parallax,
  scrollProgress,
  reduceMotion = false,
  debug = false
}: {
  children: ReactNode
  className?: string
  animations?: AnimationConfig[]
  parallax?: ParallaxConfig
  scrollProgress?: ScrollProgressConfig
  reduceMotion?: boolean
  debug?: boolean
}) {
  // Use the first animation as primary, others as fallbacks
  const primaryAnimation = animations[0]

  return (
    <UnifiedScrollAnimation
      className={className}
      animation={primaryAnimation}
      parallax={parallax}
      scrollProgress={scrollProgress}
      reduceMotion={reduceMotion}
      debug={debug}
    >
      {children}
    </UnifiedScrollAnimation>
  )
}

// Staggered Animation Container
export function StaggeredAnimation({
  children,
  className,
  staggerDelay = 100,
  animation = { type: 'fade-in', duration: 800 },
  reduceMotion = false
}: {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  animation?: AnimationConfig
  reduceMotion?: boolean
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <UnifiedScrollAnimation
          key={index}
          animation={{
            ...animation,
            delay: (animation.delay || 0) + (index * staggerDelay)
          }}
          reduceMotion={reduceMotion}
        >
          {child}
        </UnifiedScrollAnimation>
      ))}
    </div>
  )
}
