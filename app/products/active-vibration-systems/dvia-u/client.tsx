"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import productData from "@/data/products/dvia-u-full.json"

type TabType = "overview" | "features" | "performance" | "specifications" | "resources"

export default function DviaUClient() {
  const [activeTab, setActiveTab] = useState<TabType>("overview")
  const { language } = useLanguage()

  const tabs: { id: TabType; label: { en: string; ko: string } }[] = [
    { id: "overview", label: { en: "Overview", ko: "개요" } },
    { id: "features", label: { en: "Features", ko: "특징" } },
    { id: "performance", label: { en: "Performance", ko: "성능" } },
    { id: "specifications", label: { en: "Specifications", ko: "사양" } },
    { id: "resources", label: { en: "Resources", ko: "자료실" } },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-light text-gray-900 dark:text-white mb-4">
              {productData.hero.title[language]}
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300">
              {productData.hero.subtitle[language]}
            </p>
          </div>

          {/* Hero Image */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={productData.hero.images[0]}
                alt={productData.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Certifications */}
          <div className="flex justify-center gap-8 mt-8">
            {productData.certifications.map((cert) => (
              <div key={cert} className="flex flex-col items-center">
                <div className="h-16 w-24 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {cert}
                  </span>
                </div>
              </div>
            ))}
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
            <div className="prose dark:prose-invert max-w-none text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {productData.overview[language]}
              </h3>
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === "features" && (
          <div className="space-y-16">
            {productData.features.map((feature, index) => (
              <div key={index} className="space-y-6">
                <div className="text-center max-w-4xl mx-auto">
                  <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title[language]}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description[language]}
                  </p>
                </div>

                {feature.videoUrl && (
                  <div className="aspect-video max-w-4xl mx-auto">
                    <iframe
                      width="100%"
                      height="100%"
                      src={feature.videoUrl}
                      title={feature.title[language]}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                )}

                {feature.image && (
                  <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title[language]}
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
              {productData.performance.title[language]}
            </h2>
            <div className="rounded-lg overflow-hidden">
              <img
                src={productData.performance.chart}
                alt="DVIA-U Performance"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}

        {/* Specifications Tab */}
        {activeTab === "specifications" && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-50 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
                    Model
                  </th>
                  {productData.specifications.models.map((model) => (
                    <th
                      key={model}
                      className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
                    >
                      {model}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {productData.specifications.table.map((category, catIndex) => (
                  <>
                    {category.items.map((item, itemIndex) => (
                      <tr key={`${catIndex}-${itemIndex}`}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                          {item.label[language]}
                        </td>
                        {item.values.all ? (
                          <td
                            colSpan={productData.specifications.models.length}
                            className="px-6 py-4 text-sm text-center text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                          >
                            {item.values.all}
                          </td>
                        ) : (
                          productData.specifications.models.map((model) => (
                            <td
                              key={model}
                              className="px-6 py-4 text-sm text-center text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                            >
                              {item.values[model] || "-"}
                            </td>
                          ))
                        )}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href={productData.resources.catalog}
                className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium text-center"
              >
                Catalog
              </a>
              <a
                href={productData.resources.userManual}
                className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium text-center"
              >
                DVIA-U User Manual
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                2D CAD
              </h3>
              <div className="grid gap-3">
                {productData.resources.cad2d.map((cad, index) => (
                  <a
                    key={index}
                    href={cad.file}
                    className="px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {cad.model}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Ready to get started?
            </h2>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
