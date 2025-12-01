import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Client from "./client"

interface Props {
  params: { slug: string }
}

const companyPages = {
  overview: {
    title: "Company Overview",
    description: "Learn about DAEIL SYSTEMS' history, mission, and commitment to excellence in vibration isolation technology.",
  },
  "vision-mission": {
    title: "Vision and Mission",
    description:
      "Discover DAEIL SYSTEMS' vision for the future and our mission to provide cutting-edge vibration isolation solutions.",
  },
  "company-history": {
    title: "Company History",
    description: "Explore the rich history and milestones of DAEIL SYSTEMS' journey in vibration isolation technology.",
  },
  values: {
    title: "Our Values",
    description: "Learn about the core values that drive DAEIL SYSTEMS' commitment to innovation and customer satisfaction.",
  },
  "sustainability-management": {
    title: "Sustainability Management",
    description: "Discover DAEIL SYSTEMS' commitment to sustainable practices and environmental responsibility.",
  },
  "company-intro-video": {
    title: "Company Intro Video",
    description: "Watch our company introduction video to learn more about DAEIL SYSTEMS and our capabilities.",
  },
  "trade-shows": {
    title: "Trade Shows",
    description: "Find out where you can meet DAEIL SYSTEMS at upcoming trade shows and industry events.",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = companyPages[params.slug as keyof typeof companyPages]

  if (!page) {
    return {
      title: "Page Not Found | DVIA",
    }
  }

  return {
    title: `${page.title} | DVIA`,
    description: page.description,
    openGraph: {
      title: `${page.title} | DVIA`,
      description: page.description,
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'overview' },
    { slug: 'vision-mission' },
    { slug: 'values' },
    { slug: 'company-history' },
    { slug: 'company-intro-video' },
    { slug: 'sustainability-management' },
    { slug: 'trade-shows' },
  ]
}

export const revalidate = 86400 // ISR: revalidate every 24 hours

const CompanyDetailPage = ({ params }: Props) => {
  const page = companyPages[params.slug as keyof typeof companyPages]

  if (!page) {
    notFound()
  }

  return <Client slug={params.slug} />
}

export default CompanyDetailPage
