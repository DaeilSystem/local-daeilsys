import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Client from "./client"

interface Props {
  params: { category: string }
}

const supportCategories = {
  "technical-notes": {
    title: "Technical Notes",
    description: "Comprehensive technical documentation and application notes for vibration isolation systems.",
  },
  resources: {
    title: "Resources",
    description: "User manuals, catalogs, and setup guides for all DVIA products.",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = supportCategories[params.category as keyof typeof supportCategories]

  if (!category) {
    return {
      title: "Support Category Not Found | DVIA",
    }
  }

  return {
    title: `${category.title} | DVIA Support`,
    description: category.description,
    openGraph: {
      title: `${category.title} | DVIA Support`,
      description: category.description,
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(supportCategories).map((category) => ({
    category,
  }))
}

export const revalidate = 86400 // ISR: revalidate every 24 hours

const SupportCategoryPage = ({ params }: Props) => {
  const category = supportCategories[params.category as keyof typeof supportCategories]

  if (!category) {
    notFound()
  }

  return <Client category={params.category} categoryData={category} />
}

export default SupportCategoryPage
