"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ChevronDown } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface EducationHeroProps {
  className?: string
}

const heroMedia = [
  {
    type: "image",
    src: "https://www.daeilsys.com/wp-content/uploads/2020/05/2000-Built-new-HQ-and-1st-factory.jpg",
    alt: {
      ko: "대일시스템 본사 및 공장",
      en: "DAEIL SYSTEMS HQ and Factory"
    },
    location: {
      ko: "대일시스템 본사, 용인",
      en: "DAEIL SYSTEMS HQ, Yongin"
    }
  },
  {
    type: "image",
    src: "https://www.daeilsys.com/wp-content/uploads/2020/05/2007-Introduced-Active-Vibration-Isolation-System.png",
    alt: {
      ko: "액티브 제진대 시스템",
      en: "Active Vibration Isolation System"
    },
    location: {
      ko: "제진 기술 혁신",
      en: "Vibration Isolation Innovation"
    }
  },
  {
    type: "image",
    src: "https://www.daeilsys.com/wp-content/uploads/2020/05/2016-Built-2nd-factory-DAEIL-SYSTEMS.png",
    alt: {
      ko: "제2공장",
      en: "2nd Factory"
    },
    location: {
      ko: "제2공장 증축, 용인",
      en: "2nd Factory Expansion, Yongin"
    }
  },
  {
    type: "image",
    src: "https://www.daeilsys.com/wp-content/uploads/2024/03/daeil-systems-celebrates-40-years-flag-min.png",
    alt: {
      ko: "창립 40주년",
      en: "40th Anniversary"
    },
    location: {
      ko: "대일시스템 창립 40주년",
      en: "DAEIL SYSTEMS 40th Anniversary"
    }
  }
]

export function EducationHero({ className }: EducationHeroProps) {
  const { language } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroMedia.length)
    }, 8000) // 비디오가 충분히 재생되도록 8초로 설정

    return () => clearInterval(interval)
  }, [isPlaying])

  const handleReplay = () => {
    setCurrentImageIndex(0)
    setIsPlaying(true)
  }

  return (
    <>
      <style jsx>{`
        @keyframes kenBurns {
          0% { transform: scale(1.05) translate(0, 0); }
          25% { transform: scale(1.08) translate(-1%, -0.5%); }
          50% { transform: scale(1.06) translate(0.5%, -1%); }
          75% { transform: scale(1.09) translate(-0.5%, 0.5%); }
          100% { transform: scale(1.07) translate(1%, 0); }
        }

        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
      `}</style>
      <section className={`relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden ${className}`}>
      {/* Background Image/Video */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          {heroMedia.map((media, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {media.type === "video" ? (
                <video
                  className="w-full h-full object-cover scale-105 transition-transform duration-[5000ms] ease-out"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={media.poster}
                  key={`video-${index}-${currentImageIndex}`} // 강제 재렌더링
                  onLoadStart={() => console.log(`Loading video: ${media.src}`)}
                  onCanPlay={() => console.log(`Video ready: ${media.src}`)}
                  onError={(e) => {
                    console.error(`Video failed to load: ${media.src}`, e)
                  }}
                >
                  <source src={media.src} type="video/mp4" />
                  {/* 비디오 로드 실패 시 폴백 이미지 */}
                  <div
                    className="w-full h-full bg-cover bg-center bg-gray-200 scale-105"
                    style={{
                      backgroundImage: `url(${media.poster})`,
                    }}
                  />
                </video>
              ) : (
                <div
                  className="w-full h-full bg-cover bg-center bg-gray-200 scale-105 transition-transform duration-[10000ms] ease-out hover:scale-110"
                  style={{
                    backgroundImage: `url(${media.src})`,
                  }}
                />
              )}
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6">
        {language === 'ko' ? (
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight text-center">
            <span className="block mb-2 sm:mb-4">
              <span className="text-blue-400">나노스케일 이미징</span>으로
            </span>
            <span className="block mb-2 sm:mb-4">
              더 나은 <span className="text-green-400">세상</span>을 향하여
            </span>
            <span className="block">
              <span className="text-purple-400">대일시스템</span>입니다.
            </span>
          </h1>
        ) : (
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight text-center">
            <span className="block mb-2 sm:mb-4">We enable</span>
            <span className="block mb-2 sm:mb-4">
              <span className="text-blue-400">nanoscale imaging</span>
            </span>
            <span className="block mb-2 sm:mb-4">
              to make the <span className="text-green-400">world</span>
            </span>
            <span className="block">
              a <span className="text-purple-400">better place.</span>
            </span>
          </h1>
        )}

        {/* Location */}
        <p className="text-xs sm:text-sm md:text-base text-white/80 font-medium text-center">
          {heroMedia[currentImageIndex].location[language]}
        </p>

        {/* Replay Button */}
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReplay}
            className="text-white hover:text-white hover:bg-white/20 rounded-full p-2 sm:p-3"
          >
            <Play className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="sr-only">Replay animation</span>
          </Button>
        </div>
      </div>

      {/* Animation Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroMedia.map((media, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
            title={media.type === "video" ? "Video" : "Image"}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
        <p className="text-white/80 text-xs sm:text-sm font-medium">
          {language === 'ko' ? '스크롤하여 탐색하기' : 'Scroll to explore'}
        </p>
        <div className="animate-bounce">
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-white/80" />
        </div>
      </div>
      </section>
    </>
  )
}