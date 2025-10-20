"use client"

import { heroSlides, heroSlidesEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface AppleHeroNewProps {
  className?: string
}

export const AppleHeroNew: React.FC<AppleHeroNewProps> = ({ className }) => {
  const { language, isInitialized } = useLanguage()

  // 여러 제품을 그리드로 표시
  const allSlides = isInitialized ? (language === "ko" ? heroSlides : heroSlidesEn) : heroSlidesEn
  const slides = allSlides || []

  return (
    <section className={`bg-white text-black pt-16 ${className}`}>
      <div className="w-full">
        {/* 2x2 그리드로 제품 배치 */}
        <div className="flex flex-col gap-4">
          {slides.slice(0, 4).map((slide, index) => (
            <div
              key={slide.id}
              className={`relative min-h-[650px] flex items-center justify-center overflow-hidden ${
                index === 3 ? 'bg-black text-white' : 'bg-gray-100'
              }`}
            >
              {/* 배경 이미지 */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.product}
                  fill
                  className="object-cover opacity-30"
                  priority={index === 0}
                />
              </div>

              {/* 오버레이 콘텐츠 */}
              <div className="relative z-10 text-center space-y-6 p-12">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                    {slide.product}
                  </h1>
                  <p className="text-xl lg:text-2xl max-w-lg mx-auto">
                    {slide.title}
                  </p>
                  <p className="text-lg max-w-lg mx-auto opacity-80">
                    {slide.subtitle}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={slide.url}
                    className={`px-8 py-3 rounded-full font-medium transition-colors ${
                      index === 3
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    Learn more
                  </Link>
                  <Link
                    href={slide.url}
                    className={`px-8 py-3 rounded-full font-medium transition-colors ${
                      index === 3
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

        {/* 나머지 제품들도 그리드로 표시 */}
        {slides.length > 4 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {slides.slice(4).map((slide, index) => (
              <div
                key={slide.id}
                className={`relative min-h-[650px] flex items-center justify-center overflow-hidden ${
                  index % 2 === 1 ? 'bg-black text-white' : 'bg-gray-100'
                }`}
              >
                {/* 배경 이미지 */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt={slide.product}
                    fill
                    className="object-cover opacity-30"
                  />
                </div>

                {/* 오버레이 콘텐츠 */}
                <div className="relative z-10 text-center space-y-6 p-12">
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                      {slide.product}
                    </h1>
                    <p className="text-xl lg:text-2xl max-w-lg mx-auto">
                      {slide.title}
                    </p>
                    <p className="text-lg max-w-lg mx-auto opacity-80">
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href={slide.url}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
                    >
                      Learn more
                    </Link>
                    <Link
                      href={slide.url}
                      className={`px-8 py-3 rounded-full font-medium transition-colors ${
                        index % 2 === 1
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
        )}
      </div>
    </section>
  )
}
