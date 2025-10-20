"use client"

import { getCompanySectionBySlug } from "@/data/company"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface ClientProps {
  slug: string
}

export default function Client({ slug }: ClientProps) {
  const { language, isInitialized } = useLanguage()
  const { theme } = useTheme()

  const currentLanguage = isInitialized ? language : "en"

  const section = getCompanySectionBySlug(slug)

  if (!section) {
    notFound()
  }

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const renderContent = () => {
    // Special rendering for values page
    if (section.slug === 'values') {
      const paragraphs = section.content.split('\n\n').filter(p => p.trim())
      const introParagraphs = paragraphs.slice(0, 2) // First two paragraphs are intro
      const valueParagraphs = paragraphs.slice(2, -1) // Middle paragraphs are values
      const conclusionParagraph = paragraphs[paragraphs.length - 1] // Last paragraph is conclusion

      return (
        <div className="space-y-12">
          {/* Introduction */}
          <div className="space-y-6">
            {introParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {valueParagraphs.map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.includes('**')) {
                const parts = paragraph.split('**')
                const title = parts[1]
                const emoji = title.match(/[🌟⚡✨🤝👥🗣️🌍🚀]/)?.[0] || ''
                const cleanTitle = title.replace(/[🌟⚡✨🤝👥🗣️🌍🚀]/g, '').trim()
                const description = parts.slice(2).join('**').trim()

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {emoji}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {cleanTitle}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {description}
                    </p>
                  </motion.div>
                )
              }
              return null
            })}
          </div>

          {/* Conclusion */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl border border-blue-100 dark:border-blue-800">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed italic">
              {conclusionParagraph}
            </p>
          </div>
        </div>
      )
    }

    // Default rendering for other pages
    const paragraphs = section.content.split('\n\n').filter(p => p.trim())

    return (
      <div className="space-y-8">
        {paragraphs.map((paragraph, index) => {
          // Check if paragraph starts with ** (bold text for headings)
          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
            const text = paragraph.slice(2, -2)
            return (
              <h3 key={index} className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                {text}
              </h3>
            )
          } else {
            return (
              <p key={index} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            )
          }
        })}
      </div>
    )
  }

  const renderTimeline = () => {
    if (!section.timeline) return null

    return (
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Our Journey</h3>
        <div className="space-y-8">
          {section.timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="flex-1">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {event.year}
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {event.event}
                </p>
              </div>
              {event.image && (
                <div className="flex-1">
                  <Image
                    src={event.image}
                    alt={event.event}
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
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
                <Link href="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/company" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                  Company
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 dark:text-white font-medium">{section.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-6">{section.icon}</div>
            <h1 className="text-5xl md:text-6xl font-thin text-gray-900 dark:text-white mb-6">
              {section.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {section.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            {section.image && (
              <div className="mb-8">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={800}
                  height={400}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            )}

            {renderContent()}

            {renderTimeline()}

            {section.video_url && (
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Watch Our Video</h3>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src={section.video_url}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Navigation to other sections */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-thin text-gray-900 dark:text-white mb-4">Explore More</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover other aspects of DAEIL SYSTEMS
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['overview', 'vision-mission', 'values', 'company-history', 'sustainability-management', 'trade-shows'].map((sectionSlug) => {
              const otherSection = getCompanySectionBySlug(sectionSlug)
              if (!otherSection || otherSection.slug === slug) return null

              return (
                <Link key={sectionSlug} href={`/company/${sectionSlug}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <div className="text-3xl mb-3">{otherSection.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {otherSection.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {otherSection.description}
                    </p>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
