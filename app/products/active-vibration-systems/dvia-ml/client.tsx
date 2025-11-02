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

export default function DviaMLClient() {
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
            Key Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {productData.keyHighlights.map((highlight, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {highlight.description}
                </p>
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
            Total Custom Design
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            The DVIA-ML can be fully customized to fit any electron microscope model.
            Our team works closely with you to design the perfect platform for your specific requirements.
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
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
          Features & Technology
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
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
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
                          alt={feature.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : feature.image ? (
                  <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={feature.image}
                      alt={feature.title}
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
              Installation Gallery - Glacios 2
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
          Technical Specifications
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
            Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productData.applications.map((app, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center"
              >
                <p className="text-gray-700 dark:text-gray-300">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
          Resources
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <button className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
              {productData.resources.catalog.label}
            </button>
            <button className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
              {productData.resources.userManual.label}
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              {productData.resources.cad}
            </p>
          </div>
        </div>
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
