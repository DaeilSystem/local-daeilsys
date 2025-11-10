import type { Metadata } from "next"
import ProductPageLayout from "@/share/components/ProductPageLayout"
import ProductPageScriptsOptimized from "@/share/components/ProductPageScriptsOptimized"

export const metadata: Metadata = {
  title: "DVIA-MLP2000 | Custom Active Vibration Isolation System | DAEIL SYSTEMS",
  description:
    "DVIA-MLP2000은 Thermo Fisher SEM에 특화된 세계 최고 수준의 액티브 제진 시스템입니다. 측면 삽입 설치를 지원하며, 0.5Hz부터 진동을 제어하고 1Hz에서 80~90%의 진동 차단율을 제공합니다.",
}

export default function DviaMLP2000Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProductPageLayout>
      {children}
      <ProductPageScriptsOptimized enableParticles />
    </ProductPageLayout>
  )
}
