"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import productData from "@/data/products/overhead-shelf-full.json"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { useState } from "react"

type TabType = "overview" | "features" | "order" | "resources"

export default function OverheadShelfClient() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabType>("overview")

  const tabs: { id: TabType; label: { en: string; ko: string } }[] = [
    { id: "overview", label: { en: "Overview", ko: "개요" } },
    { id: "features", label: { en: "Features", ko: "특징" } },
    { id: "order", label: { en: "Order", ko: "주문" } },
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

          {/* Certifications */}
          {productData.certifications.length > 0 && (
            <div className="flex justify-center gap-4 mb-8">
              {productData.certifications.map((cert, index) => (
                <img
                  key={index}
                  src={cert.image}
                  alt={cert.name}
                  className="h-12 w-auto"
                />
              ))}
            </div>
          )}

          {/* Hero Images Carousel */}
          {productData.heroImages.length > 0 && (
            <div className="max-w-4xl mx-auto">
              {productData.heroImages.length === 1 ? (
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={productData.heroImages[0]}
                    alt={productData.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
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
              )}
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
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              {language === "en" ? "Features" : "특징"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productData.tabs.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {typeof feature.title === "string" ? feature.title : feature.title[language]}
                  </h3>
                  {feature.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {typeof feature.description === "string"
                        ? feature.description
                        : feature.description[language]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Order Tab */}
        {activeTab === "order" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
              {language === "en" ? "Ordering Information" : "주문 정보"}
            </h2>

            {/* Order Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    {productData.tabs.order.rows[0]?.map((header, index) => (
                      <th
                        key={index}
                        className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {productData.tabs.order.rows.slice(1).map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-6 py-4 text-sm ${
                            cellIndex === 0
                              ? "font-semibold text-gray-900 dark:text-white"
                              : "text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          {cell || ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              {language === "en" ? "Resources" : "자료"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {productData.tabs.resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.url}
                  className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {typeof resource.label === "string" ? resource.label : resource.label[language]}
                  </h3>
                </Link>
              ))}
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

