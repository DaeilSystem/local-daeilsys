"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

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

  const caseStudies = [
    {
      title: "Precision Laser Laboratory",
      industry: "Research & Development",
      challenge: "Eliminating micro-vibrations affecting laser precision measurements",
      solution: "DVIA-ML active vibration isolation system",
      result: "99.5% reduction in vibration amplitude",
      image: "/placeholder.svg?height=300&width=400&text=Laser+Lab",
    },
    {
      title: "Semiconductor Manufacturing",
      industry: "Manufacturing",
      challenge: "Protecting sensitive lithography equipment from building vibrations",
      solution: "Custom pneumatic isolation platform with active control",
      result: "Improved yield by 15% and reduced defect rates",
      image: "/placeholder.svg?height=300&width=400&text=Semiconductor",
    },
    {
      title: "University Research Facility",
      industry: "Education",
      challenge: "Creating vibration-free environment for atomic force microscopy",
      solution: "DVID-H optical workstation with integrated isolation",
      result: "Enhanced image resolution and measurement accuracy",
      image: "/placeholder.svg?height=300&width=400&text=University",
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
            <h1 className="text-5xl md:text-6xl font-thin mb-6">{t.caseStudies}</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-world applications and success stories of DVIA vibration isolation solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="apple-card overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-8">
                      <div className="mb-4">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{study.industry}</span>
                        <h3 className="text-2xl font-semibold mt-2 text-gray-900 dark:text-white">{study.title}</h3>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                          <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                          <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Result</h4>
                          <p className="text-green-600 dark:text-green-400 font-medium">{study.result}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
