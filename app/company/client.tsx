"use client"

import { CompanyCaseStudies } from "@/components/company/company-case-studies"
import { CompanyFeatured } from "@/components/company/company-featured"
import { CompanyHero } from "@/components/company/company-hero"
import { CompanyLatestUpdates } from "@/components/company/company-latest-updates"
import { CompanyNewsroom } from "@/components/company/company-newsroom"
import { CompanyOverview } from "@/components/company/company-overview"
import { CompanyProducts } from "@/components/company/company-products"
import { CompanySolutions } from "@/components/company/company-solutions"
import { CompanySupport } from "@/components/company/company-support"
import { CompanyValues } from "@/components/company/company-values"
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
      <CompanyHero />
      <CompanyOverview />
      <CompanySolutions />
      <CompanyProducts />
      <CompanyFeatured />
      <CompanyCaseStudies />
      <CompanySupport />
      <CompanyLatestUpdates />
      <CompanyNewsroom />
      <CompanyValues />
    </div>
  )
}
