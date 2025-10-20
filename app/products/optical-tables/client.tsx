"use client"

import { useLanguage } from "@/hooks/use-language"

export default function OpticalTablesClient() {
  const { language, isInitialized } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-400 text-lg">
                  DVIO Series Optical Tables
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
                DVIO Series
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-2">
                {isInitialized && language === "ko"
                  ? "Since 1993년부터 제조한 국내 최초의 프리미엄 광학테이블"
                  : "Since 1993, the first premium optical table manufactured in Korea"
                }
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {isInitialized && language === "ko"
                  ? "1993년부터 제조한 국내 최초의 프리미엄 광학테이블로, 정밀 광학 애플리케이션을 위한 우수한 품질과 성능을 제공합니다."
                  : "The first premium optical tables manufactured in Korea since 1993, providing superior quality and performance for precision optical applications."
                }
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {isInitialized && language === "ko" ? "주요 특징" : "Key Features"}
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {isInitialized && language === "ko"
                    ? "국내 최초 프리미엄 광학테이블"
                    : "First premium optical table in Korea"
                  }
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {isInitialized && language === "ko"
                    ? "1993년부터 30년 이상의 제조 경험"
                    : "Over 30 years of manufacturing experience since 1993"
                  }
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {isInitialized && language === "ko"
                    ? "정밀 광학 애플리케이션용 최적화"
                    : "Optimized for precision optical applications"
                  }
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {isInitialized && language === "ko"
                    ? "우수한 품질과 성능"
                    : "Superior quality and performance"
                  }
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {isInitialized && language === "ko" ? "적용 분야" : "Applications"}
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  {isInitialized && language === "ko" ? "레이저 실험" : "Laser experiments"}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  {isInitialized && language === "ko" ? "광학 측정" : "Optical measurements"}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  {isInitialized && language === "ko" ? "정밀 조립" : "Precision assembly"}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  {isInitialized && language === "ko" ? "연구 개발" : "Research and development"}
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                {isInitialized && language === "ko" ? "견적 요청" : "Request Quote"}
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                {isInitialized && language === "ko" ? "카탈로그 다운로드" : "Download Catalog"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
