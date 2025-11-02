import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/dvia-mlp1000-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
  description: productData.description,
  keywords: [productData.name, "Thermo Fisher SEM", "custom active vibration isolation", "electron microscopy", "feedforward control"],
  openGraph: {
    title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
    description: productData.description,
    type: "website",
  },
}

export const revalidate = 86400

const DviaMLP1000Page = () => {
  return <Client />
}

export default DviaMLP1000Page
