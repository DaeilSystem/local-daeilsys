import { Button } from '@/components/ui/button'
import { ArrowLeft, FileX } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <FileX className="w-16 h-16 text-gray-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          뉴스를 찾을 수 없습니다
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          요청하신 뉴스 기사가 존재하지 않거나 삭제되었을 수 있습니다.
        </p>
        <Link href="/newsroom">
          <Button className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            뉴스룸으로 돌아가기
          </Button>
        </Link>
      </div>
    </div>
  )
}
