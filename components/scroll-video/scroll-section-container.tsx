// scrollsection.tsx
"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollSectionContainerProps {
  id: string
  className?: string
  children: React.ReactNode
}

export function ScrollSectionContainer({
  id,
  className = "",
  children,
}: ScrollSectionContainerProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [snapEnabled, setSnapEnabled] = useState(true)

  useEffect(() => {
    const update = () => {
      // 👇 width<768, height<600이면 스냅 비활성화 (원하면 임계값 조정)
      const w = window.innerWidth
      const h = window.innerHeight
      setSnapEnabled(w >= 768 && h >= 600)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`relative scroll-snap-section ${className}`} // ← relative 기본 부여
      style={{
        ...(snapEnabled
          ? {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            }
          : {
              // 스냅 끔
              scrollSnapAlign: undefined,
              scrollSnapStop: undefined,
            }),
      }}
    >
      {children}
    </div>
  )
}
