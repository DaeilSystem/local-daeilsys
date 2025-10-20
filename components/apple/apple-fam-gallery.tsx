"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

interface AppleFAMGalleryProps {
  className?: string
}

export function AppleFAMGallery({ className }: AppleFAMGalleryProps) {
  const [isPaused, setIsPaused] = useState(false)
  const swiperRef = useRef<any>(null)

  const famContent = [
    {
      id: 1,
      title: "DVIA-T Setup Video",
      subtitle: "Strong and Calm Combos for Busy Days",
      type: "Watch",
      image: "/daeilsys-images/dvia-t-official.jpg",
      url: "/support"
    },
    {
      id: 2,
      title: "Seth Rogen Interview",
      subtitle: "The Zane Lowe Interview",
      type: "Listen",
      image: "/daeilsys-images/dvia-m-official.jpg",
      url: "/newsroom"
    },
    {
      id: 3,
      title: "PGA TOUR Pro Golf",
      subtitle: "Real Installation Simulation",
      type: "Play",
      image: "/daeilsys-images/dvia-p-official.jpg",
      url: "/products"
    },
    {
      id: 4,
      title: "Strength with Gregg",
      subtitle: "System Tuning Guide",
      type: "Watch",
      image: "/daeilsys-images/dvia-mb-official.jpg",
      url: "/support"
    },
    {
      id: 5,
      title: "A-List Pop",
      subtitle: "Main Product Lineup",
      type: "Listen",
      image: "/daeilsys-images/dvia-ulf-official.jpg",
      url: "/products"
    },
    {
      id: 6,
      title: "Balatro+",
      subtitle: "Advanced Setup Tools",
      type: "Play",
      image: "/daeilsys-images/dvio-series-official.jpg",
      url: "/solutions"
    }
  ]

  const getButtonText = (type: string) => {
    switch (type) {
      case "Watch":
        return "Watch now"
      case "Listen":
        return "Listen now"
      case "Play":
        return "Play now"
      default:
        return "Learn more"
    }
  }

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPaused) {
        swiperRef.current.autoplay.start()
      } else {
        swiperRef.current.autoplay.stop()
      }
      setIsPaused(!isPaused)
    }
  }

  return (
    <section className={`bg-white w-full ${className}`}>
      <div className="w-full">
        {/* FAM Gallery - Swiper.js로 구현 */}
        {/* @ts-ignore */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3.8} // 3.8개 아이템 보이도록 설정
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000} // 빠른 연속 스크롤
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          className="mySwiper"
        >
          {[...famContent, ...famContent, ...famContent].map((content, index) => (
            // @ts-ignore
            <SwiperSlide key={`${content.id}-${index}`}>
              {/* @ts-ignore */}
              <Link href={content.url} className="group block h-[200px]">
                <div className="relative h-full overflow-hidden mx-2">
                  {/* 배경 이미지 */}
                  <div className="absolute inset-0">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* 오버레이 콘텐츠 */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity">
                    <div className="flex flex-col justify-between h-full p-4">
                      <div className="text-right">
                        <div className="text-xs font-medium opacity-80 text-white">
                          DAEIL
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center space-y-2">
                        <span className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs rounded-full font-medium transition-colors">
                          {getButtonText(content.type)}
                        </span>
                        <p className="text-white font-medium text-sm text-center">
                          {content.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pause 버튼 - Apple 스타일 */}
        <div className="flex justify-center py-8">
          <button
            onClick={toggleAutoplay}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium transition-colors"
          >
            {isPaused ? "play the gallery" : "pause the gallery"}
          </button>
        </div>
      </div>
    </section>
  )
}
