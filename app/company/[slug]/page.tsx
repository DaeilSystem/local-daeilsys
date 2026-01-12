import { companySections } from "@/data/company"
import { notFound } from "next/navigation"
import CompanySubpageClient from "./client"

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return companySections.map((section) => ({
    slug: section.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const section = companySections.find((s) => s.slug === params.slug)

  if (!section) {
    return { title: "Not Found" }
  }

  return {
    title: `${section.title.en} | DAEIL SYSTEMS`,
    description: section.description.en,
  }
}

export default function CompanySubpage({ params }: PageProps) {
  const section = companySections.find((s) => s.slug === params.slug)

  if (!section) {
    notFound()
  }

  return <CompanySubpageClient section={section} />
}
