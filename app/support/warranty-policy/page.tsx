import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "5-Year Warranty Policy | DAEIL SYSTEMS",
  description:
    "Starting from 2024, DAEIL SYSTEMS provides a 5-year warranty service for all products manufactured by DAEIL SYSTEMS from the delivery date under normal use conditions.",
  keywords: ["warranty policy", "5-year warranty", "DAEIL SYSTEMS", "product warranty", "service guarantee"],
  openGraph: {
    title: "5-Year Warranty Policy | DAEIL SYSTEMS",
    description:
      "Starting from 2024, DAEIL SYSTEMS provides a 5-year warranty service for all products manufactured by DAEIL SYSTEMS.",
    type: "website",
  },
}

export const revalidate = 86400

const WarrantyPolicyPage = () => {
  return <Client />
}

export default WarrantyPolicyPage
