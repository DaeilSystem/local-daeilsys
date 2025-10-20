"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedImageProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale" | "rotate"
  distance?: number
  scale?: number
  rotation?: number
  once?: boolean
  threshold?: number
}

export function AnimatedImage({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "scale",
  distance = 50,
  scale = 0.8,
  rotation = 0,
  once = false,
  threshold = 0.1,
}: AnimatedImageProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 }
      case "down":
        return { y: -distance, opacity: 0 }
      case "left":
        return { x: distance, opacity: 0 }
      case "right":
        return { x: -distance, opacity: 0 }
      case "fade":
        return { opacity: 0 }
      case "scale":
        return { scale, opacity: 0 }
      case "rotate":
        return { rotate: rotation, opacity: 0 }
      default:
        return { scale, opacity: 0 }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: 0, opacity: 1 }
      case "left":
      case "right":
        return { x: 0, opacity: 1 }
      case "fade":
        return { opacity: 1 }
      case "scale":
        return { scale: 1, opacity: 1 }
      case "rotate":
        return { rotate: 0, opacity: 1 }
      default:
        return { scale: 1, opacity: 1 }
    }
  }

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getAnimatePosition()}
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}
