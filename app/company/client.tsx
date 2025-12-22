"use client"

import { EducationHero } from "@/components/company/education-hero"
import { EducatorsSection } from "@/components/company/educators-section"
import { EquitySection } from "@/components/company/equity-section"
import { LearnersSection } from "@/components/company/learners-section"
import { MissionStatement } from "@/components/company/mission-statement"
import { NewsSection } from "@/components/company/news-section"
import { ValuesSection } from "@/components/company/values-section"
import { WorkContinuesSection } from "@/components/company/work-continues-section"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"

export default function Client() {
  const { isInitialized } = useLanguage()
  const { theme } = useTheme()

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : "light"}`}>
      <EducationHero />
      <MissionStatement />
      <EducatorsSection />
      <LearnersSection />
      <EquitySection />
      <WorkContinuesSection />
      <NewsSection />
      <ValuesSection />
    </div>
  )
}
