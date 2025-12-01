"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Story {
  id: string
  title: string
  image: string
  alt: string
}

interface StoryCarouselProps {
  stories: Story[]
  className?: string
}

export function StoryCarousel({ stories, className }: StoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const goToStory = (index: number) => {
    setCurrentIndex(index)
  }

  if (!stories.length) return null

  return (
    <div className={`relative ${className}`}>
      {/* Main Story Display */}
      <div className="relative">
        <Card className="overflow-hidden border-0 shadow-none">
          <CardContent className="p-0">
            <div className="relative aspect-video">
              <div
                className="w-full h-full bg-cover bg-center bg-gray-200"
                style={{
                  backgroundImage: `url(${stories[currentIndex].image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg md:text-xl font-medium leading-tight">
                  {stories[currentIndex].title}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Story Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
        {stories.map((story, index) => (
          <button
            key={story.id}
            onClick={() => goToStory(index)}
            className={`flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-300 ${
              index === currentIndex
                ? "ring-2 ring-blue-500 scale-105"
                : "hover:scale-105 opacity-70 hover:opacity-100"
            }`}
          >
            <div className="w-24 h-16 md:w-32 md:h-20">
              <div
                className="w-full h-full bg-cover bg-center bg-gray-200"
                style={{
                  backgroundImage: `url(${story.image})`,
                }}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="absolute inset-0 flex items-end p-2">
              <span className="text-white text-xs font-medium line-clamp-2 leading-tight">
                {story.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevStory}
          disabled={currentIndex === 0}
          className="rounded-full p-2"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous story</span>
        </Button>

        {/* Pagination Dots */}
        <div className="flex space-x-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStory(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextStory}
          disabled={currentIndex === stories.length - 1}
          className="rounded-full p-2"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next story</span>
        </Button>
      </div>
    </div>
  )
}