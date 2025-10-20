"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Mail } from "lucide-react"

interface ClientProps {
  category: string
  itemId: string
  itemData: {
    title: string
    description: string
  }
}

export default function Client({ category, itemId, itemData }: ClientProps) {
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
                <a href="/support" className="text-gray-500 hover:text-gray-700">
                  Support
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <a href={`/support/${category}`} className="text-gray-500 hover:text-gray-700">
                  {category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 dark:text-white">{itemData.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-thin mb-6 text-gray-900 dark:text-white">{itemData.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{itemData.description}</p>
            </div>

            <Card className="apple-card mb-8">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Document Available</h3>
                      <p className="text-gray-600 dark:text-gray-300">PDF Format • Updated 2024</p>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    This comprehensive document provides detailed information about {itemData.title.toLowerCase()}. It
                    includes technical specifications, implementation guidelines, and best practices for optimal
                    performance.
                  </p>

                  <h4>Contents Include:</h4>
                  <ul>
                    <li>Technical specifications and requirements</li>
                    <li>Installation and setup procedures</li>
                    <li>Performance optimization guidelines</li>
                    <li>Troubleshooting and maintenance</li>
                    <li>Safety considerations and compliance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Need additional support or have questions about this document?
              </p>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
