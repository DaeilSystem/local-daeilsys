import type { Metadata } from "next"
import { productPageStyles } from "@/share/styles/product-page-styles"

interface ProductPageLayoutProps {
  children: React.ReactNode
  /** Optional additional CSS styles to append */
  additionalStyles?: string
}

/**
 * 제품 페이지를 위한 공통 레이아웃 컴포넌트
 *
 * dvia-mlp1000 스타일의 다크 테마 제품 페이지를 위한 레이아웃입니다.
 * 필요한 폰트, 아이콘, 애니메이션 CSS 등을 모두 포함합니다.
 *
 * @example
 * ```tsx
 * // layout.tsx
 * export default function MyProductLayout({ children }) {
 *   return <ProductPageLayout>{children}</ProductPageLayout>
 * }
 * ```
 */
export default function ProductPageLayout({ children, additionalStyles = "" }: ProductPageLayoutProps) {
  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Play:wght@400;700&family=Source+Sans+Pro:ital,wght@0,300;1,300&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,700;0,900;1,200;1,300;1,400&family=Blinker:wght@200;300;400;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Material Icons */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
      />

      {/* Animate.css */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

      {/* Custom CSS - Product Page Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: productPageStyles + (additionalStyles ? `\n\n/* Additional Styles */\n${additionalStyles}` : ""),
        }}
      />

      {children}
    </>
  )
}
