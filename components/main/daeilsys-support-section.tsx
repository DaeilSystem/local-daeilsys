import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { updates, updatesEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface DaeilsysSupportSectionProps {
  className?: string
}

const getUpdateInitiatives = (language: string, updatesData: any[]) => [
  {
    id: "latest-updates",
    title: language === "ko" ? "최신 업데이트" : "Latest Updates",
    description: language === "ko"
      ? "대일시스템의 최신 제품 정보, 설치 가이드, 사용 설명서 등 고객을 위한 유용한 자료들을 확인하세요."
      : "Check out the latest product information, installation guides, user manuals and other useful materials for customers from DAEIL SYSTEMS.",
    links: updatesData.map(update => ({
      text: update.title,
      href: update.url
    }))
  },
  {
    id: "technical-support",
    title: language === "ko" ? "기술 지원" : "Technical Support",
    description: language === "ko"
      ? "제품 설치, 사용법, 문제 해결 등에 대한 전문적인 기술 지원을 받으실 수 있습니다."
      : "You can receive professional technical support for product installation, usage, troubleshooting, and more.",
    links: [
      {
        text: language === "ko" ? "기술 자료 다운로드" : "Download Technical Documents",
        href: "/support/technical-documents"
      },
      {
        text: language === "ko" ? "설치 가이드" : "Installation Guides",
        href: "/support/installation-guides"
      }
    ]
  },
  {
    id: "catalog-download",
    title: language === "ko" ? "카탈로그 다운로드" : "Catalog Download",
    description: language === "ko"
      ? "대일시스템의 모든 제품에 대한 상세한 카탈로그를 다운로드하여 확인하실 수 있습니다."
      : "You can download and view detailed catalogs for all DAEIL SYSTEMS products.",
    links: [
      {
        text: language === "ko" ? "제품 카탈로그" : "Product Catalogs",
        href: "/support/catalogs"
      }
    ]
  }
]

export function DaeilsysSupportSection({ className }: DaeilsysSupportSectionProps) {
  const { language, isInitialized } = useLanguage()
  const updatesData = isInitialized && language === "ko" ? updates : updatesEn
  const updateInitiatives = getUpdateInitiatives(language, updatesData)

  return (
    <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-center text-gray-900 dark:text-white">
          {isInitialized && language === "ko" ? "고객 지원은 여기서 끝나지 않습니다." : "Our customer support doesn't end here."}
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {updateInitiatives.map((initiative, index) => (
            <Card
              key={initiative.id}
              className={`${
                index === 0 ? "md:col-span-2 lg:col-span-3" : ""
              } border-0 shadow-sm hover:shadow-md transition-shadow duration-300`}
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
