"use client"

import { heroSlides, heroSlidesEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface AppleProductsGridNewProps {
  className?: string
}

export const AppleProductsGridNew: React.FC<AppleProductsGridNewProps> = ({ className }) => {
  const { language, isInitialized } = useLanguage()

  // DVIA-ULF와 보증 서비스를 제외한 주요 제품들
  const allSlides = isInitialized ? (language === "ko" ? heroSlides : heroSlidesEn) : heroSlidesEn
  const productSlides = allSlides?.filter(slide =>
    !slide.product.includes("DVIA-ULF") &&
    !slide.product.includes("5년 보증") &&
    !slide.product.includes("Warranty")
  ) || []

  return (
    <section className={`bg-white max-h-[580px] overflow-hidden w-full ${className}`}>
      {/* 2x3 그리드로 제품 배치 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {productSlides.slice(0, 6).map((product, index) => (
          <div
            key={product.id}
            className={`relative h-[290px] flex items-center justify-center overflow-hidden ${
              index % 3 === 2 ? 'bg-black text-white' : 'bg-gray-100'
            }`}
          >
            {/* 배경 이미지 */}
            <div className="absolute inset-0">
              <Image
                src={product.image}
                alt={product.product}
                fill
                className="object-cover opacity-30"
              />
            </div>

            {/* 오버레이 콘텐츠 */}
            <div className="relative z-10 text-center space-y-4 p-8">
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-bold">
                  {product.product}
                </h2>
                <p className="text-sm lg:text-base max-w-xs mx-auto">
                  {product.title}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Link
                  href={product.url}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-full font-medium transition-colors"
                >
                  Learn more
                </Link>
                <Link
                  href={product.url}
                  className={`px-4 py-2 text-sm rounded-full font-medium transition-colors ${
                    index % 3 === 2
                      ? 'border border-gray-600 hover:bg-gray-800 text-white'
                      : 'border border-gray-400 hover:bg-gray-200 text-black'
                  }`}
                >
                  Buy
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
