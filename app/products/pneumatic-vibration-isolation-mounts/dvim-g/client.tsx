"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import productData from "@/data/products/dvim-g-full.json"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { useState } from "react"

type TabType = "overview" | "features" | "performance" | "specifications" | "options" | "order" | "resources"

export default function DvimGClient() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabType>("overview")

  const tabs: { id: TabType; label: { en: string; ko: string } }[] = [
    { id: "overview", label: { en: "Overview", ko: "개요" } },
    { id: "features", label: { en: "Features", ko: "특징" } },
    { id: "performance", label: { en: "Performance", ko: "성능" } },
    { id: "specifications", label: { en: "Specifications", ko: "사양" } },
    { id: "options", label: { en: "Options", ko: "옵션" } },
    { id: "order", label: { en: "Order", ko: "주문 정보" } },
    { id: "resources", label: { en: "Resources", ko: "자료" } },
  ]

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
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {typeof feature.description === "string"
                    ? feature.description
                    : feature.description[language]}
                </p>
                {feature.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={feature.image}
                      alt={typeof feature.title === "string" ? feature.title : feature.title[language]}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
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
                  alt="DVIM-G Performance"
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
                      {language === "en" ? "Specification" : "사양"}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Value" : "값"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Vibration Isolation System" : "제진 시스템"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.vibrationIsolationSystem === "string"
                        ? productData.tabs.specifications.vibrationIsolationSystem
                        : productData.tabs.specifications.vibrationIsolationSystem[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Load Capacity" : "하중 용량"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.loadCapacity === "string"
                        ? productData.tabs.specifications.loadCapacity
                        : productData.tabs.specifications.loadCapacity[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Resonant Frequency" : "공진 주파수"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.resonantFrequency === "string"
                        ? productData.tabs.specifications.resonantFrequency
                        : productData.tabs.specifications.resonantFrequency[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Vibration Isolation at 10 Hz" : "10 Hz 제진 성능"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.vibrationIsolationAt10Hz === "string"
                        ? productData.tabs.specifications.vibrationIsolationAt10Hz
                        : productData.tabs.specifications.vibrationIsolationAt10Hz[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Automatic Leveling" : "자동 수평 조절"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {typeof productData.tabs.specifications.automaticLeveling === "string"
                        ? productData.tabs.specifications.automaticLeveling
                        : productData.tabs.specifications.automaticLeveling[language]}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {language === "en" ? "Leveling Repeatability" : "수평 조절 반복성"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 whitespace-pre-line">
                      {typeof productData.tabs.specifications.levelingRepeatability === "string"
                        ? productData.tabs.specifications.levelingRepeatability
                        : productData.tabs.specifications.levelingRepeatability[language]}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Options Tab */}
        {activeTab === "options" && (
          <div className="space-y-12">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
              {language === "en" ? "Available Options" : "사용 가능한 옵션"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {productData.tabs.options.map((option, index) => (
                <div key={index} className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-lg dark:shadow-xl">
                    <img
                      src={option.image}
                      alt={typeof option.title === "string" ? option.title : option.title[language]}
                      className="w-full h-64 object-contain bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {typeof option.title === "string" ? option.title : option.title[language]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {typeof option.description === "string" ? option.description : option.description[language]}
                  </p>
                </div>
              ))}
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
                  alt={`DVIM-G Ordering Information ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}

            {/* Models Table */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {language === "en" ? "Model Specifications" : "모델 사양"}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Model" : "모델"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Dimensions (Floating)" : "치수 (부유)"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Dimensions (Deflated)" : "치수 (수축)"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Bolt Hole Location" : "볼트 구멍 위치"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Weight" : "무게"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Max Load Capacity" : "최대 하중"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Bolt Hole Diameter" : "볼트 구멍 지름"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData.tabs.order.models.map((model, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                          {model.modelNo}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.dimensionsFloating}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.dimensionsDeflated}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.boltHoleLocation}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.weight} kg
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          {model.maxLoadCapacity} kg
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                          ⌀{model.boltHoleDiameter}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Oil Damper Table */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {language === "en" ? "Oil Damper Specifications" : "오일 댐퍼 사양"}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Model" : "모델"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Dimensions (Floating)" : "치수 (부유)"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Dimensions (Deflated)" : "치수 (수축)"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Bolt Hole (Top Plate)" : "볼트 구멍 (상판)"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Bolt Hole (Bottom Plate)" : "볼트 구멍 (하판)"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {language === "en" ? "Bolt Hole Diameter" : "볼트 구멍 지름"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                        {productData.tabs.order.oilDamper.modelNo}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                        {productData.tabs.order.oilDamper.dimensionsFloating}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                        {productData.tabs.order.oilDamper.dimensionsDeflated}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                        {productData.tabs.order.oilDamper.boltHoleTopPlate}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                        {productData.tabs.order.oilDamper.boltHoleBottomPlate}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                        ⌀{productData.tabs.order.oilDamper.boltHoleDiameter}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
              {language === "en" ? "Resources" : "자료"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href={productData.tabs.resources.catalog.url}
                className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium text-center"
              >
                {typeof productData.tabs.resources.catalog.label === "string"
                  ? productData.tabs.resources.catalog.label
                  : productData.tabs.resources.catalog.label[language]}
              </a>
              <a
                href={productData.tabs.resources.cad2d.url}
                className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium text-center"
              >
                {typeof productData.tabs.resources.cad2d.label === "string"
                  ? productData.tabs.resources.cad2d.label
                  : productData.tabs.resources.cad2d.label[language]}
              </a>
              <a
                href={productData.tabs.resources.installationReports.url}
                className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium text-center"
              >
                {typeof productData.tabs.resources.installationReports.label === "string"
                  ? productData.tabs.resources.installationReports.label
                  : productData.tabs.resources.installationReports.label[language]}
              </a>
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
