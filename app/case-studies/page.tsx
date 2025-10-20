import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "Case Studies | DVIA",
  description:
    "Explore real-world applications and success stories of DVIA vibration isolation solutions across various industries.",
  keywords: ["case studies", "success stories", "vibration isolation applications", "customer testimonials"],
  openGraph: {
    title: "Case Studies | DVIA",
    description:
      "Explore real-world applications and success stories of DVIA vibration isolation solutions across various industries.",
    type: "website",
  },
}

export const revalidate = 86400 // ISR: revalidate every 24 hours

const CaseStudiesPage = () => {
  return <Client />
}

export default CaseStudiesPage
