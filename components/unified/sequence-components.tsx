"use client"

import { useMediaQuery } from "@/hooks/use-unified-scroll-animation"
import { SequenceComponentProps } from "@/types/scroll-animation"
import NextImage from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"

// Utility function to generate sequence paths
export const makeSequencePaths = (
  base: string,
  start: number,
  end: number,
  pad = 4,
  ext = "png"
) =>
  Array.from({ length: end - start + 1 }, (_, i) => {
    const n = String(i + start).padStart(pad, "0")
    return `${base}${n}.${ext}`
  })

// Lock Scroll Sequence Component
export function LockScrollSequence({
  frames,
  className,
  alt = "lock-scroll-sequence",
  config = {},
  onComplete,
  onProgress
}: SequenceComponentProps) {
  const {
    fps = 24,
    loop = false,
    requireFullPreload = false,
    minLoadedRatioToStart = 0.6,
    preloadConcurrency = 8,
    minVisibleRatioToStart = 0.9,
    minViewportTopToStart = 0.55,
    autoRelockWithinSection = true,
    relockPixelThreshold = 120,
    relockOnReenter = true,
    relockReset = "auto",
    sensitivity = 0.0018,
    startSlack = 0.0005,
    endSlack = 0.0005
  } = config

  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)")

  const hostRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imgsRef = useRef<HTMLImageElement[]>([])
  const [active, setActive] = useState(false)
  const [done, setDone] = useState(false)
  const progressRef = useRef(0)
  const [loadedCount, setLoadedCount] = useState(0)
  const [preloadDone, setPreloadDone] = useState(false)
  const totalRef = useRef(frames.length)
  const rAF = useRef<number | null>(null)
  const lastScrollY = useRef<number>(0)
  const scrollDir = useRef<"down" | "up">("down")
  const unlockScrollY = useRef<number | null>(null)
  const unlockDir = useRef<"down" | "up" | null>(null)

  const loadedRatio = totalRef.current > 0 ? loadedCount / totalRef.current : 0
  const canStartByPreload = requireFullPreload ? preloadDone : loadedRatio >= minLoadedRatioToStart

  const canPlayNow = useCallback(() => {
    if (!canStartByPreload || done) return false
    const host = hostRef.current
    if (!host) return false
    const rect = host.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0))
    const ratio = rect.height > 0 ? visible / rect.height : 0
    const topGate = rect.top <= vh * minViewportTopToStart
    return ratio >= minVisibleRatioToStart && topGate
  }, [canStartByPreload, done, minVisibleRatioToStart, minViewportTopToStart])

  // Image preloading
  useEffect(() => {
    imgsRef.current = frames.map(() => {
      const img = new Image()
      img.decoding = "async"
      img.crossOrigin = "anonymous"
      return img
    })
    totalRef.current = frames.length
  }, [frames])

  useEffect(() => {
    let cancelled = false

    const loadOne = (index: number) =>
      new Promise<void>((resolve) => {
        if (cancelled) return resolve()
        const img = imgsRef.current[index]
        if (!img) return resolve()
        if (!img.src) img.src = frames[index]
        const onDone = () => {
          setLoadedCount((c) => c + 1)
          resolve()
        }
        img.decode?.().then(onDone).catch(onDone)
        img.onload = onDone
        img.onerror = onDone
      })

    const runQueue = async () => {
      const q: number[] = [
        ...Array.from({ length: Math.min(12, frames.length) }, (_, i) => i),
        ...Array.from({ length: frames.length - Math.min(12, frames.length) }, (_, i) => i + Math.min(12, frames.length)),
      ]
      const workers = Array.from({
        length: Math.max(1, Math.min(preloadConcurrency, q.length)),
      }).map(async () => {
        while (!cancelled && q.length) {
          const idx = q.shift()!
          await loadOne(idx)
        }
      })
      await Promise.all(workers)
      if (!cancelled) setPreloadDone(true)
    }

    runQueue()
    return () => {
      cancelled = true
    }
  }, [frames, preloadConcurrency])

  // Canvas drawing
  const draw = useCallback((p: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const n = frames.length
    const idx = Math.min(n - 1, Math.max(0, Math.floor(p * (n - 1))))
    const img = imgsRef.current[idx]
    if (!img || !img.complete) {
      if (rAF.current) cancelAnimationFrame(rAF.current)
      rAF.current = requestAnimationFrame(() => draw(p))
      return
    }
    const iw = img.naturalWidth || img.width
    const ih = img.naturalHeight || img.height
    const cw = canvas.width
    const ch = canvas.height
    const scale = Math.min(cw / iw, ch / ih)
    const dw = Math.floor(iw * scale)
    const dh = Math.floor(ih * scale)
    const dx = Math.floor((cw - dw) / 2)
    const dy = Math.floor((ch - dh) / 2)

    ctx.clearRect(0, 0, cw, ch)
    ctx.imageSmoothingEnabled = true
    ;(ctx as any).imageSmoothingQuality = "high"
    ctx.drawImage(img, dx, dy, dw, dh)

    // Call progress callback
    onProgress?.(p)
  }, [frames, onProgress])

  // Canvas resize
  useEffect(() => {
    const canvas = canvasRef.current
    const host = hostRef.current
    if (!canvas || !host) return
    const resize = () => {
      const rect = host.getBoundingClientRect()
      const dpr = Math.max(1, window.devicePixelRatio || 1)
      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      draw(progressRef.current)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(host)
    window.addEventListener("orientationchange", resize)
    resize()
    return () => {
      ro.disconnect()
      window.removeEventListener("orientationchange", resize)
    }
  }, [draw])

  // Scroll lock and sequence control
  useEffect(() => {
    if (!active || done || reduceMotion) return

    const preventScroll = (e: Event) => { e.preventDefault(); e.stopPropagation() }

    const updateProgress = (delta: number) => {
      const next = Math.min(1, Math.max(0, progressRef.current + delta))
      progressRef.current = next
      if (rAF.current) cancelAnimationFrame(rAF.current)
      rAF.current = requestAnimationFrame(() => draw(next))

      if (next <= startSlack && !done) {
        progressRef.current = 0
        setDone(true)
        setTimeout(() => setActive(false), 60)
        unlockScrollY.current = window.scrollY || document.documentElement.scrollTop
        unlockDir.current = "up"
        return
      }

      if (next >= 1 - endSlack && !done) {
        progressRef.current = 1
        setDone(true)
        onComplete?.()
        setTimeout(() => setActive(false), 60)
        unlockScrollY.current = window.scrollY || document.documentElement.scrollTop
        unlockDir.current = "down"
      }
    }

    const wheel = (e: WheelEvent) => {
      if (!canPlayNow()) return
      const delta = e.deltaY * sensitivity
      updateProgress(delta)
      preventScroll(e)
    }

    const touchStartY = { current: 0 }
    const touchstart = (e: TouchEvent) => {
      if (!canPlayNow()) return
      touchStartY.current = e.touches[0]?.clientY ?? 0
      preventScroll(e)
    }
    const touchmove = (e: TouchEvent) => {
      if (!canPlayNow()) return
      const y = e.touches[0]?.clientY ?? 0
      const deltaY = (touchStartY.current ?? y) - y
      touchStartY.current = y
      updateProgress(deltaY * sensitivity * 1.2)
      preventScroll(e)
    }
    const touchend = (e: TouchEvent) => {
      if (!canPlayNow()) return
      preventScroll(e)
    }

    const keydown = (e: KeyboardEvent) => {
      if (!canPlayNow()) return
      const keys = [" ", "ArrowDown", "PageDown", "ArrowUp", "PageUp"]
      if (!keys.includes(e.key)) return
      const delta = (e.key === "ArrowUp" || e.key === "PageUp") ? -0.03 : 0.03
      updateProgress(delta)
      preventScroll(e)
    }

    const originalOverflow = document.documentElement.style.overflow
    const originalBodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"

    window.addEventListener("wheel", wheel, { passive: false })
    window.addEventListener("touchstart", touchstart, { passive: false })
    window.addEventListener("touchmove", touchmove, { passive: false })
    window.addEventListener("touchend", touchend, { passive: false })
    window.addEventListener("keydown", keydown, { passive: false })

    return () => {
      document.documentElement.style.overflow = originalOverflow
      document.body.style.overflow = originalBodyOverflow
      window.removeEventListener("wheel", wheel)
      window.removeEventListener("touchstart", touchstart)
      window.removeEventListener("touchmove", touchmove)
      window.removeEventListener("touchend", touchend)
      window.removeEventListener("keydown", keydown)
    }
  }, [active, done, sensitivity, minVisibleRatioToStart, minViewportTopToStart, canStartByPreload, canPlayNow, draw, reduceMotion])

  // Visibility observer
  useEffect(() => {
    const el = hostRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.intersectionRatio < 0.05) {
          setDone(false)
          unlockScrollY.current = null
          unlockDir.current = null
        }
        setActive(canPlayNow())
      },
      { threshold: [0, 0.05, 0.25, 0.5, 0.75, 0.9, 1] }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [preloadDone, loadedCount, done, minVisibleRatioToStart, minViewportTopToStart, canPlayNow])

  const percent = Math.round(loadedRatio * 100)

  // Reduced motion fallback
  if (reduceMotion) {
    const first = frames[0]
    return (
      <div className={className}>
        <NextImage
          src={first}
          alt={alt}
          width={1920}
          height={1080}
          className="w-full h-auto rounded-xl object-contain"
        />
      </div>
    )
  }

  return (
    <div ref={hostRef} className={className} aria-label={alt}>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <canvas className="absolute inset-0 block w-full h-full" ref={canvasRef} />
        {!canStartByPreload && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="px-4 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-sm md:text-base">
              Loading {percent}%
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Auto Play Sequence Component
export function AutoPlaySequence({
  frames,
  className,
  alt = "auto-play-sequence",
  config = {},
  onComplete,
  onProgress
}: SequenceComponentProps) {
  const {
    fps = 24,
    loop = false,
    autoplay = true,
    requireFullPreload = false,
    minLoadedRatioToStart = 0.45,
    preloadConcurrency = 8,
    minVisibleRatioToStart = 0.4,
    minViewportTopToStart = 0.75
  } = config

  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)")

  const hostRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imgsRef = useRef<HTMLImageElement[]>([])
  const [loadedCount, setLoadedCount] = useState(0)
  const [preloadDone, setPreloadDone] = useState(false)
  const [gateOpen, setGateOpen] = useState(false)
  const playingRef = useRef(false)
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const lastDrawnRef = useRef<number>(-1)
  const total = frames.length

  const canStartByPreload = requireFullPreload ? preloadDone : loadedCount / Math.max(1, total) >= minLoadedRatioToStart

  // Image preloading
  useEffect(() => {
    imgsRef.current = frames.map(() => {
      const img = new Image()
      img.decoding = "async"
      img.crossOrigin = "anonymous"
      return img
    })
  }, [frames])

  useEffect(() => {
    let cancelled = false

    const loadOne = (i: number) =>
      new Promise<void>((resolve) => {
        const img = imgsRef.current[i]
        if (!img) return resolve()
        if (!img.src) img.src = frames[i]
        const onDone = () => {
          setLoadedCount((c) => c + 1)
          resolve()
        }
        img.decode?.().then(onDone).catch(onDone)
        img.onload = onDone
        img.onerror = onDone
      })

    const run = async () => {
      const L = Math.min(10, frames.length)
      const queue = [
        ...Array.from({ length: L }, (_, i) => i),
        ...Array.from({ length: frames.length - L }, (_, i) => i + L),
      ]
      const workers = Array.from({ length: Math.min(preloadConcurrency, queue.length) }).map(
        async () => {
          while (!cancelled && queue.length) {
            const idx = queue.shift()!
            await loadOne(idx)
          }
        }
      )
      await Promise.all(workers)
      if (!cancelled) setPreloadDone(true)
    }
    run()
    return () => {
      cancelled = true
    }
  }, [frames, preloadConcurrency])

  // Canvas resize
  useEffect(() => {
    const canvas = canvasRef.current
    const host = hostRef.current
    if (!canvas || !host) return
    const resize = () => {
      const rect = host.getBoundingClientRect()
      const dpr = Math.max(1, window.devicePixelRatio || 1)
      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      draw(0)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(host)
    window.addEventListener("orientationchange", resize)
    resize()
    return () => {
      ro.disconnect()
      window.removeEventListener("orientationchange", resize)
    }
  }, [])

  // Visibility gate
  useEffect(() => {
    const el = hostRef.current
    if (!el) return
    const io = new IntersectionObserver(
      () => {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight || document.documentElement.clientHeight
        const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0))
        const ratio = rect.height > 0 ? visible / rect.height : 0
        const topGate = rect.top <= vh * minViewportTopToStart
        setGateOpen(ratio >= minVisibleRatioToStart && topGate)
      },
      { threshold: [0, 0.25, 0.5, 0.75, 0.9, 1] }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [minVisibleRatioToStart, minViewportTopToStart])

  // Drawing function
  const draw = useCallback((idx: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const img = imgsRef.current[Math.max(0, Math.min(total - 1, idx))]
    if (!img || !img.complete) return
    const iw = img.naturalWidth || img.width
    const ih = img.naturalHeight || img.height
    const cw = canvas.width
    const ch = canvas.height
    const scale = Math.min(cw / iw, ch / ih)
    const dw = Math.floor(iw * scale)
    const dh = Math.floor(ih * scale)
    const dx = Math.floor((cw - dw) / 2)
    const dy = Math.floor((ch - dh) / 2)
    ctx.clearRect(0, 0, cw, ch)
    ctx.imageSmoothingEnabled = true
    ;(ctx as any).imageSmoothingQuality = "high"
    ctx.drawImage(img, dx, dy, dw, dh)
    lastDrawnRef.current = idx

    // Call progress callback
    onProgress?.(idx / (total - 1))
  }, [total, onProgress])

  // Auto play control
  useEffect(() => {
    if (reduceMotion || !autoplay) return
    if (!gateOpen || !canStartByPreload || playingRef.current) return

    playingRef.current = true
    startTimeRef.current = null

    const step = (ts: number) => {
      if (!playingRef.current) return
      if (startTimeRef.current == null) startTimeRef.current = ts
      const elapsed = (ts - startTimeRef.current) / 1000
      const frameFloat = elapsed * fps
      let frame = Math.floor(frameFloat)

      if (frame >= total) {
        if (loop) {
          frame = frame % total
          startTimeRef.current = ts - (frameFloat % total) * (1000 / fps)
        } else {
          frame = total - 1
          draw(frame)
          playingRef.current = false
          onComplete?.()
          return
        }
      }

      if (frame !== lastDrawnRef.current) draw(frame)
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      playingRef.current = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [gateOpen, canStartByPreload, fps, loop, reduceMotion, total, draw, autoplay, onComplete])

  const percent = Math.round((loadedCount / Math.max(1, total)) * 100)

  // Reduced motion fallback
  if (reduceMotion) {
    const first = frames[0]
    return (
      <div className={className}>
        <NextImage
          src={first}
          alt={alt}
          width={1920}
          height={1080}
          className="w-full h-auto rounded-xl object-contain"
        />
      </div>
    )
  }

  return (
    <div ref={hostRef} className={className} aria-label={alt}>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <canvas className="absolute inset-0 block w-full h-full" ref={canvasRef} />
        {!canStartByPreload && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="px-4 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-sm md:text-base">
              Loading {percent}%
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
