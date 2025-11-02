"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

export interface MotionConfig {
  basePath: string
  filename: string
  startFrame: number
  endFrame: number
  frameDigits: number
  extension: string
}

interface ScrollMotionSectionProps {
  motionConfig: MotionConfig
  title?: ReactNode
  overlay?: ReactNode
  height?: string
  className?: string
}

export default function ScrollMotionSection({
  motionConfig,
  title,
  overlay,
  height = "200vh",
  className = "",
}: ScrollMotionSectionProps) {
  const [currentFrame, setCurrentFrame] = useState(motionConfig.startFrame)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(
          0,
          Math.min(1, -rect.top / (rect.height * 0.8))
        )
        const frame =
          Math.floor(
            scrollProgress *
              (motionConfig.endFrame - motionConfig.startFrame)
          ) + motionConfig.startFrame
        setCurrentFrame(
          Math.min(
            motionConfig.endFrame,
            Math.max(motionConfig.startFrame, frame)
          )
        )
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [motionConfig])

  const getFrameUrl = (frame: number) => {
    const frameStr = frame.toString().padStart(motionConfig.frameDigits, "0")
    return `${motionConfig.basePath}/${motionConfig.filename}-${frameStr}.${motionConfig.extension}`
  }

  return (
    <div
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center ${className}`}
      style={{ height }}
    >
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto px-4">
          {title && <div className="text-center mb-8">{title}</div>}

          {/* Motion Image */}
          <div className="relative aspect-video w-full mb-8">
            <img
              src={getFrameUrl(currentFrame)}
              alt="Product Motion"
              className="w-full h-full object-contain"
            />

            {/* Overlay Content (e.g., floating titles) */}
            {overlay && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {overlay}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
