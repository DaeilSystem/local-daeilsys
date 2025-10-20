// Unified Animation System - Main Export
export * from './sequence-components'
export * from './unified-scroll-animation'

// Re-export types for convenience
export type {
    AnimationConfig, AnimationHookOptions, AnimationType,
    EasingFunction, MediaQueryConfig, ParallaxConfig, ScrollProgressConfig, SequenceComponentProps, SequenceConfig,
    SnapConfig, TriggerType, UnifiedAnimationProps
} from '@/types/scroll-animation'

// Re-export hooks for convenience
export {
    useAutoSnapToSections, useMediaQuery, useUnifiedScrollAnimation
} from '@/hooks/use-unified-scroll-animation'

export {
    useElementSize, useIntersectionObserver, useParallax,
    useReducedMotion, useScrollDirection, useScrollLock, useScrollProgress, useScrollToElement, useScrollVelocity, useViewportSize
} from '@/hooks/use-scroll-utilities'

// Utility functions
export { makeSequencePaths } from './sequence-components'
