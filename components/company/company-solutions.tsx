"use client"

import { Button } from "@/components/ui/button"
import { getAllCompanySections } from "@/data/company"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { FullWidthCarousel } from "../common/full-width-carousel"

interface CompanySolutionsProps {
  className?: string
}

export function CompanySolutions({ className }: CompanySolutionsProps) {
  const { language, isInitialized } = useLanguage()
  const companySections = getAllCompanySections()

  const solutionStories = companySections.slice(0, 5).map((section) => ({
    id: section.id,
    title: section.title,
    image: section.image || "/placeholder.svg?height=600&width=800",
    alt: section.title
  }))

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 dark:text-white">
            Explore Our Company<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Journey.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
            {isInitialized && language === "ko"
              ? "1984년 설립 이후 40년 이상 축적된 경험과 기술력을 바탕으로 진동 제어 분야의 핵심 기업으로 자리매김하고 있습니다."
              : "Since our establishment in 1984, we have emerged as a key player in vibration control with over 40 years of accumulated experience and expertise."
            }
          </p>
        </div>
      </div>

      {/* Full Width Carousel */}
      <FullWidthCarousel stories={solutionStories} />

      {/* View All Solutions Button */}
      <div className="text-center mt-12">
        <Link href="/company">
          <Button
            variant="outline"
            className="rounded-full px-8 py-3 border-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200 font-medium text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
          >
            {isInitialized && language === "ko" ? "회사 더 알아보기" : "Learn More About Us"}
          </Button>
        </Link>
      </div>
    </section>
  )
}
