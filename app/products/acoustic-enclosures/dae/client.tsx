"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import productData from "@/data/products/dae-full.json"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { useState } from "react"

type TabType = "overview" | "features" | "performance" | "accessory"

export default function DaeClient() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabType>("overview")

  const tabs: { id: TabType; label: { en: string; ko: string } }[] = [
    { id: "overview", label: { en: "Overview", ko: "개요" } },
    { id: "features", label: { en: "Features", ko: "특징" } },
    { id: "performance", label: { en: "Performance", ko: "성능" } },
    { id: "accessory", label: { en: "Accessory", ko: "액세서리" } },
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

            {/* Overview Images */}
            {productData.tabs.overview.images && productData.tabs.overview.images.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {productData.tabs.overview.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg dark:shadow-xl">
                    <img
                      src={image}
                      alt={`${productData.name} Overview ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Features Tab */}
        {activeTab === "features" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
              {language === "en" ? "Features" : "특징"}
            </h2>
            <ul className="space-y-4">
              {productData.tabs.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {typeof feature === "string" ? feature : feature[language]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === "performance" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-8">
              {language === "en" ? "Noise Reduction Performance" : "소음 감소 성능"}
            </h2>

            {/* Noise Reduction Data */}
            {productData.tabs.performance.noiseReduction && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {productData.tabs.performance.noiseReduction.map((item, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {typeof item.reduction === "string" ? item.reduction : item.reduction[language]}
                      </div>
                      <div className="text-lg text-gray-600 dark:text-gray-400">
                        {language === "en" ? "at" : "에서"} {item.frequency}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Performance Image */}
            {productData.tabs.performance.image && (
              <div className="rounded-lg overflow-hidden">
                <img
                  src={productData.tabs.performance.image}
                  alt="DAE Performance"
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
          </div>
        )}

        {/* Accessory Tab */}
        {activeTab === "accessory" && (
          <div className="space-y-12">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
              {language === "en" ? "Accessories" : "액세서리"}
            </h2>
            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {productData.tabs.accessories.map((accessory, index) => (
                <div key={index} className="space-y-4">
                  {accessory.image && (
                    <div className="rounded-lg overflow-hidden shadow-lg dark:shadow-xl">
                      <img
                        src={accessory.image}
                        alt={typeof accessory.title === "string" ? accessory.title : accessory.title[language]}
                        className="w-full h-64 object-contain bg-gray-50 dark:bg-gray-800"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {typeof accessory.title === "string" ? accessory.title : accessory.title[language]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {typeof accessory.description === "string" ? accessory.description : accessory.description[language]}
                  </p>
                </div>
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
