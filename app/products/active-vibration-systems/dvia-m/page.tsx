import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/dvia-m-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
  description: productData.description,
  keywords: [productData.name, "built-in vibration isolation", "electron microscope platform", "nanoscale imaging", "active vibration control"],
  openGraph: {
    title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
    description: productData.description,
    type: "website",
  },
}

export const revalidate = 86400

const DviaMPage = () => {
  return <Client />
}

export default DviaMPage
