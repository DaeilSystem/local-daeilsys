import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/non-magnetic-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
  description: typeof productData.description === "string" ? productData.description : productData.description.en,
  keywords: [productData.name, "non-magnetic optical table", "stainless steel", "cleanroom", "비자성 광학정반"],
  openGraph: {
    title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
    description: typeof productData.description === "string" ? productData.description : productData.description.en,
    type: "website",
  },
}

export const revalidate = 86400

const NonMagneticPage = () => {
  return <Client />
}

export default NonMagneticPage
