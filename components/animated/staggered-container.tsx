"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggeredContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  distance?: number
  once?: boolean
  threshold?: number
}

export function StaggeredContainer({
  children,
  className = "",
  delay = 0,
  stagger = 0.1,
  direction = "up",
  distance = 30,
  once = false,
  threshold = 0.1,
}: StaggeredContainerProps) {
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
      default:
        return { y: distance, opacity: 0 }
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
      default:
        return { y: 0, opacity: 1 }
    }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: getInitialPosition(),
    visible: {
      ...getAnimatePosition(),
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
