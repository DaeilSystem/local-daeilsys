"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import type React from "react"
import { useCallback, useEffect, useRef, useState } from "react"

interface SmoothScrollVideoProps {
  src: string
  className?: string
  containerClassName?: string
  overlay?: React.ReactNode
  onFrameChange?: (frame: number, totalFrames: number) => void
  onVideoComplete?: () => void
  nextSectionId?: string
  triggerHeight?: number
  autoScrollToNext?: boolean
  smoothness?: number // 부드러움 정도 (0.1 ~ 0.3)
  scrollSensitivity?: number // 스크롤 감도 (0.001 ~ 0.01)
}

export function SmoothScrollVideo({
  src,
  className = "",
  containerClassName = "",
  overlay,
  onFrameChange,
  onVideoComplete,
  nextSectionId,
  triggerHeight = 400,
  autoScrollToNext = true,
  smoothness = 0.15,
  scrollSensitivity = 0.005,
}: SmoothScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  // 🎬 비디오 상태
  const [videoDuration, setVideoDuration] = useState(0)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [videoProgress, setVideoProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // 🎯 스크롤 제어 상태
  const [isVideoActive, setIsVideoActive] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  // 📊 위치 추적
  const [containerTop, setContainerTop] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)

  // 🔧 디버그
  const [loadingError, setLoadingError] = useState<string | null>(null)

  // 🎛️ Framer Motion 스크롤 훅
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // 🎨 스크롤 기반 변환
  const videoProgressTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  )

  // 🔄 비디오 로딩 핸들러
  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration)
      setLoadingError(null)
      console.log("✅ Video metadata loaded - Duration:", videoRef.current.duration)
      setIsVideoReady(true)
    }
  }, [])

  const handleCanPlay = useCallback(() => {
    console.log("✅ Video can play")
    setIsVideoReady(true)
    setLoadingError(null)
  }, [])

  const handleError = useCallback((e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const error = (e.target as HTMLVideoElement).error
    const errorMessage = error ? `Error ${error.code}: ${error.message}` : "Unknown video error"
    console.error("❌ Video error:", errorMessage)
    setLoadingError(errorMessage)
    setIsVideoReady(false)
  }, [])

  // 📏 컨테이너 위치 계산
  const updateContainerPosition = useCallback(() => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const scrollY = window.scrollY

    setContainerTop(rect.top + scrollY)
    setContainerHeight(rect.height)
    setViewportHeight(window.innerHeight)
  }, [])

  // 🚪 섹션 전환 함수들
  const moveToNextSection = useCallback(() => {
    if (isTransitioning) return

    console.log("🔜 Moving to next section")
    setIsTransitioning(true)
    setIsVideoActive(false)
    setIsPlaying(false)
    document.body.style.overflow = ""
    onVideoComplete?.()

    const nextElement = nextSectionId
      ? document.getElementById(nextSectionId)
      : (containerRef.current?.nextElementSibling as HTMLElement)

    if (nextElement) {
      setTimeout(() => {
        nextElement.scrollIntoView({ behavior: "smooth", block: "start" })
        setTimeout(() => setIsTransitioning(false), 1000)
      }, 100)
    } else {
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }, [isTransitioning, nextSectionId, onVideoComplete])

  const moveToPrevSection = useCallback(() => {
    if (isTransitioning) return

    console.log("🔙 Moving to previous section")
    setIsTransitioning(true)
    setIsVideoActive(false)
    setIsPlaying(false)
    document.body.style.overflow = ""

    const prevElement = containerRef.current?.previousElementSibling as HTMLElement
    if (prevElement) {
      setTimeout(() => {
        prevElement.scrollIntoView({ behavior: "smooth", block: "end" })
        setTimeout(() => setIsTransitioning(false), 1000)
      }, 100)
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setTimeout(() => setIsTransitioning(false), 1000)
      }, 100)
    }
  }, [isTransitioning])

  // 🎮 스크롤 기반 비디오 제어
  const updateVideoFromScroll = useCallback(() => {
    if (!videoRef.current || !isVideoReady || videoDuration === 0 || isTransitioning) return

    const scrollY = window.scrollY
    const videoStart = containerTop - viewportHeight
    const videoEnd = containerTop + containerHeight

    // 🔹 1단계: 영상 진입 전
    if (scrollY < videoStart) {
      if (isVideoActive) {
        console.log("🚪 Exiting video - going to previous section")
        moveToPrevSection()
      }
      return
    }

    // 🔹 3단계: 영상 종료 후
    if (scrollY > videoEnd) {
      if (isVideoActive && autoScrollToNext) {
        console.log("🚪 Exiting video - going to next section")
        moveToNextSection()
      }
      return
    }

    // 🔹 2단계: 영상 재생 영역
    if (!isVideoActive) {
      console.log("🎬 Entering video section")
      setIsVideoActive(true)
      setIsPlaying(true)
      document.body.style.overflow = "hidden"
    }

    // 스크롤 진행도 계산 (0 ~ 1)
    const progress = Math.max(0, Math.min(1, (scrollY - videoStart) / (videoEnd - videoStart)))
    const targetTime = progress * videoDuration

    // 부드러운 프레임 전환
    const currentTime = videoRef.current.currentTime
    const timeDiff = targetTime - currentTime

    if (Math.abs(timeDiff) > 0.05) {
      videoRef.current.currentTime = targetTime
    } else {
      videoRef.current.currentTime += timeDiff * smoothness
    }

    setVideoProgress(progress)
    const frame = Math.floor(progress * 100)
    setCurrentFrame(frame)
    onFrameChange?.(frame, 100)
  }, [
    containerTop,
    containerHeight,
    viewportHeight,
    isVideoActive,
    isVideoReady,
    videoDuration,
    isTransitioning,
    onFrameChange,
    moveToNextSection,
    moveToPrevSection,
    autoScrollToNext,
    smoothness,
  ])

  // 🎯 휠 이벤트로 정밀 제어
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isVideoActive || !videoRef.current || videoDuration === 0 || isTransitioning) return

      e.preventDefault()
      e.stopPropagation()

      const direction = e.deltaY > 0 ? "down" : "up"
      const currentTime = videoRef.current.currentTime
      const delta = e.deltaY * scrollSensitivity
      let newTime = currentTime + delta

      // 🔄 역방향 경계 처리
      if (newTime <= 0) {
        newTime = 0
        videoRef.current.currentTime = 0
        setVideoProgress(0)
        setCurrentFrame(0)

        if (direction === "up") {
          console.log("🔙 Video reached start - moving to previous section")
          setTimeout(() => moveToPrevSection(), 200)
          return
        }
      }

      // 🔄 정방향 경계 처리
      if (newTime >= videoDuration) {
        newTime = videoDuration
        videoRef.current.currentTime = videoDuration
        setVideoProgress(1)
        setCurrentFrame(100)

        if (direction === "down" && autoScrollToNext) {
          console.log("🔜 Video reached end - moving to next section")
          setTimeout(() => moveToNextSection(), 200)
          return
        }
      }

      // 부드러운 시간 업데이트
      videoRef.current.currentTime = newTime
      const progress = newTime / videoDuration
      setVideoProgress(progress)
      setCurrentFrame(Math.floor(progress * 100))
      onFrameChange?.(Math.floor(progress * 100), 100)
    },
    [
      isVideoActive,
      videoDuration,
      isTransitioning,
      scrollSensitivity,
      autoScrollToNext,
      moveToNextSection,
      moveToPrevSection,
      onFrameChange,
    ]
  )

  // 🎯 터치 이벤트 지원
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!isVideoActive || !videoRef.current || videoDuration === 0) return
    e.preventDefault()
  }, [isVideoActive, videoDuration])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isVideoActive || !videoRef.current || videoDuration === 0) return
    e.preventDefault()
  }, [isVideoActive, videoDuration])

  // 📱 키보드 이벤트 지원
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isVideoActive || !videoRef.current || videoDuration === 0) return

      e.preventDefault()
      const currentTime = videoRef.current.currentTime
      const timeStep = videoDuration * 0.05 // 5%씩 이동

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
        case " ":
          videoRef.current.currentTime = Math.min(currentTime + timeStep, videoDuration)
          break
        case "ArrowUp":
        case "PageUp":
          videoRef.current.currentTime = Math.max(currentTime - timeStep, 0)
          break
        case "Home":
          videoRef.current.currentTime = 0
          break
        case "End":
          videoRef.current.currentTime = videoDuration
          break
      }

      const progress = videoRef.current.currentTime / videoDuration
      setVideoProgress(progress)
      setCurrentFrame(Math.floor(progress * 100))
      onFrameChange?.(Math.floor(progress * 100), 100)
    },
    [isVideoActive, videoDuration, onFrameChange]
  )

  // 🔄 스크롤 이벤트 핸들러
  const handleScroll = useCallback(() => {
    if (isTransitioning) return
    updateVideoFromScroll()
  }, [isTransitioning, updateVideoFromScroll])

  // 🎬 비디오 진행도 표시
  useEffect(() => {
    if (!progressRef.current) return

    const progress = videoProgressTransform.get()
    progressRef.current.style.width = `${progress * 100}%`
  }, [videoProgressTransform])

  // 🎯 이벤트 리스너 등록
  useEffect(() => {
    updateContainerPosition()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateContainerPosition)
    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateContainerPosition)
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [
    handleScroll,
    handleWheel,
    handleTouchStart,
    handleTouchMove,
    handleKeyDown,
    updateContainerPosition,
  ])

  // 🎬 비디오 로딩 상태 표시
  if (loadingError) {
    return (
      <div className={`flex items-center justify-center min-h-screen bg-gray-900 ${containerClassName}`}>
        <div className="text-center text-white">
          <div className="text-2xl mb-4">❌</div>
          <div className="text-lg mb-2">비디오 로딩 실패</div>
          <div className="text-sm text-gray-400">{loadingError}</div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${containerClassName}`}
      style={{ height: `${triggerHeight}vh` }}
    >
      {/* 🎬 비디오 컨테이너 */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover ${className}`}
          preload="metadata"
          muted
          playsInline
          onLoadedMetadata={handleLoadedMetadata}
          onCanPlay={handleCanPlay}
          onError={handleError}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🎨 오버레이 */}
        {overlay && (
          <div className="absolute inset-0 z-10">
            {overlay}
          </div>
        )}

        {/* 📊 진행도 표시 */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
          <motion.div
            ref={progressRef}
            className="h-full bg-white"
            style={{ width: "0%" }}
            initial={{ width: "0%" }}
            animate={{ width: `${videoProgress * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* 🎯 컨트롤 힌트 */}
        {isVideoActive && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/60 text-sm z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-center">
              <div className="mb-2">스크롤하여 비디오 제어</div>
              <div className="text-xs">↑↓ 또는 스페이스바</div>
            </div>
          </motion.div>
        )}

        {/* 🔢 프레임 카운터 (개발용) */}
        {process.env.NODE_ENV === "development" && (
          <div className="absolute top-4 right-4 text-white/80 text-sm z-20">
            Frame: {currentFrame}/100
          </div>
        )}
      </div>

      {/* 📏 스크롤 공간 */}
      <div className="w-full" style={{ height: `${triggerHeight * 0.5}vh` }} />
    </div>
  )
}
