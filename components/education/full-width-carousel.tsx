"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Plus, Play } from "lucide-react"

interface Story {
  id: string
  title: string
  image: string
  alt: string
}

interface FullWidthCarouselProps {
  stories: Story[]
  className?: string
}

export function FullWidthCarousel({ stories, className }: FullWidthCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4)

  // 반응형 카드 수 설정
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth
      if (width < 640) { // sm
        setCardsPerView(1)
      } else if (width < 768) { // md
        setCardsPerView(2)
      } else if (width < 1024) { // lg
        setCardsPerView(3)
      } else {
        setCardsPerView(4)
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, stories.length - cardsPerView)

  const nextStory = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // 인덱스가 maxIndex를 초과하지 않도록 조정
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [cardsPerView, maxIndex, currentIndex])

  if (!stories.length) return null

  return (
    <div className={`w-full ${className}`}>
      {/* Main Carousel */}
      <div className="relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-3 sm:gap-4 md:gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView + (cardsPerView > 1 ? 6 / cardsPerView : 0))}%)`,
          }}
        >
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="flex-shrink-0 relative group cursor-pointer"
              style={{
                width: cardsPerView === 1
                  ? '100%'
                  : `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 24 / cardsPerView}px)`
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                <div
                  className="w-full h-full bg-cover bg-center bg-gray-300 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: story.image ? `url(${story.image})` : 'none',
                    backgroundColor: !story.image ? '#f3f4f6' : undefined
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-xl sm:rounded-2xl" />

                {/* Plus Button */}
                <Button
                  size="sm"
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full w-7 h-7 sm:w-8 sm:h-8 p-0 bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    console.log(`Clicked story: ${story.title}`)
                  }}
                >
                  <Plus className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </Button>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-tight line-clamp-3">
                    {story.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center mt-6 sm:mt-8 gap-3 sm:gap-4">
        {/* Play Button */}
        <Button
          variant="outline"
          size="sm"
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0 bg-white border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          <Play className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-300 ml-0.5" fill="currentColor" />
        </Button>

        {/* Arrow Navigation */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevStory}
            disabled={currentIndex === 0}
            className="rounded-full w-7 h-7 sm:w-8 sm:h-8 p-0 disabled:opacity-30 border-gray-300 dark:border-gray-600"
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextStory}
            disabled={currentIndex >= maxIndex}
            className="rounded-full w-7 h-7 sm:w-8 sm:h-8 p-0 disabled:opacity-30 border-gray-300 dark:border-gray-600"
          >
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>

      {/* Pagination Dots for Mobile */}
      {cardsPerView <= 2 && (
        <div className="flex justify-center items-center mt-4 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-900 dark:bg-white"
                  : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}