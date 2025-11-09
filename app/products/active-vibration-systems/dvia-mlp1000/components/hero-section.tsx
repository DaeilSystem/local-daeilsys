"use client"

import ParticlesBackground from "../particles-background"

interface HeroSectionProps {
  isKorean: boolean
}

export default function HeroSection({ isKorean }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/main-visual-min.jpg)" }}
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto text-center" style={{ marginTop: "6vh" }}>
        <div className="row">
          <div className="col-12">
            <div className="typed-text mega-typed">
              <span className="animated-text-effect text-white text-6xl md:text-8xl font-bold">
                {isKorean ? "특별히 설계된" : "Specially Designed"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">DVIA-MLP2000</h1>
          <p className="text-white text-xl md:text-2xl mb-4">
            {isKorean
              ? "Thermo Fisher SEM을 위한 커스텀 액티브 제진 시스템"
              : "Custom Active Vibration Isolation System for Thermo Fisher SEM"}
          </p>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            {isKorean
              ? "측면 삽입 설치를 지원하며, 0.5Hz부터 진동을 제어하고 1Hz에서 80~90%의 진동 차단율을 제공합니다."
              : "Supports side insertion installation, controls vibration from 0.5Hz, and provides 80~90% vibration isolation at 1Hz."}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
