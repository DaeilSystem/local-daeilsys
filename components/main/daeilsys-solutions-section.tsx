import { Button } from "@/components/ui/button"
import { solutions, solutionsEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { FullWidthCarousel } from "../common/full-width-carousel"

interface DaeilsysSolutionsSectionProps {
  className?: string
}

export function DaeilsysSolutionsSection({ className }: DaeilsysSolutionsSectionProps) {
  const { language, isInitialized } = useLanguage()
  const solutionData = isInitialized ? (language === "ko" ? solutions : solutionsEn) : solutionsEn

  const solutionStories = solutionData.slice(0, 5).map((solution) => ({
    id: solution.id,
    title: solution.title,
    image: solution.image,
    alt: solution.title
  }))

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 dark:text-white">
            Explore Our Vibration<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Solutions.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
            {isInitialized && language === "ko"
              ? "나노 스케일 측정 장비를 위한 진동 절연 시스템 설계 제조 전문 기업으로서, 다양한 산업 분야의 진동 문제를 해결하는 최상의 솔루션을 제공합니다."
              : "As a specialized company in designing and manufacturing vibration isolation systems for nanoscale measurement equipment, we provide the best solutions to solve vibration problems in various industrial fields."
            }
          </p>
        </div>
      </div>

      {/* Full Width Carousel */}
      <FullWidthCarousel stories={solutionStories} />

      {/* View All Solutions Button */}
      <div className="text-center mt-12">
        <Link href="/products">
          <Button
            variant="outline"
            className="rounded-full px-8 py-3 border-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200 font-medium text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
          >
            {isInitialized && language === "ko" ? "모든 솔루션 보기" : "View All Solutions"}
          </Button>
        </Link>
      </div>
    </section>
  )
}
