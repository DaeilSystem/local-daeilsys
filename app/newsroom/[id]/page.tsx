import { getNewsById, newsArticles } from '@/data/newsroom'
import { notFound } from 'next/navigation'
import NewsDetailClient from './client'

interface NewsDetailPageProps {
  params: {
    id: string
  }
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = getNewsById(params.id)

  if (!article) {
    notFound()
  }

  return <NewsDetailClient article={article} />
}

// 정적 경로 생성
export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id,
  }))
}
