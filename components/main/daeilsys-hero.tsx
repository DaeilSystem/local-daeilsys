"use client"

import { Button } from "@/components/ui/button"
import { heroSlides, heroSlidesEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, ChevronDown, Play } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface DaeilsysHeroProps {
  className?: string
}

export function DaeilsysHero({ className }: DaeilsysHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const { language, isInitialized } = useLanguage()

  const slides = isInitialized ? (language === "ko" ? heroSlides : heroSlidesEn) : heroSlidesEn

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slides.length)
    }, 5000) // 슬라이드 전환을 5초로 설정

    return () => clearInterval(interval)
  }, [isPlaying, slides.length])

  const handleReplay = () => {
    setCurrentImageIndex(0)
    setIsPlaying(true)
  }

  return (
    <>
      <style jsx>{`
        @keyframes kenBurns {
          0% { transform: scale(1.05) translate(0, 0); }
          25% { transform: scale(1.08) translate(-1%, -0.5%); }
          50% { transform: scale(1.06) translate(0.5%, -1%); }
          75% { transform: scale(1.09) translate(-0.5%, 0.5%); }
          100% { transform: scale(1.07) translate(1%, 0); }
        }

        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
      `}</style>
      <section className={`relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-gray-200 scale-105 transition-transform duration-[10000ms] ease-out hover:scale-110"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight text-center">
          <span className="block mb-2 sm:mb-4">{slides[currentImageIndex].title}</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium text-center mb-4">
          {slides[currentImageIndex].subtitle}
        </p>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2">
            {slides[currentImageIndex].product}
          </h2>
          <p className="text-lg text-blue-300">
            {slides[currentImageIndex].category}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {slides[currentImageIndex].url && (
            <Link href={slides[currentImageIndex].url}>
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="mr-2">
                  {isInitialized && language === "ko" ? "더 알아보기" : "Learn More"}
                </span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={handleReplay}
            className="text-white hover:text-white hover:bg-white/30 rounded-full p-3 sm:p-4 bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg"
          >
            <Play className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Replay animation</span>
          </Button>
        </div>
      </div>

      {/* Animation Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
              index === currentImageIndex
                ? "bg-white shadow-lg scale-110"
                : "bg-white/50 hover:bg-white/70 hover:scale-105"
            }`}
            title={slide.product}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <p className="text-white text-xs sm:text-sm font-medium">Scroll to explore</p>
        <div className="animate-bounce">
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </div>
      </div>
      </section>
    </>
  )
}
