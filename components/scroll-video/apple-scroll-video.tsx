"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"

interface AppleScrollVideoProps {
  src: string
  className?: string
  containerClassName?: string
  overlay?: React.ReactNode
  onFrameChange?: (frame: number, totalFrames: number) => void
  onVideoComplete?: () => void
  nextSectionId?: string
  triggerHeight?: number // 영상이 활성화될 스크롤 높이
}

export function AppleScrollVideo({
  src,
  className = "",
  containerClassName = "",
  overlay,
  onFrameChange,
  onVideoComplete,
  nextSectionId,
  triggerHeight = 300, // 기본 300vh
}: AppleScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // 🎬 비디오 상태
  const [videoDuration, setVideoDuration] = useState(0)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [videoProgress, setVideoProgress] = useState(0)

  // 🎯 스크롤 제어 상태
  const [isVideoActive, setIsVideoActive] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down")
  const [isTransitioning, setIsTransitioning] = useState(false)

  // 📊 위치 추적
  const [containerTop, setContainerTop] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const [currentScrollY, setCurrentScrollY] = useState(0)

  // 🔧 디버그
  const [loadingError, setLoadingError] = useState<string | null>(null)

  // 🎛️ 스크롤 감도 설정
  const SCROLL_SENSITIVITY = 0.003
  const FRAME_SMOOTHING = 0.15

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

  const handleLoadedData = useCallback(() => {
    console.log("✅ Video data loaded")
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
    setCurrentScrollY(scrollY)
  }, [])

  // 🚪 섹션 전환 함수들
  const moveToNextSection = useCallback(() => {
    if (isTransitioning) return

    console.log("🔜 Moving to next section")
    setIsTransitioning(true)
    setIsVideoActive(false)
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
    document.body.style.overflow = ""

    const prevElement = containerRef.current?.previousElementSibling as HTMLElement
    if (prevElement) {
      setTimeout(() => {
        prevElement.scrollIntoView({ behavior: "smooth", block: "end" })
        setTimeout(() => setIsTransitioning(false), 1000)
      }, 100)
    } else {
      // 이전 섹션이 없으면 페이지 맨 위로
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
    const videoStart = containerTop
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
      if (isVideoActive) {
        console.log("🚪 Exiting video - going to next section")
        moveToNextSection()
      }
      return
    }

    // 🔹 2단계: 영상 재생 영역
    if (!isVideoActive) {
      console.log("🎬 Entering video section")
      setIsVideoActive(true)
      document.body.style.overflow = "hidden" // 스크롤 잠금
    }

    // 스크롤 진행도 계산 (0 ~ 1)
    const progress = Math.max(0, Math.min(1, (scrollY - videoStart) / (videoEnd - videoStart)))
    const targetTime = progress * videoDuration

    // 부드러운 프레임 전환
    const currentTime = videoRef.current.currentTime
    const timeDiff = targetTime - currentTime

    if (Math.abs(timeDiff) > 0.1) {
      videoRef.current.currentTime = targetTime
    } else {
      videoRef.current.currentTime += timeDiff * FRAME_SMOOTHING
    }

    setVideoProgress(progress)
    const frame = Math.floor(progress * 100)
    setCurrentFrame(frame)
    onFrameChange?.(frame, 100)
  }, [
    containerTop,
    containerHeight,
    isVideoActive,
    isVideoReady,
    videoDuration,
    isTransitioning,
    onFrameChange,
    moveToNextSection,
    moveToPrevSection,
  ])

  // 🎯 휠 이벤트로 정밀 제어
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isVideoActive || !videoRef.current || videoDuration === 0 || isTransitioning) return

      e.preventDefault()
      e.stopPropagation()

      const direction = e.deltaY > 0 ? "down" : "up"
      setScrollDirection(direction)

      const currentTime = videoRef.current.currentTime
      const delta = e.deltaY * SCROLL_SENSITIVITY
      let newTime = currentTime + delta

      // 🔄 역방향 경계 처리 (개선)
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

      // 🔄 정방향 경계 처리 (개선)
      if (newTime >= videoDuration) {
        newTime = videoDuration
        videoRef.current.currentTime = videoDuration
        setVideoProgress(1)
        setCurrentFrame(100)

        if (direction === "down") {
          console.log("🔜 Video reached end - moving to next section")
          setTimeout(() => moveToNextSection(), 200)
          return
        }
      }

      // 일반적인 프레임 업데이트
      videoRef.current.currentTime = newTime
      const progress = newTime / videoDuration
      setVideoProgress(progress)
      setCurrentFrame(Math.floor(progress * 100))
      onFrameChange?.(Math.floor(progress * 100), 100)
    },
    [isVideoActive, videoDuration, isTransitioning, onFrameChange, moveToNextSection, moveToPrevSection],
  )

  // 📱 스크롤 이벤트 리스너
  useEffect(() => {
    const handleScroll = () => {
      updateContainerPosition()
      updateVideoFromScroll()
    }

    // 초기 위치 설정
    updateContainerPosition()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateContainerPosition)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateContainerPosition)
      document.body.style.overflow = ""
    }
  }, [updateContainerPosition, updateVideoFromScroll])

  // 🎮 휠 이벤트 리스너
  useEffect(() => {
    if (isVideoActive && !isTransitioning) {
      window.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [isVideoActive, isTransitioning, handleWheel])

  // 🧹 컴포넌트 정리
  useEffect(() => {
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  // 🕐 강제 타임아웃
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isVideoReady && !loadingError) {
        console.log("⏰ Video loading timeout - forcing ready state")
        setIsVideoReady(true)
      }
    }, 5000)

    return () => clearTimeout(timeout)
  }, [isVideoReady, loadingError])

  return (
    <>
      {/* 📦 스크롤 컨테이너 */}
      <div ref={containerRef} className={`relative ${containerClassName}`} style={{ height: `${triggerHeight}vh` }}>
        <div className="absolute top-0 left-0 w-full h-px bg-green-500 opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-red-500 opacity-50" />
      </div>

      {/* 🎬 비디오 (항상 존재) */}
      <video
        ref={videoRef}
        src={src}
        className={`w-full h-full object-cover ${className}`}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={handleCanPlay}
        onLoadedData={handleLoadedData}
        onError={handleError}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: isVideoActive ? 50 : -1,
          opacity: isVideoActive ? 1 : 0,
          visibility: isVideoActive ? "visible" : "hidden",
          backgroundColor: "black",
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🎭 UI 요소들 (비디오 활성화 시에만) */}
      {isVideoActive && !isTransitioning && (
        <>
          {/* 오버레이 콘텐츠 */}
          {overlay && (
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-60">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {overlay}
              </motion.div>
            </div>
          )}

          {/* 진행도 표시 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-60"
          >
            <div className="bg-black/60 backdrop-blur-md rounded-full px-6 py-3">
              <div className="flex items-center space-x-4">
                <div className="w-48 h-1 bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-100"
                    style={{ width: `${videoProgress * 100}%` }}
                  />
                </div>
                <span className="text-white text-sm font-mono min-w-[4rem]">{currentFrame}/100</span>
                <div className="text-white text-xs">{scrollDirection === "down" ? "▶️" : "◀️"}</div>
              </div>
            </div>
          </motion.div>

          {/* 스크롤 가이드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-60"
          >
            <div className="text-center text-white">
              <div className="flex items-center justify-center space-x-8 mb-2">
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    className="mb-1 text-green-400"
                  >
                    ⬇️
                  </motion.div>
                  <span className="text-xs opacity-80">Forward</span>
                </div>
                <div className="text-sm opacity-40">|</div>
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    className="mb-1 text-blue-400"
                  >
                    ⬆️
                  </motion.div>
                  <span className="text-xs opacity-80">Reverse</span>
                </div>
              </div>
              <span className="text-sm opacity-80">Scroll to control video</span>
            </div>
          </motion.div>

          {/* 전환 알림들 */}
          {currentFrame <= 5 && scrollDirection === "up" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 z-60"
            >
              <div className="flex flex-col items-center text-white">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  className="mb-2 text-blue-400 text-2xl"
                >
                  ⬆️
                </motion.div>
                <span className="text-sm font-medium text-blue-400">Return to previous section</span>
              </div>
            </motion.div>
          )}

          {currentFrame >= 95 && scrollDirection === "down" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed bottom-40 left-1/2 transform -translate-x-1/2 z-60"
            >
              <div className="flex flex-col items-center text-white">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  className="mb-2 text-green-400 text-2xl"
                >
                  ⬇️
                </motion.div>
                <span className="text-sm font-medium text-green-400">Continue to next section</span>
              </div>
            </motion.div>
          )}
        </>
      )}

      {/* 🔄 전환 중 표시 */}
      {isTransitioning && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-70">
          <div className="text-center text-white">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-8 h-8 border-2 border-white border-t-transparent rounded-full mb-4 mx-auto"
            />
            <span className="text-lg font-medium">Transitioning...</span>
            <p className="text-sm opacity-70 mt-2">
              Moving to {scrollDirection === "down" ? "next" : "previous"} section
            </p>
          </div>
        </div>
      )}

      {/* 🛠️ 디버그 패널 */}
      <div className="fixed top-4 right-4 bg-black/90 text-white p-3 rounded-lg text-xs z-[100] font-mono">
        <div className="text-yellow-400 font-bold mb-2">🎬 Apple Video Debug</div>
        <div>🎯 Video Active: {isVideoActive ? "✅" : "❌"}</div>
        <div>📹 Video Ready: {isVideoReady ? "✅" : "❌"}</div>
        <div>🔄 Transitioning: {isTransitioning ? "✅" : "❌"}</div>
        <div>🎞️ Current Frame: {currentFrame}/100</div>
        <div>📊 Progress: {(videoProgress * 100).toFixed(1)}%</div>
        <div>🔄 Direction: {scrollDirection === "down" ? "⬇️ Down" : "⬆️ Up"}</div>
        <div className="border-t border-gray-600 mt-2 pt-2">
          <div>📏 Container Top: {containerTop}px</div>
          <div>📐 Container Height: {containerHeight}px</div>
          <div>📍 Current Scroll: {currentScrollY}px</div>
          <div>⏱️ Video Time: {videoRef.current?.currentTime?.toFixed(2) || 0}s</div>
          <div>📽️ Duration: {videoDuration.toFixed(2)}s</div>
        </div>
        {loadingError && <div className="border-t border-red-600 mt-2 pt-2 text-red-400">❌ {loadingError}</div>}
      </div>

      {/* 로딩 상태 */}
      {!isVideoReady && !loadingError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-40">
          <div className="text-center text-white">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-8 h-8 border-2 border-white border-t-transparent rounded-full mb-4 mx-auto"
            />
            <div className="text-lg font-medium">Loading video...</div>
            <div className="text-sm opacity-70 mt-2">This should be quick now!</div>
          </div>
        </div>
      )}

      {loadingError && (
        <div className="fixed inset-0 flex items-center justify-center bg-red-900/20 z-[60]">
          <div className="text-center text-white bg-black/80 p-8 rounded-lg">
            <div className="text-red-400 text-4xl mb-4">❌</div>
            <div className="text-lg font-medium mb-2">Video Loading Failed</div>
            <div className="text-sm opacity-70 mb-4">{loadingError}</div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      )}
    </>
  )
}
