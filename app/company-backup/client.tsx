"use client"

import { CompanyCaseStudies } from "@/components/company-backup/company-case-studies"
import { CompanyFeatured } from "@/components/company-backup/company-featured"
import { CompanyHero } from "@/components/company-backup/company-hero"
import { CompanyLatestUpdates } from "@/components/company-backup/company-latest-updates"
import { CompanyNewsroom } from "@/components/company-backup/company-newsroom"
import { CompanyOverview } from "@/components/company-backup/company-overview"
import { CompanyProducts } from "@/components/company-backup/company-products"
import { CompanySolutions } from "@/components/company-backup/company-solutions"
import { CompanySupport } from "@/components/company-backup/company-support"
import { CompanyValues } from "@/components/company-backup/company-values"
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
