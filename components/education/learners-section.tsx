import { ContainerCarousel } from "./container-carousel"

interface LearnersSectionProps {
  className?: string
}

const learnerStories = [
  {
    id: "1",
    title: "Building trust. And apps.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop&crop=center",
    alt: "Students building trust through app development"
  },
  {
    id: "2",
    title: "Inspiring generational change through community mentorship.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop&crop=center",
    alt: "Community mentorship inspiring change"
  },
  {
    id: "3",
    title: "Preparing educators. Creating opportunities.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center",
    alt: "Educators being prepared to create opportunities"
  },
  {
    id: "4",
    title: "Developing homegrown talent in Detroit.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
    alt: "Developing local talent in Detroit"
  },
  {
    id: "5",
    title: "Tradition meets technology.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center",
    alt: "Traditional culture meeting modern technology"
  }
]

export function LearnersSection({ className }: LearnersSectionProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 dark:text-white">
            Equipping today's learners<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>for tomorrow's opportunities.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
            We're helping to prepare people of all ages with creative learning, skill development, and real-world experiences that support future careers.
          </p>
        </div>
      </div>

      {/* Container Carousel */}
      <ContainerCarousel stories={learnerStories} defaultCardsPerView={3} />
    </section>
  )
}