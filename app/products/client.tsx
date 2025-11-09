"use client"

import { translations } from "@/constants/translations"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Client() {
  const { language, isInitialized } = useLanguage()
  const { theme } = useTheme()

  const currentLanguage = isInitialized ? language : "en"
  const t = translations[currentLanguage]

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const productCategories = [
    {
      title: t.activeVibrationSystems,
      description: "Advanced active vibration control systems for precision applications",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products/active-vibration-systems",
      products: ["DVIA-T", "DVIA-M", "DVIA-ML", "DVIA-MLP"],
    },
    {
      title: t.opticalTablesMenu,
      description: "Research and scientific grade optical tables and breadboards",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products/optical-tables",
      products: ["Research Grade", "Scientific Grade", "Non-Magnetic", "Breadboards"],
    },
    {
      title: t.vibrationWorkstations,
      description: "Complete workstation solutions for laboratory environments",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products/vibration-workstations",
      products: ["DVID-L", "DVID-C", "DVID-H", "DVID-T"],
    },
    {
      title: t.pneumaticPlatforms,
      description: "Low-profile pneumatic vibration isolation platforms",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products/pneumatic-platforms",
      products: ["DVIP-C", "DVIP-B"],
    },
    {
      title: t.pneumaticIsolators,
      description: "High-performance pneumatic vibration isolators",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products/pneumatic-isolators",
      products: ["DVIM-G", "DVIM-M", "DVIM-F"],
    },
    {
      title: t.acousticEnclosures,
      description: "Acoustic enclosures for noise reduction and isolation",
      image: "/placeholder.svg?height=300&width=400",
      href: "/products/acoustic-enclosures",
      products: ["DAE Series", "DSE Series"],
    },
  ]

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-thin mb-6">{t.products}</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive range of vibration isolation solutions for research, manufacturing, and scientific
              applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={category.href}>
                  <Card className="apple-card overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{category.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Featured Products:</p>
                        <div className="flex flex-wrap gap-1">
                          {category.products.map((product, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
