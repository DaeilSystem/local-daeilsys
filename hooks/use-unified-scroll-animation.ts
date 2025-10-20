"use client"

import {
  AnimationHookOptions,
  AnimationType
} from "@/types/scroll-animation"
import { useCallback, useEffect, useRef, useState } from "react"

export function useUnifiedScrollAnimation(options: AnimationHookOptions) {
  const { config, scrollProgress, parallax, enabled = true, debug = false } = options
  const ref = useRef<HTMLElement>(null)

  // Animation states
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 })
  // Initialize progress based on startVisible flag only
  const initialProgress = config?.startVisible ? 1 : 0
  const [animationProgress, setAnimationProgress] = useState(initialProgress)

  // Get animation values based on type and progress
  const getAnimationValues = useCallback((progress: number, type: AnimationType) => {
    const clampedProgress = Math.max(0, Math.min(1, progress))

    switch (type) {
      case 'fade-in':
        return { opacity: clampedProgress }
      case 'fade-out':
        return { opacity: 1 - clampedProgress }
      case 'slide-up':
        return {
          opacity: clampedProgress,
          transform: `translateY(${30 * (1 - clampedProgress)}px)`
        }
      case 'slide-down':
        return {
          opacity: clampedProgress,
          transform: `translateY(${-30 * (1 - clampedProgress)}px)`
        }
      case 'slide-left':
        return {
          opacity: clampedProgress,
          transform: `translateX(${30 * (1 - clampedProgress)}px)`
        }
      case 'slide-right':
        return {
          opacity: clampedProgress,
          transform: `translateX(${-30 * (1 - clampedProgress)}px)`
        }
      case 'scale-up':
        return {
          opacity: clampedProgress,
          transform: `scale(${0.8 + 0.2 * clampedProgress})`
        }
      case 'scale-down':
        return {
          opacity: clampedProgress,
          transform: `scale(${1.2 - 0.2 * clampedProgress})`
        }
      case 'rotate':
        return {
          opacity: clampedProgress,
          transform: `rotate(${360 * (1 - clampedProgress)}deg)`
        }
      case 'blur':
        return {
          opacity: clampedProgress,
          filter: `blur(${10 * (1 - clampedProgress)}px)`
        }
      case 'apple-scroll-fade':
        // Apple-style: fade based on distance from viewport center
        // Ensure full opacity when animation is nearly complete
        const appleOpacity = clampedProgress >= 0.95 ? 1 : clampedProgress
        return {
          opacity: appleOpacity,
          transform: `translateY(${20 * (1 - clampedProgress)}px)`
        }
      default:
        return { opacity: clampedProgress }
    }
  }, [])

  // Scroll progress calculation
  useEffect(() => {
    if (!enabled || !scrollProgress) return

    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementBottom = rect.bottom

      if (elementBottom > 0 && elementTop < windowHeight) {
        const start = scrollProgress.start || 0.8
        const end = scrollProgress.end || 0.2

        const scrollStart = windowHeight * (1 - start)
        const scrollEnd = windowHeight * (1 - end)

        let currentProgress = (scrollStart - elementTop) / (scrollStart - scrollEnd)
        currentProgress = Math.max(0, Math.min(1, currentProgress))

        setProgress(currentProgress)
        setAnimationProgress(currentProgress)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [enabled, scrollProgress])

  // Parallax effect
  useEffect(() => {
    if (!enabled || !parallax) return

    const handleParallax = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2

      const distance = elementCenter - viewportCenter
      const speed = parallax.speed
      const clamp = parallax.clamp || 100

      let offset = distance * speed
      offset = Math.max(-clamp, Math.min(clamp, offset))

      if (parallax.reverse) offset = -offset

      if (parallax.direction === 'horizontal') {
        setParallaxOffset({ x: offset, y: 0 })
      } else {
        setParallaxOffset({ x: 0, y: offset })
      }
    }

    handleParallax()
    window.addEventListener('scroll', handleParallax, { passive: true })
    window.addEventListener('resize', handleParallax, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleParallax)
      window.removeEventListener('resize', handleParallax)
    }
  }, [enabled, parallax])

  // Intersection Observer for visibility
  useEffect(() => {
    if (!enabled || !ref.current || !config) return

    let hasTriggered = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio
        const threshold = config.threshold || 0.2

        if (entry.isIntersecting && ratio >= threshold) {
          setIsVisible(true)

          // Apple scroll fade special handling - just fade in when visible
          if (config.type === 'apple-scroll-fade') {
            // If triggerOnce and already triggered, don't update
            if (config.triggerOnce && hasTriggered) {
              return
            }

            // Simply set to 1 when element is visible
            setAnimationProgress(1)

            if (config.triggerOnce) {
              hasTriggered = false
            }
          }
        } else if (config.trigger !== 'once' && config.triggerOnce !== true) {
          setIsVisible(false)
          if (config.type === 'apple-scroll-fade') {
            setAnimationProgress(0)
          }
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: config.rootMargin || '-10% 0px -10% 0px'
      }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [enabled, config])

  // Calculate final animation values
  const animationValues = config ? getAnimationValues(animationProgress, config.type) : {}

  // Combine all transforms
  const transforms: string[] = []
  if ('transform' in animationValues && typeof animationValues.transform === 'string') {
    transforms.push(animationValues.transform)
  }
  if (parallaxOffset.x !== 0 || parallaxOffset.y !== 0) {
    transforms.push(`translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`)
  }

  const finalStyle = {
    ...animationValues,
    transform: transforms.length > 0 ? transforms.join(' ') : undefined,
    transition: config?.duration ? `${config.duration}ms ${config.easing || 'cubic-bezier(0.4, 0, 0.2, 1)'}` : undefined,
    transitionDelay: config?.delay ? `${config.delay}ms` : undefined,
    willChange: 'transform, opacity, filter'
  }

  if (debug && config) {
    console.log('Animation Debug:', {
      type: config.type,
      progress: animationProgress,
      isVisible,
      parallaxOffset,
      finalStyle
    })
  }

  return {
    ref,
    isVisible,
    progress,
    animationProgress,
    parallaxOffset,
    style: finalStyle
  }
}

// Re-export utility hooks for convenience
export { useAutoSnapToSections, useMediaQuery } from './use-scroll-utilities'

