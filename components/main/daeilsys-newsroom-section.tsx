"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { newsItems, newsItemsEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { useState } from "react"

interface DaeilsysNewsroomSectionProps {
  className?: string
}

export function DaeilsysNewsroomSection({ className }: DaeilsysNewsroomSectionProps) {
  const { language, isInitialized } = useLanguage()
  const newsData = isInitialized && language === "ko" ? newsItems : newsItemsEn
  const [showMore, setShowMore] = useState(false)
  const [articles, setArticles] = useState(newsData.slice(0, 4))

  const handleShowMore = () => {
    if (!showMore) {
      setArticles(newsData)
      setShowMore(true)
    }
  }

  return (
    <section className={`py-16 px-4 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center text-gray-900 dark:text-white">
          Newsroom
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link key={article.id} href={`/newsroom/${article.id}`}>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl md:text-2xl font-medium leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {article.date}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/newsroom">
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 border-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200 font-medium text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
            >
              {isInitialized && language === "ko" ? "뉴스룸 더 보기" : "View All News"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
