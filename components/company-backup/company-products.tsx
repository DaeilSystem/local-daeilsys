"use client"

import { Button } from "@/components/ui/button"
import { getCompanyInfo } from "@/data/company"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { ContainerCarousel } from "../common/container-carousel"

interface CompanyProductsProps {
  className?: string
}

export function CompanyProducts({ className }: CompanyProductsProps) {
  const { language, isInitialized } = useLanguage()
  const companyInfo = getCompanyInfo()

  const productStories = companyInfo.products.map((product, index) => ({
    id: `product-${index}`,
    title: product,
    image: `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(product)}`,
    alt: product
  }))

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 dark:text-white">
            What We Make<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>for precision measurement.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
            {isInitialized && language === "ko"
              ? "나노 스케일 측정 장비를 위한 진동 절연 시스템 설계 제조 전문 기업으로서, 최상의 성능의 미진동 제어 시스템을 제공합니다."
              : "As a specialized company in designing and manufacturing vibration isolation systems for nanoscale measurement equipment, we provide the highest performance vibration control systems."
            }
          </p>
        </div>
      </div>

      {/* Container Carousel */}
      <ContainerCarousel stories={productStories} defaultCardsPerView={3} />

      {/* View All Products Button */}
      <div className="text-center mt-12">
        <Link href="/products">
          <Button
            variant="outline"
            className="rounded-full px-8 py-3 border-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200 font-medium text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
          >
            {isInitialized && language === "ko" ? "모든 제품 보기" : "View All Products"}
          </Button>
        </Link>
      </div>
    </section>
  )
}
