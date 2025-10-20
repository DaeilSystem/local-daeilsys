"use client"

import { latestUpdatesSection } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"

interface DaeilsysLatestUpdatesSectionProps {
  className?: string
}

export function DaeilsysLatestUpdatesSection({ className }: DaeilsysLatestUpdatesSectionProps) {
  const { language, isInitialized } = useLanguage()

  const title = isInitialized && language === "ko" ? latestUpdatesSection.titleKo : latestUpdatesSection.title
  const items = latestUpdatesSection.items

  return (
    <section className={`py-16 bg-white dark:bg-gray-950 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>

        <div className="grid gap-6 md:gap-8">
          {items.map((item, index) => (
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
