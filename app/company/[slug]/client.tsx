"use client"

import { useLanguage } from "@/hooks/use-language"
import { getText, companyValues, companyTimeline, tradeShows, companyInfo, type CompanySection } from "@/data/company"
import { ContainerCarousel } from "@/components/company/container-carousel"
import { FullWidthCarousel } from "@/components/company/full-width-carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Play, Calendar, MapPin, Users, Building2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface CompanySubpageClientProps {
  section: CompanySection
}

export default function CompanySubpageClient({ section }: CompanySubpageClientProps) {
  const { language } = useLanguage()

  const renderContent = () => {
    switch (section.slug) {
      case "overview":
        return <OverviewSection section={section} language={language} />
      case "vision-mission":
        return <VisionMissionSection section={section} language={language} />
      case "values":
        return <ValuesSection section={section} language={language} />
      case "company-history":
        return <HistorySection section={section} language={language} />
      case "company-intro-video":
        return <VideoSection section={section} language={language} />
      case "sustainability-management":
        return <SustainabilitySection section={section} language={language} />
      case "trade-shows":
        return <TradeShowsSection section={section} language={language} />
      default:
        return <DefaultSection section={section} language={language} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {renderContent()}

      {/* 다른 섹션으로 이동 */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center text-gray-900">
            {language === "ko" ? "회사 소개 더 알아보기" : "Learn More About Us"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { slug: "overview", label: { ko: "개요", en: "Overview" } },
              { slug: "vision-mission", label: { ko: "비전과 사명", en: "Vision & Mission" } },
              { slug: "values", label: { ko: "가치", en: "Values" } },
              { slug: "company-history", label: { ko: "회사 연혁", en: "Company History" } },
              { slug: "sustainability-management", label: { ko: "지속가능경영", en: "Sustainability" } },
              { slug: "company-intro-video", label: { ko: "회사 소개 영상", en: "Intro Video" } },
              { slug: "trade-shows", label: { ko: "전시회", en: "Trade Shows" } },
            ].filter(item => item.slug !== section.slug).map((item) => (
              <Card
                key={item.slug}
                className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group rounded-2xl bg-white"
              >
                <Link href={`/company/${item.slug}`}>
                  <CardContent className="p-4 sm:p-6 flex items-center justify-between">
                    <span className="text-sm sm:text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.label[language]}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Overview Section Component
function OverviewSection({ section, language }: { section: CompanySection; language: "ko" | "en" }) {
  const paragraphs = getText(section.content, language).split("\n\n")

  return (
    <>
      {/* Hero Section - Light Apple Style */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            {getText(section.title, language)}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            {getText(section.description, language)}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      {section.image && (
        <section className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${section.image})` }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>
      )}

      {/* Company Info Cards */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl bg-white">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <p className="text-sm text-gray-500 mb-1">{language === "ko" ? "설립" : "Founded"}</p>
                <p className="text-xl font-semibold text-gray-900">{companyInfo.yearEstablished}</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl bg-white">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <p className="text-sm text-gray-500 mb-1">{language === "ko" ? "직원 수" : "Employees"}</p>
                <p className="text-xl font-semibold text-gray-900">{getText(companyInfo.employees, language)}</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl bg-white">
              <CardContent className="p-6 text-center">
                <Building2 className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <p className="text-sm text-gray-500 mb-1">{language === "ko" ? "업종" : "Industry"}</p>
                <p className="text-xl font-semibold text-gray-900">{getText(companyInfo.industry, language)}</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl bg-white">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <p className="text-sm text-gray-500 mb-1">{language === "ko" ? "위치" : "Location"}</p>
                <p className="text-xl font-semibold text-gray-900">{language === "ko" ? "경기도 용인시" : "Yongin, Korea"}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center text-gray-900 mb-8 sm:mb-12">
            {language === "ko" ? "주요 제품" : "Our Products"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {companyInfo.products.map((product, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl bg-white">
                <CardContent className="p-6 text-center">
                  <p className="font-medium text-gray-900">
                    {getText(product, language)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Vision & Mission Section Component
function VisionMissionSection({ section, language }: { section: CompanySection; language: "ko" | "en" }) {
  const content = getText(section.content, language)
  const parts = content.split(/\*\*미션\*\*|\*\*Mission\*\*/i)
  const visionContent = parts[0]?.replace(/\*\*비전\*\*|\*\*Vision\*\*/i, "").trim() || ""
  const missionContent = parts[1]?.trim() || ""

  return (
    <>
      {/* Vision Hero - Light Apple Style */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-600 text-sm sm:text-base font-medium mb-6">
            {language === "ko" ? "우리의 비전" : "Our Vision"}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8 whitespace-pre-line">
            {language === "ko"
              ? "나노스케일 이미징으로\n더 나은 세상을 향하여"
              : "We enable nanoscale imaging\nto make the world a better place"}
          </h1>
        </div>
      </section>

      {/* Vision Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
            {visionContent.split("\n\n").slice(1).join("\n\n")}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-600 text-sm sm:text-base font-medium mb-6">
            {language === "ko" ? "우리의 미션" : "Our Mission"}
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 leading-relaxed">
            {missionContent}
          </p>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center text-gray-900 mb-8 sm:mb-12">
            {language === "ko" ? "우리가 기여하는 분야" : "Areas We Impact"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {[
              { ko: "반도체", en: "Semiconductor" },
              { ko: "생명과학", en: "Life Science" },
              { ko: "광학 레이저", en: "Photonics" },
              { ko: "디스플레이", en: "Display" },
              { ko: "소재 분석", en: "Materials" },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl bg-white">
                <CardContent className="p-6 text-center">
                  <p className="font-medium text-gray-900">{item[language]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Values Section Component
function ValuesSection({ section, language }: { section: CompanySection; language: "ko" | "en" }) {
  return (
    <>
      {/* Hero - Light Apple Style */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 whitespace-pre-line">
            {language === "ko" ? "우리의 가치가\n길을 이끕니다." : "Our values\nlead the way."}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            {getText(section.content, language)}
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {companyValues.map((value, index) => (
              <Card
                key={value.id}
                className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl bg-white"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-lg font-semibold text-blue-600">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        {getText(value.title, language)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {getText(value.description, language)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// History Section Component
function HistorySection({ section, language }: { section: CompanySection; language: "ko" | "en" }) {
  // Timeline을 캐러셀용 스토리로 변환
  const historyStories = companyTimeline
    .filter(item => item.image)
    .map(item => ({
      id: item.year,
      title: `${item.year} - ${getText(item.event, language)}`,
      image: item.image!,
      alt: getText(item.event, language)
    }))

  return (
    <>
      {/* Hero - Light Apple Style */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-blue-600 mb-4">40+</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6">
            {language === "ko" ? "년의 혁신" : "Years of Innovation"}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {getText(section.content, language).split("\n\n")[0]}
          </p>
        </div>
      </section>

      {/* Timeline Carousel */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center text-gray-900">
            {language === "ko" ? "주요 연혁" : "Key Milestones"}
          </h2>
        </div>
        <FullWidthCarousel stories={historyStories} />
      </section>

      {/* All Timeline Events */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {companyTimeline.map((event) => (
              <div
                key={event.year}
                className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="flex-shrink-0 text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 w-16 sm:w-20">
                  {event.year}
                </span>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">
                    {getText(event.event, language)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Video Section Component
function VideoSection({ section, language }: { section: CompanySection; language: "ko" | "en" }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = section.video_url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1]

  return (
    <>
      {/* Hero - Light Apple Style */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            {getText(section.title, language)}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            {getText(section.description, language)}
          </p>
        </div>
      </section>

      {/* Video Player */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            {videoId ? (
              isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="Company Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                    >
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 ml-1" fill="currentColor" />
                    </button>
                  </div>
                </>
              )
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                Video not available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            {getText(section.content, language).replace(/\*\*/g, "")}
          </p>
        </div>
      </section>
    </>
  )
}

// Sustainability Section Component
function SustainabilitySection({ section, language }: { section: CompanySection; language: "ko" | "en" }) {
  const paragraphs = getText(section.content, language).split("\n\n")

  const pillars = [
    {
      title: { ko: "품질 보증", en: "Quality Assurance" },
      description: { ko: "제품과 제조 과정에서 결함이 없도록 끊임없는 점검", en: "Continuous inspection to ensure defect-free products and processes" },
    },
    {
      title: { ko: "고객 만족", en: "Customer Satisfaction" },
      description: { ko: "모든 고객의 니즈를 충족시키기 위한 지속적 노력", en: "Continuous efforts to meet all customer needs" },
    },
    {
      title: { ko: "사회 기여", en: "Social Contribution" },
      description: { ko: "과학, 산업기술, 사회에 기여하는 목표 추구", en: "Pursuing goals that contribute to science, technology, and society" },
    },
  ]

  return (
    <>
      {/* Hero - Light Apple Style */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-green-600 text-sm sm:text-base font-medium mb-6">
            {language === "ko" ? "지속가능경영" : "Sustainability Management"}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            {language === "ko" ? "완전성을 위한 열정" : "Passion for Perfection"}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            {getText(section.description, language)}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center text-gray-900 mb-8 sm:mb-12">
            {language === "ko" ? "핵심 요소" : "Key Pillars"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl bg-white">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    {pillar.title[language]}
                  </h3>
                  <p className="text-gray-600">
                    {pillar.description[language]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Trade Shows Section Component
function TradeShowsSection({ section, language }: { section: CompanySection; language: "ko" | "en" }) {
  const [selectedShow, setSelectedShow] = useState(0)

  // Trade show images를 캐러셀용 스토리로 변환
  const tradeShowStories = tradeShows.flatMap(show =>
    show.images.slice(0, 2).map((image, idx) => ({
      id: `${show.name}-${idx}`,
      title: show.name,
      image: image,
      alt: show.name
    }))
  )

  return (
    <>
      {/* Hero - Light Apple Style */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 whitespace-pre-line">
            {language === "ko" ? "글로벌 무대에서\n기술력을 선보입니다." : "Showcasing our technology\non the global stage."}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {getText(section.content, language)}
          </p>
        </div>
      </section>

      {/* Trade Show Carousel */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <FullWidthCarousel stories={tradeShowStories} />
      </section>

      {/* Trade Shows List */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center text-gray-900 mb-8 sm:mb-12">
            {language === "ko" ? "참가 전시회" : "Trade Shows We Attend"}
          </h2>
          <div className="space-y-4">
            {tradeShows.map((show, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl bg-white">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{show.name}</h3>
                    <p className="text-gray-500 text-sm">{show.year}</p>
                  </div>
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                    {show.images.length} {language === "ko" ? "장의 사진" : "photos"}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center text-gray-900 mb-8 sm:mb-12">
            {language === "ko" ? "전시회 갤러리" : "Exhibition Gallery"}
          </h2>

          {/* Show Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tradeShows.map((show, index) => (
              <Button
                key={index}
                variant={selectedShow === index ? "default" : "outline"}
                onClick={() => setSelectedShow(index)}
                className="rounded-full"
              >
                {show.name.split(" ").slice(0, 3).join(" ")}
              </Button>
            ))}
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tradeShows[selectedShow].images.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`${tradeShows[selectedShow].name} - ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Default Section Component
function DefaultSection({ section, language }: { section: CompanySection; language: "ko" | "en" }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
          {getText(section.title, language)}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          {getText(section.content, language)}
        </p>
      </div>
    </section>
  )
}
