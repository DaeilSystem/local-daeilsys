"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

interface CompanyValuesProps {
  className?: string
}

export function CompanyValues({ className }: CompanyValuesProps) {
  const { language, isInitialized } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)

  const values = [
    {
      id: "innovation",
      icon: "💡",
      title: language === "ko" ? "혁신" : "Innovation",
      description: language === "ko"
        ? "끊임없는 기술 개발과 혁신을 통해 고객에게 최상의 제품을 제공합니다."
        : "We provide the best products to customers through continuous technological development and innovation."
    },
    {
      id: "quality",
      icon: "⭐",
      title: language === "ko" ? "품질" : "Quality",
      description: language === "ko"
        ? "엄격한 품질 관리 시스템을 통해 최고 수준의 제품 품질을 보장합니다."
        : "We ensure the highest level of product quality through rigorous quality control systems."
    },
    {
      id: "customer-focus",
      icon: "🤝",
      title: language === "ko" ? "고객 중심" : "Customer Focus",
      description: language === "ko"
        ? "고객의 니즈를 최우선으로 생각하며, 맞춤형 솔루션을 제공합니다."
        : "We prioritize customer needs and provide customized solutions."
    },
    {
      id: "integrity",
      icon: "🎯",
      title: language === "ko" ? "정직" : "Integrity",
      description: language === "ko"
        ? "투명하고 윤리적인 경영을 통해 신뢰받는 기업이 되고자 합니다."
        : "We strive to be a trusted company through transparent and ethical management."
    },
    {
      id: "teamwork",
      icon: "👥",
      title: language === "ko" ? "팀워크" : "Teamwork",
      description: language === "ko"
        ? "협력과 소통을 바탕으로 함께 성장하는 조직 문화를 만들어갑니다."
        : "We build an organizational culture that grows together based on collaboration and communication."
    }
  ]

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
          What We Value
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
                    <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4 h-full flex flex-col text-center">
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-medium leading-tight text-gray-900 dark:text-white">
                        {value.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                        {value.description}
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
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 disabled:opacity-30 border-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 dark:text-gray-300" />
              <span className="sr-only">Previous</span>
            </Button>

            {/* Progress Indicators */}
            <div className="flex space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gray-900 dark:bg-white shadow-lg scale-110"
                      : "bg-gray-400 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-400 hover:scale-105"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextValues}
              disabled={currentIndex === maxIndex}
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 disabled:opacity-30 border-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 dark:text-gray-300" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
