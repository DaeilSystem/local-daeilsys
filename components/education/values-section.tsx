"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

interface Value {
  id: string
  title: string
  description: string
  href: string
}

interface ValuesSectionProps {
  className?: string
}

const values: Value[] = [
  {
    id: "racial-equity",
    title: "Racial Equity and Justice Initiative",
    description: "We're addressing systemic racism by expanding opportunities for communities of color globally.",
    href: "#racial-equity-justice"
  },
  {
    id: "inclusion-diversity",
    title: "Inclusion and Diversity",
    description: "We're holding ourselves accountable for creating a culture where everyone belongs.",
    href: "#inclusion-diversity"
  },
  {
    id: "supply-chain",
    title: "Supply Chain Innovation",
    description: "We prioritize providing safe, respectful, and supportive workplaces for everyone.",
    href: "#supply-chain"
  },
  {
    id: "accessibility",
    title: "Accessibility",
    description: "Our built-in accessibility features are designed to work the way you do.",
    href: "#accessibility"
  },
  {
    id: "privacy",
    title: "Privacy",
    description: "We design every product and service to keep your data safe and secure.",
    href: "#privacy"
  },
  {
    id: "environment",
    title: "Environment",
    description: "We're committed to bringing our net emissions to zero across our entire carbon footprint by 2030.",
    href: "#environment"
  }
]

export function ValuesSection({ className }: ValuesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)

  // 반응형 카드 수 설정
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth
      if (width < 640) { // sm
        setCardsPerView(1)
      } else if (width < 1024) { // lg
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, values.length - cardsPerView)

  const nextValues = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevValues = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // 인덱스가 maxIndex를 초과하지 않도록 조정
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex))
    }
  }, [cardsPerView, maxIndex, currentIndex])

  return (
    <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-center text-gray-900 dark:text-white">
          Our values lead the way.
        </h2>

        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView + (cardsPerView > 1 ? 6 / cardsPerView : 0))}%)`,
              }}
            >
              {values.map((value) => (
                <div
                  key={value.id}
                  className="flex-shrink-0"
                  style={{
                    width: cardsPerView === 1
                      ? '100%'
                      : `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 24 / cardsPerView}px)`
                  }}
                >
                  <Card className="h-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl">
                    <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4 h-full flex flex-col">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-medium leading-tight text-gray-900 dark:text-white">
                        {value.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                        {value.description}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto font-normal text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 justify-start text-sm sm:text-base"
                        asChild
                      >
                        <a href={value.href} className="inline-flex items-center gap-1">
                          Learn more
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevValues}
              disabled={currentIndex === 0}
              className="rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0 disabled:opacity-30 border-gray-300 dark:border-gray-600"
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="sr-only">Previous</span>
            </Button>

            {/* Progress Indicators */}
            <div className="flex space-x-2">
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

            <Button
              variant="outline"
              size="sm"
              onClick={nextValues}
              disabled={currentIndex === maxIndex}
              className="rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0 disabled:opacity-30 border-gray-300 dark:border-gray-600"
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}