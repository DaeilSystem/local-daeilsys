"use client"

import Script from "next/script"

interface ProductPageScriptsProps {
  /** Enable Particles.js background effect (default: true) */
  enableParticles?: boolean
  /** Enable Typed.js typing animation (default: true) */
  enableTyped?: boolean
  /** Configuration for Typed.js */
  typedConfig?: {
    selector: string
    strings: string[]
    typeSpeed?: number
    backSpeed?: number
    loop?: boolean
  }
  /** Enable WOW.js scroll animations (default: true) */
  enableWow?: boolean
  /** Enable ScrollMagic (default: true) */
  enableScrollMagic?: boolean
  /** Custom callback after all scripts are loaded */
  onScriptsLoaded?: () => void
}

/**
 * 제품 페이지에 필요한 모든 스크립트를 로드하는 컴포넌트
 *
 * 다음 라이브러리들을 관리합니다:
 * - jQuery
 * - Bootstrap
 * - WOW.js (스크롤 애니메이션)
 * - Typed.js (타이핑 애니메이션)
 * - Particles.js (파티클 배경)
 * - ScrollMagic (스크롤 기반 애니메이션)
 * - GSAP (고급 애니메이션)
 *
 * @example
 * ```tsx
 * <ProductPageScripts
 *   typedConfig={{
 *     selector: ".typed-text",
 *     strings: ["Amazing Product", "혁신적인 제품"]
 *   }}
 * />
 * ```
 */
export default function ProductPageScripts({
  enableParticles = true,
  enableTyped = true,
  typedConfig,
  enableWow = true,
  enableScrollMagic = true,
  onScriptsLoaded,
}: ProductPageScriptsProps = {}) {
  return (
    <>
      {/* jQuery */}
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />

      {/* Bootstrap Bundle with Popper */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* WOW.js for scroll animations */}
      {enableWow && (
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          strategy="lazyOnload"
          onLoad={() => {
            if (typeof window !== "undefined" && (window as any).WOW) {
              new (window as any).WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: true,
                live: true,
              }).init()
            }
          }}
        />
      )}

      {/* Typed.js for typing animation */}
      {enableTyped && (
        <Script
          src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
          strategy="lazyOnload"
          onLoad={() => {
            if (typeof window !== "undefined" && (window as any).Typed && typedConfig) {
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

      {/* Particles.js for hero background */}
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
                    polygon: {
                      nb_sides: 5,
                    },
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 40,
                      size_min: 0.1,
                      sync: false,
                    },
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
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200,
                    },
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
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1,
                      },
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                    push: {
                      particles_nb: 4,
                    },
                    remove: {
                      particles_nb: 2,
                    },
                  },
                },
                retina_detect: true,
              })
            }
          }}
        />
      )}

      {/* ScrollMagic for scroll-triggered animations */}
      {enableScrollMagic && (
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"
          strategy="lazyOnload"
          onLoad={() => {
            // Notify that ScrollMagic is loaded
            if (onScriptsLoaded) {
              setTimeout(onScriptsLoaded, 500)
            }
          }}
        />
      )}

      {/* GSAP for advanced animations */}
      {enableScrollMagic && (
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" strategy="lazyOnload" />
      )}
    </>
  )
}
