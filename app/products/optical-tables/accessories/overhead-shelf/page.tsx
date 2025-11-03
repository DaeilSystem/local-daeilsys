import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/overhead-shelf-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
  description: typeof productData.description === "string" ? productData.description : productData.description.en,
  keywords: [productData.name, "overhead shelf", "DOTS", "optical table accessories", "오버헤드쉘프"],
  openGraph: {
    title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
    description: typeof productData.description === "string" ? productData.description : productData.description.en,
    type: "website",
  },
}

export const revalidate = 86400

const OverheadShelfPage = () => {
  return <Client />
}

export default OverheadShelfPage

