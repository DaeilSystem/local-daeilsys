"use client"

import Script from "next/script"

interface ProductPageScriptsOptimizedProps {
  /** Enable Particles.js background effect (default: false - 최적화) */
  enableParticles?: boolean
  /** Enable Typed.js typing animation (default: false - GSAP 사용 권장) */
  enableTyped?: boolean
  /** Configuration for Typed.js */
  typedConfig?: {
    selector: string
    strings: string[]
    typeSpeed?: number
    backSpeed?: number
    loop?: boolean
  }
  /** Enable ScrollMagic (default: true - 이미지 시퀀스에 필수) */
  enableScrollMagic?: boolean
  /** Custom callback after all scripts are loaded */
  onScriptsLoaded?: () => void
}

/**
 * Next.js에 최적화된 제품 페이지 스크립트 컴포넌트
 *
 * jQuery, Bootstrap, WOW.js 제거 - Next.js에 불필요
 * Particles.js, Typed.js는 선택적 로딩
 * ScrollMagic + GSAP만 기본 포함
 *
 * @example
 * ```tsx
 * // 최소 구성 (이미지 시퀀스만)
 * <ProductPageScriptsOptimized />
 *
 * // Particles 추가
 * <ProductPageScriptsOptimized enableParticles />
 * ```
 */
export default function ProductPageScriptsOptimized({
  enableParticles = false,
  enableTyped = false,
  typedConfig,
  enableScrollMagic = true,
  onScriptsLoaded,
}: ProductPageScriptsOptimizedProps = {}) {
  return (
    <>
      {/* Typed.js - 선택적 (GSAP 사용 권장) */}
      {enableTyped && typedConfig && (
        <Script
          src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
          strategy="lazyOnload"
          onLoad={() => {
            if (typeof window !== "undefined" && (window as any).Typed) {
              const typedElement = document.querySelector(typedConfig.selector)
              if (typedElement) {
                new (window as any).Typed(typedConfig.selector, {
                  strings: typedConfig.strings,
                  typeSpeed: typedConfig.typeSpeed ?? 100,
                  backSpeed: typedConfig.backSpeed ?? 50,
                  loop: typedConfig.loop ?? true,
                })
              }
            }
          }}
        />
      )}

      {/* Particles.js - 선택적 (무거움, 필요시에만) */}
      {enableParticles && (
        <Script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          strategy="lazyOnload"
          onLoad={() => {
            if (typeof window !== "undefined" && (window as any).particlesJS) {
              ;(window as any).particlesJS("particles-js", {
                particles: {
                  number: {
                    value: 80,
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                  },
                  color: {
                    value: "#ffffff",
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#000000",
                    },
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                  },
                  size: {
                    value: 3,
                    random: true,
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1,
                  },
                  move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                  },
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse",
                    },
                    onclick: {
                      enable: true,
                      mode: "push",
                    },
                    resize: true,
                  },
                  modes: {
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                    push: {
                      particles_nb: 4,
                    },
                  },
                },
                retina_detect: true,
              })
            }
          }}
        />
      )}

      {/* ScrollMagic - 이미지 시퀀스에 필수 */}
      {enableScrollMagic && (
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"
          strategy="lazyOnload"
          onLoad={() => {
            if (onScriptsLoaded) {
              setTimeout(onScriptsLoaded, 500)
            }
          }}
        />
      )}

      {/* GSAP - 필수 (고성능 애니메이션) */}
      {enableScrollMagic && (
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" strategy="lazyOnload" />
      )}
    </>
  )
}
