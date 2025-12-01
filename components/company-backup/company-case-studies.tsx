"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { FullWidthCarousel } from "../common/full-width-carousel"

interface CompanyCaseStudiesProps {
  className?: string
}

export function CompanyCaseStudies({ className }: CompanyCaseStudiesProps) {
  const { language, isInitialized } = useLanguage()

  const caseStudyStories = [
    {
      id: "facility-1",
      title: "Manufacturing Facility",
      image: "/placeholder.svg?height=600&width=800&text=Manufacturing+Facility",
      alt: "Manufacturing Facility"
    },
    {
      id: "facility-2",
      title: "Research & Development Center",
      image: "/placeholder.svg?height=600&width=800&text=R%26D+Center",
      alt: "Research & Development Center"
    },
    {
      id: "facility-3",
      title: "Quality Control Laboratory",
      image: "/placeholder.svg?height=600&width=800&text=QC+Lab",
      alt: "Quality Control Laboratory"
    },
    {
      id: "facility-4",
      title: "Assembly Line",
      image: "/placeholder.svg?height=600&width=800&text=Assembly+Line",
      alt: "Assembly Line"
    },
  ]

  return (
    <section className={`py-16 bg-gray-50 dark:bg-gray-900 ${className}`}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 dark:text-white">
            Our Facilities<br />and Infrastructure.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {isInitialized && language === "ko"
              ? "최첨단 제조 시설과 연구 개발 센터에서 혁신적인 진동 제어 솔루션을 개발하고 생산합니다."
              : "We develop and manufacture innovative vibration control solutions at our state-of-the-art manufacturing facilities and R&D centers."
            }
          </p>
        </div>
      </div>

      {/* Full Width Carousel */}
      <FullWidthCarousel stories={caseStudyStories} />

      {/* View All Button */}
      <div className="text-center mt-12">
        <Link href="/company/overview">
          <Button
            variant="outline"
            className="rounded-full px-8 py-3 border-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200 font-medium text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
          >
            {isInitialized && language === "ko" ? "회사 둘러보기" : "Explore Our Company"}
          </Button>
        </Link>
      </div>
    </section>
  )
}
