import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "Company Overview | DVIA",
  description:
    "Learn about DVIA's mission, vision, and commitment to providing advanced vibration isolation solutions worldwide.",
  keywords: ["company overview", "vibration isolation company", "DVIA mission", "research equipment manufacturer"],
  openGraph: {
    title: "Company Overview | DVIA",
    description:
      "Learn about DVIA's mission, vision, and commitment to providing advanced vibration isolation solutions worldwide.",
    type: "website",
  },
}

export const revalidate = 86400 // ISR: revalidate every 24 hours

const CompanyPage = () => {
  return <Client />
}

export default CompanyPage
