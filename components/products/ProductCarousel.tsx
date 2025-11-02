"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProductCarouselProps {
  images: string[]
  productName: string
  variant?: "light" | "dark"
  maxWidth?: "4xl" | "5xl" | "6xl"
}

export default function ProductCarousel({
  images,
  productName,
  variant = "light",
  maxWidth = "4xl",
}: ProductCarouselProps) {
  const isDark = variant === "dark"

  const maxWidthClass = {
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
  }[maxWidth]

  return (
    <div className={`${maxWidthClass} mx-auto`}>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className={`aspect-video ${
                  isDark
                    ? "bg-slate-800/50 border border-slate-700"
                    : "bg-gray-100 dark:bg-gray-800"
                } rounded-lg overflow-hidden flex items-center justify-center ${
                  isDark ? "p-12 shadow-2xl" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${productName} ${index + 1}`}
                  className={`w-full h-full object-contain ${
                    isDark ? "drop-shadow-2xl" : ""
                  }`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={
            isDark
              ? "-left-12 bg-slate-800 border-slate-700 text-white hover:bg-slate-700 shadow-lg"
              : "left-4"
          }
        />
        <CarouselNext
          className={
            isDark
              ? "-right-12 bg-slate-800 border-slate-700 text-white hover:bg-slate-700 shadow-lg"
              : "right-4"
          }
        />
      </Carousel>
    </div>
  )
}
