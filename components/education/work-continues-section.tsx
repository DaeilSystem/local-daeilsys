import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

interface WorkContinuesSectionProps {
  className?: string
}

const initiatives = [
  {
    id: "malala-fund",
    title: "Striving for a world where all girls can learn and choose their future.",
    description: "Apple has partnered with Malala Fund since 2018, when we became the organization's first Laureate partner to help scale its work for girls' education. In providing support for Malala Fund's grantmaking and advocacy, we're helping to accelerate progress toward a world where all girls can access and complete 12 years of education.",
    links: [
      {
        text: "Learn more about the Malala Fund",
        href: "#malala-fund"
      },
      {
        text: "Learn more about Challenge for Change",
        href: "#challenge-for-change"
      }
    ]
  },
  {
    id: "racial-equity",
    title: "Racial Equity and Justice Initiative",
    description: "Our Racial Equity and Justice Initiative fights systemic racism by helping to provide access and opportunities for Black and Brown communities.",
    links: [
      {
        text: "Learn more",
        href: "#racial-equity-justice"
      }
    ]
  },
  {
    id: "k12-education",
    title: "K–12 Education",
    description: "Apple technology helps educators bring out the creativity in students with powerful products, support, and curricula for magical learning experiences.",
    links: [
      {
        text: "Learn more",
        href: "#k12-education"
      }
    ]
  },
  {
    id: "college-students",
    title: "College Students",
    description: "Powerful and compatible with everything you need for higher education and more. Apple devices work together so you can focus on what matters.",
    links: [
      {
        text: "Learn more",
        href: "#college-students"
      }
    ]
  },
  {
    id: "higher-education",
    title: "Higher Education",
    description: "Apple powers innovation across every part of campus — from cutting‑edge research and game‑day athletics to daily student and faculty life.",
    links: [
      {
        text: "Learn more",
        href: "#higher-education"
      }
    ]
  }
]

export function WorkContinuesSection({ className }: WorkContinuesSectionProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-center text-gray-900 dark:text-white">
          Our work in education doesn't end here.
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <Card
              key={initiative.id}
              className={`${
                index === 0 ? "md:col-span-2 lg:col-span-3" : ""
              } border-0 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium leading-tight text-gray-900 dark:text-white">
                  {initiative.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {initiative.description}
                </p>
                <div className="space-y-2">
                  {initiative.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="link"
                      className="p-0 h-auto font-normal text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm sm:text-base"
                      asChild
                    >
                      <a href={link.href} className="inline-flex items-center gap-1">
                        {link.text}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}