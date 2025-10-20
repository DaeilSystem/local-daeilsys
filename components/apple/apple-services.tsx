"use client"

import { newsItems, newsItemsEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface AppleServicesProps {
  className?: string
}

export function AppleServices({ className }: AppleServicesProps) {
  const { language, isInitialized } = useLanguage()
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)

  const newsData = isInitialized ? (language === "ko" ? newsItems : newsItemsEn) : newsItemsEn
  const latestNews = newsData?.slice(0, 6) || []

  // 서비스 데이터 (뉴스룸, 지원, 교육 등)
  const services = [
    {
      id: "newsroom",
      title: isInitialized && language === "ko" ? "뉴스룸" : "Newsroom",
      subtitle: isInitialized && language === "ko" ? "대일시스템의 최신 소식" : "Latest news from DAEIL SYSTEMS",
      description: isInitialized && language === "ko" ? "기술 혁신과 회사 소식을 확인하세요." : "Stay updated with our latest innovations and company news.",
      items: latestNews.slice(0, 3).map(news => ({
        title: news.title,
        description: news.excerpt
      })),
      bgColor: "bg-gray-900",
      textColor: "text-white",
      url: "/newsroom"
    },
    {
      id: "support",
      title: isInitialized && language === "ko" ? "고객 지원" : "Customer Support",
      subtitle: isInitialized && language === "ko" ? "전문적인 기술 지원" : "Professional technical support",
      description: isInitialized && language === "ko" ? "24/7 전문 기술 지원을 받으세요." : "Get 24/7 professional technical support.",
      items: [
        { title: isInitialized && language === "ko" ? "DVIA-T 설정 방법 동영상" : "DVIA-T Setup Video", description: "2025년 1월 15일 업로드" },
        { title: isInitialized && language === "ko" ? "공압 지지대 사용 매뉴얼" : "Pneumatic Support Manual", description: "2024년 12월 09일 업로드" },
        { title: isInitialized && language === "ko" ? "광학 테이블 설정 가이드" : "Optical Table Setup Guide", description: "2024년 11월 18일 업로드" }
      ],
      bgColor: "bg-blue-600",
      textColor: "text-white",
      url: "/support"
    },
    {
      id: "education",
      title: isInitialized && language === "ko" ? "케이스 스터디" : "Case Studies",
      subtitle: isInitialized && language === "ko" ? "실제 설치 사례" : "Real installation cases",
      description: isInitialized && language === "ko" ? "고객사별 제품 설치 및 성능 사례를 확인하세요." : "Check product installation and performance cases by customers.",
      items: [
        { title: isInitialized && language === "ko" ? "Thermo Fisher Scios 2 설치 보고서" : "Thermo Fisher Scios 2 Installation", description: "SILA 고객사 - DVIA-MB1000" },
        { title: isInitialized && language === "ko" ? "Thermo Fisher Glacios 2 설치 보고서" : "Thermo Fisher Glacios 2 Installation", description: "NOVARTIS 고객사 - DVIA-MB3000" },
        { title: isInitialized && language === "ko" ? "추가 설치 사례" : "Additional Cases", description: "다양한 고객사 성공 사례" }
      ],
      bgColor: "bg-purple-600",
      textColor: "text-white",
      url: "/support/case-studies"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [services.length])

  const currentService = services[currentServiceIndex]

  return (
    <section className={`relative ${className}`}>
      {/* Service Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            {currentService.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {currentService.subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            {currentService.description}
          </p>
        </div>
      </div>

      {/* Service Content */}
      <div className={`${currentService.bgColor} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentService.items.map((item, index) => (
              <div key={index} className={`${currentService.textColor} group`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {item.description}
                  </p>
                  <Link
                    href={currentService.url}
                    className="inline-flex items-center text-white hover:text-white/80 transition-colors duration-200"
                  >
                    <span className="font-medium mr-2">
                      {isInitialized && language === "ko" ? "자세히 보기" : "Learn more"}
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Service Navigation */}
          <div className="flex justify-center items-center mt-12 gap-4">
            <button
              onClick={() => setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentServiceIndex
                      ? 'bg-white'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentServiceIndex((prev) => (prev + 1) % services.length)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
            {isInitialized && language === "ko" ? "지금 시작하세요" : "Get Started Today"}
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            {isInitialized && language === "ko"
              ? "대일시스템은 다르게 생각하는 사람들에 관한 것입니다. 진동 제어 시스템을 통해 세상을 변화시키고, 인류를 앞으로 나아가게 하는 차이를 만드는 것을 창조하고 싶어하는 사람들입니다."
              : "DAEIL SYSTEMS is about people who think differently, people who want to use vibration isolation systems to help them change the world, to help them create things that make a difference and push the human race forward."
            }
          </p>
          <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200">
              {isInitialized && language === "ko" ? "문의하기" : "Contact Us"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
