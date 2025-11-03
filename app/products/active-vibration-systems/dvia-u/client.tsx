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
import productData from "@/data/products/dvia-u-full.json"

type TabType = "overview" | "features" | "performance" | "specifications" | "resources"

export default function DviaUClient() {
  const [activeTab, setActiveTab] = useState<TabType>("overview")

  const tabs: { id: TabType; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "performance", label: "Performance" },
    { id: "specifications", label: "Specifications" },
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
          <div className="space-y-12">
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
                  <div className="aspect-video max-w-4xl">
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
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
              {productData.tabs.performance.description}
            </p>
            <div className="rounded-lg overflow-hidden">
              <img
                src={productData.tabs.performance.image}
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
                    Isolator Quantity
                  </td>
                  {productData.tabs.specifications.models.map((model) => (
                    <td
                      key={model.name}
                      className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                    >
                      {model.isolatorQuantity}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Dimensions
                  </td>
                  {productData.tabs.specifications.models.map((model) => (
                    <td
                      key={model.name}
                      className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                    >
                      {model.dimensions}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Maximum Load Capacity
                  </td>
                  {productData.tabs.specifications.models.map((model) => (
                    <td
                      key={model.name}
                      className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                    >
                      {model.maxLoadCapacity}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Vibration Isolation Technology
                  </td>
                  <td
                    colSpan={productData.tabs.specifications.models.length}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {productData.tabs.specifications.common.vibrationIsolationTechnology}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Degrees of Freedom
                  </td>
                  <td
                    colSpan={productData.tabs.specifications.models.length}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {productData.tabs.specifications.common.degreesOfFreedom}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Active Isolation Bandwidth
                  </td>
                  <td
                    colSpan={productData.tabs.specifications.models.length}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {productData.tabs.specifications.common.activeIsolationBandwidth}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Vibration Isolation
                  </td>
                  <td
                    colSpan={productData.tabs.specifications.models.length}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {productData.tabs.specifications.common.vibrationIsolation}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Actuator
                  </td>
                  <td
                    colSpan={productData.tabs.specifications.models.length}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {productData.tabs.specifications.common.actuator}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Maximum Actuator Force
                  </td>
                  {productData.tabs.specifications.models.map((model) => (
                    <td
                      key={model.name}
                      className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                    >
                      {model.maxActuatorForce}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Vibration Sensor
                  </td>
                  <td
                    colSpan={productData.tabs.specifications.models.length}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {productData.tabs.specifications.common.vibrationSensor}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Controller
                  </td>
                  <td
                    colSpan={productData.tabs.specifications.models.length}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {productData.tabs.specifications.common.controller}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    User Interface
                  </td>
                  <td
                    colSpan={productData.tabs.specifications.models.length}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {productData.tabs.specifications.common.userInterface}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Environmental Protection Requirements
                  </td>
                  <td
                    colSpan={productData.tabs.specifications.models.length}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {productData.tabs.specifications.common.environmentalProtectionRequirements}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Power Requirements
                  </td>
                  <td
                    colSpan={productData.tabs.specifications.models.length}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {productData.tabs.specifications.common.powerRequirements}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    Environmental Requirements
                  </td>
                  <td
                    colSpan={productData.tabs.specifications.models.length}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {productData.tabs.specifications.common.environmentalRequirements}
                  </td>
                </tr>
              </tbody>
            </table>
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
                {productData.tabs.resources.cad2d.label}
              </h3>
              <div className="grid gap-3">
                {productData.tabs.resources.cad2d.files.map((cad, index) => (
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
