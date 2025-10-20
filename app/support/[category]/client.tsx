"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"

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

  const getResources = () => {
    if (category === "technical-notes") {
      return [
        {
          title: "Fundamentals of Vibration",
          description: "Basic principles and theory of vibration isolation",
          type: "PDF",
          size: "2.5 MB",
        },
        {
          title: "Generic Vibration Criteria",
          description: "Industry standards and measurement criteria",
          type: "PDF",
          size: "1.8 MB",
        },
        {
          title: "Active Vibration Isolation System",
          description: "Technical overview of active isolation technology",
          type: "PDF",
          size: "3.2 MB",
        },
        {
          title: "Passive Vibration Isolation System",
          description: "Guide to passive isolation solutions",
          type: "PDF",
          size: "2.1 MB",
        },
      ]
    } else {
      return [
        {
          title: "User Manual - DVIA Series",
          description: "Complete user manual for DVIA active systems",
          type: "PDF",
          size: "5.4 MB",
        },
        {
          title: "Product Catalog 2024",
          description: "Complete product catalog with specifications",
          type: "PDF",
          size: "12.8 MB",
        },
        {
          title: "Installation Guide",
          description: "Step-by-step installation instructions",
          type: "PDF",
          size: "3.7 MB",
        },
        {
          title: "Maintenance Manual",
          description: "Maintenance procedures and schedules",
          type: "PDF",
          size: "2.9 MB",
        },
      ]
    }
  }

  const resources = getResources()

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
                <a href="/support" className="text-gray-500 hover:text-gray-700">
                  Support
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

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="apple-card h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <FileText className="h-8 w-8 text-blue-600 flex-shrink-0" />
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{resource.size}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{resource.title}</h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </div>
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
