"use client"

import { DaeilsysFeaturedProductsShowcase } from "@/components/main/daeilsys-featured-products-showcase"
import { DaeilsysLargeSlideShowcase } from "@/components/main/daeilsys-large-slide-showcase"
import { DaeilsysLatestUpdatesShowcase } from "@/components/main/daeilsys-latest-updates-showcase"
import { DaeilsysNewHero } from "@/components/main/daeilsys-new-hero"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { useEffect, useState } from "react"

export default function NewMainClient() {
  const { language, isInitialized } = useLanguage()
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const currentLanguage = isInitialized ? language : "en"

  if (!isMounted || !isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>

      {/* DVIA-ULF 최신 제품 히어로 섹션 */}
      <DaeilsysNewHero />

      {/* 주력 제품 소개 섹션 */}
      <DaeilsysFeaturedProductsShowcase />

      {/* 큰 슬라이드 섹션 */}
      <DaeilsysLargeSlideShowcase />

      {/* 업데이트/뉴스 섹션 */}
      <DaeilsysLatestUpdatesShowcase />

    </div>
  )
}
