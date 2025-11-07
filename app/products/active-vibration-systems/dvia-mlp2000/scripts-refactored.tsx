"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function MLP2000ScriptsRefactored() {
  useEffect(() => {
    console.log("Initializing GSAP ScrollTrigger animations...")

    // Initialize WOW.js style animations with Intersection Observer
    const animatedElements = document.querySelectorAll(".wow")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    animatedElements.forEach((el) => observer.observe(el))

    // Motion Sample Animation (120 frames)
    const motionImg = document.querySelector(".img-motion") as HTMLImageElement
    if (motionImg) {
      console.log("Motion image found:", motionImg)

      const frameCount = 120
      const obj = { frame: 1 }

      gsap.to(obj, {
        frame: frameCount,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: "#trigger",
          start: "top top",
          end: "+=200%",
          pin: ".pinned",
          scrub: 0.5,
          onUpdate: (self) => {
            const frame = Math.ceil(obj.frame)
            if (frame >= 1 && frame <= frameCount) {
              const paddedFrame = String(frame).padStart(4, "0")
              motionImg.src = `/products/dvia-mlp2000/assets/images/motion-sample/dvia-mlp2000-motion-${paddedFrame}.jpg`
            }
          },
        },
      })

      console.log("Motion animation initialized with GSAP ScrollTrigger")
    }

    // Disassembly Animation (61 frames: 0000-0060)
    const disassemblyImg = document.querySelector(".img-motion2") as HTMLImageElement
    if (disassemblyImg) {
      console.log("Disassembly image found:", disassemblyImg)

      const frameCount = 60
      const obj = { frame: 0 }

      gsap.to(obj, {
        frame: frameCount,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: "#trigger2",
          start: "top top",
          end: "+=200%",
          pin: ".pinned2",
          scrub: 0.5,
          onUpdate: (self) => {
            const frame = Math.floor(obj.frame)
            if (frame >= 0 && frame <= frameCount) {
              const paddedFrame = String(frame).padStart(4, "0")
              disassemblyImg.src = `/products/dvia-mlp2000/assets/images/motion-disassembly/dvia-mlp2000-disassembly-${paddedFrame}.jpg`
            }
          },
        },
      })

      console.log("Disassembly animation initialized with GSAP ScrollTrigger")
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      observer.disconnect()
    }
  }, [])

  return null
}
