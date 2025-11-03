import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/dvia-ub-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
  description: productData.description,
  keywords: [productData.name, "base spring type active vibration isolation", "low-profile active vibration isolation", "SEM base platform", "feedforward control"],
  openGraph: {
    title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
    description: productData.description,
    type: "website",
  },
}

export const revalidate = 86400

const DviaUBPage = () => {
  return <Client />
}

export default DviaUBPage
