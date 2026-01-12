"use client"

import { FullWidthCarousel } from "./full-width-carousel"
import { useLanguage } from "@/hooks/use-language"
import { companyTimeline, getText } from "@/data/company"

interface EducatorsSectionProps {
  className?: string
}

export function EducatorsSection({ className }: EducatorsSectionProps) {
  const { language } = useLanguage()

  // 회사 연혁 데이터를 스토리 형식으로 변환
  const historyStories = companyTimeline
    .filter(item => item.image)
    .map(item => ({
      id: item.year,
      title: `${item.year} - ${getText(item.event, language)}`,
      image: item.image!,
      alt: getText(item.event, language)
    }))

  const sectionText = {
    title: {
      ko: "40년의 역사와 함께\n미래를 향해 나아갑니다.",
      en: "40 years of history,\nmoving forward together."
    },
    description: {
      ko: "1984년 설립 이래, 대일시스템은 국내 제진 기술의 선구자로서 끊임없는 혁신과 도전을 통해 글로벌 시장을 선도해 왔습니다.",
      en: "Since our founding in 1984, DAEIL SYSTEMS has been a pioneer in vibration isolation technology, leading the global market through continuous innovation and challenge."
    }
  }

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 dark:text-white whitespace-pre-line">
            {getText(sectionText.title, language)}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
            {getText(sectionText.description, language)}
          </p>
        </div>
      </div>

      {/* Full Width Carousel */}
      <FullWidthCarousel stories={historyStories} />
    </section>
  )
}