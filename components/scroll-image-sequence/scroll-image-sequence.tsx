"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export interface ScrollImageSequenceProps {
  images: string[]
  alt?: string
  className?: string
  /**
   * 이미지 시퀀스가 시작되는 스크롤 위치 (픽셀)
   * 이미지가 뷰포트 상단에 도달할 때 시작
   */
  startOffset?: number
  /**
   * 이미지 시퀀스가 진행되는 스크롤 거리 (픽셀)
   * 이 거리 동안 모든 프레임을 순회
   */
  scrollDistance?: number
  /**
   * 이미지가 고정(pin)되는 여부
   */
  pin?: boolean
}

/**
 * 스크롤에 따라 이미지 시퀀스를 재생하는 컴포넌트
 * 실제 웹사이트의 동작을 참고하여 구현
 */
export function ScrollImageSequence({
  images,
  alt = "",
  className = "",
  startOffset = 0,
  scrollDistance = 2000,
  pin = true,
}: ScrollImageSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [isPinned, setIsPinned] = useState(false)
  const loadedImagesRef = useRef<Map<string, HTMLImageElement>>(new Map())
  const rafRef = useRef<number>()

  // 이미지 프리로드
  useEffect(() => {
    images.forEach((src) => {
      if (!loadedImagesRef.current.has(src)) {
        const img = new Image()
        img.src = src
        loadedImagesRef.current.set(src, img)
      }
    })
  }, [images])

  // 스크롤 이벤트 리스너 - 실제 웹사이트처럼 직접 스크롤 이벤트에서 처리
  useEffect(() => {
    let lastFrame = -1
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY
      // 스크롤이 실제로 변경되었을 때만 처리
      if (Math.abs(currentScrollY - lastScrollY) < 1) return
      lastScrollY = currentScrollY

      if (!containerRef.current || !imageRef.current || images.length === 0) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // 이미지가 뷰포트 상단에 도달했는지 확인
      const shouldPin = pin && rect.top <= 0 && rect.bottom > viewportHeight
      setIsPinned(shouldPin)

      if (shouldPin || (!pin && rect.top < viewportHeight && rect.bottom > 0)) {
        // 스크롤 진행도 계산 (0 ~ 1)
        const scrollProgress = pin
          ? Math.max(0, Math.min(1, -rect.top / scrollDistance))
          : Math.max(
              0,
              Math.min(
                1,
                (viewportHeight - rect.top) / (viewportHeight + rect.height)
              )
            )

        // 현재 프레임 계산
        const frameIndex = Math.floor(scrollProgress * (images.length - 1))
        const clampedFrame = Math.max(0, Math.min(images.length - 1, frameIndex))

        if (clampedFrame !== lastFrame && images[clampedFrame]) {
          lastFrame = clampedFrame
          setCurrentFrame(clampedFrame)
          const img = loadedImagesRef.current.get(images[clampedFrame])
          if (img && imageRef.current) {
            // 이미지가 로드되지 않았어도 즉시 표시 (로딩 중 표시)
            imageRef.current.src = img.src
          } else if (imageRef.current && images[clampedFrame]) {
            // 아직 프리로드되지 않은 경우 직접 로드
            imageRef.current.src = images[clampedFrame]
          }
        }
      } else if (!shouldPin && rect.top > viewportHeight) {
        // 뷰포트 위로 벗어나면 첫 프레임으로
        if (lastFrame !== 0) {
          lastFrame = 0
          setCurrentFrame(0)
          if (imageRef.current && images[0]) {
            const img = loadedImagesRef.current.get(images[0])
            if (img) {
              imageRef.current.src = img.src
            } else {
              imageRef.current.src = images[0]
            }
          }
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })

    // 초기 실행
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [images, scrollDistance, pin, startOffset])

  if (images.length === 0) return null

  return (
    <div
      ref={containerRef}
      className={`relative ${isPinned && pin ? "sticky top-0" : ""} ${className}`}
      style={isPinned && pin ? { zIndex: 10 } : {}}
    >
      <img
        ref={imageRef}
        src={images[0]}
        alt={alt}
        className="w-full h-auto"
        style={{ display: "block" }}
      />
    </div>
  )
}
