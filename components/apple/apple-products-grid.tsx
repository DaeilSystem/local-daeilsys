"use client"

import { heroSlides, heroSlidesEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface AppleProductsGridProps {
  className?: string
}

export function AppleProductsGrid({ className }: AppleProductsGridProps) {
  const { language, isInitialized } = useLanguage()

  // DVIA-ULF를 제외한 주요 제품들
  const allSlides = isInitialized ? (language === "ko" ? heroSlides : heroSlidesEn) : heroSlidesEn
  const productSlides = allSlides?.filter(slide => !slide.product.includes("DVIA-ULF") && !slide.product.includes("5년 보증")) || []

  // 제품을 2x2 그리드로 배치
  const topProducts = productSlides.slice(0, 2)
  const bottomProducts = productSlides.slice(2, 4)

  return (
    <section className={`bg-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Row - 2 Large Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {topProducts.map((product, index) => (
            <div key={product.id} className="relative group">
              <Link href={product.url || "/products"} className="block">
                <div className="relative h-[400px] lg:h-[500px] bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.product}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                    {product.product}
                  </h3>
                  <p className="text-lg lg:text-xl text-white/90 mb-4 font-light">
                    {product.title}
                  </p>
                  <p className="text-base text-white/80 mb-6">
                    {product.subtitle}
                  </p>

                  <div className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200">
                    <span className="font-medium">
                      {isInitialized && language === "ko" ? "자세히 보기" : "Learn more"}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 Large Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {bottomProducts.map((product, index) => (
            <div key={product.id} className="relative group">
              <Link href={product.url || "/products"} className="block">
                <div className="relative h-[400px] lg:h-[500px] bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.product}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                    {product.product}
                  </h3>
                  <p className="text-lg lg:text-xl text-white/90 mb-4 font-light">
                    {product.title}
                  </p>
                  <p className="text-base text-white/80 mb-6">
                    {product.subtitle}
                  </p>

                  <div className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200">
                    <span className="font-medium">
                      {isInitialized && language === "ko" ? "자세히 보기" : "Learn more"}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 Smaller Products */}
        {productSlides.length > 4 && (
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {productSlides.slice(4, 6).map((product, index) => (
              <div key={product.id} className="relative group">
                <Link href={product.url || "/products"} className="block">
                  <div className="relative h-[300px] lg:h-[350px] bg-gray-50 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.product}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                      {product.product}
                    </h3>
                    <p className="text-base lg:text-lg text-white/90 mb-3 font-light">
                      {product.title}
                    </p>

                    <div className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200">
                      <span className="font-medium">
                        {isInitialized && language === "ko" ? "자세히 보기" : "Learn more"}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
