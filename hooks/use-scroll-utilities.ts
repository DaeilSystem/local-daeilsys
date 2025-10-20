"use client"

import { useCallback, useEffect, useRef, useState } from "react"

// Media Query Hook
export function useMediaQuery(query: string, fallback = false) {
  const [matches, setMatches] = useState(fallback)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const handleChange = () => setMatches(mediaQuery.matches)

    handleChange()
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [query])

  return matches
}

// Auto Snap to Sections Hook
export function useAutoSnapToSections(options: {
  enabled?: boolean
  offsetRatio?: number
  cooldownMs?: number
  minSectionHeightPx?: number
} = {}) {
  const {
    enabled = true,
    offsetRatio = 0.6,
    cooldownMs = 700,
    minSectionHeightPx = 400
  } = options

  const lockRef = useRef(false)
  const lastYRef = useRef(0)
  const dirRef = useRef<'down' | 'up'>('down')

  useEffect(() => {
    if (!enabled) return

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('section[data-snap-section]')
    ).filter((el) => el.offsetHeight >= minSectionHeightPx)

    if (sections.length === 0) return

    lastYRef.current = window.scrollY || document.documentElement.scrollTop

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop
      dirRef.current = y > lastYRef.current ? 'down' : 'up'
      lastYRef.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    const topPct = Math.min(95, Math.max(5, Math.round(offsetRatio * 100)))
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return

        for (const entry of entries) {
          if (!entry.isIntersecting) continue

          const idx = sections.indexOf(entry.target as HTMLElement)
          if (idx === -1) continue

          const dir = dirRef.current
          const nextIdx = dir === 'down' ? idx + 1 : idx - 1
          if (nextIdx < 0 || nextIdx >= sections.length) continue

          const target = sections[nextIdx]
          const rect = target.getBoundingClientRect()
          const viewportH = window.innerHeight || document.documentElement.clientHeight
          const triggerLine = viewportH * (topPct / 100)

          const shouldSnapDown = dir === 'down' && rect.top <= triggerLine
          const shouldSnapUp = dir === 'up' && rect.top >= triggerLine * 0.4

          if ((shouldSnapDown || shouldSnapUp) && !lockRef.current) {
            lockRef.current = true
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
            window.setTimeout(() => {
              lockRef.current = false
            }, cooldownMs)
            break
          }
        }
      },
      {
        root: null,
        rootMargin: `-${100 - topPct}% 0px -${topPct}% 0px`,
        threshold: [0, 0.01, 0.5, 1]
      }
    )

    sections.forEach((s) => observer.observe(s))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [enabled, offsetRatio, cooldownMs, minSectionHeightPx])
}

// Scroll Progress Hook
export function useScrollProgress(options: {
  start?: number
  end?: number
  direction?: 'vertical' | 'horizontal'
} = {}) {
  const { start = 0, end = 1, direction = 'vertical' } = options
  const ref = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const viewportWidth = window.innerWidth

      if (direction === 'horizontal') {
        const elementLeft = rect.left
        const elementRight = rect.right
        const elementWidth = rect.width

        if (elementRight > 0 && elementLeft < viewportWidth) {
          const scrollStart = viewportWidth * (1 - start)
          const scrollEnd = viewportWidth * (1 - end)

          let currentProgress = (scrollStart - elementLeft) / (scrollStart - scrollEnd)
          currentProgress = Math.max(0, Math.min(1, currentProgress))
          setProgress(currentProgress)
        }
      } else {
        const elementTop = rect.top
        const elementBottom = rect.bottom

        if (elementBottom > 0 && elementTop < viewportHeight) {
          const scrollStart = viewportHeight * (1 - start)
          const scrollEnd = viewportHeight * (1 - end)

          let currentProgress = (scrollStart - elementTop) / (scrollStart - scrollEnd)
          currentProgress = Math.max(0, Math.min(1, currentProgress))
          setProgress(currentProgress)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [start, end, direction])

  return { ref, progress }
}

// Intersection Observer Hook
export function useIntersectionObserver(options: {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
  enabled?: boolean
} = {}) {
  const {
    threshold = 0.2,
    rootMargin = '-10% 0px -10% 0px',
    triggerOnce = false,
    enabled = true
  } = options

  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || !enabled) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (!hasBeenVisible) {
            setHasBeenVisible(true)
          }
          if (triggerOnce && hasBeenVisible) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, enabled, hasBeenVisible])

  return { ref, isVisible, hasBeenVisible }
}

// Scroll Direction Hook
export function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down' | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop
      const newDirection = currentScrollY > lastScrollY.current ? 'down' : 'up'

      setDirection(newDirection)
      setScrollY(currentScrollY)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Set initial values

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { direction, scrollY }
}

// Scroll Velocity Hook
export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0)
  const lastScrollY = useRef(0)
  const lastTime = useRef(Date.now())

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop
      const currentTime = Date.now()
      const timeDelta = currentTime - lastTime.current
      const scrollDelta = currentScrollY - lastScrollY.current

      if (timeDelta > 0) {
        const currentVelocity = Math.abs(scrollDelta) / timeDelta
        setVelocity(currentVelocity)
      }

      lastScrollY.current = currentScrollY
      lastTime.current = currentTime
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return velocity
}

// Parallax Hook
export function useParallax(options: {
  speed: number
  clamp?: number
  direction?: 'vertical' | 'horizontal'
  reverse?: boolean
  enabled?: boolean
} = { speed: 0.5 }) {
  const { speed, clamp = 100, direction = 'vertical', reverse = false, enabled = true } = options
  const ref = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!enabled) return

    const element = ref.current
    if (!element) return

    const handleParallax = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const windowWidth = window.innerWidth
      const elementCenter = direction === 'vertical'
        ? rect.top + rect.height / 2
        : rect.left + rect.width / 2
      const viewportCenter = direction === 'vertical' ? windowHeight / 2 : windowWidth / 2

      const distance = elementCenter - viewportCenter
      let parallaxOffset = distance * speed

      if (reverse) parallaxOffset = -parallaxOffset

      // Apply clamp
      parallaxOffset = Math.max(-clamp, Math.min(clamp, parallaxOffset))

      if (direction === 'horizontal') {
        setOffset({ x: parallaxOffset, y: 0 })
      } else {
        setOffset({ x: 0, y: parallaxOffset })
      }
    }

    handleParallax()
    window.addEventListener('scroll', handleParallax, { passive: true })
    window.addEventListener('resize', handleParallax, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleParallax)
      window.removeEventListener('resize', handleParallax)
    }
  }, [speed, clamp, direction, reverse, enabled])

  return { ref, offset }
}

// Reduced Motion Hook
export function useReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

// Viewport Size Hook
export function useViewportSize() {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateSize()
    window.addEventListener('resize', updateSize, { passive: true })

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return size
}

// Element Size Hook
export function useElementSize() {
  const ref = useRef<HTMLElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const updateSize = () => {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      })
    }

    updateSize()
    const resizeObserver = new ResizeObserver(updateSize)
    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return { ref, size }
}

// Scroll to Element Hook
export function useScrollToElement() {
  const scrollToElement = useCallback((element: HTMLElement | string, options?: {
    behavior?: 'smooth' | 'instant'
    block?: 'start' | 'center' | 'end' | 'nearest'
    inline?: 'start' | 'center' | 'end' | 'nearest'
  }) => {
    const target = typeof element === 'string'
      ? document.querySelector(element) as HTMLElement
      : element

    if (target) {
      target.scrollIntoView({
        behavior: options?.behavior || 'smooth',
        block: options?.block || 'start',
        inline: options?.inline || 'nearest'
      })
    }
  }, [])

  return { scrollToElement }
}

// Scroll Lock Hook
export function useScrollLock() {
  const lockScroll = useCallback(() => {
    const originalOverflow = document.documentElement.style.overflow
    const originalBodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = originalOverflow
      document.body.style.overflow = originalBodyOverflow
    }
  }, [])

  return { lockScroll }
}
