"use client"

import { useLanguage } from "@/hooks/use-language"

export default function VisionMissionClient() {
  const { language, isInitialized } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-8">
              {isInitialized && language === "ko" ? "비전 & 미션" : "Vision & Mission"}
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                {isInitialized && language === "ko" ? "비전" : "Vision"}
              </h2>
              <p className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
                {isInitialized && language === "ko"
                  ? "우리는 나노 스케일 이미징을 통해 세상을 더 나은 곳으로 만듭니다."
                  : "We enable nanoscale imaging to make the world a better place."
                }
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-green-900 dark:text-green-100 mb-4">
                {isInitialized && language === "ko" ? "미션" : "Mission"}
              </h2>
              <p className="text-lg text-green-800 dark:text-green-200 leading-relaxed">
                {isInitialized && language === "ko"
                  ? "세계의 학생, 과학자, 엔지니어, 소비자들에게 최고의 진동 절연 시스템을 제공하여 모든 노력에서 정밀도와 효율성을 향상시킵니다."
                  : "Our mission is to deliver the best vibration isolation systems to students, scientists, engineers, and consumers around the world, enhancing precision and efficiency in every endeavor."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
