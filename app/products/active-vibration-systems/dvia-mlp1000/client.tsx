"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import productData from "@/data/products/dvia-mlp1000-full.json"

export default function DviaMLP1000Client() {
  const [currentFrame, setCurrentFrame] = useState(1)
  const [disassemblyFrame, setDisassemblyFrame] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const disassemblyRef = useRef<HTMLDivElement>(null)

  // Hero motion animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.8)))
        const frame = Math.floor(scrollProgress * (productData.heroMotion.endFrame - productData.heroMotion.startFrame)) + productData.heroMotion.startFrame
        setCurrentFrame(Math.min(productData.heroMotion.endFrame, Math.max(productData.heroMotion.startFrame, frame)))
      }

      if (disassemblyRef.current) {
        const rect = disassemblyRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.8)))
        const frame = Math.floor(scrollProgress * (productData.disassemblyMotion.endFrame - productData.disassemblyMotion.startFrame)) + productData.disassemblyMotion.startFrame
        setDisassemblyFrame(Math.min(productData.disassemblyMotion.endFrame, Math.max(productData.disassemblyMotion.startFrame, frame)))
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getFrameUrl = (frame: number, isDisassembly = false) => {
    const data = isDisassembly ? productData.disassemblyMotion : productData.heroMotion
    const frameStr = frame.toString().padStart(data.frameDigits, '0')
    return `${data.basePath}/${data.filename}-${frameStr}.${data.extension}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section with Motion Animation */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center" style={{ height: '200vh' }}>
        <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
          <div className="relative w-full max-w-7xl mx-auto px-4">
            {/* Hero Image with Motion */}
            <div className="relative aspect-video w-full mb-8">
              <img
                src={getFrameUrl(currentFrame)}
                alt="DVIA-MLP1000"
                className="w-full h-full object-contain"
              />

              {/* Floating Title */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                    {productData.name}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300">
                    {productData.fullName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative py-24 bg-gradient-to-b from-blue-900/30 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gray-400">{productData.aboutSection.title.split(' ')[0]}</span>{' '}
              <span className="text-white">{productData.aboutSection.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {productData.aboutSection.paragraphs[0]}
            </p>
          </div>

          {/* Icon Features */}
          <div className="flex justify-center gap-12 mb-12">
            {productData.heroIcons.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <span className="material-icons text-5xl text-blue-400">{item.icon}</span>
                </div>
                <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Product Image */}
          <div className="max-w-3xl mx-auto">
            <img
              src={productData.heroMotion.basePath + '/dvia-mlp1000-motion-0001.jpg'}
              alt="DVIA-MLP1000"
              className="w-full h-auto object-contain opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8">
            <span className="text-white">{productData.aboutSection.titleKo}</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            {productData.aboutSection.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Disassembly Motion Section */}
      <div ref={disassemblyRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800" style={{ height: '200vh' }}>
        <div className="sticky top-0 w-full h-screen flex items-center justify-center">
          <div className="relative w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {productData.disassemblyMotion.title}
              </h2>
            </div>
            <div className="aspect-video w-full">
              <img
                src={getFrameUrl(disassemblyFrame, true)}
                alt="DVIA-MLP1000 Disassembly"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hardware Section */}
      <div className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            <span className="text-white">{productData.hardwareSection.title}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {productData.hardwareSection.features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="material-icons text-4xl text-blue-400 mt-1">{feature.icon}</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                    {feature.subtitle && (
                      <p className="text-lg text-blue-400 mb-3">{feature.subtitle}</p>
                    )}
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Software Section */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            <span className="text-white">{productData.softwareSection.title}</span>
          </h2>
          <div className="space-y-12">
            {productData.softwareSection.features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6DOF Section */}
      <div className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{productData.sixDOF.title}</h2>
              <p className="text-gray-300 leading-relaxed">{productData.sixDOF.description}</p>
            </div>
            <div>
              <img src={productData.sixDOF.image} alt="6DOF" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Performance Section */}
      <div className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={productData.performance.image} alt="Performance" className="w-full h-auto rounded-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{productData.performance.title}</h2>
              <p className="text-gray-300 leading-relaxed">{productData.performance.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Viewer Section */}
      <div className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{productData.viewer3D.title}</h2>
          <div className="aspect-video w-full max-w-5xl mx-auto bg-slate-800 rounded-lg overflow-hidden">
            <iframe
              src={productData.viewer3D.url}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Compatible Models Section */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            {productData.compatibleModels.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productData.compatibleModels.models.map((model, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-700/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white">• {model}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Specifications</h2>
          <div className="space-y-4">
            {Object.entries(productData.specifications).map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-3 gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                <div className="col-span-1 text-gray-400 font-medium">
                  {key.replace(/([A-Z])/g, ' $1').trim().replace(/^./, (str) => str.toUpperCase())}
                </div>
                <div className="col-span-2 text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Do you have any <span className="text-blue-400">Questions?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Find all contact information for DAEIL SYSTEMS. If you have any questions, require technical assistance or want to provide feedback, contact us. We'd love to hear you out.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* Add Material Icons */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </div>
  )
}
