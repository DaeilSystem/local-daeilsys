interface MissionStatementProps {
  className?: string
}

export function MissionStatement({ className }: MissionStatementProps) {
  return (
    <section className={`relative bg-white dark:bg-gray-950 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
          Education is essential to creating a more equitable world. So we're working with partners to reach learners in over 100 countries and regions, support educators, build out-of-school learning opportunities, and advance racial equity and justice. Because expanding access to education gives everyone more ways to realize their potential.
        </p>
      </div>
    </section>
  )
}