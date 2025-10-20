"use client"

import { AnimatedImage } from "@/components/animated/animated-image"
import { AnimatedSection } from "@/components/animated/animated-section"
import { AnimatedText } from "@/components/animated/animated-text"
import { StaggeredContainer } from "@/components/animated/staggered-container"
import { ScrollImageSequence } from "@/components/scroll-image-sequence"
import { ScrollImageSequenceSection } from "@/components/scroll-image-sequence-section"
import { ScrollSectionContainer } from "@/components/scroll-video/scroll-section-container"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"

// 각 섹션별 이미지 시퀀스
const heroImages = ["/dvia-ulf/dvia-ulf-main.png"]
const heightImages = ["/dvia-ulf/dvia-ulf-front-view.png"]
const installationImages = ["/dvia-ulf/dvia-ulf-installation.png"]
const modularImages = ["/dvia-ulf/dvia-ulf-multiple.png"]
const powerImages = ["/dvia-ulf/dvia-ulf-system.png"]

// 설치 과정 타임라인
const installationTimeline = [
  {
    time: 0,
    title: "Preparation",
    description: "Prepare the installation area and tools",
    highlight: true,
  },
  {
    time: 0.25,
    title: "Positioning",
    description: "Position the DVIA-ULF isolators under the microscope base",
  },
  {
    time: 0.5,
    title: "Alignment",
    description: "Align the isolators with the microscope mounting points",
  },
  {
    time: 0.75,
    title: "Connection",
    description: "Connect the control system and power supply",
  },
  {
    time: 1,
    title: "Testing",
    description: "Test the vibration isolation performance",
    highlight: true,
  },
]

export default function Client() {
  const { language, isInitialized } = useLanguage()
  const { theme } = useTheme()

  const currentLanguage = isInitialized ? language : "en"

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="bg-black text-white overflow-x-hidden scroll-smooth">
      {/* 스크롤 스냅 스타일 추가 */}
      <style jsx global>{`
        html {
          scroll-snap-type: y mandatory;
        }

        .scroll-snap-section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }

        /* 부드러운 스크롤 */
        * {
          scroll-behavior: smooth;
        }
      `}</style>
      {/* Hero Section */}
      <ScrollSectionContainer id="hero" className="min-h-screen">
        <AnimatedSection className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20">
          <div className="text-center max-w-6xl mx-auto">
            <AnimatedText delay={0.2} className="text-orange-500 text-xl font-medium mb-6" direction="fade">
              DVIA-ULF
            </AnimatedText>

            <StaggeredContainer stagger={0.2} delay={0.4}>
              <div className="text-5xl md:text-7xl lg:text-8xl mb-12 leading-tight">
                <span className="text-red-500 font-bold">Modular</span>{" "}
                <span className="text-gray-300 font-medium">Active</span>{" "}
                <span className="text-blue-500 font-semibold">Vibration</span>{" "}
                <span className="text-blue-400 font-semibold">Isolation</span>{" "}
                <span className="text-white font-thin">System</span>
              </div>
            </StaggeredContainer>

            <AnimatedImage delay={0.8} className="mb-8" direction="scale" scale={0.9}>
              <ScrollImageSequence
                images={heroImages}
                alt="DVIA-ULF Main Product"
                className="max-w-4xl mx-auto"
                startProgress={0}
                endProgress={0.15}
              />
            </AnimatedImage>

            <AnimatedText delay={1} className="text-xl text-gray-300" direction="up">
              Designed for SEM and TEM
            </AnimatedText>
          </div>
        </AnimatedSection>
      </ScrollSectionContainer>

      {/* Section 1: Modular Architecture */}
      <ScrollSectionContainer id="modular" className="min-h-screen">
        <AnimatedSection className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <StaggeredContainer stagger={0.15} className="text-center mb-16">
              <AnimatedText className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight">
                Modular architect.
              </AnimatedText>
              <AnimatedText className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight">
                Low-profile design.
              </AnimatedText>
              <AnimatedText className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight">
                Easy installation.
              </AnimatedText>
              <AnimatedText className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight text-blue-400">
                No air. Just control.
              </AnimatedText>
            </StaggeredContainer>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <StaggeredContainer stagger={0.2} className="space-y-8">
                <AnimatedText className="text-lg text-gray-300 leading-relaxed">
                  Introducing the DVIA-ULF: a groundbreaking active vibration isolation platform engineered to meet the
                  exacting demands of today's most sensitive instruments—such as electron microscopes and other
                  precision research tools. Its modular architecture allows you to tailor the number of vibration
                  isolators to your instrument's unique specifications—whether it's a compact tabletop unit or a
                  large-scale, high-performance microscope. This adaptability ensures exceptional vibration control
                  across diverse laboratory environments.
                </AnimatedText>

                <AnimatedText className="text-lg text-gray-300 leading-relaxed">
                  The DVIA-ULF's slide-in design enables swift, seamless installation into custom tables, bases, or
                  built-in solutions. Labs can easily reconfigure or expand their setup with minimal disruption,
                  maintaining focus on critical research objectives. Harnessing this simple, scalable, and
                  ultra-low-frequency isolation approach elevates precision, safeguards equipment, and ultimately boosts
                  productivity. Discover how the DVIA-ULF raises the bar in advanced vibration isolation—empowering you
                  to achieve peak performance in nanotechnology, materials science, and beyond.
                </AnimatedText>
              </StaggeredContainer>

              <AnimatedImage delay={0.3} direction="left" distance={100}>
                <ScrollImageSequence
                  images={heroImages}
                  alt="DVIA-ULF Architecture"
                  startProgress={0.15}
                  endProgress={0.3}
                />
              </AnimatedImage>
            </div>
          </div>
        </AnimatedSection>
      </ScrollSectionContainer>

      {/* Section 2: Height Design */}
      <ScrollSectionContainer id="height" className="min-h-screen">
        <AnimatedSection className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <StaggeredContainer stagger={0.2} className="text-center mb-16">
              <AnimatedText className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight">
                Lowest height ever designed.
              </AnimatedText>
              <AnimatedText className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight text-gray-400">
                Microscope height remains the same.
              </AnimatedText>
            </StaggeredContainer>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <AnimatedText delay={0.2} className="text-lg text-gray-300 leading-relaxed">
                The all-new DVIA-ULF isolator height is unbelievably low, slim and light enough to fit under a
                microscope's base frame. The DVIA-ULF isolator does not raise the microscope height. The DVIA-ULF model
                that is the lowest active vibration isolator DAEIL SYSTEMS has ever designed.
              </AnimatedText>

              <AnimatedImage delay={0.4} direction="right" distance={100}>
                <ScrollImageSequence
                  images={heightImages}
                  alt="DVIA-ULF Height Comparison"
                  startProgress={0.3}
                  endProgress={0.45}
                />
                <AnimatedText delay={0.6} className="text-center mt-6" direction="fade">
                  <div className="text-blue-400">
                    <div className="text-3xl font-bold">86 mm</div>
                    <div className="text-sm">Isolator height</div>
                  </div>
                </AnimatedText>
              </AnimatedImage>
            </div>

            <StaggeredContainer stagger={0.2} className="text-center mb-16">
              <AnimatedText className="text-4xl md:text-6xl font-thin leading-tight">
                Straightforward Installation.
              </AnimatedText>
              <AnimatedText className="text-4xl md:text-6xl font-thin leading-tight text-gray-400">
                No heavy lifting.
              </AnimatedText>
            </StaggeredContainer>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedText delay={0.2} className="text-lg text-gray-300 leading-relaxed">
                The DVIA-ULF isolators feature a low-profile design, with an overall height of only 86 mm, allowing
                direct placement under microscope bases. This side-access design eliminates the need for cranes,
                forklifts, or other rigging equipment during installation. Each isolator is slim enough to fit directly
                under the microscope's frame, allowing side insertion with minimal clearance.
              </AnimatedText>

              <AnimatedImage delay={0.4} direction="left" distance={100}>
                <ScrollImageSequence
                  images={installationImages}
                  alt="DVIA-ULF Installation"
                  startProgress={0.45}
                  endProgress={0.6}
                />
              </AnimatedImage>
            </div>
          </div>
        </AnimatedSection>
      </ScrollSectionContainer>

      {/* Section 3: Custom Modular Design */}
      <ScrollSectionContainer id="custom-design" className="min-h-screen">
        <AnimatedSection className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <StaggeredContainer stagger={0.2} className="mb-16">
              <AnimatedText className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight">
                Custom modular design solution
              </AnimatedText>
              <AnimatedText className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight text-gray-400">
                for every microscope.
              </AnimatedText>
            </StaggeredContainer>

            <AnimatedText delay={0.3} className="text-lg text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
              The modular design of the DVIA-ULF allows seamless scalability. Users can effortlessly add units tailored
              precisely to their microscope's dimensions and weight, from compact research SEMs to large-scale TEMs.
              Each setup can be individually optimized according to specific weight and geometric requirements.
              Installation requires no extensive site preparation, making it ideal for modern cleanrooms and
              space-constrained laboratories. Its streamlined design integrates effortlessly into existing
              configurations, delivering exceptional vibration isolation even in challenging low-frequency environments.
            </AnimatedText>

            <AnimatedImage delay={0.5} direction="scale" scale={0.8}>
              <ScrollImageSequence
                images={modularImages}
                alt="DVIA-ULF Modular Design"
                className="max-w-5xl mx-auto"
                startProgress={0.6}
                endProgress={0.75}
              />
            </AnimatedImage>
          </div>
        </AnimatedSection>
      </ScrollSectionContainer>

      {/* === 이미지 시퀀스 ScrollMagic 섹션 추가 === */}
      <ScrollImageSequenceSection
        imgPath="https://cxdukqxqwnvvplsuvcki.supabase.co/storage/v1/object/public/ulf/NewLevelSequence."
        ext="png"
        frameCount={48}
        pad={4}
        height="300vh"
        alt="DVIA-ULF Sequence"
      />
      {/* === 여기까지 === */}

      {/* Section 4: Power Control */}
      <ScrollSectionContainer id="power-control" className="min-h-screen">
        <AnimatedSection className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <StaggeredContainer stagger={0.2} className="mb-16">
              <AnimatedText className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight text-blue-400">
                So much power to control vibration
              </AnimatedText>
              <AnimatedText className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight text-blue-300">
                at all frequencies.
              </AnimatedText>
            </StaggeredContainer>

            <AnimatedText delay={0.3} className="text-lg text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
              The DVIA-ULF system now features an increased number of actuators, generating a higher combined force of
              up to 100 N. This enhanced actuator strength directly counters incoming vibrations, significantly
              improving vibration isolation performance, especially within the critical frequency range of 1–10 Hz. When
              floor vibrations exceed the VC-C level—common in challenging environments—the increased actuator force
              ensures consistent stability and optimal protection for sensitive instruments, delivering reliable and
              precise operation even under demanding conditions.
            </AnimatedText>

            <AnimatedImage delay={0.5} direction="scale" scale={0.9} className="mb-16">
              <ScrollImageSequence
                images={powerImages}
                alt="DVIA-ULF Power Control System"
                className="max-w-5xl mx-auto"
                startProgress={0.75}
                endProgress={0.9}
              />
            </AnimatedImage>

            <StaggeredContainer stagger={0.1} delay={0.7} className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center p-6 bg-gray-900/50 rounded-lg">
                <div className="text-orange-400 text-2xl font-bold mb-2">Up to 100 N</div>
                <div className="text-gray-300">Actuator Force</div>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-lg">
                <div className="text-blue-400 text-2xl font-bold mb-2">1–10 Hz</div>
                <div className="text-gray-300">Critical Frequency Range</div>
              </div>
            </StaggeredContainer>
          </div>
        </AnimatedSection>
      </ScrollSectionContainer>

    </div>
  )
}
