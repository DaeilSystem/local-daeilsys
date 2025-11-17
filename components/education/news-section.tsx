"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface NewsArticle {
  id: string
  category: "UPDATE" | "PRESS RELEASE" | "FEATURE"
  title: string
  date: string
  href: string
}

interface NewsSectionProps {
  className?: string
}

const initialArticles: NewsArticle[] = [
  {
    id: "1",
    category: "UPDATE",
    title: "Meet four of this year's Swift Student Challenge winners",
    date: "May 8, 2025",
    href: "#swift-student-challenge"
  },
  {
    id: "2",
    category: "PRESS RELEASE",
    title: "Apple launches new resources for teachers, expands education grant program",
    date: "October 1, 2024",
    href: "#education-resources"
  },
  {
    id: "3",
    category: "UPDATE",
    title: "Houston educators nurture the next generation of Hispanic leaders with Apple",
    date: "October 4, 2023",
    href: "#houston-educators"
  },
  {
    id: "4",
    category: "FEATURE",
    title: "At Exceptional Minds, autistic artists turn creativity into careers",
    date: "March 31, 2023",
    href: "#exceptional-minds"
  }
]

const additionalArticles: NewsArticle[] = [
  {
    id: "5",
    category: "UPDATE",
    title: "Apple supports coding education in underserved communities",
    date: "February 15, 2023",
    href: "#coding-education"
  },
  {
    id: "6",
    category: "PRESS RELEASE",
    title: "New partnerships expand access to creative learning worldwide",
    date: "January 20, 2023",
    href: "#creative-learning"
  }
]

export function NewsSection({ className }: NewsSectionProps) {
  const [showMore, setShowMore] = useState(false)
  const [articles, setArticles] = useState(initialArticles)

  const handleShowMore = () => {
    if (!showMore) {
      setArticles([...initialArticles, ...additionalArticles])
      setShowMore(true)
    }
  }

  const getCategoryColor = (category: NewsArticle["category"]) => {
    switch (category) {
      case "UPDATE":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "PRESS RELEASE":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "FEATURE":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <section className={`py-16 px-4 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center text-gray-900 dark:text-white">
          More from Apple on education.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
            >
              <CardContent className="p-6 space-y-4">
                <Badge
                  variant="secondary"
                  className={`text-xs font-medium ${getCategoryColor(article.category)}`}
                >
                  {article.category}
                </Badge>
                <h3 className="text-xl md:text-2xl font-medium leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {article.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showMore && (
          <div className="text-center">
            <Button
              onClick={handleShowMore}
              variant="outline"
              className="rounded-full px-8 py-2"
            >
              Show more
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}