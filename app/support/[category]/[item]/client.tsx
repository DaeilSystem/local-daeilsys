"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Mail } from "lucide-react"
import Link from "next/link"
import fundamentalsData from "@/data/support/fundamentals-of-vibration.json"

interface ClientProps {
  category: string
  itemId: string
  itemData: {
    title: string | { en: string; ko: string }
    description: string | { en: string; ko: string }
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

  // Check if this is the fundamentals page and load its data
  const isFundamentals = itemId === "fundamentals"
  const contentData = isFundamentals ? fundamentalsData : null

  const title = typeof itemData.title === "string" ? itemData.title : itemData.title[currentLanguage]
  const description = typeof itemData.description === "string" ? itemData.description : itemData.description[currentLanguage]

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      {/* Breadcrumb */}
      <section className="pt-20 pb-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  {currentLanguage === "ko" ? "홈" : "Home"}
                </Link>
              </li>
              <li className="text-gray-400 dark:text-gray-500">/</li>
              <li>
                <Link href="/support" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  {currentLanguage === "ko" ? "고객지원" : "Support"}
                </Link>
              </li>
              <li className="text-gray-400 dark:text-gray-500">/</li>
              <li>
                <Link href={`/support/${category}`} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  {category === "technical-notes"
                    ? currentLanguage === "ko"
                      ? "기술자료"
                      : "Technical Notes"
                    : category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </Link>
              </li>
              <li className="text-gray-400 dark:text-gray-500">/</li>
              <li className="text-gray-900 dark:text-white">{title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-black">
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${isFundamentals ? "max-w-6xl" : "max-w-4xl"}`}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-thin mb-6 text-gray-900 dark:text-white">{title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{description}</p>
            </div>

            {isFundamentals && contentData ? (
              <div className="space-y-12">
                {contentData.sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="mb-8 border border-gray-200 dark:border-gray-800">
                      <CardContent className="p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                          {typeof section.title === "string" ? section.title : section.title[currentLanguage]}
                        </h2>

                        {section.description && (
                          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            {typeof section.description === "string" ? section.description : section.description[currentLanguage]}
                          </p>
                        )}

                        {section.formula && (
                          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6 font-mono text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line">
                            {section.formula}
                          </div>
                        )}

                        {section.items && (
                          <div className="space-y-4 mb-6">
                            {section.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="border-l-4 border-blue-500 pl-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                  {typeof item.title === "string" ? item.title : item.title[currentLanguage]}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                  {typeof item.description === "string" ? item.description : item.description[currentLanguage]}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {section.methods && (
                          <div className="space-y-4 mb-6">
                            {section.methods.map((method, methodIndex) => (
                              <div key={methodIndex} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                  {typeof method.name === "string" ? method.name : method.name[currentLanguage]}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                  {typeof method.description === "string" ? method.description : method.description[currentLanguage]}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {section.image && (
                          <div className="mt-6">
                            <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                              <img
                                src={section.image}
                                alt={typeof section.title === "string" ? section.title : section.title[currentLanguage]}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                        )}

                        {section.images && section.images.length > 0 && (
                          <div className="mt-6">
                            {section.images.length === 1 ? (
                              <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                                <img
                                  src={section.images[0]}
                                  alt={typeof section.title === "string" ? section.title : section.title[currentLanguage]}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            ) : (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {section.images.map((image, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                                  >
                                    <img
                                      src={image}
                                      alt={`${typeof section.title === "string" ? section.title : section.title[currentLanguage]} ${imgIndex + 1}`}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <Card className="apple-card mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {currentLanguage === "ko" ? "문서 제공 가능" : "Document Available"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {currentLanguage === "ko" ? "PDF 형식 • 2024년 업데이트" : "PDF Format • Updated 2024"}
                        </p>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      {currentLanguage === "ko" ? "다운로드" : "Download"}
                    </Button>
                  </div>

                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      {currentLanguage === "ko"
                        ? `이 포괄적인 문서는 ${title.toLowerCase()}에 대한 자세한 정보를 제공합니다. 최적의 성능을 위한 기술 사양, 구현 가이드라인 및 모범 사례가 포함되어 있습니다.`
                        : `This comprehensive document provides detailed information about ${title.toLowerCase()}. It includes technical specifications, implementation guidelines, and best practices for optimal performance.`}
                    </p>

                    <h4>{currentLanguage === "ko" ? "포함 내용:" : "Contents Include:"}</h4>
                    <ul>
                      <li>{currentLanguage === "ko" ? "기술 사양 및 요구사항" : "Technical specifications and requirements"}</li>
                      <li>{currentLanguage === "ko" ? "설치 및 설정 절차" : "Installation and setup procedures"}</li>
                      <li>{currentLanguage === "ko" ? "성능 최적화 가이드라인" : "Performance optimization guidelines"}</li>
                      <li>{currentLanguage === "ko" ? "문제 해결 및 유지보수" : "Troubleshooting and maintenance"}</li>
                      <li>{currentLanguage === "ko" ? "안전 고려사항 및 규정 준수" : "Safety considerations and compliance"}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {currentLanguage === "ko"
                  ? "이 문서에 대한 추가 지원이나 질문이 있으신가요?"
                  : "Need additional support or have questions about this document?"}
              </p>
              <Link href="/contact">
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  {currentLanguage === "ko" ? "고객지원 문의" : "Contact Support"}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
