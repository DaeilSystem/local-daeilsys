"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import productData from "@/data/products/dvid-t-full.json"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { useState } from "react"

type TabType = "overview" | "features" | "performance" | "specifications" | "order"
type ProductType = "stainless-steel" | "optical-breadboard"

export default function DvidTClient() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabType>("overview")
  const [activeType, setActiveType] = useState<ProductType>("stainless-steel")

  const tabs: { id: TabType; label: { en: string; ko: string } }[] = [
    { id: "overview", label: { en: "Overview", ko: "개요" } },
    { id: "features", label: { en: "Features", ko: "특징" } },
    { id: "performance", label: { en: "Performance", ko: "성능" } },
    { id: "specifications", label: { en: "Specifications", ko: "사양" } },
    { id: "order", label: { en: "Order", ko: "주문 정보" } },
  ]

  const currentType = productData.types.find((t) => t.id === activeType)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-light text-gray-900 dark:text-white mb-4">
              {typeof productData.fullName === "string"
                ? productData.fullName
                : productData.fullName[language]}
            </h1>
            <h2 className="text-3xl text-blue-600 dark:text-blue-400 mb-4">
              {typeof productData.series === "string"
                ? productData.series
                : productData.series[language]}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {typeof productData.tagline === "string"
                ? productData.tagline
                : productData.tagline[language]}
            </p>
          </div>

          {/* Hero Image Carousel */}
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {productData.heroImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${productData.name} ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Product Type Selector */}
          <div className="flex justify-center gap-4 mt-8">
            {productData.types.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id as ProductType)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeType === type.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {type.name[language]}
              </button>
            ))}
          </div>

          {/* Current Type Image */}
          {currentType && (
            <div className="max-w-2xl mx-auto mt-8">
              <img
                src={currentType.image}
                alt={currentType.name[language]}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-950 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                {tab.label[language]}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {typeof productData.tabs.overview.description === "string"
                  ? productData.tabs.overview.description
                  : productData.tabs.overview.description[language]}
              </p>
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === "features" && (
          <div className="space-y-12">
            {productData.tabs.features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {typeof feature.title === "string"
                    ? feature.title
                    : feature.title[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {typeof feature.description === "string"
                    ? feature.description
                    : feature.description[language]}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === "performance" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
              {typeof productData.tabs.performance.title === "string"
                ? productData.tabs.performance.title
                : productData.tabs.performance.title[language]}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
              {typeof productData.tabs.performance.description === "string"
                ? productData.tabs.performance.description
                : productData.tabs.performance.description[language]}
            </p>
            {productData.tabs.performance.image && (
              <div className="rounded-lg overflow-hidden">
                <img
                  src={productData.tabs.performance.image}
                  alt="DVID-T Performance"
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
          </div>
        )}

        {/* Specifications Tab */}
        {activeTab === "specifications" && (
          <div className="space-y-12">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Construction" : "구조"}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Performance" : "성능"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Top Plate" : "상판"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.construction.topPlate === "string"
                        ? productData.tabs.specifications.construction.topPlate
                        : productData.tabs.specifications.construction.topPlate[language]}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Isolation System" : "제진 시스템"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.performance.isolationSystem === "string"
                        ? productData.tabs.specifications.performance.isolationSystem
                        : productData.tabs.specifications.performance.isolationSystem[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Isolator Type" : "아이솔레이터 타입"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.performance.isolatorType === "string"
                        ? productData.tabs.specifications.performance.isolatorType
                        : productData.tabs.specifications.performance.isolatorType[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Vertical Resonant Frequency" : "수직 공진 주파수"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.performance.verticalResonantFrequency === "string"
                        ? productData.tabs.specifications.performance.verticalResonantFrequency
                        : productData.tabs.specifications.performance.verticalResonantFrequency[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Vertical Vibration Isolation at 20 Hz" : "20 Hz 수직 제진 성능"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.performance.verticalVibrationIsolationAt20Hz === "string"
                        ? productData.tabs.specifications.performance.verticalVibrationIsolationAt20Hz
                        : productData.tabs.specifications.performance.verticalVibrationIsolationAt20Hz[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Maximum Load Capacity" : "최대 하중"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.performance.maxLoadCapacity === "string"
                        ? productData.tabs.specifications.performance.maxLoadCapacity
                        : productData.tabs.specifications.performance.maxLoadCapacity[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Automatic Leveling" : "자동 수평 조절"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.performance.automaticLeveling === "string"
                        ? productData.tabs.specifications.performance.automaticLeveling
                        : productData.tabs.specifications.performance.automaticLeveling[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Leveling Repeatability" : "수평 조절 반복성"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.performance.levelingRepeatability === "string"
                        ? productData.tabs.specifications.performance.levelingRepeatability
                        : productData.tabs.specifications.performance.levelingRepeatability[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Required Air Supply" : "필요 공기 공급"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.performance.requiredAirSupply === "string"
                        ? productData.tabs.specifications.performance.requiredAirSupply
                        : productData.tabs.specifications.performance.requiredAirSupply[language]}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Order Tab */}
        {activeTab === "order" && (
          <div className="space-y-12">
            {/* Order Images */}
            {productData.tabs.order.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`DVID-T Ordering Information ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}

            {/* Stainless Steel Type Order */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {productData.types[0].name[language]}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Model No." : "모델 번호"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Vibration Isolated Area" : "제진 영역"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Dimensions" : "치수"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Weight" : "무게"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData.tabs.order.stainlessSteelType.models.map((model, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.modelNo}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.isolatedArea}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.dimensions}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.weight} kg
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Optical Breadboard Type Order */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {productData.types[1].name[language]}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Model No." : "모델 번호"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Vibration Isolated Area" : "제진 영역"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Dimensions" : "치수"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Weight" : "무게"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData.tabs.order.opticalBreadboardType.models.map((model, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.modelNo}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.isolatedArea}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.dimensions}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.weight} kg
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
            Ready to get started?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}
