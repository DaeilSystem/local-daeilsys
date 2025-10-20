"use client"

import { Button } from "@/components/ui/button"
import { products, productsEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface DaeilsysFeaturedProductsShowcaseProps {
  className?: string
}

export function DaeilsysFeaturedProductsShowcase({ className }: DaeilsysFeaturedProductsShowcaseProps) {
  const { language, isInitialized } = useLanguage()
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  // 주력 제품들 필터링 (DVIA-T, DVIO, DVIA-P, DVIA-M)
  const allProducts = isInitialized ? (language === "ko" ? products : productsEn) : productsEn
  const featuredProducts = allProducts?.filter(product =>
    product.name.includes("DVIA-T") ||
    product.name.includes("DVIO") ||
    product.name.includes("DVIA-P") ||
    product.name.includes("DVIA-M")
  ) || []

  const productSections = [
    {
      id: "dvia-t",
      title: isInitialized && language === "ko" ? "탁상형 액티브 제진대" : "Tabletop Active Vibration Isolation",
      subtitle: isInitialized && language === "ko" ? "언제, 어디서, 누구나 쉽게 사용할 수 있는" : "Easy to use anywhere, anytime, by anyone",
      products: featuredProducts.filter(p => p.name.includes("DVIA-T")),
      bgColor: "from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900"
    },
    {
      id: "dvio",
      title: isInitialized && language === "ko" ? "프리미엄 광학테이블" : "Premium Optical Tables",
      subtitle: isInitialized && language === "ko" ? "Since 1993년부터 제조한 국내 최초의" : "The first premium optical table manufactured since 1993",
      products: featuredProducts.filter(p => p.name.includes("DVIO")),
      bgColor: "from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-900"
    },
    {
      id: "dvia-p",
      title: isInitialized && language === "ko" ? "공압식 액티브 제진대" : "Active Pneumatic Vibration Isolation",
      subtitle: isInitialized && language === "ko" ? "고해상도 웨이퍼 검사 장비를 위한" : "For high-resolution wafer inspection equipment",
      products: featuredProducts.filter(p => p.name.includes("DVIA-P")),
      bgColor: "from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900"
    },
    {
      id: "dvia-m",
      title: isInitialized && language === "ko" ? "전자현미경용 제진대" : "Electron Microscopy Vibration Isolation",
      subtitle: isInitialized && language === "ko" ? "초정밀 전자현미경을 위한" : "For ultra-precision electron microscopy",
      products: featuredProducts.filter(p => p.name.includes("DVIA-M")),
      bgColor: "from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-900"
    }
  ]

  return (
    <div className={`py-20 ${className}`}>
      {productSections.map((section, sectionIndex) => (
        <section key={section.id} className={`relative overflow-hidden ${
          sectionIndex % 2 === 0 ? 'bg-gradient-to-br' : 'bg-gradient-to-bl'
        } ${section.bgColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className={`flex flex-col ${sectionIndex % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-8">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                    {section.subtitle}
                  </p>
                </div>

                {/* Product Features */}
                <div className="mb-8">
                  <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
                    {section.products.map((product, index) => (
                      <li key={product.id} className="flex items-center justify-center lg:justify-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        <span>{product.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href={`/products/${section.id}`}>
                    <Button
                      size="lg"
                      className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                      {isInitialized && language === "ko" ? "더 알아보기" : "Learn More"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    {isInitialized && language === "ko" ? "데모 보기" : "Watch Demo"}
                  </Button>
                </div>
              </div>

              {/* Product Images */}
              <div className="flex-1">
                <div className="relative">
                  {section.products.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {section.products.slice(0, 4).map((product, index) => (
                        <div
                          key={product.id}
                          className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                          onMouseEnter={() => setHoveredProduct(product.id)}
                          onMouseLeave={() => setHoveredProduct(null)}
                        >
                          <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            {hoveredProduct === product.id && (
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <Play className="h-12 w-12 text-white" />
                              </div>
                            )}
                          </div>

                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {product.name}
                          </h3>

                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {product.description}
                          </p>

                          <Link href={product.url} className="absolute inset-0" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-24 -translate-x-24" />
        </section>
      ))}
    </div>
  )
}
