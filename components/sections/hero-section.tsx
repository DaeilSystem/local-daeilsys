"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import type { TranslationKeys } from "@/types"

interface HeroSectionProps {
  translations: TranslationKeys
}

export function HeroSection({ translations: t }: HeroSectionProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl apple-headline text-white mb-6"
        >
          {t.heroTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl apple-subheadline text-white/80 mb-8"
        >
          {t.heroSubtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="apple-button-primary">{t.learnMore}</button>
          <button className="apple-button-secondary">{t.exploreProducts}</button>
        </motion.div>
      </div>
    </section>
  )
}
