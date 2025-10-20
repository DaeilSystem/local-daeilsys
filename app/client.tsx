"use client"

import { DaeilsysCaseStudiesSection } from "@/components/main/daeilsys-case-studies-section"
import { DaeilsysCompanyIntro } from "@/components/main/daeilsys-company-intro"
import { DaeilsysFeaturedProductsSection } from "@/components/main/daeilsys-featured-products-section"
import { DaeilsysHero } from "@/components/main/daeilsys-hero"
import { DaeilsysLatestUpdatesSection } from "@/components/main/daeilsys-latest-updates-section"
import { DaeilsysNewsroomSection } from "@/components/main/daeilsys-newsroom-section"
import { DaeilsysProductsSection } from "@/components/main/daeilsys-products-section"
import { DaeilsysSolutionsSection } from "@/components/main/daeilsys-solutions-section"
import { DaeilsysSupportSection } from "@/components/main/daeilsys-support-section"
import { DaeilsysValuesSection } from "@/components/main/daeilsys-values-section"
import { useTheme } from "@/hooks/use-theme"
import { useEffect, useState } from "react"

export default function Client() {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <DaeilsysHero />
      <DaeilsysCompanyIntro />
      <DaeilsysSolutionsSection />
      <DaeilsysProductsSection />
      <DaeilsysFeaturedProductsSection />
      <DaeilsysCaseStudiesSection />
      <DaeilsysSupportSection />
      <DaeilsysLatestUpdatesSection />
      <DaeilsysNewsroomSection />
      <DaeilsysValuesSection />
    </div>
  )
}
