"use client"

import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import productData from "@/data/products/dvia-ml-full.json"
import { useLanguage } from "@/hooks/use-language"

export default function DviaMLClient() {
  const { language } = useLanguage()
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-light text-gray-900 dark:text-white mb-4">
              {typeof productData.fullName === "string" ? productData.fullName : productData.fullName[language]}
            </h1>
            <h2 className="text-3xl text-blue-600 dark:text-blue-400 mb-4">
              {typeof productData.series === "string" ? productData.series : productData.series[language]}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {typeof productData.tagline === "string" ? productData.tagline : productData.tagline[language]}
            </p>
          </div>

          {/* Hero Image */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={productData.heroImages[0]}
                alt={productData.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Certifications */}
          <div className="flex justify-center gap-8">
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

      {/* Introduction Slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {productData.introductionSlider.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${productData.name} introduction ${index + 1}`}
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

      {/* Key Highlights */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
            {language === "ko" ? "주요 특징" : "Key Highlights"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {productData.keyHighlights.map((highlight, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {typeof highlight.title === "string" ? highlight.title : highlight.title[language]}
                </h3>
                {highlight.description && (
                  <p className="text-gray-600 dark:text-gray-300">
                    {typeof highlight.description === "string" ? highlight.description : highlight.description[language]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      {productData.videoUrl && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="aspect-video max-w-4xl mx-auto">
            <iframe
              width="100%"
              height="100%"
              src={productData.videoUrl.replace("watch?v=", "embed/")}
              title="Product Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

      {/* Custom Design Options */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-4">
            {typeof productData.customDesignTitle === "string" ? productData.customDesignTitle : productData.customDesignTitle[language]}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            {typeof productData.customDesignDescription === "string" ? productData.customDesignDescription : productData.customDesignDescription[language]}
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productData.customDesignOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {option.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {typeof option.description === "string" ? option.description : option.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
          {language === "ko" ? "특징 및 기술" : "Features & Technology"}
        </h2>
        <div className="space-y-16">
          {productData.features.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 whitespace-pre-line">
                  {typeof feature.title === "string" ? feature.title : feature.title[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {typeof feature.description === "string" ? feature.description : feature.description[language]}
                </p>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                {feature.images ? (
                  <div className="grid grid-cols-1 gap-4">
                    {feature.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
                      >
                        <img
                          src={img}
                          alt={typeof feature.title === "string" ? feature.title : feature.title[language]}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : feature.image ? (
                  <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={feature.image}
                      alt={typeof feature.title === "string" ? feature.title : feature.title[language]}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Gallery */}
      {productData.productGallery.glacios2 && (
        <div className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
              {language === "ko" ? "설치 갤러리 - Glacios 2" : "Installation Gallery - Glacios 2"}
            </h2>
            <div className="max-w-5xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {productData.productGallery.glacios2.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`Glacios 2 installation ${index + 1}`}
                          className="w-full h-full object-cover"
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
      )}

      {/* Specifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
          {language === "ko" ? "사양" : "Technical Specifications"}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                  Specification
                </th>
                {productData.specifications.models.map((model) => (
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
                  Platform Dimensions
                </td>
                {productData.specifications.models.map((model) => (
                  <td
                    key={model.name}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {model.platformDimensions}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  Isolator Dimensions (L x W x H)
                </td>
                {productData.specifications.models.map((model) => (
                  <td
                    key={model.name}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {model.isolatorDimensions}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  Load Capacity
                </td>
                {productData.specifications.models.map((model) => (
                  <td
                    key={model.name}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {model.loadCapacity}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  Maximum Actuator Force
                </td>
                {productData.specifications.models.map((model) => (
                  <td
                    key={model.name}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {model.maxActuatorForce}
                  </td>
                ))}
              </tr>
              {Object.entries(productData.specifications.common).map(([key, value]) => (
                <tr key={key}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </td>
                  <td
                    colSpan={productData.specifications.models.length}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
                  >
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
            {language === "ko" ? "적용 분야" : "Applications"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productData.applications.map((app, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center"
              >
                <p className="text-gray-700 dark:text-gray-300">
                  {typeof app === "string" ? app : app[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
          {language === "ko" ? "자료" : "Resources"}
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <button className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
              {typeof productData.resources.catalog.label === "string"
                ? productData.resources.catalog.label
                : productData.resources.catalog.label[language]}
            </button>
            <button className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
              {typeof productData.resources.userManual.label === "string"
                ? productData.resources.userManual.label
                : productData.resources.userManual.label[language]}
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              {typeof productData.resources.cad === "string"
                ? productData.resources.cad
                : productData.resources.cad[language]}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
            {language === "ko" ? "시작할 준비가 되셨나요?" : "Ready to get started?"}
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            {language === "ko" ? "문의하기" : "Contact us"}
          </Link>
        </div>
      </div>
    </div>
  )
}
