"use client"

import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  splitWords?: boolean
}

export function AnimatedText({
  children,
  className = "",
  splitWords = false,
}: AnimatedTextProps) {
  if (splitWords && typeof children === "string") {
    const words = children.split(" ")
    return (
      <div className={className}>
        {words.map((word, index) => (
          <span key={index} className="inline-block mr-1">
            {word}
          </span>
        ))}
      </div>
    )
  }

  return <div className={className}>{children}</div>
}
