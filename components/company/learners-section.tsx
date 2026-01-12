"use client"

import { ContainerCarousel } from "./container-carousel"
import { useLanguage } from "@/hooks/use-language"
import { getText } from "@/data/company"

interface LearnersSectionProps {
  className?: string
}

export function LearnersSection({ className }: LearnersSectionProps) {
  const { language } = useLanguage()

  // 제품 및 기술 스토리
  const productStories = [
    {
      id: "1",
      title: language === 'ko'
        ? "액티브 제진대 - 나노스케일 정밀도"
        : "Active Vibration Isolation - Nanoscale Precision",
      image: "https://www.daeilsys.com/wp-content/uploads/2020/05/2007-Introduced-Active-Vibration-Isolation-System.png",
      alt: "Active Vibration Isolation System"
    },
    {
      id: "2",
      title: language === 'ko'
        ? "광학테이블 - 연구와 산업의 기반"
        : "Optical Tables - Foundation for Research & Industry",
      image: "https://www.daeilsys.com/wp-content/uploads/2020/05/1993-Introduced-first-optical-table-in-Korea.png",
      alt: "Optical Table"
    },
    {
      id: "3",
      title: language === 'ko'
        ? "반도체 및 디스플레이 산업 지원"
        : "Supporting Semiconductor & Display Industries",
      image: "https://www.daeilsys.com/wp-content/uploads/2020/05/2016-Built-2nd-factory-DAEIL-SYSTEMS.png",
      alt: "Factory supporting industries"
    },
    {
      id: "4",
      title: language === 'ko'
        ? "글로벌 네트워크와 파트너십"
        : "Global Network & Partnerships",
      image: "https://www.daeilsys.com/wp-content/uploads/2020/06/Laser-World-of-Photonics-2019-06.jpg",
      alt: "Global partnerships at trade shows"
    },
    {
      id: "5",
      title: language === 'ko'
        ? "40년 기술력의 결정체"
        : "40 Years of Technological Excellence",
      image: "https://www.daeilsys.com/wp-content/uploads/2024/03/daeil-systems-celebrates-40-years-flag-min.png",
      alt: "40 years of excellence"
    }
  ]

  const sectionText = {
    title: {
      ko: "첨단 기술로\n세상을 바꿉니다.",
      en: "Transforming the world\nwith advanced technology."
    },
    description: {
      ko: "반도체, 생명과학, 광학 레이저 등 첨단 산업 분야에서 정밀 측정을 가능하게 하는 제진 솔루션을 제공합니다.",
      en: "We provide vibration isolation solutions that enable precision measurement in advanced industries including semiconductors, life sciences, and photonics."
    }
  }

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className} bg-[#F5F5F7]`}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-gray-900 whitespace-pre-line">
            {getText(sectionText.title, language)}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            {getText(sectionText.description, language)}
          </p>
        </div>
      </div>

      {/* Container Carousel */}
      <ContainerCarousel stories={productStories} defaultCardsPerView={3} />
    </section>
  )
}
