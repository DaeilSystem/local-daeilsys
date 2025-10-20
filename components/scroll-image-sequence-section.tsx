"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  imgPath?: string
  ext?: string
  frameCount?: number
  pad?: number
  height?: string
  alt?: string
}

export function ScrollImageSequenceSection({
  imgPath = "/frames/sequence",
  ext = "png",
  frameCount = 60,
  pad = 4,
  height = "300vh",
  alt = "Image sequence animation",
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [isClient, setIsClient] = useState(false)

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Image preloading
  useEffect(() => {
    if (!isClient) return

    for (let i = 0; i < frameCount; i++) {
      const preImg = new window.Image()
      preImg.src = `${imgPath}${String(i).padStart(pad, "0")}.${ext}`
    }
  }, [imgPath, ext, frameCount, pad, isClient])

  // ScrollMagic setup
  useEffect(() => {
    if (!isClient) return

    let ScrollMagic: any
    let controller: any
    let scene: any

    const initScrollMagic = async () => {
      try {
        // Dynamic import to avoid SSR issues
        ScrollMagic = (await import("scrollmagic")).default

        controller = new ScrollMagic.Controller()
        const section = sectionRef.current
        if (!section) return

        const duration = section.offsetHeight

        scene = new ScrollMagic.Scene({
          triggerElement: section,
          triggerHook: 0,
          duration,
        })
          .setPin(pinRef.current)
          .on("progress", (event: any) => {
            const progress = Math.min(1, Math.max(0, event.progress))
            const frameIndex = Math.floor(progress * (frameCount - 1))
            if (imgRef.current) {
              imgRef.current.src = `${imgPath}${String(frameIndex).padStart(pad, "0")}.${ext}`
            }
          })
          .addTo(controller)

        // Initialize first frame
        if (imgRef.current) {
          imgRef.current.src = `${imgPath}${String(0).padStart(pad, "0")}.${ext}`
        }
      } catch (error) {
        console.warn("ScrollMagic failed to load:", error)
      }
    }

    initScrollMagic()

    return () => {
      if (scene) scene.destroy()
      if (controller) controller.destroy()
    }
  }, [imgPath, ext, frameCount, pad, isClient])

  // Don't render on server
  if (!isClient) {
    return (
      <section style={{ position: "relative", height }}>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f3f4f6",
          }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading image sequence...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} style={{ position: "relative", height }}>
      <div
        ref={pinRef}
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          ref={imgRef}
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "contain",
            display: "block",
          }}
          alt={alt}
          loading="lazy"
        />
        {/* Optional overlay content */}

      </div>
    </section>
  )
}
