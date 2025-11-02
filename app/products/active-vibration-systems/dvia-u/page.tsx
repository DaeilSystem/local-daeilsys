import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/dvia-u-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
  description: productData.description,
  keywords: [
    productData.name,
    "modular active vibration isolation",
    "low-profile platform",
    "electromagnetic actuator",
    "6 DOF control",
    "모듈러형 액티브 제진대"
  ],
  openGraph: {
    title: `${productData.name} | ${productData.fullName} | DAEIL SYSTEMS`,
    description: productData.description,
    type: "website",
  },
}

export const revalidate = 86400

const DviaUPage = () => {
  return <Client />
}

export default DviaUPage
