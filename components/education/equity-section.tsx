import { FullWidthCarousel } from "./full-width-carousel"

interface EquitySectionProps {
  className?: string
}

const equityStories = [
  {
    id: "1",
    title: "Local solutions with global reach.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center",
    alt: "Local solutions making global impact"
  },
  {
    id: "2",
    title: "Blending code, culture, and creativity.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=800&h=600&fit=crop&crop=center",
    alt: "Combining coding with cultural creativity"
  },
  {
    id: "3",
    title: "Code that reaches new campuses.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&h=600&fit=crop&crop=center",
    alt: "Expanding coding education to new campuses"
  },
  {
    id: "4",
    title: "Creating access and opportunity for Hispanic/Latinx students.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&crop=center",
    alt: "Opportunities for Hispanic and Latinx students"
  },
  {
    id: "5",
    title: "Learning First Nations cultures and histories.",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop&crop=center",
    alt: "First Nations cultural and historical education"
  }
]

export function EquitySection({ className }: EquitySectionProps) {
  return (
    <section className={`py-16 bg-gray-50 dark:bg-gray-900 ${className}`}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900 dark:text-white">
            Advancing equity<br />through education.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            We partner with and support Black, Hispanic/Latinx, and Indigenous communities to amplify their reach.
          </p>
        </div>
      </div>

      {/* Full Width Carousel */}
      <FullWidthCarousel stories={equityStories} />
    </section>
  )
}