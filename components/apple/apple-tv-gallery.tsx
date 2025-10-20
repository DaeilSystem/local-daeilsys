"use client"

import Link from "next/link"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

interface AppleTVGalleryProps {
  className?: string
}

export function AppleTVGallery({ className }: AppleTVGalleryProps) {
  const tvContent = [
    {
      id: 1,
      title: "DVIA-T Installation Guide",
      subtitle: "Technical · How to install precision vibration control systems",
      image: "/daeilsys-images/dvia-t-official.jpg",
      url: "/products/active-vibration-systems/dvia-t"
    },
    {
      id: 2,
      title: "DVIA-MB Case Study",
      subtitle: "Success Story · Thermo Fisher Scios 2 Installation Report",
      image: "/daeilsys-images/dvia-mb-official.jpg",
      url: "/support/case-studies"
    },
    {
      id: 3,
      title: "DVIA-ULF Innovation",
      subtitle: "Technology · Next-gen vibration control solution",
      image: "/daeilsys-images/dvia-ulf-official.jpg",
      url: "/products/active-vibration-systems/dvia-ulf"
    },
    {
      id: 4,
      title: "DVIO Series Introduction",
      subtitle: "Product · Versatile vibration isolation systems",
      image: "/daeilsys-images/dvio-series-official.jpg",
      url: "/products/active-vibration-systems/dvio"
    }
  ]

  return (
    <section className={`bg-white text-black w-full overflow-hidden ${className} py-4`}>
      <div className="w-full max-h-[580px] relative">
        {/* @ts-ignore */}
        <Swiper
          modules={[Autoplay, Pagination]}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.2} // 3개 모두 동일한 크기로
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="mySwiper h-[580px]"
          onSlideChange={(swiper) => {
            // 슬라이드 변경 시 활성 슬라이드에 대한 스타일 적용을 위해 필요할 수 있음
            // 현재는 CSS 필터로 처리
          }}
        >
          {tvContent.map((content, index) => (
            // @ts-ignore
            <SwiperSlide key={content.id} className="relative h-full">
              {({ isActive }) => (
                // @ts-ignore
                <Link href={content.url} className="group block h-full">
                  <div className={`relative h-full overflow-hidden transition-all duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-60'
                  }`}>
                    {/* 배경 이미지 */}
                    <div className="absolute inset-0">
                      <img
                        src={content.image}
                        alt={content.title}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          isActive
                            ? 'brightness-100 contrast-100 saturate-100'
                            : 'brightness-30 contrast-80 saturate-50'
                        }`}
                      />
                    </div>

                    {/* 오버레이 */}
                    <div className={`absolute inset-0 transition-all duration-500 ${
                      isActive
                        ? 'bg-black bg-opacity-30'
                        : 'bg-gray-500 bg-opacity-40'
                    }`}></div>

                    {/* 콘텐츠 */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8 transition-all duration-500">
                      <div className="flex justify-between items-start">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white transition-all duration-500">
                          {content.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-sm font-medium opacity-80 text-white">
                            DAEIL SYSTEMS
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-end">
                        <p className="text-lg opacity-90 text-white transition-all duration-500">
                          {content.subtitle}
                        </p>
                        <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-500">
                          Stream now
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
