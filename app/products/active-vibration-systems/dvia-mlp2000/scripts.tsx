"use client"

import Script from "next/script"

export default function MLP2000Scripts() {
  // Initialize ScrollMagic animations
  const initScrollAnimations = () => {
    console.log("Initializing ScrollMagic animations...")
    if (typeof window !== "undefined" && (window as any).ScrollMagic) {
      console.log("ScrollMagic is loaded")
      const controller = new (window as any).ScrollMagic.Controller()

      // Motion Sample Animation (120 frames)
      const motionImg = document.querySelector(".img-motion") as HTMLImageElement
      console.log("Motion image found:", motionImg)
      if (motionImg) {
        const frameCount = 120

        const scene1 = new (window as any).ScrollMagic.Scene({
          triggerElement: "#trigger",
          triggerHook: 0,
          duration: "200%",
        })
          .setPin(".pinned")
          .addTo(controller)
          .on("progress", function (e: any) {
            const frame = Math.ceil(e.progress * frameCount)
            if (frame >= 1 && frame <= frameCount) {
              const paddedFrame = String(frame).padStart(4, "0")
              motionImg.src = `/products/dvia-mlp2000/assets/images/motion-sample/dvia-mlp2000-motion-${paddedFrame}.jpg`
            }
          })

        console.log("Scene 1 created:", scene1)
      }

      // Disassembly Animation (61 frames: 0000-0060)
      const disassemblyImg = document.querySelector(".img-motion2") as HTMLImageElement
      console.log("Disassembly image found:", disassemblyImg)
      if (disassemblyImg) {
        const frameCount = 60

        new (window as any).ScrollMagic.Scene({
          triggerElement: "#trigger2",
          triggerHook: 0,
          duration: "200%",
        })
          .setPin(".pinned2")
          .addTo(controller)
          .on("progress", function (e: any) {
            const frame = Math.floor(e.progress * frameCount)
            if (frame >= 0 && frame <= frameCount) {
              const paddedFrame = String(frame).padStart(4, "0")
              disassemblyImg.src = `/products/dvia-mlp2000/assets/images/motion-disassembly/dvia-mlp2000-disassembly-${paddedFrame}.jpg`
            }
          })
      }
    }
  }

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

      {/* Typed.js for typing animation */}
      <Script
        src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).Typed) {
            const typedElement = document.querySelector(".typed-text")
            if (typedElement) {
              new (window as any).Typed(".typed-text", {
                strings: ["Specially Designed", "특별히 설계된"],
                typeSpeed: 100,
                backSpeed: 50,
                loop: true,
              })
            }
          }
        }}
      />

      {/* Particles.js for hero background */}
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

      {/* ScrollMagic for scroll-triggered animations */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Wait a bit for GSAP to also load, then initialize
          setTimeout(initScrollAnimations, 500)
        }}
      />

      {/* GSAP for advanced animations */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
        strategy="lazyOnload"
      />
    </>
  )
}
