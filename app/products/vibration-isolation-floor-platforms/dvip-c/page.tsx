import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/dvip-c-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
  description: typeof productData.description === "string" ? productData.description : productData.description.en,
  keywords: [productData.name, "DVIP-C", "cradle platform", "pneumatic vibration isolation", "크래들형 제진대"],
  openGraph: {
    title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
    description: typeof productData.description === "string" ? productData.description : productData.description.en,
    type: "website",
  },
}

export const revalidate = 86400

const DVIPCPage = () => {
  return <Client />
}

export default DVIPCPage

