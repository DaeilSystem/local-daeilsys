import { useEffect, useRef, useState } from "react"

interface ScrollFadeOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollFade(options: ScrollFadeOptions = {}) {
  const { threshold = 0.2, rootMargin = "-10% 0px -10% 0px", triggerOnce = false } = options
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 더 부드러운 전환을 위해 intersectionRatio 사용
        const ratio = entry.intersectionRatio

        if (entry.isIntersecting && ratio >= threshold) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

interface ScrollProgressOptions {
  start?: number // 시작 스크롤 위치 (0~1)
  end?: number // 끝 스크롤 위치 (0~1)
}

export function useScrollProgress(options: ScrollProgressOptions = {}) {
  const { start = 0, end = 1 } = options
  const ref = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height

      // 요소가 화면 하단에서 상단으로 이동하는 진행도
      const scrollStart = windowHeight * start
      const scrollEnd = windowHeight * end
      const scrollRange = scrollStart - scrollEnd

      const currentProgress = (scrollStart - rect.top) / scrollRange

      setProgress(Math.max(0, Math.min(1, currentProgress)))
    }

    handleScroll() // 초기 실행
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [start, end])

  return { ref, progress }
}
