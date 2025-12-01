"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

interface CompanyOverviewProps {
  className?: string
}

export function CompanyOverview({ className }: CompanyOverviewProps) {
  const { language, isInitialized } = useLanguage()

  return (
    <section className={`relative bg-white dark:bg-gray-950 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Who We Are
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light mb-6">
          DAEIL SYSTEMS is a specialized manufacturer of vibration isolation systems, enabling stable imaging in
          high resolution without disturbance to nano-scale structures and materials.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-light mb-8">
          Since 1984, we have been providing the most excellent performance vibration control systems for research,
          manufacturing, and scientific applications worldwide.
        </p>

        <div className="text-center">
          <Link href="/company/vision-mission">
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 border-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200 font-medium text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
            >
              {isInitialized && language === "ko" ? "비전과 미션 보기" : "Our Vision & Mission"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
