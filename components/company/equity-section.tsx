"use client"

import { FullWidthCarousel } from "./full-width-carousel"
import { useLanguage } from "@/hooks/use-language"
import { tradeShows, getText } from "@/data/company"

interface EquitySectionProps {
  className?: string
}

export function EquitySection({ className }: EquitySectionProps) {
  const { language } = useLanguage()

  // 전시회 이미지들을 스토리 형식으로 변환
  const tradeShowStories = tradeShows.flatMap(show =>
    show.images.slice(0, 2).map((image, idx) => ({
      id: `${show.name}-${idx}`,
      title: show.name,
      image: image,
      alt: show.name
    }))
  )

  const sectionText = {
    title: {
      ko: "글로벌 무대에서\n기술력을 선보입니다.",
      en: "Showcasing our technology\non the global stage."
    },
    description: {
      ko: "대일시스템은 LASER World of PHOTONICS, Microscopy & Microanalysis 등 세계적인 전시회에 참가하여 최신 제진 기술을 선보이고 있습니다.",
      en: "DAEIL SYSTEMS participates in world-class exhibitions including LASER World of PHOTONICS and Microscopy & Microanalysis to showcase our latest vibration isolation technology."
    }
  }

  return (
    <section className={`py-16 bg-gray-50 dark:bg-gray-900 ${className}`}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 dark:text-white whitespace-pre-line">
            {getText(sectionText.title, language)}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {getText(sectionText.description, language)}
          </p>
        </div>
      </div>

      {/* Full Width Carousel */}
      <FullWidthCarousel stories={tradeShowStories} />
    </section>
  )
}