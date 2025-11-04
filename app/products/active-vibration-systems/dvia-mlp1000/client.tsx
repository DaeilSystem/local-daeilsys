"use client"

import Head from "next/head"
import NextImage from "next/image"
import Link from "next/link"

import { useMemo } from "react"

import { ScrollSectionContainer } from "@/components/scroll-video/scroll-section-container"
import {
  AppleScrollFadeAnimation,
  FadeInAnimation,
  LockSequenceAnimation,
  ParallaxAnimation,
  useAutoSnapToSections,
  useReducedMotion,
} from "@/components/unified"
import productData from "@/data/products/dvia-mlp1000-full.json"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { SequenceConfig } from "@/types/scroll-animation"

/* ---------- 페이지 카피 (영/한) ---------- */
const copy = {
  en: {
    productTag: "DVIA-MLP1000",
    heroTitle: "Custom Active Vibration Isolation System",
    heroSubtitle: "Thermo Fisher SEM",
    heroBadge: "World's Most Advanced Active Vibration Isolation System",
    heroLines: [
      "Fully custom design.",
      "Perfect integration with SEM.",
      "Game-changing innovation.",
      "New standard for active vibration isolation systems.",
    ],

    aboutTitle: "About",
    aboutTitleHighlight: "DVIA-MLP1000",
    aboutP1: "A completely new active vibration isolation system has finally been launched. DAEIL SYSTEMS introduces the world's most advanced active vibration isolation system, DVIA-MLP1000, specifically designed for electron microscopes (SEM).",
    aboutP2: "DVIA-MLP1000 sets a new standard for active vibration isolation systems by providing an optimized vibration control environment that enables high-performance electron microscopes to achieve perfect imaging without interference.",

    overviewTitle: "Overview",
    overviewP1: "The DVIA-MLP1000, an advanced active vibration isolation system designed for electron microscopes (SEM) from various manufacturers including Thermo Fisher Scientific, prioritizes user convenience and comfort. Unlike previous active vibration isolation models that required lifting the SEM for installation, the DVIA-MLP1000 can be installed by pushing the equipment in from the side, making it much more convenient and cost-effective.",
    overviewP2: "Additionally, the low-profile design maintains the SEM's unique ergonomic structure, providing users with a comfortable working environment. This active vibration isolation system applies feedback and feedforward vibration control algorithms to control vibrations from 0.5Hz, achieving 80-90% vibration isolation performance at 1Hz. The DVIA-MLP1000 enhances stability and precision in SEM's nanoscale imaging, further improving functionality and reliability.",

    hardwareTitle: "Hardware Configuration",
    hardwareFeatures: {
      compatibility: {
        icon: "widgets",
        title: "Perfect Compatibility and Stability",
        description: "Four custom-designed active isolators are applied to be securely fastened to the SEM base frame. Each isolator's top plate has two through-holes designed to exactly match the caster holes in the SEM base frame."
      },
      platform: {
        icon: "beenhere",
        title: "SEM-Optimized Platform Size",
        description: "The DVIA-MLP1000 with dimensions of 874 × 846 × 158 mm is designed to fit perfectly with Thermo Fisher SEM. The low-profile design allows the microscope to be placed directly on the system, minimizing overall height. This enables easy installation in cramped spaces or inside enclosures without modification, while maintaining a convenient ergonomic working environment for users."
      },
      caster: {
        icon: "edgesensor_high",
        title: "Enhanced Mobility with Casters",
        description: "The DVIA-MLP1000 platform can be fitted with casters on all four sides, greatly improving mobility and ease of operation. This design allows easy movement in various directions, making transport and installation position adjustments much easier. Additionally, all four sides can be equipped with casters, making it easy to roll smoothly on the surface."
      },
      airSpring: {
        icon: "flash_on",
        title: "Low Resonant Frequency Air Spring",
        subtitle: "Outstanding Vibration Control Performance at Frequencies Below 5Hz",
        description: "The DVIA-MLP1000 uses air springs with low resonant frequencies below 5Hz to enhance vibration isolation performance in the low-frequency range. Most vibration isolation systems have difficulty controlling vibrations in the sub-5Hz range because they use only passive isolators with high resonant frequencies and feedback algorithms. However, the DVIA-MLP1000 combines low resonant frequency isolators with feedback and feedforward algorithms to achieve superior isolation performance. As a result, it provides an optimal solution for SEM and dual-beam equipment that require strict vibration requirements."
      }
    },

    softwareTitle: "Software Configuration",
    softwareFeatures: {
      advanced: {
        title: "World's Most Advanced Active Vibration Isolation System",
        description: "The DVIA-MLP1000 system is equipped with 11 highly sensitive geophone sensors and 8 electromagnetic actuators with excellent low-frequency response characteristics from 0.3Hz. These are precisely designed to accurately measure and cancel vibrations, and when combined with state-of-the-art embedded feedback and feedforward control algorithms, they can meet strict VC-G vibration specifications below 2Hz."
      },
      tuning: {
        title: "New Tuning Software, Revolutionary Performance Enhancement",
        description: "The DVIA-MLP1000's new tuning software provides more diverse filters and gains to improve low-frequency vibration control performance. The filter slots have increased from 3 to 5, allowing more precise feedback and feedforward tuning, and the newly introduced feedforward D gain and D frequency ensure excellent stability below 10Hz and can attenuate vibrations down to 0.5Hz. Additionally, this tuning software provides open-loop transfer functions from 0.1Hz, supporting accurate phase margin verification for low-frequency vibration control."
      },
      feedback: {
        title: "Feedback Control",
        description: "The feedback control system continuously measures vibrations occurring on the isolation platform using high-performance sensors and effectively reduces vibrations by applying forces in the same but opposite direction using actuators. While excellent isolation effects are achieved with default settings alone, even better control performance can be obtained by optimizing the feedback open loop by adjusting gains to match customer equipment that requires control and controlling structural resonances or specific vibration sources with new advanced notch filters."
      },
      feedforward: {
        title: "Feedforward Control",
        description: "Feedforward control measures floor vibration sensor values in real-time to detect vibrations and sends signals to actuators to cancel them before floor vibrations are transmitted to the equipment. The DVIA-MLP1000's feedforward control dramatically improves vibration isolation performance and easily adapts to changes in facility vibration levels through dynamic control. Additionally, it maintains superior control performance at all times without requiring continuous retuning."
      }
    },

    sixDOFTitle: "Active Vibration Control in All Six Degrees of Freedom",
    sixDOFDescription: "The DVIA series controls vibrations in all six degrees of freedom, including three translational motions (X, Y, Z axes) and three rotational motions (pitch, roll, yaw).",

    performanceTitle: "Performance",
    performanceDescription: "The DVIA-MLP1000 starts controlling vibrations from 0.5Hz, providing 80-90% vibration control performance at 1Hz.",

    compatibleTitle: "Compatible Thermo Fisher SEM Models",

    viewer3DTitle: "DVIA-MLP1000 (Standard) 3D Modeling",

    specsTitle: "Technical Specifications",

    disassemblyTitle: "Flawless Hardware and Software Configuration",

    ctaTitle: "Do you have any",
    ctaTitleHighlight: "Questions?",
    ctaDescription: "Find all contact information for DAEIL SYSTEMS. If you have any questions, require technical assistance or want to provide feedback, contact us. We'd love to hear you out.",
    ctaButton: "Contact us",

    alts: {
      hero: "DVIA-MLP1000 Main Product",
      disassembly: "DVIA-MLP1000 Disassembly",
      sixDOF: "6DOF Diagram",
      performance: "Performance Graph",
    },
  },
  ko: {
    productTag: "DVIA-MLP1000",
    heroTitle: "커스텀 액티브 제진대",
    heroSubtitle: "써모피셔 SEM",
    heroBadge: "세계에서 가장 뛰어난 액티브 제진 시스템",
    heroLines: [
      "완전 맞춤형 설계.",
      "SEM과 완벽한 통합.",
      "판도를 바꾸는 혁신.",
      "액티브 제진 시스템의 새로운 표준.",
    ],

    aboutTitle: "About",
    aboutTitleHighlight: "DVIA-MLP1000",
    aboutP1: "완전히 새로운 액티브 제진 시스템이 드디어 출시되었습니다. 대일시스템은 전자현미경(SEM)에 특화된 세계 최고 수준의 액티브 제진 시스템, DVIA-MLP1000을 선보입니다.",
    aboutP2: "DVIA-MLP1000은 고성능 전자현미경이 외란 없이 완벽한 이미징을 가능하도록 최적화된 진동 제어 환경을 제공함으로써 액티브 제진 시스템의 새로운 기준을 제시합니다.",

    overviewTitle: "개요",
    overviewP1: "Thermo Fisher Scientific를 비롯한 여러 제조사의 전자현미경(SEM)을 위해 설계된 최첨단 액티브 제진 시스템, DVIA-MLP1000은 사용자 편의성과 안락함을 최우선으로 고려했습니다. 기존 액티브 제진대 모델이 SEM을 들어 올려 설치해야 했던 것과 달리, DVIA-MLP1000은 측면에서 장비를 밀어 넣는 방식으로 설치할 수 있어 훨씬 간편하고 비용도 절감됩니다.",
    overviewP2: "또한 낮은 로우 프로파일 디자인으로 SEM 특유의 인체공학적 구조를 그대로 유지해 사용자에게 편안한 사용 환경을 제공합니다. 이 액티브 제진 시스템은 피드백 및 피드포워드 진동 제어 알고리즘을 적용해 0.5Hz부터 진동을 제어하며, 1Hz에서 80~90%의 제진 성능을 달성합니다. DVIA-MLP1000은 SEM의 나노스케일 이미징에서 안정성과 정밀도를 강화해 기능성과 신뢰도를 한층 높여줍니다.",

    hardwareTitle: "하드웨어 구성",
    hardwareFeatures: {
      compatibility: {
        icon: "widgets",
        title: "완벽한 호환성과 안정성",
        description: "SEM 본체의 베이스 프레임에 견고하게 체결할 수 있도록 맞춤 설계된 4개의 액티브 아이솔레이터가 적용됩니다. 각 아이솔레이터 상단 플레이트에는 두 개의 관통 구멍이 있어, SEM 베이스 프레임에 있는 캐스터 구멍과 정확히 일치하도록 디자인되었습니다."
      },
      platform: {
        icon: "beenhere",
        title: "SEM에 최적화된 플랫폼 크기",
        description: "874 × 846 × 158 mm 규격의 DVIA-MLP1000은 Thermo Fisher SEM에 딱 맞도록 설계되었습니다. 낮은 프로파일 디자인으로 현미경을 시스템 위에 직접 올릴 수 있어 전체 높이를 최소화합니다. 이에 따라 공간이 협소한 환경이나 인클로저 내부에서도 별도의 개조 없이 쉽게 설치할 수 있으며, 사용자에게 편리한 인체공학적 사용 환경도 유지합니다."
      },
      caster: {
        icon: "edgesensor_high",
        title: "향상된 이동성을 위한 캐스터",
        description: "DVIA-MLP1000 플랫폼은 네 면에 캐스터를 부착할 수 있어 이동성과 조작 편의성을 크게 높였습니다. 이 설계를 통해 다양한 방향으로 간편하게 움직일 수 있으므로 운반 및 설치 위치 조정이 더욱 수월해집니다. 또한 네 면 모두에 캐스터를 장착할 수 있어, 표면 위에서 부드럽게 굴리며 이동시키기 쉽습니다."
      },
      airSpring: {
        icon: "flash_on",
        title: "낮은 공진 주파수의 에어 스프링",
        subtitle: "5Hz 이하 주파수에서 뛰어난 진동 제어 성능",
        description: "DVIA-MLP1000은 5Hz 이하의 낮은 공진 주파수를 갖는 에어 스프링을 사용해 저주파 대역에서의 제진 성능을 강화했습니다. 대부분의 제진 시스템은 공진 주파수가 높은 패시브 아이솔레이터와 피드백 알고리즘만을 사용하기에 5Hz 이하 영역의 진동을 제어하는데 어려움을 겪습니다. 하지만 DVIA-MLP1000은 저공진 주파수 아이솔레이터에 피드백 및 피드포워드 알고리즘을 접목하여 월등한 격리 성능을 구현합니다. 그 결과, 엄격한 진동 요건이 필요한 SEM 및 듀얼빔 장비에도 최적의 솔루션을 제공합니다."
      }
    },

    softwareTitle: "소프트웨어 구성",
    softwareFeatures: {
      advanced: {
        title: "세계 최고 수준의 액티브 제진 시스템",
        description: "DVIA-MLP1000 시스템은 0.3Hz부터 우수한 저주파 응답 특성을 지닌 11개의 고감도 지오폰(Geophone) 센서와 8개의 전자기 액추에이터를 탑재했습니다. 이들은 진동을 정밀하게 측정하고 상쇄하기 위해 정교하게 설계되었으며, 최첨단 임베디드 피드백 및 피드포워드 제어 알고리즘과 결합되어 2Hz 이하에서 엄격한 VC-G 진동 규격을 만족할 수 있게 합니다."
      },
      tuning: {
        title: "새로운 튜닝 소프트웨어, 획기적인 성능 향상",
        description: "DVIA-MLP1000의 새로운 튜닝 소프트웨어는 필터와 게인을 더욱 다양하게 제공해 저주파 진동 제어 성능을 향상시킵니다. 필터 슬롯이 기존 3개에서 5개로 늘어나 피드백과 피드포워드 튜닝을 한층 정밀하게 수행할 수 있으며, 새롭게 도입된 피드포워드 D 게인과 D 주파수로 10Hz 이하 대역에서 탁월한 안정성을 보장하고 0.5Hz 이하 진동까지 감쇠할 수 있습니다. 또한 이 튜닝 소프트웨어는 0.1Hz부터 오픈 루프 전달함수를 제공해, 저주파대 진동 제어를 위해 정확한 위상 여유(Phase Margin) 확인을 지원합니다."
      },
      feedback: {
        title: "피드백 제어(Feedback Control)",
        description: "피드백 제어 시스템은 제진대 상판에서 발생하는 진동을 고성능 센서로 지속적으로 측정하고, 액추에이터를 이용해 동일하나 반대 방향의 힘을 가함으로써 진동을 효과적으로 줄입니다. 기본 설정만으로도 우수한 격리 효과를 발휘하지만, 제어가 필요한 고객 장비에 맞춰 게인을 조정하고 새로운 고급 노치 필터로 구조 공진이나 특정 진동원을 제어함으로써 피드백 오픈 루프를 최적화하면 더욱 향상된 제어 성능을 얻을 수 있습니다."
      },
      feedforward: {
        title: "피드포워드 제어(Feedforward Control)",
        description: "피드포워드 제어는 실시간으로 바닥 진동 센서 값을 측정해 진동을 감지하고, 바닥 진동이 장비로 전달되기 전에 이를 상쇄할 수 있도록 액추에이터로 신호를 보냅니다. DVIA-MLP1000의 피드포워드 제어는 제진 성능을 획기적으로 개선하며, 동적 제어 방식을 통해 시설 내 진동 수준이 변화하더라도 쉽게 적응합니다. 또한 지속적인 재튜닝이 필요 없어 언제나 월등한 제어 성능을 유지할 수 있습니다."
      }
    },

    sixDOFTitle: "모든 6자유도에서의 능동형 진동 제어",
    sixDOFDescription: "DVIA 시리즈는 X, Y, Z축의 3가지 병진 운동과 피치(pitch), 롤(roll), 요(yaw)의 3가지 회전 운동을 포함한 총 6자유도에서 진동을 제어합니다.",

    performanceTitle: "성능",
    performanceDescription: "DVIA-MLP1000은 0.5Hz부터 진동을 제어하기 시작하여, 1Hz에서 80 – 90%의 진동 제어 성능을 제공합니다.",

    compatibleTitle: "호환 가능한 Thermo Fisher SEM 모델",

    viewer3DTitle: "DVIA-MLP1000 (Standard) 3D Modeling",

    specsTitle: "기술 사양",

    disassemblyTitle: "흠잡을 데 없는 완벽한 하드웨어 및 소프트웨어 구성",

    ctaTitle: "궁금한 점이",
    ctaTitleHighlight: "있으신가요?",
    ctaDescription: "DAEIL SYSTEMS의 모든 연락처 정보를 확인하세요. 질문이 있으시거나 기술 지원이 필요하시거나 피드백을 제공하고 싶으시면 언제든지 연락주세요.",
    ctaButton: "문의하기",

    alts: {
      hero: "DVIA-MLP1000 메인 제품",
      disassembly: "DVIA-MLP1000 분해도",
      sixDOF: "6자유도 다이어그램",
      performance: "성능 그래프",
    },
  },
} as const

/* ---------- 페이지 ---------- */
export default function Client() {
  const { language, isInitialized } = useLanguage()
  const { theme } = useTheme()
  const reduceMotion = useReducedMotion()

  useAutoSnapToSections({
    enabled: !reduceMotion,
    offsetRatio: 0.6,
    cooldownMs: 700,
    minSectionHeightPx: 400,
  })

  const currentLanguage = isInitialized ? language : "en"
  const C = copy[currentLanguage]

  // Hero motion sequence
  const heroSeq = useMemo(() => {
    const { heroMotion } = productData
    return Array.from(
      { length: heroMotion.endFrame - heroMotion.startFrame + 1 },
      (_, i) => {
        const frameNum = String(i + heroMotion.startFrame).padStart(
          heroMotion.frameDigits,
          "0"
        )
        return `${heroMotion.basePath}/${heroMotion.filename}-${frameNum}.${heroMotion.extension}`
      }
    )
  }, [])

  // Disassembly motion sequence
  const disassemblySeq = useMemo(() => {
    const { disassemblyMotion } = productData
    return Array.from(
      { length: disassemblyMotion.endFrame - disassemblyMotion.startFrame + 1 },
      (_, i) => {
        const frameNum = String(i + disassemblyMotion.startFrame).padStart(
          disassemblyMotion.frameDigits,
          "0"
        )
        return `${disassemblyMotion.basePath}/${disassemblyMotion.filename}-${frameNum}.${disassemblyMotion.extension}`
      }
    )
  }, [])

  // Hero motion sequence config
  const heroSequenceConfig: SequenceConfig = {
    frames: heroSeq,
    requireFullPreload: false,
    minLoadedRatioToStart: 0.5,
    preloadConcurrency: 8,
    minVisibleRatioToStart: 0.7,
    minViewportTopToStart: 0.95,
    sensitivity: 0.0012,
    startSlack: 0.0005,
    autoRelockWithinSection: true,
    relockPixelThreshold: 100,
    relockOnReenter: true,
    relockReset: "start", // 재진입 시 첫 프레임부터 시작
  }

  // Disassembly motion sequence config
  const disassemblySequenceConfig: SequenceConfig = {
    frames: disassemblySeq,
    requireFullPreload: false,
    minLoadedRatioToStart: 0.5,
    preloadConcurrency: 8,
    minVisibleRatioToStart: 0.7,
    minViewportTopToStart: 0.95,
    sensitivity: 0.0012,
    startSlack: 0.0005,
    autoRelockWithinSection: true,
    relockPixelThreshold: 100,
    relockOnReenter: true,
    relockReset: "auto",
  }


  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="bg-black text-white overflow-x-hidden scroll-smooth">
      {/* 첫 프레임 프리로드 */}
      <Head>
        <link
          rel="preload"
          as="image"
          href={heroSeq[0]}
        />
        <link
          rel="preload"
          as="image"
          href={disassemblySeq[0]}
        />
      </Head>

      {/* ===== HERO ===== */}
      <ScrollSectionContainer id="hero" className="min-h-[90vh]">
        <section
          data-snap-section
          className="min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 py-2 md:px-[6vw]"
        >
          <div className="text-center w-full max-w-[1200px] mx-auto">
            <FadeInAnimation delay={0} duration={1000} startVisible={true}>
              <p className="text-xl sm:text-2xl md:text-3xl font-normal mb-3 font-inter text-white uppercase">
                {C.productTag}
              </p>
            </FadeInAnimation>

            <FadeInAnimation delay={200} duration={1000} startVisible={true}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight bg-gradient-to-r from-[#CF432E] to-[#1144EC] bg-clip-text text-transparent">
                {C.heroTitle}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-6">
                {C.heroSubtitle}
              </p>
            </FadeInAnimation>

            <FadeInAnimation delay={400} duration={1000} startVisible={true}>
              <div className="mb-8">
                {C.heroLines.map((line, i) => (
                  <p
                    key={i}
                    className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </FadeInAnimation>

            <div className="relative w-full mt-8">
              <div className="relative aspect-video w-full">
                <LockSequenceAnimation
                  frames={heroSeq}
                  alt={C.alts.hero}
                  className="w-full h-full"
                  config={heroSequenceConfig}
                />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
              />
              <ParallaxAnimation speed={-0.06} clamp={36}>
                <div className="relative sm:absolute sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 w-full flex flex-col items-center mt-6">
                  <div className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-black/50 sm:bg-black/50 backdrop-blur-md shadow-lg text-white text-base sm:text-xl md:text-2xl font-medium tracking-wide">
                    {C.heroBadge}
                  </div>
                  <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-6" />
                </div>
              </ParallaxAnimation>
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== ABOUT ===== */}
      <ScrollSectionContainer id="about" className="min-h-screen border-t border-gray-800">
        <section
          data-snap-section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[6vw] py-14 md:py-20"
        >
          <div className="max-w-7xl mx-auto">
            <AppleScrollFadeAnimation className="mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight leading-[1.05]">
                <span className="text-gray-400">{C.aboutTitle}</span>{" "}
                <span className="font-semibold text-white">{C.aboutTitleHighlight}</span>
              </h2>
            </AppleScrollFadeAnimation>
            <div className="space-y-6 md:space-y-10">
              <AppleScrollFadeAnimation>
                <p className="text-base sm:text-lg md:text-2xl leading-relaxed font-light text-[#D1D5DB]">
                  {C.aboutP1}
                </p>
              </AppleScrollFadeAnimation>
              <AppleScrollFadeAnimation>
                <p className="text-base sm:text-lg md:text-2xl text-[#D1D5DB] leading-relaxed font-light">
                  {C.aboutP2}
                </p>
              </AppleScrollFadeAnimation>
            </div>

            {/* Icon Features */}
            <div className="flex justify-center gap-8 md:gap-12 mt-12 md:mt-16">
              {productData.heroIcons.map((item, index) => (
                <AppleScrollFadeAnimation key={index}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-3">
                      <span className="material-icons text-4xl md:text-5xl text-blue-400">
                        {item.icon}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
                      {item.label}
                    </p>
                  </div>
                </AppleScrollFadeAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== OVERVIEW ===== */}
      <ScrollSectionContainer
        id="overview"
        className="min-h-screen bg-gradient-to-b from-black to-gray-900 border-t border-gray-800"
      >
        <section
          data-snap-section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[6vw] py-10 md:py-16"
        >
          <div className="w-full max-w-[1280px] mx-auto">
            <AppleScrollFadeAnimation className="mb-6 md:mb-10">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-thin leading-[1.05]">
                <span className="block font-semibold">{C.overviewTitle}</span>
              </h2>
            </AppleScrollFadeAnimation>
            <div className="space-y-3 md:space-y-2">
              <AppleScrollFadeAnimation>
                <p className="text-base sm:text-lg md:text-2xl text-[#D1D5DB] leading-relaxed font-normal">
                  {C.overviewP1}
                </p>
              </AppleScrollFadeAnimation>
              <AppleScrollFadeAnimation>
                <p className="text-base sm:text-lg md:text-2xl text-[#D1D5DB] leading-relaxed font-normal">
                  {C.overviewP2}
                </p>
              </AppleScrollFadeAnimation>
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== DISASSEMBLY MOTION ===== */}
      <ScrollSectionContainer
        id="disassembly"
        className="relative min-h-[100dvh] border-t border-gray-800"
      >
        <section
          data-snap-section
          className="min-h-[100dvh] flex flex-col px-4 sm:px-6 md:px-[6vw] py-14 md:py-20 overscroll-contain"
        >
          <div className="w-full max-w-5xl mx-auto">
            <AppleScrollFadeAnimation>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-thin leading-[1.05] mb-8">
                <span className="block text-white font-medium text-left">
                  {C.disassemblyTitle}
                </span>
              </h2>
            </AppleScrollFadeAnimation>

            <div className="h-12 md:h-16" />

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-4xl">
                <LockSequenceAnimation
                  frames={disassemblySeq}
                  alt={C.alts.disassembly}
                  className="w-full rounded-xl overflow-hidden"
                  config={disassemblySequenceConfig}
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== HARDWARE ===== */}
      <ScrollSectionContainer
        id="hardware"
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black border-t border-gray-800"
      >
        <section
          data-snap-section
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-[6vw] py-14 md:py-20"
        >
          <div className="w-full max-w-7xl mx-auto">
            <AppleScrollFadeAnimation className="mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-thin leading-[1.05] text-left">
                <span className="block font-normal">{C.hardwareTitle}</span>
              </h2>
            </AppleScrollFadeAnimation>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {Object.entries(C.hardwareFeatures).map(([key, feature], index) => (
                <AppleScrollFadeAnimation key={key}>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="material-icons text-4xl text-blue-400 mt-1">
                        {feature.icon}
                      </span>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {feature.title}
                        </h3>
                        {feature.subtitle && (
                          <p className="text-lg text-blue-400 mb-3">{feature.subtitle}</p>
                        )}
                        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </AppleScrollFadeAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== SOFTWARE ===== */}
      <ScrollSectionContainer
        id="software"
        className="min-h-screen border-t border-gray-800"
      >
        <section
          data-snap-section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[6vw] py-14 md:py-20"
        >
          <div className="max-w-7xl mx-auto">
            <AppleScrollFadeAnimation className="mb-10 md:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-thin leading-[1.05] text-left">
                <span className="block font-normal">{C.softwareTitle}</span>
              </h2>
            </AppleScrollFadeAnimation>
            <div className="space-y-12">
              {Object.entries(C.softwareFeatures).map(([key, feature], index) => (
                <AppleScrollFadeAnimation key={key}>
                  <div className="bg-slate-800/50 rounded-lg p-6 md:p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </AppleScrollFadeAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== 6DOF ===== */}
      <ScrollSectionContainer
        id="sixdof"
        className="min-h-screen bg-gradient-to-b from-black to-gray-900 border-t border-gray-800"
      >
        <section
          data-snap-section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[6vw] py-14 md:py-20"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AppleScrollFadeAnimation>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">{C.sixDOFTitle}</h2>
                  <p className="text-gray-300 leading-relaxed">{C.sixDOFDescription}</p>
                </div>
              </AppleScrollFadeAnimation>
              <AppleScrollFadeAnimation>
                <div>
                  <NextImage
                    src={productData.sixDOF.image}
                    alt={C.alts.sixDOF}
                    width={1920}
                    height={1080}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </AppleScrollFadeAnimation>
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== PERFORMANCE ===== */}
      <ScrollSectionContainer
        id="performance"
        className="min-h-screen border-t border-gray-800"
      >
        <section
          data-snap-section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[6vw] py-14 md:py-20"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AppleScrollFadeAnimation>
                <div>
                  <NextImage
                    src={productData.performance.image}
                    alt={C.alts.performance}
                    width={1920}
                    height={1080}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </AppleScrollFadeAnimation>
              <AppleScrollFadeAnimation>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">{C.performanceTitle}</h2>
                  <p className="text-gray-300 leading-relaxed">{C.performanceDescription}</p>
                </div>
              </AppleScrollFadeAnimation>
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== 3D VIEWER ===== */}
      <ScrollSectionContainer
        id="viewer3d"
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black border-t border-gray-800"
      >
        <section
          data-snap-section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[6vw] py-14 md:py-20"
        >
          <div className="max-w-7xl mx-auto">
            <AppleScrollFadeAnimation className="mb-8">
              <h2 className="text-3xl font-bold text-white text-center">{C.viewer3DTitle}</h2>
            </AppleScrollFadeAnimation>
            <AppleScrollFadeAnimation>
              <div className="aspect-video w-full max-w-5xl mx-auto bg-slate-800 rounded-lg overflow-hidden">
                <iframe
                  src={productData.viewer3D.url}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </AppleScrollFadeAnimation>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== COMPATIBLE MODELS ===== */}
      <ScrollSectionContainer
        id="compatible"
        className="min-h-screen border-t border-gray-800"
      >
        <section
          data-snap-section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[6vw] py-14 md:py-20"
        >
          <div className="max-w-7xl mx-auto">
            <AppleScrollFadeAnimation className="mb-16">
              <h2 className="text-4xl font-bold text-white text-center">{C.compatibleTitle}</h2>
            </AppleScrollFadeAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productData.compatibleModels.models.map((model, index) => (
                <AppleScrollFadeAnimation key={index}>
                  <div className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                    <h3 className="text-xl font-semibold text-white">• {model}</h3>
                  </div>
                </AppleScrollFadeAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== SPECS ===== */}
      <ScrollSectionContainer
        id="specs"
        className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800"
      >
        <section
          data-snap-section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[6vw] py-14 md:py-20"
        >
          <div className="max-w-7xl mx-auto">
            <AppleScrollFadeAnimation className="mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
                {C.specsTitle}
              </h2>
            </AppleScrollFadeAnimation>
            <AppleScrollFadeAnimation>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-2 sm:p-4 md:p-6">
                <div className="space-y-4">
                  {Object.entries(productData.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="col-span-1 text-gray-400 font-medium">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .trim()
                          .replace(/^./, (str) => str.toUpperCase())}
                      </div>
                      <div className="col-span-2 text-white">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AppleScrollFadeAnimation>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== CTA ===== */}
      <ScrollSectionContainer
        id="cta"
        className="min-h-screen border-t border-gray-800"
      >
        <section
          data-snap-section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[6vw] py-14 md:py-20"
        >
          <div className="max-w-7xl mx-auto text-center">
            <AppleScrollFadeAnimation>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {C.ctaTitle}{" "}
                <span className="text-blue-400">{C.ctaTitleHighlight}</span>
              </h2>
            </AppleScrollFadeAnimation>
            <AppleScrollFadeAnimation>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                {C.ctaDescription}
              </p>
            </AppleScrollFadeAnimation>
            <AppleScrollFadeAnimation>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-12 py-5 rounded-xl hover:bg-blue-700 transition-all text-xl font-bold shadow-2xl transform hover:scale-105"
              >
                {C.ctaButton}
              </Link>
            </AppleScrollFadeAnimation>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* Add Material Icons */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </div>
  )
}
