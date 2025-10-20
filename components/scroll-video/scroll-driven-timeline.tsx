"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface TimelineEvent {
  time: number // 0-1 범위의 진행도
  title: string
  description?: string
  highlight?: boolean
}

interface ScrollDrivenTimelineProps {
  events: TimelineEvent[]
  className?: string
  containerClassName?: string
  startProgress?: number
  endProgress?: number
  showProgress?: boolean
  progressColor?: string
}

export function ScrollDrivenTimeline({
  events,
  className = "",
  containerClassName = "",
  startProgress = 0,
  endProgress = 1,
  showProgress = true,
  progressColor = "bg-blue-500",
}: ScrollDrivenTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeEvent, setActiveEvent] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const timelineProgress = useTransform(scrollYProgress, [startProgress, endProgress], [0, 1])

  useEffect(() => {
    const unsubscribe = timelineProgress.onChange((latest) => {
      // 현재 진행도에 따라 활성 이벤트 결정
      const currentEventIndex = events.findIndex((event, index) => {
        const nextEvent = events[index + 1]
        return latest >= event.time && (!nextEvent || latest < nextEvent.time)
      })

      if (currentEventIndex !== -1 && currentEventIndex !== activeEvent) {
        setActiveEvent(currentEventIndex)
      }
    })

    return unsubscribe
  }, [timelineProgress, events, activeEvent])

  return (
    <div ref={containerRef} className={`relative ${containerClassName}`}>
      <div className={`relative ${className}`}>
        {/* 타임라인 바 */}
        {showProgress && (
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-700 rounded-full">
            <motion.div
              className={`w-full ${progressColor} rounded-full origin-top`}
              style={{ scaleY: timelineProgress }}
            />
          </div>
        )}

        {/* 이벤트 목록 */}
        <div className="pl-12 space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`relative transition-all duration-300 ${
                index === activeEvent ? "opacity-100 scale-105" : "opacity-60 scale-100"
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: index === activeEvent ? 1 : 0.6, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* 이벤트 점 */}
              <div
                className={`absolute -left-12 top-2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  index === activeEvent
                    ? `${progressColor.replace("bg-", "border-")} bg-current`
                    : "border-gray-500 bg-gray-700"
                }`}
              />

              {/* 이벤트 내용 */}
              <div
                className={`p-4 rounded-lg transition-all duration-300 ${
                  event.highlight ? "bg-blue-900/30 border border-blue-500/30" : "bg-gray-900/50"
                }`}
              >
                <h3 className={`text-lg font-semibold mb-2 ${index === activeEvent ? "text-white" : "text-gray-300"}`}>
                  {event.title}
                </h3>
                {event.description && (
                  <p className={`text-sm ${index === activeEvent ? "text-gray-200" : "text-gray-400"}`}>
                    {event.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
