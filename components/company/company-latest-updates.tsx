"use client"

import { useLanguage } from "@/hooks/use-language"

interface CompanyLatestUpdatesProps {
  className?: string
}

export function CompanyLatestUpdates({ className }: CompanyLatestUpdatesProps) {
  const { language, isInitialized } = useLanguage()

  const updates = [
    {
      id: "update-1",
      titleKo: "2024년 신제품 DVIA-ULF 출시 예정",
      title: "New Product DVIA-ULF Coming in 2024",
      dateKo: "2024년 1월",
      date: "January 2024"
    },
    {
      id: "update-2",
      titleKo: "글로벌 파트너십 확대 - 유럽 및 북미 시장 진출",
      title: "Expanding Global Partnerships - Entering European and North American Markets",
      dateKo: "2024년 3월",
      date: "March 2024"
    },
    {
      id: "update-3",
      titleKo: "ISO 9001:2015 품질경영시스템 인증 갱신",
      title: "ISO 9001:2015 Quality Management System Certification Renewed",
      dateKo: "2024년 6월",
      date: "June 2024"
    }
  ]

  return (
    <section className={`py-16 bg-white dark:bg-gray-950 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 dark:text-white">
            {isInitialized && language === "ko" ? "최신 소식" : "Latest Updates"}
          </h2>
        </div>

        <div className="grid gap-6 md:gap-8">
          {updates.map((item) => (
            <div key={item.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors duration-200">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
              <div className="flex-grow">
                <p className="text-gray-900 dark:text-white font-medium leading-relaxed">
                  {isInitialized && language === "ko" ? item.titleKo : item.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {isInitialized && language === "ko" ? item.dateKo : item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
