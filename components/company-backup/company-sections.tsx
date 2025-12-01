"use client"

import { getAllCompanySections } from "@/data/company"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

interface CompanySectionsProps {
  className?: string
}

export function CompanySections({ className }: CompanySectionsProps) {
  const { language, isInitialized } = useLanguage()
  const companySections = getAllCompanySections()

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 dark:text-white">
            Learn More<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>About Us.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
            {isInitialized && language === "ko"
              ? "우리의 이야기, 가치, 그리고 진동 제어 기술 발전에 대한 우리의 헌신을 알아보세요."
              : "Discover our story, values, and commitment to advancing vibration control technology."
            }
          </p>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {companySections.map((section, index) => (
            <Link key={section.id} href={`/company/${section.slug}`}>
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 h-full">
                <div className="text-3xl sm:text-4xl mb-4">{section.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {section.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
