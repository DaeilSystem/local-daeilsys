"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import productData from "@/data/products/optical-table-enclosure-full.json"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { useState } from "react"

type TabType = "overview" | "howToOrder" | "resources"

export default function OpticalTableEnclosureClient() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabType>("overview")

  const tabs: { id: TabType; label: { en: string; ko: string } }[] = [
    { id: "overview", label: { en: "Overview", ko: "개요" } },
    { id: "howToOrder", label: { en: "How to Order", ko: "주문 방법" } },
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

        {/* How to Order Tab */}
        {activeTab === "howToOrder" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              {language === "en" ? "How to Order" : "주문 방법"}
            </h2>
            <div className="space-y-6">
              {productData.tabs.howToOrder.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-semibold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {typeof item.title === "string" ? item.title : item.title[language]}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {typeof item.description === "string"
                          ? item.description
                          : item.description[language]}
                      </p>
                    )}
                  </div>
                </div>
              ))}
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

