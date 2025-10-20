"use client"

import { useLanguage } from "@/hooks/use-language"

export default function WarrantyPolicyClient() {
  const { language, isInitialized } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-8">
              {isInitialized && language === "ko" ? "5년 보증 서비스" : "5-Year Warranty Service"}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
              {isInitialized && language === "ko"
                ? "2024년부터 대일시스템에서 제조하는 모든 제품에 대한 최종 사용자가 납품일로부터 5년 동안 정상적인 사용 상태에서 결함에 대한 보증 서비스를 제공합니다."
                : "Starting from 2024, DAEIL SYSTEMS provides a 5-year warranty service for all products manufactured by DAEIL SYSTEMS from the delivery date under normal use conditions."
              }
            </p>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {isInitialized && language === "ko" ? "보증 범위" : "Warranty Coverage"}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {isInitialized && language === "ko"
                  ? "이 보증 기간 동안 대일시스템은 남용, 오용, 부주의, 사고, 화재 또는 기타 외부 요인에 영향을 받지 않는 경우에만 대일시스템 제품을 무상으로 수리 또는 교체해 드립니다."
                  : "During this warranty period, DAEIL SYSTEMS will repair or replace DAEIL SYSTEMS products free of charge only if they are not affected by abuse, misuse, negligence, accidents, fire, or other external factors."
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                  {isInitialized && language === "ko" ? "포함 사항" : "What's Included"}
                </h3>
                <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                  <li>• {isInitialized && language === "ko" ? "제품 결함 수리" : "Product defect repair"}</li>
                  <li>• {isInitialized && language === "ko" ? "부품 교체" : "Component replacement"}</li>
                  <li>• {isInitialized && language === "ko" ? "기술 지원" : "Technical support"}</li>
                  <li>• {isInitialized && language === "ko" ? "무상 서비스" : "Free service"}</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">
                  {isInitialized && language === "ko" ? "보증 조건" : "Warranty Conditions"}
                </h3>
                <ul className="space-y-2 text-green-800 dark:text-green-200">
                  <li>• {isInitialized && language === "ko" ? "정상 사용 조건" : "Normal use conditions"}</li>
                  <li>• {isInitialized && language === "ko" ? "납품일로부터 5년" : "5 years from delivery date"}</li>
                  <li>• {isInitialized && language === "ko" ? "2024년 이후 제품" : "Products from 2024 onwards"}</li>
                  <li>• {isInitialized && language === "ko" ? "대일시스템 제조 제품" : "DAEIL SYSTEMS manufactured products"}</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {isInitialized && language === "ko" ? "문의하기" : "Contact Us"}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {isInitialized && language === "ko"
                  ? "보증 서비스에 대한 문의사항이 있으시면 언제든지 연락해 주세요."
                  : "If you have any questions about warranty service, please contact us anytime."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+82-031-339-3375" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  {isInitialized && language === "ko" ? "전화 문의" : "Call Us"}
                </a>
                <a href="mailto:sales@daeilsys.com" className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  {isInitialized && language === "ko" ? "이메일 문의" : "Email Us"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
