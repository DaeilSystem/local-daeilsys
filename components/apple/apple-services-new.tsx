"use client"

import { newsItems, newsItemsEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

interface AppleServicesNewProps {
  className?: string
}

export function AppleServicesNew({ className }: AppleServicesNewProps) {
  const { language, isInitialized } = useLanguage()

  const newsData = isInitialized ? (language === "ko" ? newsItems : newsItemsEn) : newsItemsEn
  const latestNews = newsData?.slice(0, 3) || []

  const services = [
    {
      id: "newsroom",
      title: isInitialized && language === "ko" ? "뉴스룸" : "Newsroom",
      subtitle: isInitialized && language === "ko" ? "대일시스템의 최신 소식" : "Latest news from DAEIL SYSTEMS",
      items: latestNews,
      bgColor: "bg-gray-900",
      textColor: "text-white",
      url: "/newsroom"
    },
    {
      id: "support",
      title: isInitialized && language === "ko" ? "고객 지원" : "Customer Support",
      subtitle: isInitialized && language === "ko" ? "전문적인 기술 지원" : "Professional technical support",
      items: [
        { title: isInitialized && language === "ko" ? "DVIA-T 설정 방법 동영상" : "DVIA-T Setup Video", excerpt: "2025년 1월 15일 업로드" },
        { title: isInitialized && language === "ko" ? "공압 지지대 사용 매뉴얼" : "Pneumatic Support Manual", excerpt: "2024년 12월 09일 업로드" },
        { title: isInitialized && language === "ko" ? "광학 테이블 설정 가이드" : "Optical Table Setup Guide", excerpt: "2024년 11월 18일 업로드" }
      ],
      bgColor: "bg-blue-600",
      textColor: "text-white",
      url: "/support"
    },
    {
      id: "case-studies",
      title: isInitialized && language === "ko" ? "케이스 스터디" : "Case Studies",
      subtitle: isInitialized && language === "ko" ? "실제 설치 사례" : "Real installation cases",
      items: [
        { title: isInitialized && language === "ko" ? "Thermo Fisher Scios 2 설치 보고서" : "Thermo Fisher Scios 2 Installation", excerpt: "SILA 고객사 - DVIA-MB1000" },
        { title: isInitialized && language === "ko" ? "Thermo Fisher Glacios 2 설치 보고서" : "Thermo Fisher Glacios 2 Installation", excerpt: "NOVARTIS 고객사 - DVIA-MB3000" },
        { title: isInitialized && language === "ko" ? "추가 설치 사례" : "Additional Cases", excerpt: "다양한 고객사 성공 사례" }
      ],
      bgColor: "bg-purple-600",
      textColor: "text-white",
      url: "/support/case-studies"
    }
  ]

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* 서비스 그리드 - Apple 스타일 큰 카드들 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16">
          {services.map((service) => (
            <Link key={service.id} href={service.url} className="group">
              <div className={`${service.bgColor} p-8 h-96 flex flex-col justify-between group-hover:scale-105 transition-transform duration-300`}>
                <div>
                  <h3 className={`text-2xl font-bold ${service.textColor} mb-2`}>
                    {service.title}
                  </h3>
                  <p className={`${service.textColor} opacity-80 mb-6`}>
                    {service.subtitle}
                  </p>

                  <div className="space-y-3">
                    {service.items.slice(0, 3).map((item, index) => (
                      <div key={index} className={`${service.textColor} opacity-90`}>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm opacity-70">{item.excerpt}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${service.textColor} opacity-80`}>
                  <span className="text-sm">
                    {isInitialized && language === "ko" ? "자세히 보기" : "Learn more"} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 회사 소개 섹션 */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {isInitialized && language === "ko" ? "지금 시작하세요" : "Get Started Today"}
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {isInitialized && language === "ko"
              ? "대일시스템은 다르게 생각하는 사람들에 관한 것입니다. 진동 제어 시스템을 통해 세상을 변화시키고, 인류를 앞으로 나아가게 하는 차이를 만드는 것을 창조하고 싶어하는 사람들입니다."
              : "DAEIL SYSTEMS is about people who think differently, people who want to use vibration isolation systems to help them change the world, to help them create things that make a difference and push the human race forward."
            }
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            {isInitialized && language === "ko" ? "문의하기" : "Contact Us"}
          </Link>
        </div>
      </div>
    </section>
  )
}
