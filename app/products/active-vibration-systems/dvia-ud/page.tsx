import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/dvia-ud-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
  description: productData.description,
  keywords: [productData.name, "desk active vibration isolation", "ergonomic vibration isolation", "custom active vibration isolation", "feedforward control"],
  openGraph: {
    title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
    description: productData.description,
    type: "website",
  },
}

export const revalidate = 86400

const DviaUDPage = () => {
  return <Client />
}

export default DviaUDPage
