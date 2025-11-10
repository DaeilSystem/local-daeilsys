"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollMagicOptions {
  /** Whether ScrollMagic should be active (default: true) */
  enabled?: boolean
  /** Callback when ScrollMagic is ready */
  onReady?: (controller: any) => void
  /** Callback when ScrollMagic fails to load */
  onError?: () => void
}

/**
 * ScrollMagic 라이브러리의 로딩 상태와 컨트롤러를 관리하는 Hook
 *
 * @example
 * ```tsx
 * const { isReady, controller } = useScrollMagic({
 *   onReady: (ctrl) => {
 *     console.log("ScrollMagic ready!", ctrl)
 *   }
 * })
 *
 * useEffect(() => {
 *   if (isReady && controller) {
 *     // Create ScrollMagic scenes
 *   }
 * }, [isReady, controller])
 * ```
 */
export function useScrollMagic(options: UseScrollMagicOptions = {}) {
  const { enabled = true, onReady, onError } = options
  const [isReady, setIsReady] = useState(false)
  const controllerRef = useRef<any>(null)

  useEffect(() => {
    if (!enabled) return

    const checkScrollMagic = () => {
      if (typeof window !== "undefined" && (window as any).ScrollMagic) {
        if (!controllerRef.current) {
          try {
            controllerRef.current = new (window as any).ScrollMagic.Controller()
            setIsReady(true)
            if (onReady) {
              onReady(controllerRef.current)
            }
          } catch (error) {
            console.error("Failed to initialize ScrollMagic:", error)
            if (onError) {
              onError()
            }
          }
        }
        return true
      }
      return false
    }

    // Try immediate check
    if (checkScrollMagic()) {
      return
    }

    // Poll for ScrollMagic
    const interval = setInterval(() => {
      if (checkScrollMagic()) {
        clearInterval(interval)
      }
    }, 100)

    // Cleanup
    return () => {
      clearInterval(interval)
      if (controllerRef.current && controllerRef.current.destroy) {
        try {
          controllerRef.current.destroy(true)
        } catch (error) {
          console.warn("Error destroying ScrollMagic controller:", error)
        }
      }
    }
  }, [enabled, onReady, onError])

  return {
    isReady,
    controller: controllerRef.current,
  }
}
