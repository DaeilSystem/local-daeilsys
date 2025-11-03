import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/faraday-cage-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
  description: typeof productData.description === "string" ? productData.description : productData.description.en,
  keywords: [productData.name, "faraday cage", "electromagnetic shielding", "optical table accessories", "패러데이 케이지"],
  openGraph: {
    title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
    description: typeof productData.description === "string" ? productData.description : productData.description.en,
    type: "website",
  },
}

export const revalidate = 86400

const FaradayCagePage = () => {
  return <Client />
}

export default FaradayCagePage

