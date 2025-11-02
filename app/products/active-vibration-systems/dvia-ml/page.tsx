import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/dvia-ml-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
  description: productData.description,
  keywords: [productData.name, "electron microscope", "active vibration isolation", "cryo-EM", "TEM", "adaptive control algorithms"],
  openGraph: {
    title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
    description: productData.description,
    type: "website",
  },
}

export const revalidate = 86400

const DviaMLPage = () => {
  return <Client />
}

export default DviaMLPage
