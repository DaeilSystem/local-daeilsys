"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface CompanySupportProps {
  className?: string
}

const getSupportInitiatives = (language: string) => [
  {
    id: "company-info",
    title: language === "ko" ? "회사 정보" : "Company Information",
    description: language === "ko"
      ? "대일시스템의 상세한 회사 정보, 연혁, 조직도 등을 확인하실 수 있습니다."
      : "Check out detailed company information, history, and organizational structure of DAEIL SYSTEMS.",
    links: [
      {
        text: language === "ko" ? "회사 개요" : "Company Overview",
        href: "/company/overview"
      },
      {
        text: language === "ko" ? "회사 연혁" : "Company History",
        href: "/company/company-history"
      }
    ]
  },
  {
    id: "careers",
    title: language === "ko" ? "채용 정보" : "Careers",
    description: language === "ko"
      ? "대일시스템과 함께 성장할 인재를 찾고 있습니다. 채용 정보를 확인해보세요."
      : "We are looking for talented individuals to grow with DAEIL SYSTEMS. Check out our job opportunities.",
    links: [
      {
        text: language === "ko" ? "채용 공고" : "Job Openings",
        href: "/company/careers"
      }
    ]
  },
  {
    id: "contact",
    title: language === "ko" ? "문의하기" : "Contact Us",
    description: language === "ko"
      ? "궁금한 사항이 있으시면 언제든지 문의해주세요. 전문 상담원이 도와드리겠습니다."
      : "If you have any questions, please feel free to contact us. Our expert consultants are ready to help.",
    links: [
      {
        text: language === "ko" ? "연락처" : "Contact Information",
        href: "/contact"
      }
    ]
  }
]

export function CompanySupport({ className }: CompanySupportProps) {
  const { language, isInitialized } = useLanguage()
  const supportInitiatives = getSupportInitiatives(language)

  return (
    <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-center text-gray-900 dark:text-white">
          {isInitialized && language === "ko" ? "우리와 함께하세요." : "Join Us."}
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {supportInitiatives.map((initiative) => (
            <Card
              key={initiative.id}
              className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium leading-tight text-gray-900 dark:text-white">
                  {initiative.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {initiative.description}
                </p>
                <div className="space-y-2">
                  {initiative.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="link"
                      className="p-0 h-auto font-normal text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm sm:text-base"
                      asChild
                    >
                      <Link href={link.href} className="inline-flex items-center gap-1">
                        {link.text}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
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
