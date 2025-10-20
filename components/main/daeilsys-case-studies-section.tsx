import { Button } from "@/components/ui/button"
import { caseStudies, caseStudiesEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { FullWidthCarousel } from "../common/full-width-carousel"

interface DaeilsysCaseStudiesSectionProps {
  className?: string
}

export function DaeilsysCaseStudiesSection({ className }: DaeilsysCaseStudiesSectionProps) {
  const { language, isInitialized } = useLanguage()
  const studyData = isInitialized && language === "ko" ? caseStudies : caseStudiesEn

  const caseStudyStories = studyData.map((study) => ({
    id: study.id,
    title: study.title,
    image: study.image,
    alt: study.title
  }))

  return (
    <section className={`py-16 bg-gray-50 dark:bg-gray-900 ${className}`}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 dark:text-white">
            Case Studies<br />of successful installations.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {isInitialized && language === "ko"
              ? "전 세계 주요 연구기관과 기업에서 대일시스템의 진동 제어 솔루션이 어떻게 성공적으로 적용되고 있는지 확인해보세요."
              : "See how DAEIL SYSTEMS' vibration control solutions are successfully applied at major research institutions and companies worldwide."
            }
          </p>
        </div>
      </div>

      {/* Full Width Carousel */}
      <FullWidthCarousel stories={caseStudyStories} />

      {/* View All Button */}
      <div className="text-center mt-12">
        <Link href="/case-studies">
          <Button
            variant="outline"
            className="rounded-full px-8 py-3 border-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200 font-medium text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
          >
            {isInitialized && language === "ko" ? "모든 케이스 스터디 보기" : "View All Case Studies"}
          </Button>
        </Link>
      </div>
    </section>
  )
}
