// ===== AutoPlaySequence: 가시성 60%↑ 되면 한 번 자동 재생 (모바일 포함) =====
function AutoPlaySequence({
  frames,
  className,
  alt = "sequence",
  fps = 24,
  requireFullPreload = true,
  minLoadedRatioToStart = 1,
  minVisibleRatioToStart = 0.6,
}: {
  frames: string[]
  className?: string
  alt?: string
  fps?: number
  requireFullPreload?: boolean
  minLoadedRatioToStart?: number
  minVisibleRatioToStart?: number
}) {
  const hostRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imgsRef = useRef<HTMLImageElement[]>([])
  const [loaded, setLoaded] = useState(0)
  const [preloaded, setPreloaded] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const total = frames.length
  const playedRef = useRef(false)
  const rafRef = useRef<number | null>(null)
  const frameRef = useRef(0)
  const lastTimeRef = useRef<number | null>(null)

  // reduce-motion 접근성
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)")
    const on = () => setReduceMotion(m.matches)
    on()
    m.addEventListener?.("change", on)
    return () => m.removeEventListener?.("change", on)
  }, [])

  // 이미지 객체 준비
  useEffect(() => {
    imgsRef.current = frames.map(() => {
      const img = new Image()
      img.decoding = "async"
      img.crossOrigin = "anonymous"
      return img
    })
  }, [frames])

  // 프리로드(간단 큐 + 동시 6개)
  useEffect(() => {
    let cancelled = false
    setLoaded(0); setPreloaded(false)

    const loadOne = (i: number) =>
      new Promise<void>((resolve) => {
        if (cancelled) return resolve()
        const img = imgsRef.current[i]
        if (!img) return resolve()
        if (!img.src) img.src = frames[i]
        const done = () => { setLoaded((c) => c + 1); resolve() }
        img.decode?.().then(done).catch(done)
        img.onload = done
        img.onerror = done
      })

    const run = async () => {
      const q = Array.from({ length: total }, (_, i) => i)
      const workers = Array.from({ length: Math.min(6, q.length) }, async () => {
        while (!cancelled && q.length) await loadOne(q.shift()!)
      })
      await Promise.all(workers)
      if (!cancelled) setPreloaded(true)
    }

    run()
    return () => { cancelled = true }
  }, [frames, total])

  // 캔버스 리사이즈
  const drawFit = (img: HTMLImageElement) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = Math.max(1, window.devicePixelRatio || 1)
    const rect = canvas.getBoundingClientRect()
    const cw = Math.max(1, Math.floor(rect.width * dpr))
    const ch = Math.max(1, Math.floor(rect.height * dpr))
    if (cw !== canvas.width || ch !== canvas.height) {
      canvas.width = cw; canvas.height = ch
    }

    const iw = img.naturalWidth || img.width
    const ih = img.naturalHeight || img.height
    const scale = Math.min(cw / iw, ch / ih)
    const dw = Math.floor(iw * scale)
    const dh = Math.floor(ih * scale)
    const dx = Math.floor((cw - dw) / 2)
    const dy = Math.floor((ch - dh) / 2)

    ctx.clearRect(0, 0, cw, ch)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"
    ctx.drawImage(img, dx, dy, dw, dh)
  }

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const ro = new ResizeObserver(() => {
      const idx = Math.min(total - 1, frameRef.current)
      const img = imgsRef.current[idx]
      if (img && img.complete) drawFit(img)
    })
    ro.observe(host)
    window.addEventListener("orientationchange", () => {
      const idx = Math.min(total - 1, frameRef.current)
      const img = imgsRef.current[idx]
      if (img && img.complete) drawFit(img)
    })
    return () => ro.disconnect()
  }, [total])

  // 인터섹션: 보이면 재생 시작(한 번만)
  useEffect(() => {
    const el = hostRef.current
    if (!el) return

    const canStartByPreload = requireFullPreload
      ? preloaded
      : loaded / Math.max(1, total) >= minLoadedRatioToStart

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (!e) return

        if (!playedRef.current && canStartByPreload && e.intersectionRatio >= minVisibleRatioToStart) {
          // 재생 시작
          const step = (time: number) => {
            if (lastTimeRef.current == null) lastTimeRef.current = time
            const dt = time - lastTimeRef.current
            const advance = dt / (1000 / fps)
            if (advance >= 1) {
              frameRef.current = Math.min(total - 1, frameRef.current + Math.floor(advance))
              lastTimeRef.current = time
              const img = imgsRef.current[frameRef.current]
              if (img && img.complete) drawFit(img)
            }
            if (frameRef.current < total - 1) {
              rafRef.current = requestAnimationFrame(step)
            } else {
              // 마지막 프레임에서 정지
              playedRef.current = true
              if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
            }
          }
          // 첫 프레임 표시 후 루프
          const first = imgsRef.current[0]
          if (first && first.complete) drawFit(first)
          rafRef.current = requestAnimationFrame(step)
        }
      },
      { threshold: [0, minVisibleRatioToStart, 1] }
    )

    io.observe(el)
    return () => {
      io.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [fps, preloaded, loaded, total, minVisibleRatioToStart, minLoadedRatioToStart, requireFullPreload])

  // reduce-motion이면 정적 이미지
  if (reduceMotion) {
    return (
      <div ref={hostRef} className={className} aria-label={alt}>
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <img
            src={frames[0]}
            alt={alt}
            className="absolute inset-0 w-full h-full object-contain"
            loading="eager"
          />
        </div>
      </div>
    )
  }

  const pct = Math.round((loaded / Math.max(1, total)) * 100)

  return (
    <div ref={hostRef} className={className} aria-label={alt}>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        {(!(requireFullPreload ? preloaded : loaded / Math.max(1, total) >= minLoadedRatioToStart)) && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="px-4 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-sm md:text-base">
              Loading {pct}%
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
