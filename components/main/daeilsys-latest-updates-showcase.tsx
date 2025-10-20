"use client"

import { Button } from "@/components/ui/button"
import { newsItems, newsItemsEn } from "@/data/daeilsys"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, Calendar, Clock, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface DaeilsysLatestUpdatesShowcaseProps {
  className?: string
}

export function DaeilsysLatestUpdatesShowcase({ className }: DaeilsysLatestUpdatesShowcaseProps) {
  const { language, isInitialized } = useLanguage()
  const [activeTab, setActiveTab] = useState<'news' | 'updates'>('news')

  // 데이터 가져오기
  const newsData = isInitialized ? (language === "ko" ? newsItems : newsItemsEn) : newsItemsEn
  const updatesData = latestUpdates || []

  // 최신 뉴스 (최대 6개) - 안전하게 처리
  const latestNews = newsData?.slice(0, 6) || []

  // 최신 업데이트 (최대 4개) - 안전하게 처리
  const latestUpdates = updatesData?.slice(0, 4) || []

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return isInitialized && language === "ko"
      ? date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      return isInitialized && language === "ko" ? "방금 전" : "Just now"
    } else if (diffInHours < 24) {
      return isInitialized && language === "ko" ? `${diffInHours}시간 전` : `${diffInHours}h ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return isInitialized && language === "ko" ? `${diffInDays}일 전` : `${diffInDays}d ago`
    }
  }

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .slide-in-left {
          animation: slideInFromLeft 0.6s ease-out;
        }
      `}</style>

      <section className={`relative py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 80% 20%, #8b5cf6 2px, transparent 2px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {isInitialized && language === "ko" ? "최신 소식" : "Latest Updates"}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {isInitialized && language === "ko"
                ? "대일시스템의 최신 제품 소식과 업데이트를 확인하세요"
                : "Stay updated with the latest news and updates from DAEIL SYSTEMS"}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 fade-in-up">
            <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('news')}
                className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 ${
                  activeTab === 'news'
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {isInitialized && language === "ko" ? "뉴스" : "News"}
              </button>
              <button
                onClick={() => setActiveTab('updates')}
                className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 ${
                  activeTab === 'updates'
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {isInitialized && language === "ko" ? "업데이트" : "Updates"}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-up">
            {activeTab === 'news' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestNews.map((article, index) => (
                  <div
                    key={article.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2">
                        <ExternalLink className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{formatDate(article.date)}</span>
                        <Clock className="h-4 w-4 ml-4 mr-2" />
                        <span>{getTimeAgo(article.date)}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                        {article.excerpt}
                      </p>

                      <Link href={article.url} className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        {isInitialized && language === "ko" ? "자세히 보기" : "Read More"}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {latestUpdates.map((update, index) => (
                  <div
                    key={update.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">
                        {update.type === 'product' ? '🚀' : update.type === 'feature' ? '✨' : '📢'}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(update.date)}</span>
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      <span>{getTimeAgo(update.date)}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {update.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {update.description}
                    </p>

                    {update.url && (
                      <Link href={update.url} className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        {isInitialized && language === "ko" ? "자세히 보기" : "Learn More"}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12 fade-in-up">
            <Link href={activeTab === 'news' ? '/newsroom' : '/updates'}>
              <Button
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
              >
                {isInitialized && language === "ko" ? "모든 소식 보기" : "View All Updates"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      </section>
    </>
  )
}
