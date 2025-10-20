import { NewsArticle } from '@/data/newsroom';
import { NewsCategory } from '@/data/newsroom-categories';

// 날짜 포맷팅
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// 콘텐츠 요약 생성
export const generateExcerpt = (content: string, maxLength: number = 150) => {
  const cleanContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ');
  if (cleanContent.length <= maxLength) return cleanContent;
  return cleanContent.substring(0, maxLength) + '...';
};

// 태그 필터링
export const filterByTags = (articles: NewsArticle[], tags: string[]) => {
  if (!tags.length) return articles;
  return articles.filter(article =>
    article.tags?.some(tag =>
      tags.some(filterTag =>
        tag.toLowerCase().includes(filterTag.toLowerCase())
      )
    )
  );
};

// 카테고리별 필터링
export const filterByCategory = (articles: NewsArticle[], category: NewsCategory) => {
  return articles.filter(article => article.category === category);
};

// 검색 기능
export const searchArticles = (articles: NewsArticle[], query: string) => {
  const searchTerm = query.toLowerCase();
  return articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm) ||
    article.content.toLowerCase().includes(searchTerm) ||
    article.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

// 정렬 기능
export const sortArticles = (articles: NewsArticle[], sortBy: 'date' | 'title' = 'date') => {
  return [...articles].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return a.title.localeCompare(b.title);
  });
};

// 페이지네이션
export const paginateArticles = (
  articles: NewsArticle[],
  page: number,
  pageSize: number
) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return {
    articles: articles.slice(startIndex, endIndex),
    totalPages: Math.ceil(articles.length / pageSize),
    currentPage: page,
    totalArticles: articles.length
  };
};

// 관련 기사 찾기
export const findRelatedArticles = (
  currentArticle: NewsArticle,
  allArticles: NewsArticle[],
  limit: number = 3
) => {
  if (!allArticles || !Array.isArray(allArticles)) {
    return [];
  }

  const currentTags = currentArticle.tags || [];
  const related = allArticles
    .filter(article => article.id !== currentArticle.id)
    .map(article => ({
      article,
      score: (article.tags || []).filter(tag =>
        currentTags.includes(tag)
      ).length
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.article);

  return related;
};

// 이미지 갤러리 생성
export const createImageGallery = (images: string[]) => {
  return images.map((src, index) => ({
    id: index,
    src,
    alt: `이미지 ${index + 1}`,
    thumbnail: src
  }));
};

// 메타데이터 생성
export const generateMetaData = (article: NewsArticle) => {
  return {
    title: article.title,
    description: generateExcerpt(article.content, 160),
    image: article.main_image,
    date: article.date,
    author: article.author,
    tags: article.tags
  };
};

// newsArticles re-export
export { newsArticles } from '@/data/newsroom';
