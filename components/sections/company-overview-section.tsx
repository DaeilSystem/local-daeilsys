"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { TranslationKeys } from "@/types"

interface CompanyOverviewSectionProps {
  translations: TranslationKeys
}

export function CompanyOverviewSection({ translations: t }: CompanyOverviewSectionProps) {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-thin text-gray-900 dark:text-white mb-6">{t.leadingProvider}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{t.missionText}</p>
            <Button variant="outline" className="rounded-full">
              {t.companyOverview}
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Vibration Isolation Equipment"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
