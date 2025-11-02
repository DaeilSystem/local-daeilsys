"use client"

import { useState } from "react"
import Link from "next/link"
import productData from "@/data/products/dvia-mb-full.json"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type TabType = "overview" | "features" | "performance" | "specifications" | "applications" | "options" | "resources"

export default function DviaMBClient() {
  const [activeTab, setActiveTab] = useState<TabType>("overview")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-700 opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">대일시스템</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <Link href="/products" className="hover:text-blue-400 transition-colors">제품소개</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <Link href="/products/active-vibration-systems" className="hover:text-blue-400 transition-colors">
                  액티브 제진대
                </Link>
              </li>
              <li className="text-gray-600">/</li>
              <li className="text-white font-medium">DVIA-MB</li>
            </ol>
          </nav>

          {/* Product Title - Enhanced */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-block bg-blue-900/50 text-blue-300 px-4 py-1 rounded-full text-sm font-medium border border-blue-700/50">
                {productData.series}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {productData.name}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto">
              {productData.tagline}
            </p>
          </div>

          {/* Hero Carousel - Enhanced */}
          <div className="max-w-5xl mx-auto mb-16">
            <Carousel className="w-full">
              <CarouselContent>
                {productData.heroImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video bg-slate-800/50 rounded-2xl shadow-2xl flex items-center justify-center p-12 border border-slate-700">
                      <img
                        src={image}
                        alt={`${productData.name} ${index + 1}`}
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 bg-slate-800 border-slate-700 text-white hover:bg-slate-700 shadow-lg" />
              <CarouselNext className="-right-12 bg-slate-800 border-slate-700 text-white hover:bg-slate-700 shadow-lg" />
            </Carousel>
          </div>

          {/* Certifications - Enhanced */}
          <div className="flex justify-center gap-12 mb-8">
            {productData.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-lg p-4 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-slate-700"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              {productData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation - Sticky & Enhanced */}
      <div className="sticky top-0 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {["overview", "features", "performance", "specifications", "applications", "options", "resources"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabType)}
                className={`px-6 py-3 rounded-lg whitespace-nowrap font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700 hover:shadow-md"
                }`}
              >
                {tab === "overview" && "Overview"}
                {tab === "features" && "Features"}
                {tab === "performance" && "Performance"}
                {tab === "specifications" && "Specifications"}
                {tab === "applications" && "Applications"}
                {tab === "options" && "Options"}
                {tab === "resources" && "Resources"}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content - Enhanced */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-12 animate-fadeIn">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                {productData.tabs.overview.description}
              </h3>
            </div>
            {productData.tabs.overview.videoUrl && (
              <div className="relative aspect-video max-w-5xl mx-auto bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <iframe
                  src={productData.tabs.overview.videoUrl.replace("watch?v=", "embed/")}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        )}

        {/* Features Tab */}
        {activeTab === "features" && (
          <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
            {productData.tabs.features.map((feature, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-700 hover:border-blue-600 transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {feature.description}
                </p>
                {feature.image && (
                  <div className="rounded-xl overflow-hidden bg-slate-900/50 p-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === "performance" && (
          <div className="max-w-5xl mx-auto animate-fadeIn">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-12 mb-12">
              <h2 className="text-4xl font-bold text-white text-center whitespace-pre-line">
                {productData.tabs.performance.title}
              </h2>
            </div>
            <div className="bg-slate-800/50 rounded-2xl shadow-2xl p-8 border border-slate-700">
              <img
                src={productData.tabs.performance.image}
                alt="Performance Graph"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        )}

        {/* Specifications Tab */}
        {activeTab === "specifications" && (
          <div className="animate-fadeIn">
            <div className="bg-slate-800/50 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-blue-600">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                        Specification
                      </th>
                      {productData.tabs.specifications.models.map((model) => (
                        <th
                          key={model.name}
                          className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider"
                        >
                          {model.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Platform Dimensions
                      </td>
                      <td
                        colSpan={productData.tabs.specifications.models.length}
                        className="px-6 py-4 text-sm text-gray-300"
                      >
                        Custom-made
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Load Capacity
                      </td>
                      {productData.tabs.specifications.models.map((model) => (
                        <td
                          key={model.name}
                          className="px-6 py-4 text-sm text-gray-300"
                        >
                          {model.loadCapacity}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Actuator
                      </td>
                      <td
                        colSpan={productData.tabs.specifications.models.length}
                        className="px-6 py-4 text-sm text-gray-300"
                      >
                        {productData.tabs.specifications.common.actuator}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Maximum Actuator Force
                      </td>
                      {productData.tabs.specifications.models.map((model) => (
                        <td
                          key={model.name}
                          className="px-6 py-4 text-sm text-gray-300"
                        >
                          {model.maxActuatorForce}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Degrees of Freedom
                      </td>
                      <td
                        colSpan={productData.tabs.specifications.models.length}
                        className="px-6 py-4 text-sm text-gray-300"
                      >
                        {productData.tabs.specifications.common.degreesOfFreedom}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Active Isolation Range
                      </td>
                      <td
                        colSpan={productData.tabs.specifications.models.length}
                        className="px-6 py-4 text-sm text-gray-300"
                      >
                        {productData.tabs.specifications.common.activeIsolationRange}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Vibration Isolation at 1 Hz
                      </td>
                      <td
                        colSpan={productData.tabs.specifications.models.length}
                        className="px-6 py-4 text-sm text-gray-300"
                      >
                        {productData.tabs.specifications.common.vibrationIsolationAt1Hz}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Vibration Isolation at ≥2 Hz
                      </td>
                      <td
                        colSpan={productData.tabs.specifications.models.length}
                        className="px-6 py-4 text-sm text-gray-300"
                      >
                        {productData.tabs.specifications.common.vibrationIsolationAt2HzPlus}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Input Voltage
                      </td>
                      <td
                        colSpan={productData.tabs.specifications.models.length}
                        className="px-6 py-4 text-sm text-gray-300"
                      >
                        {productData.tabs.specifications.common.inputVoltage}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Power Consumption
                      </td>
                      <td
                        colSpan={productData.tabs.specifications.models.length}
                        className="px-6 py-4 text-sm text-gray-300"
                      >
                        {productData.tabs.specifications.common.powerConsumption}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Operating Temperature
                      </td>
                      <td
                        colSpan={productData.tabs.specifications.models.length}
                        className="px-6 py-4 text-sm text-gray-300"
                      >
                        {productData.tabs.specifications.common.operatingTemperature}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Humidity
                      </td>
                      <td
                        colSpan={productData.tabs.specifications.models.length}
                        className="px-6 py-4 text-sm text-gray-300"
                      >
                        {productData.tabs.specifications.common.operatingHumidity}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white bg-slate-800/50">
                        Required Air Pressure
                      </td>
                      <td
                        colSpan={productData.tabs.specifications.models.length}
                        className="px-6 py-4 text-sm text-gray-300"
                      >
                        {productData.tabs.specifications.common.requiredAirPressure}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === "applications" && (
          <div className="space-y-16 animate-fadeIn">
            {/* Application Types */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Application Areas
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {productData.tabs.applications.list.map((app, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 rounded-xl p-6 text-center transform hover:scale-105 transition-all shadow-md hover:shadow-xl border border-slate-700 hover:border-blue-600"
                  >
                    <h4 className="font-semibold text-white text-lg">{app}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Installation Photos */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Installation Photos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productData.tabs.applications.installationPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="group bg-slate-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-700"
                  >
                    <div className="aspect-square bg-slate-900/50 overflow-hidden">
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 bg-slate-800/50">
                      <p className="text-sm text-gray-300 font-medium line-clamp-2">
                        {photo.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Options Tab */}
        {activeTab === "options" && (
          <div className="space-y-12 animate-fadeIn">
            {productData.tabs.options.map((option, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-12 shadow-xl border border-slate-700"
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  {option.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {option.description}
                </p>
                {option.images && option.images.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {option.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="rounded-xl overflow-hidden shadow-lg bg-slate-900/50 p-6"
                      >
                        <img
                          src={img}
                          alt={`${option.title} ${imgIndex + 1}`}
                          className="w-full h-auto rounded-lg"
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
          <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
            {/* Catalog Button */}
            <button className="w-full bg-blue-600 text-white py-6 px-8 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-xl font-semibold">
              {productData.tabs.resources.catalog.label}
            </button>

            {/* User Manual Button */}
            <button className="w-full bg-blue-600 text-white py-6 px-8 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-xl font-semibold">
              {productData.tabs.resources.userManual.label}
            </button>

            {/* Links */}
            <div className="space-y-4 pt-8">
              <h4 className="text-2xl font-bold text-white mb-4">Additional Resources</h4>
              {productData.tabs.resources.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="block bg-slate-800/50 border-2 border-slate-700 rounded-xl p-6 text-blue-400 hover:bg-slate-700/50 hover:border-blue-600 font-semibold text-lg transition-all shadow-md hover:shadow-lg group"
                >
                  <span className="flex items-center justify-between">
                    {link.label}
                    <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section - Enhanced */}
      <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-24 overflow-hidden border-t border-slate-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-slate-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Do you have any <span className="text-blue-400">Questions?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Find all contact information for DAEIL SYSTEMS. If you have any questions, require
            technical assistance or want to provide feedback, contact us. We'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-12 py-5 rounded-xl hover:bg-blue-700 transition-all text-xl font-bold shadow-2xl transform hover:scale-105"
          >
            Contact us
          </Link>
        </div>
      </section>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bg-grid-slate-700 {
          background-image: linear-gradient(to right, rgb(51 65 85 / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(51 65 85 / 0.3) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
