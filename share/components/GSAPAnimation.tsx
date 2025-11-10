"use client"

import { useEffect, useRef } from "react"

export interface GSAPAnimationConfig {
  /** 애니메이션 트리거 요소 ID */
  triggerId: string
  /** 애니메이션 대상 선택자 */
  targetSelector: string
  /** GSAP 애니메이션 속성 */
  animation: {
    from?: gsap.TweenVars
    to?: gsap.TweenVars
    /** 애니메이션 지속 시간 (초) */
    duration?: number
    /** 애니메이션 시작 지연 (초) */
    delay?: number
    /** 이징 함수 */
    ease?: string
    /** 반복 횟수 (-1: 무한) */
    repeat?: number
    /** 반복 시 요요 효과 */
    yoyo?: boolean
    /** 시차 효과 (여러 요소에 적용 시) */
    stagger?: number | object
  }
  /** ScrollMagic 씬 설정 */
  scrollTrigger?: {
    /** 트리거 시작 위치 (0: top, 1: bottom) */
    triggerHook?: number
    /** 애니메이션 지속 거리 */
    duration?: string | number
    /** Pin 고정 여부 */
    pin?: boolean
    /** 핀 고정 시 추가할 CSS 클래스 */
    pinClass?: string
    /** 씬 시작 시 실행할 콜백 */
    onEnter?: () => void
    /** 씬 종료 시 실행할 콜백 */
    onLeave?: () => void
  }
  /** 스크롤 진행도에 따른 애니메이션 */
  scrub?: boolean
}

interface GSAPAnimationProps {
  /** 애니메이션 설정 */
  config: GSAPAnimationConfig
  /** 자식 요소 */
  children: React.ReactNode
  /** 추가 클래스명 */
  className?: string
}

/**
 * GSAP 기반 스크롤 애니메이션 컴포넌트
 *
 * ScrollMagic과 GSAP을 결합하여 강력한 스크롤 애니메이션을 생성합니다.
 *
 * @example
 * ```tsx
 * <GSAPAnimation
 *   config={{
 *     triggerId: "feature-section",
 *     targetSelector: ".feature-item",
 *     animation: {
 *       from: { opacity: 0, y: 100 },
 *       to: { opacity: 1, y: 0 },
 *       duration: 1,
 *       stagger: 0.2
 *     },
 *     scrollTrigger: {
 *       triggerHook: 0.8,
 *       duration: "80%"
 *     }
 *   }}
 * >
 *   <div className="feature-item">Feature 1</div>
 *   <div className="feature-item">Feature 2</div>
 * </GSAPAnimation>
 * ```
 */
export default function GSAPAnimation({ config, children, className = "" }: GSAPAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<any>(null)
  const timelineRef = useRef<any>(null)

  useEffect(() => {
    const initAnimation = () => {
      if (typeof window === "undefined") return

      const gsap = (window as any).gsap
      const ScrollMagic = (window as any).ScrollMagic

      if (!gsap || !ScrollMagic) {
        console.warn("GSAP or ScrollMagic not loaded yet")
        return
      }

      // GSAP 타임라인 생성
      timelineRef.current = gsap.timeline({ paused: true })

      const targets = document.querySelectorAll(config.targetSelector)
      if (targets.length === 0) {
        console.warn(`No elements found for selector: ${config.targetSelector}`)
        return
      }

      // 애니메이션 설정
      const { animation } = config

      if (animation.from && animation.to) {
        timelineRef.current.fromTo(
          targets,
          {
            ...animation.from,
            ease: animation.ease || "power2.out",
          },
          {
            ...animation.to,
            duration: animation.duration || 1,
            delay: animation.delay || 0,
            ease: animation.ease || "power2.out",
            repeat: animation.repeat,
            yoyo: animation.yoyo,
            stagger: animation.stagger,
          }
        )
      } else if (animation.to) {
        timelineRef.current.to(targets, {
          ...animation.to,
          duration: animation.duration || 1,
          delay: animation.delay || 0,
          ease: animation.ease || "power2.out",
          repeat: animation.repeat,
          yoyo: animation.yoyo,
          stagger: animation.stagger,
        })
      } else if (animation.from) {
        timelineRef.current.from(targets, {
          ...animation.from,
          duration: animation.duration || 1,
          delay: animation.delay || 0,
          ease: animation.ease || "power2.out",
          repeat: animation.repeat,
          yoyo: animation.yoyo,
          stagger: animation.stagger,
        })
      }

      // ScrollMagic 씬 생성
      if (config.scrollTrigger) {
        const controller = new ScrollMagic.Controller()
        const { scrollTrigger } = config

        sceneRef.current = new ScrollMagic.Scene({
          triggerElement: `#${config.triggerId}`,
          triggerHook: scrollTrigger.triggerHook ?? 0.8,
          duration: scrollTrigger.duration || 0,
        })
          .on("enter", () => {
            if (!config.scrub) {
              timelineRef.current.play()
            }
            scrollTrigger.onEnter?.()
          })
          .on("leave", () => {
            scrollTrigger.onLeave?.()
          })

        if (config.scrub) {
          // 스크롤 진행도에 따라 애니메이션 제어
          sceneRef.current.on("progress", (e: any) => {
            timelineRef.current.progress(e.progress)
          })
        }

        if (scrollTrigger.pin) {
          sceneRef.current.setPin(`#${config.triggerId}`, {
            pushFollowers: true,
          })

          if (scrollTrigger.pinClass) {
            sceneRef.current.setClassToggle(`#${config.triggerId}`, scrollTrigger.pinClass)
          }
        }

        sceneRef.current.addTo(controller)
      } else {
        // ScrollTrigger 없이 즉시 실행
        timelineRef.current.play()
      }
    }

    // GSAP과 ScrollMagic이 로드될 때까지 대기
    const checkLibraries = () => {
      if ((window as any).gsap && (window as any).ScrollMagic) {
        initAnimation()
        return true
      }
      return false
    }

    if (!checkLibraries()) {
      const interval = setInterval(() => {
        if (checkLibraries()) {
          clearInterval(interval)
        }
      }, 100)

      return () => clearInterval(interval)
    }

    // Cleanup
    return () => {
      if (sceneRef.current) {
        sceneRef.current.destroy(true)
      }
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [config])

  return (
    <div id={config.triggerId} ref={containerRef} className={className}>
      {children}
    </div>
  )
}
