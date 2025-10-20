"use client"

import { featuredProducts } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"

export default function DviaTClient() {
  const { language, isInitialized } = useLanguage()
  const product = featuredProducts[0] // DVIA-T is the first featured product

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-400 text-lg">
                  DVIA-T Product Image
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-2">
                {isInitialized && language === "ko" ? product.titleKo : product.title}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                {isInitialized && language === "ko" ? product.subtitleKo : product.subtitle}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {isInitialized && language === "ko" ? product.description : product.descriptionEn}
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
                    ? "나노미터 해상도 현미경용 최적화"
                    : "Optimized for nanometer resolution microscopes"
                  }
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {isInitialized && language === "ko"
                    ? "탁상형 설계로 설치 용이"
                    : "Tabletop design for easy installation"
                  }
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {isInitialized && language === "ko"
                    ? "액티브 진동 제어 시스템"
                    : "Active vibration control system"
                  }
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
