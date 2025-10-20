"use client"

import { Button } from "@/components/ui/button"
import { heroSlides, heroSlidesEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface DaeilsysLargeSlideShowcaseProps {
  className?: string
}

export function DaeilsysLargeSlideShowcase({ className }: DaeilsysLargeSlideShowcaseProps) {
  const { language, isInitialized } = useLanguage()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // DVIA-ULF를 제외한 주요 제품 슬라이드들
  const allSlides = isInitialized ? (language === "ko" ? heroSlides : heroSlidesEn) : heroSlidesEn
  const showcaseSlides = allSlides?.filter(slide => !slide.product.includes("DVIA-ULF")) || []

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % showcaseSlides.length)
    }, 6000) // 6초 간격

    return () => clearInterval(interval)
  }, [isPlaying, showcaseSlides.length])

  const currentSlide = showcaseSlides[currentSlideIndex] || showcaseSlides[0]

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % showcaseSlides.length)
    setIsPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length)
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-content {
          animation: fadeInUp 0.8s ease-out;
        }

        .image-container {
          animation: slideInFromRight 0.8s ease-out;
        }

        .text-container {
          animation: slideInFromLeft 0.8s ease-out;
        }
      `}</style>

      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ${className}`}>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

            {/* Content */}
            <div className="text-container">
              <div className="slide-content">
                {/* Category Badge */}
                <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  {currentSlide?.category}
                </div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {currentSlide?.title}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light">
                  {currentSlide?.subtitle}
                </p>

                {/* Product Name */}
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {currentSlide?.product}
                  </h2>
                </div>

                {/* Features List */}
                <div className="mb-10">
                  <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0" />
                      <span>
                        {isInitialized && language === "ko"
                          ? "최첨단 진동 제어 기술"
                          : "Advanced vibration control technology"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 mt-2 flex-shrink-0" />
                      <span>
                        {isInitialized && language === "ko"
                          ? "높은 안정성과 신뢰성"
                          : "High stability and reliability"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-4 mt-2 flex-shrink-0" />
                      <span>
                        {isInitialized && language === "ko"
                          ? "사용자 친화적 인터페이스"
                          : "User-friendly interface"}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={currentSlide?.url || "/products"}>
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
                    onClick={togglePlayPause}
                    className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
                  >
                    <Play className={`mr-2 h-5 w-5 ${isPlaying ? 'animate-pulse' : ''}`} />
                    {isPlaying
                      ? (isInitialized && language === "ko" ? "일시정지" : "Pause")
                      : (isInitialized && language === "ko" ? "재생" : "Play")
                    }
                  </Button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="image-container">
              <div className="relative">
                {/* Main Product Image */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={currentSlide?.image || "/daeilsys-images/default-product.jpg"}
                    alt={currentSlide?.product || "Product"}
                    fill
                    className="object-cover transition-all duration-500"
                    priority
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <Button
                      size="lg"
                      className="bg-white/90 text-black hover:bg-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-110"
                    >
                      <Play className="mr-2 h-6 w-6" fill="currentColor" />
                      {isInitialized && language === "ko" ? "데모 보기" : "Watch Demo"}
                    </Button>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {showcaseSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-200 ${
                    index === currentSlideIndex
                      ? 'bg-gray-900 scale-125'
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="lg"
                onClick={prevSlide}
                className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={nextSlide}
                className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      </section>
    </>
  )
}
