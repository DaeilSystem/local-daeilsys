import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/dvim-m-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
  description: typeof productData.description === "string" ? productData.description : productData.description.en,
  keywords: [productData.name, "standard pneumatic vibration isolator", "pneumatic isolator", "vibration isolation", "공압식 아이솔레이터"],
  openGraph: {
    title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
    description: typeof productData.description === "string" ? productData.description : productData.description.en,
    type: "website",
  },
}

export const revalidate = 86400

const DvimMPage = () => {
  return <Client />
}

export default DvimMPage
