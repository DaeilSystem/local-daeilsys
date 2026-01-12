"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getText } from "@/data/company"

interface WorkContinuesSectionProps {
  className?: string
}

export function WorkContinuesSection({ className }: WorkContinuesSectionProps) {
  const { language } = useLanguage()

  const initiatives = [
    {
      id: "sustainability",
      title: {
        ko: "지속가능경영으로 더 나은 미래를 만들어갑니다.",
        en: "Building a better future through sustainable management."
      },
      description: {
        ko: "대일시스템은 '완전성을 위한 열정'이라는 경영철학 아래 제품과 제조 과정에서 결함이 없는지 끊임없이 점검하고 확인합니다. 이러한 정신으로 과학, 산업기술, 사회에 기여하는 목표를 추구합니다.",
        en: "Under the management philosophy of 'Passion for Perfection', DAEIL SYSTEMS constantly checks and ensures there are no defects in products and manufacturing processes. With this spirit, we pursue our goal of contributing to science, industrial technology, and society."
      },
      links: [
        {
          text: { ko: "지속가능경영 더 알아보기", en: "Learn more about Sustainability" },
          href: "/company/sustainability-management"
        }
      ]
    },
    {
      id: "products",
      title: {
        ko: "제품 소개",
        en: "Our Products"
      },
      description: {
        ko: "액티브 제진대, 패시브 제진대, 광학테이블, 음향챔버 등 다양한 제진 솔루션을 제공합니다.",
        en: "We offer various vibration isolation solutions including active isolation systems, passive systems, optical tables, and acoustic enclosures."
      },
      links: [
        {
          text: { ko: "제품 보기", en: "View Products" },
          href: "/products"
        }
      ]
    },
    {
      id: "support",
      title: {
        ko: "고객지원",
        en: "Customer Support"
      },
      description: {
        ko: "전문 엔지니어가 설치부터 유지보수까지 완벽한 기술 지원을 제공합니다.",
        en: "Our professional engineers provide complete technical support from installation to maintenance."
      },
      links: [
        {
          text: { ko: "지원 받기", en: "Get Support" },
          href: "/support"
        }
      ]
    },
    {
      id: "contact",
      title: {
        ko: "문의하기",
        en: "Contact Us"
      },
      description: {
        ko: "제품 문의, 견적 요청, 기술 상담 등 궁금한 점이 있으시면 언제든 연락주세요.",
        en: "Contact us anytime for product inquiries, quote requests, or technical consultations."
      },
      links: [
        {
          text: { ko: "연락하기", en: "Contact" },
          href: "/contact"
        }
      ]
    },
    {
      id: "newsroom",
      title: {
        ko: "뉴스룸",
        en: "Newsroom"
      },
      description: {
        ko: "대일시스템의 최신 소식, 제품 업데이트, 전시회 정보를 확인하세요.",
        en: "Check out the latest news, product updates, and exhibition information from DAEIL SYSTEMS."
      },
      links: [
        {
          text: { ko: "뉴스 보기", en: "View News" },
          href: "/newsroom"
        }
      ]
    }
  ]

  const sectionTitle = {
    ko: "대일시스템과 함께 하세요.",
    en: "Partner with DAEIL SYSTEMS."
  }

  return (
    <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7] ${className}`}>
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-center text-gray-900">
          {getText(sectionTitle, language)}
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <Card
              key={initiative.id}
              className={`${
                index === 0 ? "md:col-span-2 lg:col-span-3" : ""
              } border-0 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium leading-tight text-gray-900 dark:text-white">
                  {getText(initiative.title, language)}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {getText(initiative.description, language)}
                </p>
                <div className="space-y-2">
                  {initiative.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="link"
                      className="p-0 h-auto font-normal text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm sm:text-base"
                      asChild
                    >
                      <a href={link.href} className="inline-flex items-center gap-1">
                        {getText(link.text, language)}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
