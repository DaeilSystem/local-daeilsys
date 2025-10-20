import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Client from "./client"

interface Props {
  params: { category: string }
}

const productCategories = {
  "active-vibration-systems": {
    title: "Active Vibration Isolation Systems",
    description:
      "Advanced active vibration control systems for precision applications requiring the highest level of isolation performance.",
  },
  "optical-tables": {
    title: "Optical Tables",
    description:
      "Research and scientific grade optical tables and breadboards designed for precision optical and laser applications.",
  },
  "vibration-workstations": {
    title: "Vibration Isolation Workstations",
    description:
      "Complete workstation solutions combining vibration isolation with ergonomic design for laboratory environments.",
  },
  "pneumatic-platforms": {
    title: "Pneumatic Vibration Isolation Platforms",
    description: "Low-profile pneumatic platforms providing excellent vibration isolation for sensitive equipment.",
  },
  "pneumatic-isolators": {
    title: "Pneumatic Vibration Isolators",
    description: "High-performance pneumatic isolators for various load capacities and isolation requirements.",
  },
  "acoustic-enclosures": {
    title: "Acoustic Enclosures",
    description: "Specialized acoustic enclosures for noise reduction and environmental isolation.",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = productCategories[params.category as keyof typeof productCategories]

  if (!category) {
    return {
      title: "Product Category Not Found | DVIA",
    }
  }

  return {
    title: `${category.title} | DVIA`,
    description: category.description,
    openGraph: {
      title: `${category.title} | DVIA`,
      description: category.description,
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(productCategories).map((category) => ({
    category,
  }))
}

export const revalidate = 3600 // ISR: revalidate every hour

const ProductCategoryPage = ({ params }: Props) => {
  const category = productCategories[params.category as keyof typeof productCategories]

  if (!category) {
    notFound()
  }

  return <Client category={params.category} categoryData={category} />
}

export default ProductCategoryPage
