"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Download, Mail, Phone } from "lucide-react"

interface ClientProps {
  category: string
  productId: string
  productData: {
    name: string
    title: string
    description: string
    specifications: Record<string, string>
    features: string[]
  }
}

export default function Client({ category, productId, productData }: ClientProps) {
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
              <li>
                <a href={`/products/${category}`} className="text-gray-500 hover:text-gray-700">
                  {category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 dark:text-white">{productData.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-thin mb-4 text-gray-900 dark:text-white">{productData.name}</h1>
              <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-6">{productData.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{productData.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Request Quote
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Datasheet
                </Button>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Sales
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src={`/placeholder.svg?height=500&width=600&text=${productData.name}`}
                alt={productData.name}
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="apple-card h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Specifications</h3>
                  <div className="space-y-4">
                    {Object.entries(productData.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700"
                      >
                        <span className="font-medium text-gray-700 dark:text-gray-300">{key}</span>
                        <span className="text-gray-900 dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="apple-card h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Key Features</h3>
                  <div className="space-y-4">
                    {productData.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-thin mb-6 text-gray-900 dark:text-white">Applications</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              This product is ideal for various precision applications requiring superior vibration isolation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Research Laboratories", "Manufacturing Facilities", "Quality Control"].map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="apple-card text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{application}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
