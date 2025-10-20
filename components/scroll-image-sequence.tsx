"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

interface ScrollImageSequenceProps {
  images: string[]
  alt: string
  className?: string
  containerClassName?: string
  startProgress?: number
  endProgress?: number
}

/**
 * 덜 민감한(부드러운) 시퀀스 스크롤
 * - spring: stiffness ↓, damping ↑
 * - frame 계산: Math.floor 사용으로 미세 스크롤에 프레임 덜 바뀜
 */
export function ScrollImageSequence({
  images,
  alt,
  className = "",
  containerClassName = "",
  startProgress = 0,
  endProgress = 1,
}: ScrollImageSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentFrame, setCurrentFrame] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // 스크롤 진행도 → 프레임 인덱스 범위로 매핑
  const frameProgress = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [0, images.length - 1]
  )

  // 더 느리고 안정적인 스프링
  const smoothFrame = useSpring(frameProgress, {
    stiffness: 50,
    damping: 40,
    restDelta: 0.001,
  })

  useEffect(() => {
    // ✅ 최신 방식: on("change", callback)
    const unsubscribe = smoothFrame.on("change", (latest) => {
      const clamped = Math.max(0, Math.min(latest, images.length - 1))
      const frame = Math.floor(clamped)
      setCurrentFrame(frame)
    })
    return unsubscribe
  }, [smoothFrame, images.length])

  return (
    <div ref={containerRef} className={`relative ${containerClassName}`}>
      <motion.div className={`relative ${className}`}>
        <Image
          src={images[currentFrame] || images[0]}
          alt={`${alt} - Frame ${currentFrame + 1}`}
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          priority={currentFrame === 0}
        />
      </motion.div>
    </div>
  )
}
