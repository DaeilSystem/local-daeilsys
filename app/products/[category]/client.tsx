"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface ClientProps {
  category: string
  categoryData: {
    title: string
    description: string
  }
}

export default function Client({ category, categoryData }: ClientProps) {
  const { language, isInitialized } = useLanguage()
  const { theme } = useTheme()

  const currentLanguage = isInitialized ? language : "en"

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  // Sample products for each category
  const getProducts = () => {
    switch (category) {
      case "active-vibration-systems":
        return [
          { id: "dvia-t", name: "DVIA-T", description: "Tabletop active vibration isolation system" },
          { id: "dvia-m", name: "DVIA-M", description: "Mid-size active vibration isolation system" },
          { id: "dvia-ml", name: "DVIA-ML", description: "Large active vibration isolation system" },
          { id: "dvia-mlp", name: "DVIA-MLP", description: "Large platform active vibration isolation system" },
        ]
      case "optical-tables":
        return [
          {
            id: "research-grade",
            name: "Research Grade",
            description: "Premium optical table for research applications",
          },
          {
            id: "scientific-grade",
            name: "Scientific Grade",
            description: "High-quality optical table for scientific use",
          },
          {
            id: "non-magnetic",
            name: "Non-Magnetic",
            description: "Non-magnetic optical table for sensitive applications",
          },
          { id: "breadboards", name: "Optical Breadboards", description: "Versatile optical breadboards" },
        ]
      default:
        return [
          { id: "product-1", name: "Product 1", description: "Sample product description" },
          { id: "product-2", name: "Product 2", description: "Sample product description" },
        ]
    }
  }

  const products = getProducts()

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>

      {/* Breadcrumb */}
      <section className="pt-20 pb-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <a href="/products" className="text-gray-500 hover:text-gray-700">
                  Products
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 dark:text-white">{categoryData.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-thin mb-6 text-gray-900 dark:text-white">{categoryData.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{categoryData.description}</p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/products/${category}/${product.id}`}>
                  <Card className="apple-card overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder.svg?height=300&width=400&text=${product.name}`}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{product.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
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
