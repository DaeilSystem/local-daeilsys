import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/dvid-l-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
  description: typeof productData.description === "string" ? productData.description : productData.description.en,
  keywords: [productData.name, "lab workstation", "vibration isolation workstation", "workspace type", "armrest type"],
  openGraph: {
    title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
    description: typeof productData.description === "string" ? productData.description : productData.description.en,
    type: "website",
  },
}

export const revalidate = 86400

const DvidLPage = () => {
  return <Client />
}

export default DvidLPage
