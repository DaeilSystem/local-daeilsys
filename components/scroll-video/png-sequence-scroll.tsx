"use client"

import { motion } from "framer-motion"
import type React from "react"
import { useCallback, useEffect, useRef, useState } from "react"

interface PngSequenceScrollProps {
  imagePrefix: string // 이미지 파일명 접두사 (예: "frame_")
  imageExtension: string // 이미지 확장자 (예: ".png")
  totalFrames: number // 총 프레임 수
  startFrame?: number // 시작 프레임 (기본값: 1)
  frameSkip?: number // 프레임 스킵 간격 (기본값: 1)
  className?: string
  containerClassName?: string
  overlay?: React.ReactNode
  imagePath?: string // 이미지 경로
  zeroPadding?: number // 프레임 번호 자릿수 (기본값: 4)
}

export function PngSequenceScroll({
  imagePrefix,
  imageExtension,
  totalFrames,
  startFrame = 1,
  frameSkip = 1,
  className = "",
  containerClassName = "",
  overlay,
  imagePath = "https://cxdukqxqwnvvplsuvcki.supabase.co/storage/v1/object/public/frames/",
  zeroPadding = 4,
}: PngSequenceScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentFrame, setCurrentFrame] = useState(startFrame)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loadingError, setLoadingError] = useState<string | null>(null)
  const [isLocked, setIsLocked] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isPreloading, setIsPreloading] = useState(true)

  // 이미지 캐시
  const imageCache = useRef<Map<string, HTMLImageElement>>(new Map())

  // 프레임 계산
  const effectiveFrames = Math.ceil((totalFrames - startFrame + 1) / frameSkip)

  // 이미지 URL 생성
  const getCurrentImageUrl = useCallback((frame: number) => {
    const actualFrame = startFrame + Math.floor((frame - startFrame) / frameSkip) * frameSkip
    const paddedFrame = actualFrame.toString().padStart(zeroPadding, '0')
    const basePath = imagePath.endsWith('/') ? imagePath : `${imagePath}/`
    return `${basePath}${imagePrefix}${paddedFrame}${imageExtension}`
  }, [imagePrefix, imageExtension, imagePath, zeroPadding, startFrame, frameSkip])

  // 이미지 프리로딩
  const preloadImages = useCallback(async () => {
    setIsPreloading(true)
    setLoadingProgress(0)

    const loadPromises: Promise<void>[] = []
    let loadedCount = 0

    for (let i = 0; i < effectiveFrames; i++) {
      const frame = startFrame + i
      const imageUrl = getCurrentImageUrl(frame)

      // 이미 캐시된 이미지는 건너뛰기
      if (imageCache.current.has(imageUrl)) {
        loadedCount++
        setLoadingProgress((loadedCount / effectiveFrames) * 100)
        continue
      }

      const loadPromise = new Promise<void>((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = "anonymous"

        img.onload = () => {
          imageCache.current.set(imageUrl, img)
          loadedCount++
          setLoadingProgress((loadedCount / effectiveFrames) * 100)
          resolve()
        }

        img.onerror = () => {
          console.warn(`Failed to preload image: ${imageUrl}`)
          resolve() // 에러가 있어도 계속 진행
        }

        img.src = imageUrl
      })

      loadPromises.push(loadPromise)
    }

    try {
      await Promise.all(loadPromises)
      console.log(`✅ Preloaded ${imageCache.current.size} images`)
    } catch (error) {
      console.error("❌ Error preloading images:", error)
    } finally {
      setIsPreloading(false)
      setIsImageLoaded(true)
    }
  }, [effectiveFrames, startFrame, getCurrentImageUrl])

  // 이미지 로딩 핸들러
  const handleImageLoad = useCallback(() => {
    if (!isPreloading) {
      setIsImageLoaded(true)
      setLoadingError(null)
    }
  }, [isPreloading])

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.target as HTMLImageElement
    setLoadingError(`이미지를 로드할 수 없습니다: ${img.src}`)
    setIsImageLoaded(false)
  }, [])

  // 다음 섹션으로 이동
  const moveToNextSection = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const nextSection = containerRef.current?.nextElementSibling as HTMLElement
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    setTimeout(() => {
      setIsTransitioning(false)
      setIsLocked(false)
    }, 1000)
  }, [isTransitioning])

  // 이전 섹션으로 이동
  const moveToPreviousSection = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const prevSection = containerRef.current?.previousElementSibling as HTMLElement
    if (prevSection) {
      prevSection.scrollIntoView({ behavior: "smooth", block: "end" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    setTimeout(() => {
      setIsTransitioning(false)
      setIsLocked(false)
    }, 1000)
  }, [isTransitioning])

  // 스크롤 위치 계산
  const updateFrameFromScroll = useCallback(() => {
    if (!containerRef.current || !isImageLoaded || isLocked || isTransitioning) return

    const rect = containerRef.current.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const scrollY = window.scrollY

    // 시퀀스 영역 계산
    const sequenceStart = rect.top + scrollY - viewportHeight
    const sequenceEnd = rect.top + scrollY + rect.height
    const currentScroll = scrollY

    // 시퀀스 영역에 있는지 확인
    if (currentScroll >= sequenceStart && currentScroll <= sequenceEnd) {
      // 진행도 계산 (0 ~ 1)
      const progress = Math.max(0, Math.min(1, (currentScroll - sequenceStart) / (sequenceEnd - sequenceStart)))
      const targetFrame = Math.floor(progress * (effectiveFrames - 1)) + startFrame

      setCurrentFrame(targetFrame)
    }
  }, [isImageLoaded, isLocked, isTransitioning, effectiveFrames, startFrame])

  // 휠 이벤트 핸들러
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!isImageLoaded || isTransitioning) return

    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const viewportHeight = window.innerHeight
    const scrollY = window.scrollY
    const sequenceStart = rect.top + scrollY - viewportHeight
    const sequenceEnd = rect.top + scrollY + rect.height
    const currentScroll = scrollY

    // 시퀀스 영역에 있는지 확인
    if (currentScroll >= sequenceStart && currentScroll <= sequenceEnd) {
      e.preventDefault()
      e.stopPropagation()

      // 스크롤 방향에 따라 프레임 변경
      const delta = e.deltaY > 0 ? 1 : -1
      const newFrame = Math.max(startFrame, Math.min(startFrame + effectiveFrames - 1, currentFrame + delta))

      setCurrentFrame(newFrame)
      setIsLocked(true) // 휠 이벤트로 제어 중임을 표시

      // 끝에 도달하면 다음 섹션으로 (정방향)
      if (newFrame === startFrame + effectiveFrames - 1 && delta > 0) {
        moveToNextSection()
      }
      // 시작에 도달하면 이전 섹션으로 (역방향)
      else if (newFrame === startFrame && delta < 0) {
        moveToPreviousSection()
      }
    }
  }, [isImageLoaded, isTransitioning, currentFrame, startFrame, effectiveFrames, moveToNextSection, moveToPreviousSection])

  // 스크롤 이벤트 핸들러
  const handleScroll = useCallback(() => {
    // 잠금이 해제되었을 때만 스크롤 이벤트 처리
    if (!isLocked && !isTransitioning) {
      updateFrameFromScroll()
    }
  }, [isLocked, isTransitioning, updateFrameFromScroll])

  // 잠금 해제를 위한 타이머
  useEffect(() => {
    if (isLocked) {
      const timer = setTimeout(() => {
        setIsLocked(false)
      }, 100) // 100ms 후 잠금 해제

      return () => clearTimeout(timer)
    }
  }, [isLocked])

  // 이미지 프리로딩 시작
  useEffect(() => {
    preloadImages()
  }, [preloadImages])

  // 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("wheel", handleWheel)
    }
  }, [handleScroll, handleWheel])

  // 에러 상태
  if (loadingError) {
    return (
      <div className={`flex items-center justify-center min-h-screen bg-gray-900 ${containerClassName}`}>
        <div className="text-center text-white">
          <div className="text-2xl mb-4">❌</div>
          <div className="text-lg mb-2">이미지 시퀀스 로딩 실패</div>
          <div className="text-sm text-gray-400">{loadingError}</div>
        </div>
      </div>
    )
  }

  // 로딩 상태
  if (isPreloading) {
    return (
      <div className={`flex items-center justify-center min-h-screen bg-gray-900 ${containerClassName}`}>
        <div className="text-center text-white">
          <div className="text-2xl mb-4">🔄</div>
          <div className="text-lg mb-2">이미지 프리로딩 중...</div>
          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="text-sm text-gray-400 mt-2">
            {Math.round(loadingProgress)}% 완료 ({imageCache.current.size}/{effectiveFrames})
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${containerClassName}`}
      style={{ height: "150vh" }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <img
          src={getCurrentImageUrl(Math.floor(currentFrame))}
          alt={`Frame ${Math.floor(currentFrame)}`}
          className={`w-full h-full object-cover transition-opacity duration-100 ${className}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          crossOrigin="anonymous"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />

        {overlay && (
          <div className="absolute inset-0 z-10">
            {overlay}
          </div>
        )}

        {/* 진행도 표시 */}
        <div className="absolute bottom-4 left-4 right-4 h-1 bg-black/20 z-20 rounded-full">
          <motion.div
            className="h-full bg-white rounded-full transition-all duration-200"
            style={{
              width: `${((currentFrame - startFrame) / (effectiveFrames - 1)) * 100}%`
            }}
          />
        </div>

        {/* 프레임 정보 */}
        <div className="absolute top-4 right-4 text-white/60 text-sm z-20 bg-black/30 px-2 py-1 rounded">
          {currentFrame} / {effectiveFrames}
        </div>

        {/* 전환 중 표시 */}
        {isTransitioning && (
          <div className="absolute inset-0 bg-black/20 z-30 flex items-center justify-center">
            <div className="text-white text-lg">전환 중...</div>
          </div>
        )}
      </div>
    </div>
  )
}
