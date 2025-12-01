"use client"

import { companyInfo, companyInfoEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"

export default function CompanyOverviewClient() {
  const { language, isInitialized } = useLanguage()
  const info = isInitialized && language === "ko" ? companyInfo : companyInfoEn

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-8">
              {isInitialized && language === "ko" ? "회사 개요" : "Company Overview"}
            </h1>
          </div>

          {/* Company Description */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {info.description}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {isInitialized && language === "ko" ? "미션" : "Mission"}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {info.mission}
            </p>
          </div>

          {/* Company Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {isInitialized && language === "ko" ? "회사 정보" : "Company Information"}
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {isInitialized && language === "ko" ? "설립년도: " : "Founded: "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">{info.founded}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {isInitialized && language === "ko" ? "CEO: " : "CEO: "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">{info.ceo}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {isInitialized && language === "ko" ? "주소: " : "Address: "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">{info.address}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {isInitialized && language === "ko" ? "연락처" : "Contact"}
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {isInitialized && language === "ko" ? "전화: " : "Phone: "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">{info.phone}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {isInitialized && language === "ko" ? "이메일: " : "Email: "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">{info.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
