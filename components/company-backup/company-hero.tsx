"use client"

import { Button } from "@/components/ui/button"
import { translations } from "@/constants/translations"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"

interface CompanyHeroProps {
  className?: string
}

export function CompanyHero({ className }: CompanyHeroProps) {
  const { language, isInitialized } = useLanguage()
  const currentLanguage = isInitialized ? language : "en"
  const t = translations[currentLanguage]

  return (
    <section className={`relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center bg-gray-200 scale-105"
              style={{
                backgroundImage: `url(/placeholder.svg?height=1080&width=1920)`,
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight text-center">
          <span className="block mb-2 sm:mb-4">{t.company}</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium text-center mb-4">
          Enabling nanoscale imaging through precision vibration control technology
        </p>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2">
            DAEIL SYSTEMS
          </h2>
          <p className="text-lg text-blue-300">
            Since 1984
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/company/overview">
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <p className="text-white text-xs sm:text-sm font-medium">Scroll to explore</p>
        <div className="animate-bounce">
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </div>
      </div>
    </section>
  )
}
