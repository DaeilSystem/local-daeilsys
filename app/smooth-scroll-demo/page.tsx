"use client"

import { useState, useEffect } from "react"
import { AppleScrollVideo } from "@/components/scroll-video/apple-scroll-video"
import { PngSequenceScroll } from "@/components/scroll-video/png-sequence-scroll"
import { SmoothScrollVideo } from "@/components/scroll-video/smooth-scroll-video"
import { ScrollImageSequenceSection } from "@/components/scroll-image-sequence-section"

export default function SmoothScrollDemo() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading demo...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Scroll Video Demo</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience smooth scroll-driven video animations and image sequences
          </p>
          <div className="mt-8">
            <div className="animate-bounce">
              <svg className="w-6 h-6 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <p className="text-sm text-gray-500 mt-2">Scroll down to explore</p>
          </div>
        </div>
      </section>

      {/* Apple-style Scroll Video */}
      <section className="relative">
        <AppleScrollVideo
          src="/placeholder.svg?height=1080&width=1920&text=Video+Placeholder"
          triggerHeight={400}
          onFrameChange={(frame) => console.log("Frame:", frame)}
          onVideoComplete={() => console.log("Video complete")}
          overlay={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Apple-Style Video</h2>
                <p className="text-lg">Scroll to control video playback</p>
              </div>
            </div>
          }
        />
      </section>

      {/* PNG Sequence Scroll */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">PNG Sequence Animation</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <PngSequenceScroll
              basePath="/frames/sequence"
              totalFrames={60}
              fileExtension="png"
              triggerHeight={600}
              className="w-full max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Smooth Scroll Video */}
      <section className="relative">
        <SmoothScrollVideo
          src="/placeholder.svg?height=1080&width=1920&text=Smooth+Video"
          triggerHeight={500}
          overlay={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Smooth Scroll Video</h2>
                <p className="text-lg">Continuous playback based on scroll</p>
              </div>
            </div>
          }
        />
      </section>

      {/* ScrollMagic Image Sequence */}
      <ScrollImageSequenceSection
        imgPath="/frames/sequence"
        ext="png"
        frameCount={60}
        height="400vh"
        alt="ScrollMagic image sequence animation"
      />

      {/* Features Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Demo Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold mb-2">Apple-Style Video</h3>
              <p className="text-gray-300">Precise frame-by-frame control with smooth transitions</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold mb-2">PNG Sequences</h3>
              <p className="text-gray-300">High-quality image sequence animations</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Smooth Playback</h3>
              <p className="text-gray-300">Optimized performance with Framer Motion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">End of Demo</h2>
          <p className="text-xl text-gray-600 mb-8">Thanks for scrolling through our video demos!</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Top
          </button>
        </div>
      </section>
    </div>
  )
}
