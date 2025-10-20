"use client"

import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"

interface CompanyGalleryProps {
  className?: string
}

export function CompanyGallery({ className }: CompanyGalleryProps) {
  const { language, isInitialized } = useLanguage()

  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Company Facility 1",
      title: "Manufacturing Facility",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Company Facility 2",
      title: "Research & Development",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Company Facility 3",
      title: "Quality Control Lab",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Company Facility 4",
      title: "Assembly Line",
    },
  ]

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 dark:text-white">
            Our Facilities.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
            {isInitialized && language === "ko"
              ? "최첨단 제조 및 연구 시설을 둘러보세요."
              : "Take a look at our state-of-the-art manufacturing and research facilities."
            }
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-lg sm:text-xl font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
