import { FullWidthCarousel } from "./full-width-carousel"

interface EducatorsSectionProps {
  className?: string
}

const educatorStories = [
  {
    id: "1",
    title: "Teaching educators to teach code — and change lives.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
    alt: "Educators learning to teach coding"
  },
  {
    id: "2",
    title: "Reducing barriers to access for inclusive education.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&crop=center",
    alt: "Inclusive education accessibility"
  },
  {
    id: "3",
    title: "Learning English by learning to code.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&crop=center",
    alt: "Students learning English through coding"
  },
  {
    id: "4",
    title: "Communities on the rise.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop&crop=center",
    alt: "Growing communities through education"
  },
  {
    id: "5",
    title: "A culture of creativity and innovation.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
    alt: "Creative and innovative learning culture"
  }
]

export function EducatorsSection({ className }: EducatorsSectionProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 dark:text-white">
            Standing alongside educators<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>to move learning forward.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
            We work closely with educators to engage and inspire learners — and invest in their professional development by providing resources including curricula, mentorship, and tools.
          </p>
        </div>
      </div>

      {/* Full Width Carousel */}
      <FullWidthCarousel stories={educatorStories} />
    </section>
  )
}