"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import productData from "@/data/products/dvia-t-full.json"

type TabType = "overview" | "features" | "performance" | "specifications" | "applications" | "options" | "resources"

export default function DviaTClient() {
  const [activeTab, setActiveTab] = useState<TabType>("overview")

  const tabs: { id: TabType; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "performance", label: "Performance" },
    { id: "specifications", label: "Specifications" },
    { id: "applications", label: "Applications" },
    { id: "options", label: "Options" },
    { id: "resources", label: "Resources" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-light text-gray-900 dark:text-white mb-4">
              {productData.fullName}
            </h1>
            <h2 className="text-3xl text-blue-600 dark:text-blue-400 mb-4">
              {productData.series}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {productData.tagline}
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

          {/* Certifications */}
          <div className="flex justify-center gap-8 mt-8">
            {productData.certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col items-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="h-12 w-auto object-contain"
                />
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
                {tab.label}
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
                {productData.tabs.overview.description}
              </p>
            </div>
            {productData.tabs.overview.videoUrl && (
              <div className="aspect-video max-w-4xl mx-auto">
                <iframe
                  width="100%"
                  height="100%"
                  src={productData.tabs.overview.videoUrl.replace("watch?v=", "embed/")}
                  title="Product Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            )}
          </div>
        )}

        {/* Features Tab */}
        {activeTab === "features" && (
          <div className="grid md:grid-cols-2 gap-12">
            {productData.tabs.features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                {feature.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                {feature.videoUrl && (
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={feature.videoUrl.replace("watch?v=", "embed/")}
                      title={feature.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
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
              {productData.tabs.performance.title}
            </h2>
            <div className="rounded-lg overflow-hidden">
              <img
                src={productData.tabs.performance.image}
                alt="DVIA-T Performance"
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
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                    Model
                  </th>
                  {productData.tabs.specifications.models.map((model) => (
                    <th
                      key={model.name}
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
                    >
                      {model.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Platform Dimensions (L x W x H)
                  </td>
                  {productData.tabs.specifications.models.map((model) => (
                    <td
                      key={model.name}
                      className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                    >
                      {model.platformDimensions}
                    </td>
                  ))}
                </tr>
                {Object.entries(productData.tabs.specifications.common).map(([key, value]) => (
                  <tr key={key}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </td>
                    <td
                      colSpan={productData.tabs.specifications.models.length}
                      className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                    >
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === "applications" && (
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Applications
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {productData.tabs.applications.list.map((app, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"
                  >
                    <p className="text-gray-700 dark:text-gray-300">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Installation Photos
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {productData.tabs.applications.installationPhotos.map((photo, index) => (
                  <div key={index} className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src={photo}
                      alt={`Installation ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Options Tab */}
        {activeTab === "options" && (
          <div className="grid md:grid-cols-2 gap-12">
            {productData.tabs.options.map((option, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {option.description}
                </p>
                {option.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
                {option.images && option.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {option.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="rounded-lg overflow-hidden">
                        <img
                          src={img}
                          alt={`${option.title} ${imgIndex + 1}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <button className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
                {productData.tabs.resources.catalog.label}
              </button>
              <button className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
                {productData.tabs.resources.userManual.label}
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                2D CAD Files
              </h3>
              <div className="flex flex-wrap gap-3">
                {productData.tabs.resources.cad.map((file, index) => (
                  <Link
                    key={index}
                    href={file.url}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {file.model}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Additional Resources
              </h3>
              <div className="space-y-2">
                {productData.tabs.resources.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="block px-4 py-3 bg-gray-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {link.label} →
                  </Link>
                ))}
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
