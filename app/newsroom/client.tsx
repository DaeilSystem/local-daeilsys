"use client"

import { NewsFilters } from "@/components/newsroom/news-filters"
import { NewsGrid } from "@/components/newsroom/news-grid"
import { getFeaturedNews, getNewsByCategory, newsArticles } from "@/data/newsroom"
import { NewsCategory } from "@/data/newsroom-categories"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { filterByTags, searchArticles, sortArticles } from "@/lib/newsroom-utils"
import { motion } from "framer-motion"
import { useMemo, useState } from "react"

export default function Client() {
  const { language, isInitialized } = useLanguage()
  const { theme } = useTheme()

  const currentLanguage = isInitialized ? language : "en"

  // 상태 관리
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // 사용 가능한 태그 추출
  const availableTags = useMemo(() => {
    const tags = new Set<string>()
    newsArticles.forEach(article => {
      article.tags?.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // 필터링된 뉴스
  const filteredNews = useMemo(() => {
    let articles = newsArticles

    // 카테고리 필터링
    if (selectedCategory !== 'all') {
      articles = getNewsByCategory(selectedCategory)
    }

    // 검색 필터링
    if (searchQuery) {
      articles = searchArticles(articles, searchQuery)
    }

    // 태그 필터링
    if (selectedTags.length > 0) {
      articles = filterByTags(articles, selectedTags)
    }

    // 날짜순 정렬
    return sortArticles(articles, 'date')
  }, [selectedCategory, searchQuery, selectedTags])

  // 태그 토글 함수
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  // 필터 초기화
  const handleClearFilters = () => {
    setSelectedCategory('all')
    setSearchQuery('')
    setSelectedTags([])
  }

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-thin mb-6">{t.newsroom}</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Stay updated with DAEIL SYSTEMS' latest news and industry trends
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="sticky top-8"
              >
                <NewsFilters
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  selectedTags={selectedTags}
                  onTagToggle={handleTagToggle}
                  availableTags={availableTags}
                  onClearFilters={handleClearFilters}
                />
              </motion.div>
            </div>

            {/* News Grid */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Featured News */}
                {selectedCategory === 'all' && searchQuery === '' && selectedTags.length === 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                      Featured News
                    </h2>
                    <NewsGrid
                      articles={getFeaturedNews()}
                      variant="featured-first"
                      columns={2}
                    />
                  </div>
                )}

                {/* All News */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {selectedCategory === 'all' ? 'All News' : 'Filtered News'}
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {filteredNews.length} articles
                    </span>
                  </div>

                  {filteredNews.length > 0 ? (
                    <NewsGrid
                      articles={filteredNews}
                      columns={2}
                    />
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400">
                        No news articles match your search criteria.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
