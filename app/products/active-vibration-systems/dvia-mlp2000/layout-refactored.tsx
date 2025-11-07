import type { Metadata } from "next"
import MLP2000ScriptsRefactored from "./scripts-refactored"

export const metadata: Metadata = {
  title: "DVIA-MLP2000 | Custom Active Vibration Isolation System | DAEIL SYSTEMS",
  description:
    "DVIA-MLP2000은 Thermo Fisher SEM에 특화된 세계 최고 수준의 액티브 제진 시스템입니다. 측면 삽입 설치를 지원하며, 0.5Hz부터 진동을 제어하고 1Hz에서 80~90%의 진동 차단율을 제공합니다.",
}

export default function DviaMLP2000LayoutRefactored({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Material Icons */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
      />

      {/* Custom CSS - Converted to Tailwind where possible, keeping essential styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Essential Motion Styles */
        .pa-homepage {
          background: #000;
          color: #fff;
        }

        .wrap {
          width: 100%;
          overflow: hidden;
        }

        .motion-box,
        .pinned,
        .pinned2 {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .img-motion,
        .img-motion2 {
          max-width: 100%;
          height: auto;
        }

        .text-overlay {
          position: absolute;
          color: white;
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        #text0 { top: 10%; opacity: 1; }
        #text1 { top: 30%; }
        #text2 { bottom: 30%; }
        #text3 { bottom: 10%; opacity: 1; }

        .motion-box-mo {
          display: none;
        }

        @media (max-width: 768px) {
          .scrollmagic-pin-spacer {
            display: block !important;
          }
          .motion-box-mo {
            display: none;
          }
          .img-motion,
          .img-motion2 {
            width: 100% !important;
          }
          .text-overlay {
            font-size: 1.2rem !important;
            padding: 0.5rem !important;
          }
        }

        /* Scroll Animation Utilities */
        [data-animate] {
          opacity: 0;
          transform: translateY(20px);
        }

        [data-animate].animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        [data-animate="fadeInUp"].animate-in {
          animation: fadeInUp 1s ease-out forwards;
        }

        [data-animate="fadeInDown"].animate-in {
          animation: fadeInDown 1s ease-out forwards;
        }

        [data-animate="fadeInLeft"].animate-in {
          animation: fadeInLeft 1s ease-out forwards;
        }

        [data-animate="fadeInRight"].animate-in {
          animation: fadeInRight 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Software section specific */
        .software-sec {
          background: #0a0a0a;
        }
      `,
        }}
      />

      {children}

      <MLP2000ScriptsRefactored />
    </>
  )
}
