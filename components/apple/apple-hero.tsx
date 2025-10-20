"use client"

import { heroSlides, heroSlidesEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface AppleHeroProps {
  className?: string
}

export function AppleHero({ className }: AppleHeroProps) {
  const { language, isInitialized } = useLanguage()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  // DVIA-ULF 슬라이드만 필터링
  const allSlides = isInitialized ? (language === "ko" ? heroSlides : heroSlidesEn) : heroSlidesEn
  const slides = allSlides?.filter(slide => slide.product.includes("DVIA-ULF")) || []

  const currentSlide = slides[currentSlideIndex] || slides[0]

  useEffect(() => {
    if (slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  if (!currentSlide) {
    return null
  }

  return (
    <section className={`relative min-h-screen bg-black flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentSlide.image}
          alt={currentSlide.product}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Product Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 tracking-tight">
            {currentSlide.product}
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 font-light">
            {currentSlide.title}
          </p>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {currentSlide.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={currentSlide.url || "/products"}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200 flex items-center gap-2">
                자세히 보기
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>

            <Link href="/products/active-vibration-systems">
              <button className="text-white hover:text-white/80 text-lg font-medium transition-colors duration-200 flex items-center gap-2">
                구매하기
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlideIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlideIndex
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
