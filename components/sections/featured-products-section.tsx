"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { TranslationKeys, ProductItem } from "@/types"

interface FeaturedProductsSectionProps {
  translations: TranslationKeys
}

export function FeaturedProductsSection({ translations: t }: FeaturedProductsSectionProps) {
  const products: ProductItem[] = [
    {
      title: t.activeVibration,
      image: "/placeholder.svg?height=300&width=400",
      description: "DVIA Series - Advanced active vibration control systems",
    },
    {
      title: t.opticalTables,
      image: "/placeholder.svg?height=300&width=400",
      description: "Research grade optical tables and breadboards",
    },
    {
      title: t.workstations,
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete workstation solutions for sensitive applications",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-thin text-gray-900 dark:text-white mb-4">{t.featuredProducts}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="apple-card overflow-hidden">
                <div className="relative h-64">
                  <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{product.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
