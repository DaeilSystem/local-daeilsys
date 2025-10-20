"use client"

import { useEffect, useRef } from "react"

type Props = {
  /** 스크롤 대비 이동 비율 (0.05~0.15 권장, 음수면 반대 방향) */
  speed?: number
  /** 최대 px 이동 (과도한 이동 방지) */
  clamp?: number
  className?: string
  children: React.ReactNode
  /** 모바일이나 reduce-motion 시 강도 축소 배율 (0~1) */
  dampMobile?: number
}

export function ParallaxLayer({
  speed = 0.12,
  clamp = 80,
  className,
  children,
  dampMobile = 0.7,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const cur = useRef(0)
  const tgt = useRef(0)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    const factor = reduce || isMobile ? dampMobile : 1
    const effSpeed = speed * factor
    const effClamp = clamp * factor

    const tick = () => {
      cur.current += (tgt.current - cur.current) * 0.12
      el.style.transform = `translate3d(0, ${cur.current.toFixed(2)}px, 0)`
      rafId.current = requestAnimationFrame(tick)
    }

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      if (rect.bottom < 0 || rect.top > vh) return
      const centerDelta = rect.top + rect.height * 0.5 - vh * 0.5
      const target = Math.max(-effClamp, Math.min(effClamp, centerDelta * effSpeed))
      tgt.current = target
      if (rafId.current == null) rafId.current = requestAnimationFrame(tick)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = null
      el.style.transform = ""
    }
  }, [speed, clamp, dampMobile])

  return (
    <div ref={ref} className={className} style={{ willChange: "transform", transform: "translateZ(0)" }}>
      {children}
    </div>
  )
}
