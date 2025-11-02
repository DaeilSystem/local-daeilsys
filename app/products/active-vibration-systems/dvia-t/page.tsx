import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/dvia-t-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
  description: productData.description,
  keywords: [productData.name, "tabletop vibration isolation", "active vibration control", "microscope platform", "nanometer resolution"],
  openGraph: {
    title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
    description: productData.description,
    type: "website",
  },
}

export const revalidate = 86400 // ISR: revalidate every 24 hours

const DviaTPage = () => {
  return <Client />
}

export default DviaTPage
