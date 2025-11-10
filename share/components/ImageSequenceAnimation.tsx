"use client"

import { useEffect, useRef } from "react"

export interface ImageSequenceConfig {
  /** Base path to the image sequence folder */
  imagePath: string
  /** Base filename (e.g., "dvia-mlp2000-motion") */
  baseFilename: string
  /** Total number of frames in the sequence */
  frameCount: number
  /** Starting frame number (default: 1) */
  startFrame?: number
  /** Padding for frame numbers (default: 4) */
  framePadding?: number
  /** File extension (default: "jpg") */
  fileExtension?: string
  /** Duration as percentage of scroll (default: "200%") */
  scrollDuration?: string
  /** Image width style (default: "80%") */
  imageWidth?: string
  /** Max width style (default: "1920px") */
  maxWidth?: string
  /** Alt text for the image */
  altText: string
}

export interface TextOverlay {
  /** Unique ID for the text overlay */
  id: string
  /** Content to display (can be React nodes for multilingual support) */
  content: React.ReactNode
}

interface ImageSequenceAnimationProps {
  /** Unique trigger element ID */
  triggerId: string
  /** Configuration for the image sequence */
  config: ImageSequenceConfig
  /** Optional text overlays */
  textOverlays?: TextOverlay[]
  /** Optional mobile fallback image (shows last frame) */
  mobileFallbackImage?: string
  /** Optional mobile fallback content */
  mobileFallbackContent?: React.ReactNode
  /** Optional className for the wrapper */
  className?: string
}

/**
 * 애플 스타일의 스크롤 기반 이미지 시퀀스 애니메이션 컴포넌트
 *
 * ScrollMagic을 사용하여 스크롤에 따라 이미지 프레임을 순차적으로 보여줍니다.
 *
 * @example
 * ```tsx
 * <ImageSequenceAnimation
 *   triggerId="product-animation"
 *   config={{
 *     imagePath: "/products/my-product/motion",
 *     baseFilename: "product-motion",
 *     frameCount: 120,
 *     altText: "Product animation"
 *   }}
 *   textOverlays={[
 *     { id: "text1", content: "Amazing Features" },
 *     { id: "text2", content: "Premium Quality" }
 *   ]}
 * />
 * ```
 */
export default function ImageSequenceAnimation({
  triggerId,
  config,
  textOverlays = [],
  mobileFallbackImage,
  mobileFallbackContent,
  className = "",
}: ImageSequenceAnimationProps) {
  const imageRef = useRef<HTMLImageElement>(null)
  const sceneRef = useRef<any>(null)

  const {
    imagePath,
    baseFilename,
    frameCount,
    startFrame = 1,
    framePadding = 4,
    fileExtension = "jpg",
    scrollDuration = "200%",
    imageWidth = "80%",
    maxWidth = "1920px",
    altText,
  } = config

  // Generate initial image source
  const getImageSrc = (frame: number) => {
    const paddedFrame = String(frame).padStart(framePadding, "0")
    return `${imagePath}/${baseFilename}-${paddedFrame}.${fileExtension}`
  }

  useEffect(() => {
    const initScrollAnimation = () => {
      if (typeof window === "undefined" || !(window as any).ScrollMagic) {
        console.warn("ScrollMagic is not loaded yet")
        return
      }

      const controller = new (window as any).ScrollMagic.Controller()
      const img = imageRef.current

      if (!img) {
        console.warn("Image element not found")
        return
      }

      // Create ScrollMagic scene
      sceneRef.current = new (window as any).ScrollMagic.Scene({
        triggerElement: `#${triggerId}`,
        triggerHook: 0,
        duration: scrollDuration,
      })
        .setPin(`.${triggerId}-pinned`)
        .addTo(controller)
        .on("progress", (e: any) => {
          const frame = Math.ceil(e.progress * frameCount) + (startFrame - 1)
          const clampedFrame = Math.max(startFrame, Math.min(frame, startFrame + frameCount - 1))
          const paddedFrame = String(clampedFrame).padStart(framePadding, "0")
          img.src = `${imagePath}/${baseFilename}-${paddedFrame}.${fileExtension}`
        })
    }

    // Try to initialize immediately if ScrollMagic is already loaded
    if ((window as any).ScrollMagic) {
      initScrollAnimation()
    } else {
      // Otherwise wait for it to load
      const checkInterval = setInterval(() => {
        if ((window as any).ScrollMagic) {
          clearInterval(checkInterval)
          initScrollAnimation()
        }
      }, 100)

      return () => clearInterval(checkInterval)
    }

    // Cleanup
    return () => {
      if (sceneRef.current) {
        sceneRef.current.destroy(true)
      }
    }
  }, [triggerId, imagePath, baseFilename, frameCount, startFrame, framePadding, fileExtension, scrollDuration])

  const defaultMobileFallbackImage = mobileFallbackImage || getImageSrc(startFrame + frameCount - 1)

  return (
    <div className={`wrap ${className}`}>
      {/* Desktop version with ScrollMagic */}
      <div className="scrollmagic-pin-spacer">
        <div id={triggerId} className={`${triggerId}-pinned pinned motion-box`} style={{ textAlign: "center" }}>
          <img
            ref={imageRef}
            className={`img-motion img-motion-${triggerId}`}
            src={getImageSrc(startFrame)}
            style={{ width: imageWidth, maxWidth }}
            alt={altText}
          />
          {textOverlays.map((overlay) => (
            <div key={overlay.id} className="text-overlay" id={overlay.id}>
              {overlay.content}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile fallback */}
      <div className="motion-box-mo">
        {mobileFallbackContent || (
          <>
            {textOverlays.map((overlay, index) => (
              <div key={overlay.id} className="mo-text text-center">
                {index === 0 ? "" : "- "}
                {overlay.content}
              </div>
            ))}
            <img src={defaultMobileFallbackImage} style={{ width: "100%" }} alt={altText} />
          </>
        )}
      </div>
    </div>
  )
}
