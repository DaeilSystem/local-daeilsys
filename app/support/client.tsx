"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download, Settings } from "lucide-react"

export default function Client() {
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

  const supportCategories = [
    {
      title: t.technicalNotes,
      description: "Technical documentation and application notes",
      icon: FileText,
      items: [
        { name: t.fundamentals, href: "/support/technical-notes/fundamentals" },
        { name: t.genericCriteria, href: "/support/technical-notes/generic-criteria" },
        { name: t.activeSystem, href: "/support/technical-notes/active-system" },
        { name: t.passiveSystem, href: "/support/technical-notes/passive-system" },
      ],
    },
    {
      title: t.userManual,
      description: "Comprehensive user manuals and guides",
      icon: Download,
      items: [
        { name: "DVIA Series Manual", href: "/support/manuals/dvia-series" },
        { name: "Optical Tables Manual", href: "/support/manuals/optical-tables" },
        { name: "Workstation Manual", href: "/support/manuals/workstations" },
        { name: "Maintenance Guide", href: "/support/manuals/maintenance" },
      ],
    },
    {
      title: t.catalogs,
      description: "Product catalogs and specifications",
      icon: FileText,
      items: [
        { name: "Complete Product Catalog", href: "/support/catalogs/complete" },
        { name: "Active Systems Catalog", href: "/support/catalogs/active-systems" },
        { name: "Optical Tables Catalog", href: "/support/catalogs/optical-tables" },
        { name: "Accessories Catalog", href: "/support/catalogs/accessories" },
      ],
    },
    {
      title: t.howToSetup,
      description: "Installation and setup instructions",
      icon: Settings,
      items: [
        { name: "Installation Guide", href: "/support/setup/installation" },
        { name: "Calibration Procedures", href: "/support/setup/calibration" },
        { name: "Troubleshooting", href: "/support/setup/troubleshooting" },
        { name: "Video Tutorials", href: "/support/setup/videos" },
      ],
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
            <h1 className="text-5xl md:text-6xl font-thin mb-6">{t.support}</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Access comprehensive technical documentation, user manuals, and support resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {supportCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="apple-card h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <category.icon className="h-8 w-8 text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">{category.description}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {category.items.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <span className="text-gray-900 dark:text-white font-medium">{item.name}</span>
                        </a>
                      ))}
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
