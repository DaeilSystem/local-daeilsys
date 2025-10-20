import { useEffect, useMemo, useRef, useState } from "react"

/** `/public` 기준 경로로 0000~NNNN 패딩된 프레임 배열 생성 */
export const makeSequencePaths = (
  base: string,  // 예: "/dvia-ulf/NewLevelSequence1."
  start: number, // 보통 0
  end: number,   // 마지막 프레임 번호
  pad = 4,       // 0000 패딩
  ext = "png"
) =>
  Array.from({ length: end - start + 1 }, (_, i) => {
    const n = String(i + start).padStart(pad, "0")
    return `${base}${n}.${ext}`
  })

/**
 * 섹션 가시 범위에서만 진행률(0~1)을 계산해 프레임 매핑
 * - triggerCenterRatio: 진행률 기준이 되는 화면 높이 비율(0=맨 위, 1=맨 아래)
 * - drawYOffsetPx: 이미지 그리기 위치를 위/아래로 미세 이동(음수면 위로)
 */
export function ScrollSequenceInSection({
  frames,
  className,
  alt = "scroll-sequence",
  playStart = 0.0,       // 섹션의 몇 %부터 재생 시작(0~1)
  playEnd = 1.0,         // 섹션의 몇 %에 재생 종료(0~1)
  triggerCenterRatio = 0.5, // 0~1, 0.5=정중앙. 더 작게(예: 0.35) 하면 늦게 시작하는 느낌
  drawYOffsetPx = 0,        // 캔버스 내부에서 이미지를 위/아래로 이동 (음수면 위로)
}: {
  frames: string[]
  className?: string
  alt?: string
  playStart?: number
  playEnd?: number
  triggerCenterRatio?: number
  drawYOffsetPx?: number
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imgsRef = useRef<HTMLImageElement[]>([])
  const [active, setActive] = useState(false)
  const lastIndexRef = useRef(-1)
  const rAF = useRef<number | null>(null)

  // 이미지 객체 준비 + 첫 프레임 선로드
  useEffect(() => {
    imgsRef.current = frames.map(() => new Image())
    if (frames[0]) imgsRef.current[0].src = frames[0]
  }, [frames])

  // 섹션 근처 들어오면 점진 프리로드
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true)
            const preload = (i = 1) => {
              if (i >= frames.length) return
              const loadOne = () => {
                if (!imgsRef.current[i].src) imgsRef.current[i].src = frames[i]
                preload(i + 1)
              }
              ;(window as any).requestIdleCallback
                ? (window as any).requestIdleCallback(loadOne)
                : setTimeout(loadOne, 16)
            }
            preload()
          } else {
            setActive(false)
          }
        })
      },
      { root: null, rootMargin: "200px 0px 200px 0px", threshold: [0, 0.01] }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [frames])

  // 캔버스 리사이즈(픽셀밀도 포함)
  useEffect(() => {
    const canvas = canvasRef.current
    const el = containerRef.current
    if (!canvas || !el) return
    const resize = () => {
      const rect = el.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      lastIndexRef.current = -1
      drawByScroll()
    }
    const ro = new ResizeObserver(resize)
    ro.observe(el)
    window.addEventListener("orientationchange", resize)
    resize()
    return () => {
      ro.disconnect()
      window.removeEventListener("orientationchange", resize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 스크롤→프레임 매핑
  const drawByScroll = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    const el = containerRef.current
    if (!canvas || !ctx || !el) return

    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight

    // ✅ 기준선을 화면 중앙(0.5) 대신 triggerCenterRatio로 조정
    const triggerY = vh * Math.min(1, Math.max(0, triggerCenterRatio))
    const raw = (triggerY - rect.top) / rect.height
    const clamped = Math.min(
      1,
      Math.max(0, (raw - playStart) / Math.max(0.0001, playEnd - playStart))
    )

    const idx = Math.min(frames.length - 1, Math.max(0, Math.floor(clamped * (frames.length - 1))))
    if (idx === lastIndexRef.current) return

    const img = imgsRef.current[idx]
    if (!img || !img.complete) {
      // 아직 안 로드됨 → 다음 프레임 시도
      if (rAF.current) cancelAnimationFrame(rAF.current)
      rAF.current = requestAnimationFrame(drawByScroll)
      return
    }

    lastIndexRef.current = idx

    // contain 방식 + Y 오프셋 적용
    const iw = img.naturalWidth || img.width
    const ih = img.naturalHeight || img.height
    const cw = canvas.width
    const ch = canvas.height
    const scale = Math.min(cw / iw, ch / ih)
    const dw = Math.floor(iw * scale)
    const dh = Math.floor(ih * scale)
    const dx = Math.floor((cw - dw) / 2)
    const dyBase = Math.floor((ch - dh) / 2)
    const dy = dyBase + (drawYOffsetPx * (window.devicePixelRatio || 1)) // DPI 반영

    ctx.clearRect(0, 0, cw, ch)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"
    ctx.drawImage(img, dx, dy, dw, dh)
  }

  useEffect(() => {
    const onScroll = () => {
      if (!active) return
      if (rAF.current) cancelAnimationFrame(rAF.current)
      rAF.current = requestAnimationFrame(drawByScroll)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    // 초기 1프레임
    drawByScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rAF.current) cancelAnimationFrame(rAF.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, frames, playStart, playEnd, triggerCenterRatio, drawYOffsetPx])

  return (
    <div ref={containerRef} className={className} aria-label={alt}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}
