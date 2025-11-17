"use client"

import { EducationHero } from "@/components/education/education-hero"
import { EducatorsSection } from "@/components/education/educators-section"
import { EquitySection } from "@/components/education/equity-section"
import { LearnersSection } from "@/components/education/learners-section"
import { MissionStatement } from "@/components/education/mission-statement"
import { NewsSection } from "@/components/education/news-section"
import { ValuesSection } from "@/components/education/values-section"
import { WorkContinuesSection } from "@/components/education/work-continues-section"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/sections/footer"
import { translations } from "@/constants/translations"
import { getCompanyMenuItems, getProductsMenuItems, getSupportMenuItems } from "@/data/menu-items"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"

export default function Client() {
  const { language, isInitialized } = useLanguage()
  const { theme } = useTheme()

  const currentLanguage = isInitialized ? language : "en"
  const t = translations[currentLanguage]
  const companyMenuItems = getCompanyMenuItems(currentLanguage)
  const productsMenuItems = getProductsMenuItems(currentLanguage)
  const supportMenuItems = getSupportMenuItems(currentLanguage)

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <Navigation />
      <EducationHero />
      <MissionStatement />
      <EducatorsSection />
      <LearnersSection />
      <EquitySection />
      <WorkContinuesSection />
      <NewsSection />
      <ValuesSection />
      <Footer
        translations={t}
        companyItems={companyMenuItems}
        productsItems={productsMenuItems}
        supportItems={supportMenuItems}
      />
    </div>
  )
}
