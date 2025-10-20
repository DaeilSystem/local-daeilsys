"use client"

import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

interface AppleFooterProps {
  className?: string
}

export function AppleFooter({ className }: AppleFooterProps) {
  const { language, isInitialized } = useLanguage()

  const footerSections = [
    {
      title: isInitialized && language === "ko" ? "제품 및 솔루션" : "Products & Solutions",
      links: [
        { name: isInitialized && language === "ko" ? "액티브 제진대" : "Active Vibration Systems", url: "/products/active-vibration-systems" },
        { name: isInitialized && language === "ko" ? "광학 테이블" : "Optical Tables", url: "/products/optical-tables" },
        { name: isInitialized && language === "ko" ? "솔루션" : "Solutions", url: "/solutions" },
        { name: isInitialized && language === "ko" ? "액세서리" : "Accessories", url: "/accessories" }
      ]
    },
    {
      title: isInitialized && language === "ko" ? "지원" : "Support",
      links: [
        { name: isInitialized && language === "ko" ? "기술 지원" : "Technical Support", url: "/support" },
        { name: isInitialized && language === "ko" ? "제품 매뉴얼" : "Product Manuals", url: "/support/manuals" },
        { name: isInitialized && language === "ko" ? "보증 정책" : "Warranty Policy", url: "/support/warranty" },
        { name: isInitialized && language === "ko" ? "FAQ" : "FAQ", url: "/support/faq" }
      ]
    },
    {
      title: isInitialized && language === "ko" ? "회사" : "Company",
      links: [
        { name: isInitialized && language === "ko" ? "회사 소개" : "About Us", url: "/company/overview" },
        { name: isInitialized && language === "ko" ? "비전 & 미션" : "Vision & Mission", url: "/company/vision-mission" },
        { name: isInitialized && language === "ko" ? "연혁" : "History", url: "/company/history" },
        { name: isInitialized && language === "ko" ? "채용" : "Careers", url: "/careers" }
      ]
    },
    {
      title: isInitialized && language === "ko" ? "뉴스 & 미디어" : "News & Media",
      links: [
        { name: isInitialized && language === "ko" ? "뉴스룸" : "Newsroom", url: "/newsroom" },
        { name: isInitialized && language === "ko" ? "보도자료" : "Press Releases", url: "/newsroom/press" },
        { name: isInitialized && language === "ko" ? "이벤트" : "Events", url: "/events" },
        { name: isInitialized && language === "ko" ? "연락처" : "Contact", url: "/contact" }
      ]
    }
  ]

  const legalLinks = [
    { name: isInitialized && language === "ko" ? "개인정보처리방침" : "Privacy Policy", url: "/privacy" },
    { name: isInitialized && language === "ko" ? "이용약관" : "Terms of Use", url: "/terms" },
    { name: isInitialized && language === "ko" ? "쿠키 정책" : "Cookie Policy", url: "/cookies" },
    { name: isInitialized && language === "ko" ? "법적 고지" : "Legal", url: "/legal" }
  ]

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {isInitialized && language === "ko" ? "대일시스템" : "DAEIL SYSTEMS"}
              </h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>경기도 용인시 처인구 원삼면 맹리로 40</p>
                <p>대표전화: +82-031-339-3375</p>
                <p>이메일: internationalsales@daeilsys.com</p>
                <p>사업자등록번호: 117-81-15867</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                {isInitialized && language === "ko" ? "영업시간" : "Business Hours"}
              </h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>{isInitialized && language === "ko" ? "평일: 09:00 - 18:00" : "Weekdays: 9:00 AM - 6:00 PM"}</p>
                <p>{isInitialized && language === "ko" ? "토요일: 09:00 - 13:00" : "Saturday: 9:00 AM - 1:00 PM"}</p>
                <p>{isInitialized && language === "ko" ? "일요일 및 공휴일: 휴무" : "Sunday & Holidays: Closed"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 DAEIL SYSTEMS. {isInitialized && language === "ko" ? "모든 권리 보유." : "All rights reserved."}
            </div>

            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
