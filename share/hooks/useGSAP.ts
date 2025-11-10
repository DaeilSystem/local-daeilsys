"use client"

import { useEffect, useRef, useState, RefObject } from "react"

interface UseGSAPOptions {
  /** GSAP 활성화 여부 (기본값: true) */
  enabled?: boolean
  /** GSAP 로드 완료 콜백 */
  onReady?: (gsap: any) => void
  /** 로드 실패 콜백 */
  onError?: () => void
}

/**
 * GSAP 라이브러리의 로딩 상태를 관리하는 Hook
 *
 * @example
 * ```tsx
 * const { isReady, gsap } = useGSAP({
 *   onReady: (gsapInstance) => {
 *     console.log("GSAP is ready!", gsapInstance)
 *   }
 * })
 *
 * useEffect(() => {
 *   if (isReady && gsap) {
 *     gsap.to(".element", { x: 100, duration: 1 })
 *   }
 * }, [isReady, gsap])
 * ```
 */
export function useGSAP(options: UseGSAPOptions = {}) {
  const { enabled = true, onReady, onError } = options
  const [isReady, setIsReady] = useState(false)
  const gsapRef = useRef<any>(null)

  useEffect(() => {
    if (!enabled) return

    const checkGSAP = () => {
      if (typeof window !== "undefined" && (window as any).gsap) {
        gsapRef.current = (window as any).gsap
        setIsReady(true)
        if (onReady) {
          onReady(gsapRef.current)
        }
        return true
      }
      return false
    }

    if (checkGSAP()) {
      return
    }

    const interval = setInterval(() => {
      if (checkGSAP()) {
        clearInterval(interval)
      }
    }, 100)

    const timeout = setTimeout(() => {
      if (!isReady && onError) {
        onError()
        clearInterval(interval)
      }
    }, 10000) // 10초 타임아웃

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [enabled, onReady, onError, isReady])

  return {
    isReady,
    gsap: gsapRef.current,
  }
}

/**
 * 특정 요소에 GSAP 애니메이션을 적용하는 Hook
 *
 * @example
 * ```tsx
 * const ref = useGSAPAnimation<HTMLDivElement>({
 *   from: { opacity: 0, y: 50 },
 *   to: { opacity: 1, y: 0 },
 *   duration: 1,
 *   trigger: "scroll" // 또는 "mount"
 * })
 *
 * return <div ref={ref}>Animated content</div>
 * ```
 */
export function useGSAPAnimation<T extends HTMLElement>(
  animationConfig: {
    from?: gsap.TweenVars
    to?: gsap.TweenVars
    duration?: number
    delay?: number
    ease?: string
    trigger?: "mount" | "scroll" | "manual"
    scrollTrigger?: {
      start?: string
      end?: string
      scrub?: boolean
      pin?: boolean
    }
    onComplete?: () => void
  } = {}
): RefObject<T> {
  const elementRef = useRef<T>(null)
  const { isReady, gsap } = useGSAP()
  const timelineRef = useRef<any>(null)

  useEffect(() => {
    if (!isReady || !gsap || !elementRef.current) return

    const {
      from,
      to,
      duration = 1,
      delay = 0,
      ease = "power2.out",
      trigger = "mount",
      scrollTrigger,
      onComplete,
    } = animationConfig

    // GSAP 타임라인 생성
    timelineRef.current = gsap.timeline({
      paused: trigger === "manual",
      onComplete,
    })

    // 애니메이션 설정
    if (from && to) {
      timelineRef.current.fromTo(elementRef.current, from, {
        ...to,
        duration,
        delay,
        ease,
      })
    } else if (to) {
      timelineRef.current.to(elementRef.current, {
        ...to,
        duration,
        delay,
        ease,
      })
    } else if (from) {
      timelineRef.current.from(elementRef.current, {
        ...from,
        duration,
        delay,
        ease,
      })
    }

    // ScrollTrigger 설정 (GSAP ScrollTrigger 플러그인 사용)
    if (trigger === "scroll" && scrollTrigger && gsap.ScrollTrigger) {
      gsap.ScrollTrigger.create({
        trigger: elementRef.current,
        start: scrollTrigger.start || "top 80%",
        end: scrollTrigger.end || "bottom 20%",
        scrub: scrollTrigger.scrub,
        pin: scrollTrigger.pin,
        animation: timelineRef.current,
      })
    }

    // Cleanup
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [isReady, gsap, animationConfig])

  return elementRef
}

/**
 * 여러 요소에 순차적으로 GSAP 애니메이션을 적용하는 Hook
 *
 * @example
 * ```tsx
 * const { ref, addToTimeline } = useGSAPTimeline()
 *
 * useEffect(() => {
 *   if (ref.current) {
 *     const children = ref.current.querySelectorAll('.item')
 *     addToTimeline(children, {
 *       from: { opacity: 0, y: 20 },
 *       to: { opacity: 1, y: 0 },
 *       stagger: 0.1
 *     })
 *   }
 * }, [addToTimeline])
 *
 * return (
 *   <div ref={ref}>
 *     <div className="item">Item 1</div>
 *     <div className="item">Item 2</div>
 *   </div>
 * )
 * ```
 */
export function useGSAPTimeline(options: { paused?: boolean; onComplete?: () => void } = {}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<any>(null)
  const { isReady, gsap } = useGSAP()

  useEffect(() => {
    if (!isReady || !gsap) return

    timelineRef.current = gsap.timeline({
      paused: options.paused ?? false,
      onComplete: options.onComplete,
    })

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [isReady, gsap, options.paused, options.onComplete])

  const addToTimeline = (
    targets: string | Element | Element[],
    config: {
      from?: gsap.TweenVars
      to?: gsap.TweenVars
      duration?: number
      ease?: string
      stagger?: number | object
      position?: string
    }
  ) => {
    if (!timelineRef.current) return

    const { from, to, duration = 1, ease = "power2.out", stagger, position } = config

    if (from && to) {
      timelineRef.current.fromTo(
        targets,
        from,
        {
          ...to,
          duration,
          ease,
          stagger,
        },
        position
      )
    } else if (to) {
      timelineRef.current.to(
        targets,
        {
          ...to,
          duration,
          ease,
          stagger,
        },
        position
      )
    } else if (from) {
      timelineRef.current.from(
        targets,
        {
          ...from,
          duration,
          ease,
          stagger,
        },
        position
      )
    }
  }

  const play = () => timelineRef.current?.play()
  const pause = () => timelineRef.current?.pause()
  const restart = () => timelineRef.current?.restart()
  const reverse = () => timelineRef.current?.reverse()

  return {
    ref: containerRef,
    timeline: timelineRef.current,
    addToTimeline,
    play,
    pause,
    restart,
    reverse,
  }
}
