"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NewsArticle } from "@/data/newsroom"
import { NEWS_CATEGORIES } from "@/data/newsroom-categories"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { findRelatedArticles, formatDate, newsArticles } from "@/lib/newsroom-utils"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, ExternalLink, Share2, Tag, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface NewsDetailClientProps {
  article: NewsArticle
}

export default function NewsDetailClient({ article }: NewsDetailClientProps) {
  const { language, isInitialized } = useLanguage()
  const { theme } = useTheme()
  const [selectedImage, setSelectedImage] = useState(0)

  const currentLanguage = isInitialized ? language : "en"

  const category = NEWS_CATEGORIES[article.category]
  const relatedArticles = findRelatedArticles(article, newsArticles, 3)

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link href="/newsroom">
              <Button variant="ghost" className="text-white hover:text-gray-300 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                뉴스룸으로 돌아가기
              </Button>
            </Link>

            {/* Article Meta */}
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="outline" className="text-white border-white">
                {category.label}
              </Badge>
              <div className="flex items-center text-sm text-gray-300">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(article.date)}
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <User className="w-4 h-4 mr-1" />
                {article.author}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-thin mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-gray-300" />
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Main Image */}
                {article.main_image && (
                  <div className="mb-8">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={article.main_image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Video */}
                {article.video_url && (
                  <div className="mb-8">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={article.video_url}
                        title={article.title}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
                    {article.content.split('\n').map((paragraph, index) => {
                      // 마크다운 스타일 처리
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        // 굵은 텍스트
                        const text = paragraph.slice(2, -2);
                        return (
                          <h3 key={index} className="text-xl font-semibold mt-6 mb-4 text-gray-900 dark:text-white">
                            {text}
                          </h3>
                        );
                      } else if (paragraph.startsWith('- **')) {
                        // 리스트 아이템
                        const text = paragraph.slice(4);
                        return (
                          <div key={index} className="flex items-start mt-2">
                            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                            <span className="text-gray-700 dark:text-gray-300">{text}</span>
                          </div>
                        );
                      } else if (paragraph.startsWith('1. **')) {
                        // 번호가 있는 리스트 아이템
                        const text = paragraph.slice(4);
                        return (
                          <div key={index} className="flex items-start mt-2">
                            <span className="text-blue-600 dark:text-blue-400 mr-2 font-medium">1.</span>
                            <span className="text-gray-700 dark:text-gray-300">{text}</span>
                          </div>
                        );
                      } else if (paragraph.startsWith('2. **')) {
                        const text = paragraph.slice(4);
                        return (
                          <div key={index} className="flex items-start mt-2">
                            <span className="text-blue-600 dark:text-blue-400 mr-2 font-medium">2.</span>
                            <span className="text-gray-700 dark:text-gray-300">{text}</span>
                          </div>
                        );
                      } else if (paragraph.startsWith('3. **')) {
                        const text = paragraph.slice(4);
                        return (
                          <div key={index} className="flex items-start mt-2">
                            <span className="text-blue-600 dark:text-blue-400 mr-2 font-medium">3.</span>
                            <span className="text-gray-700 dark:text-gray-300">{text}</span>
                          </div>
                        );
                      } else if (paragraph.trim() === '') {
                        // 빈 줄
                        return <div key={index} className="h-4"></div>;
                      } else {
                        // 일반 텍스트
                        return (
                          <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                            {paragraph}
                          </p>
                        );
                      }
                    })}
                  </div>
                </div>

                {/* Image Gallery */}
                {article.images && article.images.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                      관련 이미지
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {article.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => setSelectedImage(index)}
                        >
                          <Image
                            src={image}
                            alt={`${article.title} 이미지 ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      이 기사 공유하기
                    </h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        공유
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        링크 복사
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      관련 기사
                    </h3>
                    <div className="space-y-4">
                      {relatedArticles.map((relatedArticle) => (
                        <Link key={relatedArticle.id} href={`/newsroom/${relatedArticle.id}`}>
                          <Card className="hover:shadow-md transition-shadow cursor-pointer">
                            <CardContent className="p-4">
                              {relatedArticle.main_image && (
                                <div className="relative aspect-video mb-3 rounded overflow-hidden">
                                  <Image
                                    src={relatedArticle.main_image}
                                    alt={relatedArticle.title}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              )}
                              <h4 className="font-medium text-sm line-clamp-2 mb-2">
                                {relatedArticle.title}
                              </h4>
                              <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>{formatDate(relatedArticle.date)}</span>
                                <Badge variant="outline" className="text-xs">
                                  {NEWS_CATEGORIES[relatedArticle.category].label}
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Article Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      기사 정보
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">카테고리</span>
                        <Badge variant="outline">
                          {category.label}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">작성일</span>
                        <span className="text-gray-900 dark:text-white">
                          {formatDate(article.date)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">작성자</span>
                        <span className="text-gray-900 dark:text-white">
                          {article.author}
                        </span>
                      </div>
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex items-start justify-between">
                          <span className="text-gray-600 dark:text-gray-400">태그</span>
                          <div className="flex flex-wrap gap-1 justify-end">
                            {article.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
