"use client"

import Head from "next/head"
import NextImage from "next/image"
import Script from "next/script"

import { useMemo } from "react"

import { ScrollSectionContainer } from "@/components/scroll-video/scroll-section-container"
import SpecsTable from "@/components/SpecsTable"
import {
  AppleScrollFadeAnimation,
  AutoPlaySequenceAnimation,
  FadeInAnimation,
  LockSequenceAnimation,
  makeSequencePaths,
  ParallaxAnimation,
  useAutoSnapToSections,
  useReducedMotion,
  type SequenceConfig
} from "@/components/unified"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"

// ScrollImageSequence removed - using unified animation system

// All utility functions moved to unified system

/* ---------- images (정적) ---------- */
const heroImages = ["/dvia-ulf/dvia-ulf-main.png"]
const modularImages = ["/dvia-ulf/dvia-ulf-multiple.png"]

// Sequence utilities moved to unified system

// Sequence components moved to unified system

/* ---------- 페이지 카피 (영/한) ---------- */
const copy = {
  en: {
    productTag: "DVIA-ULF",
    heroTitle: "Modular Active Vibration Isolation System",
    heroBadge: "Designed for SEM and TEM",

    modularLines: [
      "Modular architect.",
      "Low-profile design.",
      "Easy installation.",
      "No air. Just control.",
    ],
    modularP1:
      "Introducing the DVIA-ULF: a groundbreaking active vibration isolation platform engineered to meet the exacting demands of today's most sensitive instruments—such as electron microscopes and other precision research tools.",
    modularP1Span:
      "Its modular architecture allows you to tailor the number of vibration isolators to your instrument's unique specifications—whether it's a compact tabletop unit or a large-scale, high-performance microscope.",
    modularP2Span:
      "The DVIA-ULF's slide-in design enables swift, seamless installation into custom tables, bases, or built-in solutions.",
    modularP2End:
      "Labs can easily reconfigure or expand their setup with minimal disruption, maintaining focus on critical research objectives. Harnessing this simple, scalable, and ultra-low-frequency isolation approach elevates precision, safeguards equipment, and ultimately boosts productivity. Discover how the DVIA-ULF raises the bar in advanced vibration isolation—empowering you to achieve peak performance in nanotechnology, materials science, and beyond.",

    lowestH1: "Lowest height ever designed",
    lowestH2: "Microscope height remains the same.",
    lowestP1:
      "The all-new DVIA-ULF isolator height is unbelievably low, slim and light enough to fit under",
    lowestP2:
      "a microscope’s base frame. The DVIA-ULF isolator does not raise the microscope height.",
    lowestP3:
      "The DVIA-ULF model that is the lowest active vibration isolator DAEIL SYSTEMS has ever designed.",
    isolationHeight: "Isolation Height",

    installH1a: "Straightforward ",
    installH1b: "Installation.",
    installH2: "No heavy lifting.",
    installP:
      "The DVIA-ULF isolators feature a low-profile design, with an overall height of only 91 mm, allowing direct placement under microscope bases. This side-access design eliminates the need for cranes, forklifts, or other rigging equipment during installation. Each isolator is slim enough to fit directly under the microscope's frame, allowing side insertion with minimal clearance.",

    powerH1: "Custom modular design solution",
    powerH2: "for every microscope.",
    powerP:
      "The modular design of the DVIA-ULF allows seamless scalability. Users can effortlessly add units tailored precisely to their microscope's dimensions and weight, from compact research SEMs to large-scale TEMs. Each setup can be individually optimized according to specific weight and geometric requirements. Installation requires no extensive site preparation, making it ideal for modern cleanrooms and space-constrained laboratories. Its streamlined design integrates effortlessly into existing configurations, delivering exceptional vibration isolation even in challenging low-frequency environments.",

    vibH1a: "So much power to control vibration",
    vibH1b: "at all frequencies.",
    vibP:
      "The DVIA-ULF system now features an increased number of actuators, generating a higher combined force of up to 100 N. This enhanced actuator strength directly counters incoming vibrations, significantly improving vibration isolation performance, especially within the critical frequency range of 1–10 Hz. When floor vibrations exceed the VC-C level—common in challenging environments—the increased actuator force ensures consistent stability and optimal protection for sensitive instruments, delivering reliable and precise operation even under demanding conditions.",

    specsTitle: "Technical Specifications",

    alts: {
      hero: "DVIA-ULF Main Product",
      height: "DVIA-ULF Height",
      installSeq: "Installation image sequence",
      modular: "DVIA-ULF Architecture",
    },
  },
  ko: {
    productTag: "DVIA-ULF",
    heroTitle: "모듈형 액티브 제진 시스템",
    heroBadge: "SEM·TEM에 최적화",
    modularLines: ["모듈형.", "초저상 설계.", "간편한 설치.", "에어 없이, 정밀 제어."],
    modularP1:
      "DVIA-ULF는 전자현미경을 비롯한 첨단 정밀 장비의 엄격한 진동 스펙을 충족하도록 개발된 혁신적 액티브 진동 제어 시스템입니다.",
    modularP1Span:
      "모듈형 설계를 적용하여 장비의 크기와 형태에 맞춰 아이솔레이터 수량과 크기를 구성할 수 있어, 소형 탁상형 측정 장비부터 대형 고성능 전자현미경까지 다양한 실험 환경에 최적화된 진동 제어 솔루션을 제공합니다.",
    modularP2Span:
      "슬라이드-인(측면 삽입) 구조로 맞춤형 테이블·베이스·빌트인 시스템에 빠르고 간편하게 설치할 수 있습니다.",
    modularP2End:
      "최소한의 작업만으로 연구실 내 장비 구성을 손쉽게 변경하거나 확장할 수 있어 사용자는 핵심 연구에 집중할 수 있습니다. 간편하면서도 확장성이 뛰어난 DVIA-ULF의 초저주파수 진동 제어 기술은 장비의 정밀도와 성능을 향상시키고, 안정성을 강화하며 연구 생산성을 극대화합니다. 나노기술, 재료과학 등 초정밀 연구 분야에서 탁월한 성능을 경험해 보세요.",
    lowestH1: "지금까지 설계된 최저 높이",
    lowestH2: "현미경 높이는 그대로.",
    lowestP1: "새로운 DVIA-ULF 아이솔레이터는 매우 낮고 슬림하며 가벼워",
    lowestP2:
      "현미경 베이스 프레임 아래에 그대로 들어갑니다. 아이솔레이터가 현미경 높이를 올리지 않습니다.",
    lowestP3:
      "DVIA-ULF는 DAEIL SYSTEMS가 설계한 제품 중 가장 낮은 높이의 능동 진동 차단기입니다.",
    isolationHeight: "아이솔레이션 높이",
    installH1a: "간결한 ",
    installH1b: "설치.",
    installH2: "중장비 필요 없음.",
    installP:
      "DVIA-ULF 아이솔레이터는 전체 높이 91 mm의 초저상 설계로 현미경 베이스 아래에 바로 배치할 수 있습니다. 측면 접근 구조로 설치 시 크레인·지게차 등 리깅 장비가 필요 없습니다. 각 유닛은 현미경 프레임 하부에 직접 들어갈 만큼 슬림하여, 작은 여유 공간만으로도 측면 삽입이 가능합니다.",
    powerH1: "모든 현미경을 위한",
    powerH2: "맞춤형 모듈러 설계",
    powerP:
      "모듈러 설계로 손쉬운 확장이 가능합니다. 소형 연구용 SEM부터 대형 TEM까지 장비의 크기·무게에 맞춰 유닛을 정밀하게 구성할 수 있습니다. 각 구성은 하중과 기하 조건에 맞게 개별 최적화되며, 대규모 사전 공사 없이 클린룸·협소 공간에도 이상적입니다. 기존 환경에 매끄럽게 통합되어 저주파 영역에서도 뛰어난 진동 차단 성능을 제공합니다.",
    vibH1a: "전 주파수 대역에서",
    vibH1b: "진동을 제어하는 강력한 퍼포먼스",
    vibP:
      "DVIA-ULF는 액추에이터와 금속 스프링, 정밀 센서를 통해 진동을 적극적으로 상쇄합니다. 최대 100 N의 합력으로 바닥에서 유입되는 진동을 억제하며, 특히 1–10 Hz 임계 주파수 영역에서 성능이 크게 향상됩니다. VC-C 수준을 초과하는 환경에서도 안정성을 꾸준히 유지하여 민감한 장비를 보호하고 정밀한 운용을 지원합니다.",
    specsTitle: "기술 사양",
    alts: {
      hero: "DVIA-ULF 메인 제품",
      height: "DVIA-ULF 높이",
      installSeq: "설치 이미지 시퀀스",
      modular: "DVIA-ULF 아키텍처",
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

const installationSeq = useMemo(
  () => makeSequencePaths("/dvia-ulf/NewLevelSequence1.", 0, 35, 4, "png"),
  []
)

const heightSeq = useMemo(
    () => makeSequencePaths("/dvia-ulf/height/NewLevelSequence2.", 0, 48, 4, "png"),
    []
  )

  const installationSequenceConfig: SequenceConfig = {
    frames: installationSeq,
    requireFullPreload: false,
    minLoadedRatioToStart: 0.6,
    preloadConcurrency: 8,
    minVisibleRatioToStart: 0.8,
    minViewportTopToStart: 0.98,
    sensitivity: 0.0014,
    startSlack: 0.0006,
    autoRelockWithinSection: true,
    relockPixelThreshold: 120,
    relockOnReenter: true,
    relockReset: "auto"
  }

  const heightSequenceConfig: SequenceConfig = {
    frames: heightSeq,
    fps: 24,
    loop: false,
    autoplay: true,
    requireFullPreload: false,
    minLoadedRatioToStart: 0.45,
    preloadConcurrency: 8,
    minVisibleRatioToStart: 0.4,
    minViewportTopToStart: 0.75
  }

  // MotionImage component removed - using NextImage directly with unified animations

if (!isInitialized) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-white">Loading...</div>
    </div>
  )
}

  return (
    <div className="bg-black text-white overflow-x-hidden scroll-smooth">
      {/* 첫 프레임 프리로드 (초기 표시가 빨라짐) */}
      <Head>
        <link rel="preload" as="image" href="/dvia-ulf/height/NewLevelSequence2.0000.png" />
        <link rel="preload" as="image" href="/dvia-ulf/NewLevelSequence1.0000.png" />
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#CF432E] to-[#1144EC] bg-clip-text text-transparent">
                {C.heroTitle}
              </h1>
            </FadeInAnimation>
            <div className="relative w-full">
              <ParallaxAnimation speed={0.1} clamp={60}>
                <NextImage
                  src={heroImages[0]}
                  alt={C.alts.hero}
                  width={1920}
                  height={1080}
                  priority
                  className="w-full opacity-95 transition-all duration-700"
                />
              </ParallaxAnimation>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
              />
              <ParallaxAnimation speed={-0.06} clamp={36}>
                <div
                  className="
                    relative
                    sm:absolute sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2
                    w-full flex flex-col items-center
                  "
                >
                  <div
                    className="
                      inline-flex items-center justify-center
                      px-4 sm:px-6 py-2 sm:py-3
                      rounded-xl sm:rounded-2xl
                      bg-black/50 sm:bg-black/50 backdrop-blur-md shadow-lg
                      text-white text-base sm:text-xl md:text-2xl font-medium tracking-wide
                    "
                  >
                    {C.heroBadge}
                  </div>
                  <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-blue-400 to purple-600 mx-auto mt-6" />
                </div>
              </ParallaxAnimation>
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== MODULAR ===== */}
      <ScrollSectionContainer id="modular" className="min-h-screen border-t border-gray-800">
        <section
          data-snap-section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[6vw] py-14 md:py-20"
        >
          <div className="max-w-7xl mx-auto">
            <AppleScrollFadeAnimation className="mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight leading-[1.05]">
                {C.modularLines.map((line, i) => (
                  <span key={i} className="block font-semibold">{line}</span>
                ))}
              </h2>
            </AppleScrollFadeAnimation>
            <div className="grid grid-cols-1 gap-8 md:gap-16 items-start">
              <div className="space-y-6 md:space-y-10">
                <AppleScrollFadeAnimation>
                <p className="text-base sm:text-lg md:text-2xl  leading-relaxed font-light text-[#D1D5DB]">
                  {C.modularP1}{" "}
                  <span className="text-white font-normal">
                    {C.modularP1Span}
                  </span>{" "}
                  {currentLanguage === "en"
                    ? "This adaptability ensures exceptional vibration control across diverse laboratory environments."
                    : "이러한 유연성은 다양한 실험 환경에서 뛰어난 진동 제어 성능을 보장합니다."}
                </p>
                </AppleScrollFadeAnimation>
                <AppleScrollFadeAnimation>
                <p className="text-base sm:text-lg md:text-2xl text-[#D1D5DB] leading-relaxed font-light">
                  <span className="text-white font-normal">{C.modularP2Span}</span>{" "}
                  {C.modularP2End}
                </p>
                </AppleScrollFadeAnimation>
              </div>
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== LOWEST HEIGHT ===== */}
      <ScrollSectionContainer
        id="Lowest"
        className="min-h-screen bg-gradient-to-b from-black to-gray-900 border-t border-gray-800"
      >
        <section
          data-snap-section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[6vw] py-10 md:py-16"
        >
          <div className="w-full max-w-[1280px] mx-auto">
            <AppleScrollFadeAnimation className="mb-6 md:mb-10">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-thin leading-[1.05]">
                <span className="block font-semibold">{C.lowestH1}</span>
                <span className="block font-semibold">{C.lowestH2}</span>
              </h2>
            </AppleScrollFadeAnimation>
            <div className="space-y-3 md:space-y-2">
              <AppleScrollFadeAnimation>
              <p className="text-base sm:text-lg md:text-2xl text-[#D1D5DB] leading-relaxed font-normal">
                {C.lowestP1}
              </p>
              </AppleScrollFadeAnimation>
              <AppleScrollFadeAnimation>
              <p className="text-base sm:text-lg md:text-2xl text-[#D1D5DB] leading-relaxed font-normal">
                {C.lowestP2}{" "}
              </p>
              </AppleScrollFadeAnimation>
              <AppleScrollFadeAnimation>
              <p className="text-base sm:text-lg md:text-2xl text-[#D1D5DB] leading-relaxed font-normal">
                {C.lowestP3}{"  "}
              </p>
              </AppleScrollFadeAnimation>
            </div>

            <div className="-mt-2 sm:-mt-4 md:-mt-6">
              <div className="mx-auto max-w-full">
                <div className="relative flex items-center justify-center">
                  <div className="w-full md:max-w-5xl">
                    <AutoPlaySequenceAnimation
                      frames={heightSeq}
                      alt={C.alts.height}
                      className="w-full rounded-xl overflow-hidden"
                      config={heightSequenceConfig}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== INSTALL — 잠금 시퀀스 ===== */}
{/* ===== INSTALL — 잠금 시퀀스 ===== */}
{/* ===== INSTALL — 잠금 시퀀스 ===== */}
<ScrollSectionContainer
  id="install"
  className="relative min-h-[100dvh] border-t border-gray-800"  // ← 100dvh로 교체
>
  <section
    data-snap-section
    className="
      min-h-[100dvh]           // ← 100dvh
      flex flex-col px-4 sm:px-6 md:px-[6vw] py-14 md:py-20
      overscroll-contain       // ← iOS 바운스 영향 줄이기(선택)
    "
  >
    <div className="w-full max-w-5xl mx-auto">
      <AppleScrollFadeAnimation>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-thin leading-[1.05]">
        <span className="block text-white font-medium text-left">
          {C.installH1a}
          <span className="font-medium text-white">{C.installH1b}</span>
        </span>
        <span className="block text-white font-medium text-left">
          {C.installH2}
        </span>
      </h2>
      </AppleScrollFadeAnimation>

      <AppleScrollFadeAnimation className="space-y-3 text-left mt-4 sm:mt-6">
        <p className="text-base sm:text-lg md:text-2xl text-[#D1D5DB] leading-relaxed">
          {C.installP}
        </p>
      </AppleScrollFadeAnimation>

      <div className="h-12 md:h-16" />

      <div className="relative flex justify-center">
        <div className="relative w-full max-w-4xl">
          <LockSequenceAnimation
            frames={installationSeq}
            className="w-full rounded-xl overflow-hidden"
            config={installationSequenceConfig}
          />
        </div>
      </div>
    </div>
  </section>
</ScrollSectionContainer>

      {/* ===== POWER / MODULAR ===== */}
      <ScrollSectionContainer id="power" className="min-h-screen bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
        <section
          data-snap-section
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-[6vw] py-14 md:py-20"
        >
          <div className="w-full max-w-7xl mx-auto">
            <AppleScrollFadeAnimation className="mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-thin leading-[1.05] text-left">
                <span className="block font-normal">{C.powerH1}</span>
                <span className="block font-normal">{C.powerH2}</span>
              </h2>
            </AppleScrollFadeAnimation>
            <AppleScrollFadeAnimation className="space-y-4 md:space-y-6 text-left mb-8 md:mb-12">
              <p className="text-base sm:text-lg md:text-2xl text-[#D1D5DB] leading-relaxed font-normal">
                {C.powerP}
              </p>
            </AppleScrollFadeAnimation>
            <div className="relative flex justify-center -mt-2 md:-mt-4">
              <ParallaxAnimation speed={0.1} clamp={60}>
                <NextImage
                  src={modularImages[0]}
                  alt={C.alts.modular}
                  width={1920}
                  height={1080}
                  className="w-full max-w-full h-auto"
                />
              </ParallaxAnimation>
            </div>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== VIBRATION CONTROL ===== */}
      <ScrollSectionContainer id="vibration-control" className="min-h-screen border-t border-gray-800">
        <section
          data-snap-section
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[6vw] py-14 md:py-20"
        >
          <div className="max-w-7xl mx-auto text-center">
            <AppleScrollFadeAnimation className="mb-10 md:mb-16">
              <h2 className="text-left text-xl sm:text-3xl md:text-5xl font-bold leading-[1.05] mb-6 bg-gradient-to-r from-[#0077FF] to-[#FF9500] bg-clip-text text-transparent">
                <span className="block">{C.vibH1a}</span>
                <span className="block">{C.vibH1b}</span>
              </h2>
            </AppleScrollFadeAnimation>
            <AppleScrollFadeAnimation className="max-w-5xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-[#D1D5DB] leading-relaxed font-normal text-left">
                {C.vibP}
              </p>
            </AppleScrollFadeAnimation>
            <AppleScrollFadeAnimation>
            <div className="w-20 sm:w-28 h-px bg-gradient-to-r from-[#0077FF] to-[#FF9500] mx-auto mt-10" />
            </AppleScrollFadeAnimation>
          </div>
        </section>
      </ScrollSectionContainer>

      {/* ===== SPECS ===== */}
      <div className="bg-gradient-to-b from-black to-gray-900 px-4 sm:px-6 md:px-[6vw] py-14 md:py-20">
        <section data-snap-section>
          <div className="max-w-7xl mx-auto">
            <FadeInAnimation className="text-center mb-8 md:mb-12" startVisible={true}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {C.specsTitle}
              </h2>
            </FadeInAnimation>
            <FadeInAnimation delay={200} startVisible={true}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-2 sm:p-4 md:p-6">
                <SpecsTable />
              </div>
            </FadeInAnimation>
          </div>
        </section>
      </div>
      <Script id="channel-io-loader" strategy="afterInteractive">
        {`
          (function() {
            var w = window;
            if (w.ChannelIO) { return w.console.error("ChannelIO script included twice."); }
            var ch = function() { ch.c(arguments); };
            ch.q = []; ch.c = function(args) { ch.q.push(args); }; w.ChannelIO = ch;
            function l() {
              if (w.ChannelIOInitialized) { return; }
              w.ChannelIOInitialized = true;
              var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
              s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
              var x = document.getElementsByTagName("script")[0]; if (x.parentNode) { x.parentNode.insertBefore(s, x); }
            }
            if (document.readyState === "complete") { l(); } else { w.addEventListener("DOMContentLoaded", l); w.addEventListener("load", l); }
          })();
          window.ChannelIO('boot', { pluginKey: '12e02c05-20c4-4100-bd85-e1946e8a3602' });
        `}
      </Script>
    </div>
  )
}
