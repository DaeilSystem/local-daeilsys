"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { companyValues, getText, type Value } from "@/data/company"
import { useLanguage } from "@/hooks/use-language"

interface ValuesSectionProps {
  className?: string
}

export function ValuesSection({ className }: ValuesSectionProps) {
  const { language } = useLanguage()
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

  const maxIndex = Math.max(0, companyValues.length - cardsPerView)

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
    <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7] ${className}`}>
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-center text-gray-900">
          {language === 'ko' ? '우리의 가치가 길을 이끕니다.' : 'Our values lead the way.'}
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
              {companyValues.map((value) => (
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
                        {getText(value.title, language)}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                        {getText(value.description, language)}
                      </p>
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
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-300" />
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
                      ? "bg-black"
                      : "bg-black/40"
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
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-300" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
