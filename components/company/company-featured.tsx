"use client"

import { Button } from "@/components/ui/button"
import { getAllCompanySections } from "@/data/company"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CompanyFeaturedProps {
  className?: string
}

export function CompanyFeatured({ className }: CompanyFeaturedProps) {
  const { language, isInitialized } = useLanguage()
  const companySections = getAllCompanySections()

  const featuredSections = companySections.slice(0, 4)

  return (
    <section className={`py-16 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredSections.map((section) => (
            <div key={section.id} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="mb-4">
                  <div className="text-3xl mb-3">{section.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {section.description}
                  </p>
                </div>

                <div className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {section.content.substring(0, 120)}...
                  </p>
                </div>

                <Link href={`/company/${section.slug}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200"
                  >
                    <span className="mr-2">
                      {isInitialized && language === "ko" ? "자세히 보기" : "Learn More"}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
