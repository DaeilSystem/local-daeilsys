"use client"

import { Button } from "@/components/ui/button"
import { heroSlides, heroSlidesEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface DaeilsysNewHeroProps {
  className?: string
}

export function DaeilsysNewHero({ className }: DaeilsysNewHeroProps) {
  const { language, isInitialized } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // DVIA-ULF 슬라이드만 필터링
  const allSlides = isInitialized ? (language === "ko" ? heroSlides : heroSlidesEn) : heroSlidesEn
  const slides = allSlides?.filter(slide => slide.product.includes("DVIA-ULF")) || []

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const currentSlide = slides[currentImageIndex] || slides[0]

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

        .hero-bg {
          background-image: url('${currentSlide?.image}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: kenBurns 20s ease-in-out infinite;
        }

        .content-animation {
          animation: fadeInUp 1s ease-out;
        }

        .pulse-animation {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
      `}</style>

      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0 hero-bg" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="content-animation">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                {currentSlide?.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              {currentSlide?.subtitle}
            </p>

            {/* Product Name */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                {currentSlide?.product}
              </h2>
              <p className="text-lg sm:text-xl text-white/80 font-medium">
                {currentSlide?.category}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href={currentSlide?.url || "/products/active-vibration-systems"}>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  {isInitialized && language === "ko" ? "더 알아보기" : "Learn More"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/products/active-vibration-systems">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
                >
                  {isInitialized && language === "ko" ? "제품 보기" : "View Products"}
                </Button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="pulse-animation">
                <ChevronDown className="h-8 w-8 text-white/70 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
