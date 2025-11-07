import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/dvia-mlp2000-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${productData.fullName.en} | DAEIL SYSTEMS`,
  description: productData.description.en,
  keywords: [productData.name, "Thermo Fisher SEM", "custom active vibration isolation", "electron microscopy", "feedforward control"],
  openGraph: {
    title: `${productData.name} | ${productData.fullName.en} | DAEIL SYSTEMS`,
    description: productData.description.en,
    type: "website",
  },
}

export const revalidate = 86400

const DviaMLP2000Page = () => {
  return <Client />
}

export default DviaMLP2000Page
