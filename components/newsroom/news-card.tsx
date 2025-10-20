import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { NewsArticle } from '@/data/newsroom';
import { NEWS_CATEGORIES } from '@/data/newsroom-categories';
import { formatDate, generateExcerpt } from '@/lib/newsroom-utils';
import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  article: NewsArticle;
  variant?: 'default' | 'featured' | 'compact';
}

export function NewsCard({ article, variant = 'default' }: NewsCardProps) {
  const category = NEWS_CATEGORIES[article.category];

  if (variant === 'compact') {
    return (
      <Link href={`/newsroom/${article.id}`}>
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              {article.main_image && (
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={article.main_image}
                    alt={article.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary" className="text-xs">
                    {category.label}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    {formatDate(article.date)}
                  </span>
                </div>
                <h3 className="font-medium text-sm line-clamp-2">
                  {article.title}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/newsroom/${article.id}`}>
      <Card className={`hover:shadow-lg transition-all cursor-pointer ${
        variant === 'featured' ? 'ring-2 ring-blue-500' : ''
      }`}>
        {article.main_image && (
          <div className="relative aspect-video">
            <Image
              src={article.main_image}
              alt={article.title}
              fill
              className="object-cover rounded-t-lg"
            />
            {variant === 'featured' && (
              <div className="absolute top-2 left-2">
                <Badge className="bg-blue-500 text-white">
                  추천
                </Badge>
              </div>
            )}
          </div>
        )}
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline">
              {category.label}
            </Badge>
            <span className="text-sm text-gray-500">
              {formatDate(article.date)}
            </span>
          </div>
          <h3 className="font-semibold text-lg line-clamp-2">
            {article.title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-gray-600 text-sm line-clamp-3">
            {generateExcerpt(article.content)}
          </p>
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {article.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
