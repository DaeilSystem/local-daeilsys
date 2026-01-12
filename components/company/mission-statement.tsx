"use client"

import { useLanguage } from "@/hooks/use-language"
import { getCompanySectionBySlug, getText } from "@/data/company"

interface MissionStatementProps {
  className?: string
}

export function MissionStatement({ className }: MissionStatementProps) {
  const { language } = useLanguage()
  const overviewSection = getCompanySectionBySlug('overview')

  const missionText = {
    ko: "대일시스템은 제진대 전문 제조 기업입니다. 제진대는 내·외 구조물에 영향을 주는 진동을 제어하여 안정상태에서 나노미터 크기의 구조와 물질이 외란 없이 고해상도로 이미징 할 수 있게 하는 시스템을 말합니다. 1984년 설립된 대일시스템은 국내 미세진동 제어 시스템의 선구자로서 지난 40여 년간 쌓아올린 경험과 기술력으로 글로벌 시장을 이끌어 나가고 있습니다.",
    en: "DAEIL SYSTEMS is a specialized manufacturer of vibration isolation systems. These systems control vibrations affecting internal and external structures, allowing for stable imaging in high resolution without disturbance to nano-scale structures and materials. Established in 1984, DAEIL SYSTEMS has emerged as a pioneer in micro-vibration control systems domestically, garnering recognition for the excellence of its products in the global market over the past 40 years."
  }

  return (
    <section className={`relative bg-white dark:bg-gray-950 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
          {getText(missionText, language)}
        </p>
      </div>
    </section>
  )
}