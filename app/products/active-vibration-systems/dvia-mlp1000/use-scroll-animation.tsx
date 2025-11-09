"use client"

import { useEffect, useRef } from "react"

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  animationClass?: string
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px -100px 0px", animationClass = "animate-in" } = options

  const elementsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll<HTMLElement>("[data-animate]")
    animatedElements.forEach((el) => {
      elementsRef.current.push(el)
      observer.observe(el)
    })

    return () => {
      elementsRef.current.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [threshold, rootMargin, animationClass])

  return elementsRef
}

// Animation utility component
export function AnimatedSection({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 1,
  className = "",
}: {
  children: React.ReactNode
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "zoomIn"
  delay?: number
  duration?: number
  className?: string
}) {
  return (
    <div
      data-animate={animation}
      className={`opacity-0 transition-all ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  )
}
