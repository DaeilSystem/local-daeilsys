"use client"

import { Button } from "@/components/ui/button"
import { featuredProducts } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface DaeilsysFeaturedProductsSectionProps {
  className?: string
}

export function DaeilsysFeaturedProductsSection({ className }: DaeilsysFeaturedProductsSectionProps) {
  const { language, isInitialized } = useLanguage()

  return (
    <section className={`py-16 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                    {isInitialized && language === "ko" ? product.titleKo : product.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {isInitialized && language === "ko" ? product.subtitleKo : product.subtitle}
                  </p>
                </div>

                <div className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {isInitialized && language === "ko" ? product.description : product.descriptionEn}
                  </p>
                </div>

                <Link href={product.url}>
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
