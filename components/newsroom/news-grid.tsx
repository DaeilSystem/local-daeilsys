import { NewsArticle } from '@/data/newsroom';
import { NewsCard } from './news-card';

interface NewsGridProps {
  articles: NewsArticle[];
  variant?: 'default' | 'featured-first' | 'compact';
  columns?: 1 | 2 | 3 | 4;
}

export function NewsGrid({
  articles,
  variant = 'default',
  columns = 3
}: NewsGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  if (variant === 'featured-first' && articles.length > 0) {
    const featuredArticle = articles[0];
    const remainingArticles = articles.slice(1);

    return (
      <div className="space-y-8">
        {/* Featured Article */}
        <div className="lg:col-span-2">
          <NewsCard article={featuredArticle} variant="featured" />
        </div>

        {/* Remaining Articles */}
        {remainingArticles.length > 0 && (
          <div className={`grid gap-6 ${gridCols[columns]}`}>
            {remainingArticles.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                variant={variant === 'compact' ? 'compact' : 'default'}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {articles.map((article) => (
        <NewsCard
          key={article.id}
          article={article}
          variant={variant === 'compact' ? 'compact' : 'default'}
        />
      ))}
    </div>
  );
}
