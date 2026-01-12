"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import { newsArticles, getText, type NewsArticle } from "@/data/company"

interface NewsSectionProps {
  className?: string
}

export function NewsSection({ className }: NewsSectionProps) {
  const { language } = useLanguage()
  const [showMore, setShowMore] = useState(false)

  const initialArticles = newsArticles.slice(0, 4)
  const additionalArticles = newsArticles.slice(4)
  const displayedArticles = showMore ? newsArticles : initialArticles

  const handleShowMore = () => {
    if (!showMore) {
      setShowMore(true)
    }
  }

  const getCategoryColor = (category: string) => {
    const categoryLower = category.toLowerCase()
    if (categoryLower.includes("anniversary") || categoryLower.includes("기념")) {
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
    }
    if (categoryLower.includes("trade") || categoryLower.includes("전시")) {
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    }
    if (categoryLower.includes("product") || categoryLower.includes("제품")) {
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    }
    if (categoryLower.includes("company") || categoryLower.includes("기업")) {
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    }
    if (categoryLower.includes("tech") || categoryLower.includes("기술")) {
      return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300"
    }
    if (categoryLower.includes("award") || categoryLower.includes("수상")) {
      return "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300"
    }
    return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    if (language === 'ko') {
      return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const sectionTitle = {
    ko: "대일시스템 소식",
    en: "News from DAEIL SYSTEMS"
  }

  const showMoreText = {
    ko: "더 보기",
    en: "Show more"
  }

  return (
    <section className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-center text-gray-900 dark:text-white">
          {getText(sectionTitle, language)}
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {displayedArticles.map((article) => (
            <Card
              key={article.id}
              className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
            >
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <Badge
                  variant="secondary"
                  className={`text-xs font-medium ${getCategoryColor(article.category[language])}`}
                >
                  {article.category[language]}
                </Badge>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {getText(article.title, language)}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(article.date)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showMore && additionalArticles.length > 0 && (
          <div className="text-center">
            <Button
              onClick={handleShowMore}
              variant="outline"
              className="rounded-full px-6 sm:px-8 py-2 text-gray-700 dark:text-gray-200"
            >
              {getText(showMoreText, language)}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
