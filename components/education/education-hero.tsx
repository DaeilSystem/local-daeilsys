"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ChevronDown } from "lucide-react"

interface EducationHeroProps {
  className?: string
}

const heroMedia = [
  {
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center",
    alt: "교육자들이 코딩을 가르치고 있는 모습",
    location: "Santa Fe Creative Coding Initiative, Santa Fe"
  },
  {
    type: "video",
    src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    poster: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop&crop=center",
    alt: "포용적 교육을 위한 장벽 제거",
    location: "National Coalition of 100 Black Women, Inc., Atlanta"
  },
  {
    type: "video",
    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    poster: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=1080&fit=crop&crop=center",
    alt: "코딩으로 영어를 배우는 학생들",
    location: "Rutgers University-Newark (G)eneration Code, Newark"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&h=1080&fit=crop&crop=center",
    alt: "성장하는 커뮤니티",
    location: "Tennessee State University HBCU C2, Accra"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center",
    alt: "창의성과 혁신의 문화",
    location: "Enactus, Monterrey"
  }
]

export function EducationHero({ className }: EducationHeroProps) {
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight text-center">
          <span className="block mb-2 sm:mb-4">Education moves</span>
          <span className="block mb-2 sm:mb-4">
            <span className="text-blue-400">learners,</span>{" "}
            <span className="text-green-400">leaders,</span>{" "}
            <span className="text-purple-400">innovators,</span>
          </span>
          <span className="block mb-2 sm:mb-4">
            <span className="text-orange-400">communities,</span>{" "}
            <span className="text-pink-400">and everyone</span>
          </span>
          <span className="block">forward.</span>
        </h1>

        {/* Location */}
        <p className="text-xs sm:text-sm md:text-base text-white/80 font-medium text-center">
          {heroMedia[currentImageIndex].location}
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
            className={`w-2 h-2 rounded-full transition-all duration-300 relative ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
            title={media.type === "video" ? "Video" : "Image"}
          >
            {/* 비디오 인디케이터 */}
            {media.type === "video" && (
              <div className="absolute -top-1 -right-1 w-2 h-2">
                <Play className="h-2 w-2 text-white fill-white" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
        <p className="text-white/80 text-xs sm:text-sm font-medium">Scroll to explore</p>
        <div className="animate-bounce">
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-white/80" />
        </div>
      </div>
      </section>
    </>
  )
}