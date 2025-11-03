import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Client from "./client"

interface Props {
  params: { category: string; item: string }
}

const supportItems = {
  "technical-notes": {
    fundamentals: {
      title: {
        en: "Fundamentals of Vibration",
        ko: "제진의 원리"
      },
      description: {
        en: "Basic principles and theory of vibration isolation systems and their applications.",
        ko: "제진 시스템의 기본 원리와 이론 및 응용 분야."
      },
    },
    "generic-criteria": {
      title: "Generic Vibration Criteria",
      description: "Industry standards and measurement criteria for vibration isolation performance.",
    },
    "active-system": {
      title: "Active Vibration Isolation System",
      description: "Technical overview of active isolation technology and control systems.",
    },
    "passive-system": {
      title: "Passive Vibration Isolation System",
      description: "Comprehensive guide to passive isolation solutions and applications.",
    },
  },
  resources: {
    "user-manual": {
      title: "User Manual",
      description: "Complete user manuals for all DVIA products and systems.",
    },
    catalogs: {
      title: "Product Catalogs",
      description: "Detailed product catalogs with specifications and technical data.",
    },
    "how-to-setup": {
      title: "Setup Guides",
      description: "Step-by-step installation and setup instructions for DVIA products.",
    },
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryItems = supportItems[params.category as keyof typeof supportItems]
  const item = categoryItems?.[params.item as keyof typeof categoryItems]

  if (!item) {
    return {
      title: "Support Item Not Found | DVIA",
    }
  }

  const title = typeof item.title === "string" ? item.title : item.title.en
  const description = typeof item.description === "string" ? item.description : item.description.en

  return {
    title: `${title} | DAEIL SYSTEMS Support`,
    description: description,
    openGraph: {
      title: `${title} | DAEIL SYSTEMS Support`,
      description: description,
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  const params = []
  for (const [category, items] of Object.entries(supportItems)) {
    for (const item of Object.keys(items)) {
      params.push({
        category,
        item,
      })
    }
  }
  return params
}

export const revalidate = 86400 // ISR: revalidate every 24 hours

const SupportItemPage = ({ params }: Props) => {
  const categoryItems = supportItems[params.category as keyof typeof supportItems]
  const item = categoryItems?.[params.item as keyof typeof categoryItems]

  if (!item) {
    notFound()
  }

  return <Client category={params.category} itemId={params.item} itemData={item} />
}

export default SupportItemPage
