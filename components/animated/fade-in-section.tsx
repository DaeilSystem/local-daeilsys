"use client"

import { useScrollFade, useScrollProgress } from "@/hooks/use-scroll-fade"
import { cn } from "@/lib/utils"
import { ReactNode, useEffect, useRef, useState } from "react"

interface FadeInSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  triggerOnce?: boolean
  threshold?: number
}

export function FadeInSection({
  children,
  className,
  delay = 0,
  duration = 800,
  triggerOnce = false,
  threshold = 0.2,
}: FadeInSectionProps) {
  const { ref, isVisible } = useScrollFade({ threshold, triggerOnce })

  return (
    <div
      ref={ref as any}
      className={cn(
        "transition-all will-change-transform",
        isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-16 blur-sm",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  )
}

interface ScrollFadeTextProps {
  children: ReactNode
  className?: string
  start?: number
  end?: number
}

export function ScrollFadeText({ children, className, start = 0.8, end = 0.2 }: ScrollFadeTextProps) {
  const { ref, progress } = useScrollProgress({ start, end })

  const opacity = Math.max(0, Math.min(1, progress))
  const scale = 0.95 + progress * 0.05
  const blur = (1 - progress) * 5

  return (
    <div
      ref={ref as any}
      className={cn("transition-all duration-300", className)}
      style={{
        opacity,
        transform: `scale(${scale})`,
        filter: `blur(${blur}px)`,
      }}
    >
      {children}
    </div>
  )
}

// Apple 스타일 스크롤 페이드 (viewport 중앙 기준)
interface AppleScrollFadeProps {
  children: ReactNode
  className?: string
  duration?: number
}

export function AppleScrollFade({ children, className, duration = 600 }: AppleScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = useState(0)
  const [translateY, setTranslateY] = useState(30)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2

      // viewport 중앙에서 거리 계산
      const distance = Math.abs(elementCenter - viewportCenter)
      const maxDistance = windowHeight / 2

      // 중앙에 가까울수록 opacity 1, 멀수록 0
      const newOpacity = Math.max(0, Math.min(1, 1 - distance / maxDistance))

      // translateY도 거리에 따라 조정
      const newTranslateY = distance / maxDistance * 30

      setOpacity(newOpacity)
      setTranslateY(newTranslateY)
    }

    handleScroll() // 초기 실행
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      {children}
    </div>
  )
}
