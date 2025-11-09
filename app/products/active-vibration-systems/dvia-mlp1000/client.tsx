"use client"

import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"

export default function DviaMLP2000Client() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // ScrollMagic 등의 애니메이션 초기화는 여기서
    // 실제 사이트의 JS 로직을 추가할 수 있습니다
  }, [])

  // 서버 렌더링 시에는 기본값(영어) 사용
  const isKorean = mounted ? language === "ko" : false

  return (
    <div className="pa-homepage pa-dark">
      {/* Hero Section - Main Section 메인 */}
      <section
        id="top"
        className="main-sec pa-hero pa-centered-section pa-full-height pa-image-back pushable-content"
        style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/main-visual-min.jpg)" }}
      >
        <div className="pa-absolute-fill pa-gradient-back-v1" style={{ opacity: 0 }}></div>
        <div id="particles-js"></div>

        <div className="max-w-7xl mx-auto px-4 pa-hero-content text-center" style={{ marginTop: "6vh" }}>
          <div className="flex flex-wrap pa-hero-typed-text">
            <div className="w-full">
              <div className="typed-text mega-typed">
                <span className="animated-text-effect">
                  {isKorean ? "특별히 설계된" : "Specially Designed"}
                </span>
                <span className="typed-cursor">|</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap" style={{ marginTop: "20px" }}>
            <div className="w-full" style={{ maxWidth: "976px", margin: "0 auto" }}>
              <h1 className="pa-h2-v2-hero-subhead pa-white">
                {isKorean ? (
                  <>커스텀 액티브 제진대<br /> 써모피셔 <strong>SEM</strong></>
                ) : (
                  <>Custom Active Vibration Isolation System<br /> Thermo Fisher <strong>SEM</strong></>
                )}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about-us"
        className="pa-about-us pa-standard-section text-center pa-dark about-us-sec"
        style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/about-dvia-mlp2000-min.jpg)" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-10/12 xl:mx-auto">
              <h2 className="pa-h1-v2 pa-bright title-text fadeInDown wow" data-wow-duration="1s" data-wow-delay="0.2s">
                <strong>About</strong> DVIA-MLP2000
              </h2>
              <p className="pa-p-v1 pa-bright about-des fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.3s">
                {isKorean ? (
                  <>
                    완전히 새로운 액티브 제진 시스템이 드디어 출시되었습니다.<br />
                    대일시스템은 전자현미경(SEM)에 특화된 세계 최고 수준의 액티브 제진 시스템,<br />
                    DVIA-MLP2000을 선보입니다. DVIA-MLP2000은 고성능 전자현미경이 외란 없이 완벽한 이미징을<br />
                    가능하도록 최적화된 진동 제어 환경을 제공함으로써 액티브 제진 시스템의 새로운 기준을 제시합니다.
                  </>
                ) : (
                  <>
                    A completely new active vibration isolation system has finally been launched.<br />
                    DAEIL SYSTEMS introduces the world&apos;s most advanced active vibration isolation system,<br />
                    DVIA-MLP2000, specifically designed for electron microscopes (SEM). DVIA-MLP2000 sets a new standard<br />
                    for active vibration isolation systems by providing an optimized vibration control environment.
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap icon-list-wrap">
            <ul className="pa-icon-list-horizontal-dark">
              <li className="fadeIn wow" data-wow-duration="1s" data-wow-delay="0.4s">
                <span className="pa-icon-list-icon">
                  <i className="material-icons">task_alt</i>
                </span>
                <p className="pa-icon-list-text pa-p-v1 pa-bright">CONVENIENT</p>
              </li>
              <li className="fadeIn wow" data-wow-duration="1s" data-wow-delay="0.5s">
                <span className="pa-icon-list-icon">
                  <i className="material-icons">track_changes</i>
                </span>
                <p className="pa-icon-list-text pa-p-v1 pa-bright">ACCURATE</p>
              </li>
              <li className="fadeIn wow" data-wow-duration="1s" data-wow-delay="0.6s">
                <span className="pa-icon-list-icon">
                  <i className="material-icons">equalizer</i>
                </span>
                <p className="pa-icon-list-text pa-p-v1 pa-bright">HIGH-PERFORMANCE</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 이미지 모션 */}
      <div className="wrap">
        <div className="scrollmagic-pin-spacer">
          <div id="trigger" className="pinned motion-box" style={{ textAlign: "center" }}>
            <img
              className="img-motion"
              src="/products/dvia-mlp2000/assets/images/motion-sample/dvia-mlp2000-motion-0001.jpg"
              style={{ width: "80%", maxWidth: "1920px" }}
              alt="DVIA-MLP2000 Motion image"
            />
            <div className="text-overlay" id="text1">
              {isKorean ? "세계에서 가장 뛰어난 액티브 제진 시스템" : "World's Most Advanced Active Vibration Isolation System"}
            </div>
            <div className="text-overlay" id="text2">
              {isKorean ? (
                <>완전 맞춤형 설계.<br />SEM과 완벽한 통합.</>
              ) : (
                <>Fully custom design.<br />Perfect integration with SEM.</>
              )}
            </div>
            <div className="text-overlay" id="text0">
              {isKorean ? (
                <>판도를 바꾸는 혁신.<br />액티브 제진 시스템의 새로운 표준.</>
              ) : (
                <>Game-changing innovation.<br />New standard for active vibration isolation systems.</>
              )}
            </div>
          </div>
        </div>

        <div className="motion-box-mo">
          <div className="mo-text mo-tit-txt text-center">DVIA-MLP2000</div>
          <div className="mo-text text-center">
            - {isKorean ? "세계에서 가장 뛰어난 액티브 제진 시스템" : "World's Most Advanced Active Vibration Isolation System"}
          </div>
          <div className="mo-text text-center">
            - {isKorean ? (
              <>완전 맞춤형 설계.<br />SEM과 완벽한 통합.</>
            ) : (
              <>Fully custom design.<br />Perfect integration with SEM.</>
            )}
          </div>
          <div className="mo-text text-center">
            - {isKorean ? (
              <>판도를 바꾸는 혁신.<br />액티브 제진 시스템의 새로운 표준.</>
            ) : (
              <>Game-changing innovation.<br />New standard for active vibration isolation systems.</>
            )}
          </div>
          <img
            src="/products/dvia-mlp2000/assets/images/motion-sample/dvia-mlp2000-motion-0120.jpg"
            style={{ width: "100%" }}
            alt="DVIA-MLP2000"
          />
        </div>
      </div>

      {/* CTA Section - overview 오버뷰 */}
      <section className="pa-cta-v1 overview-sec">
        <div className="max-w-7xl mx-auto px-4 text-center description">
          <h2 className="pa-h1-v1 pa-bright title-text fadeIn wow" data-wow-duration="1s" data-wow-delay="0.2s">
            <strong>{isKorean ? "개요" : "Overview"}</strong>
          </h2>
          <h4 className="pa-h4-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="0.3s" style={{ marginBottom: "20px" }}>
            {isKorean ? (
              <>
                Thermo Fisher Scientific를 비롯한 여러 제조사의 전자현미경(SEM)을 위해 설계된 최첨단 액티브 제진 시스템,<br />
                DVIA-MLP2000은 사용자 편의성과 안락함을 최우선으로 고려했습니다. 기존 액티브 제진대 모델이 SEM을 들어 올려<br />
                설치해야 했던 것과 달리, DVIA-MLP2000은 측면에서 장비를 밀어 넣는 방식으로 설치할 수 있어<br />
                훨씬 간편하고 비용도 절감됩니다.
              </>
            ) : (
              <>
                The DVIA-MLP2000, an advanced active vibration isolation system designed for electron microscopes (SEM)<br />
                from various manufacturers including Thermo Fisher Scientific, prioritizes user convenience and comfort.<br />
                Unlike previous models that required lifting the SEM for installation, the DVIA-MLP2000 can be installed<br />
                by pushing the equipment in from the side, making it much more convenient and cost-effective.
              </>
            )}
          </h4>
          <h4 className="pa-h4-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="0.4s">
            {isKorean ? (
              <>
                또한 낮은 로우 프로파일 디자인으로 SEM 특유의 인체공학적 구조를 그대로 유지해 사용자에게 편안한 사용 환경을<br />
                제공합니다. 이 액티브 제진 시스템은 피드백 및 피드포워드 진동 제어 알고리즘을 적용해 0.5Hz부터 진동을 제어하며,
                1Hz에서 80~90%의 제진 성능을 달성합니다. DVIA-MLP2000은 SEM의 나노스케일 이미징에서 안정성과 정밀도를 강화해
                기능성과 신뢰도를 한층 높여줍니다.
              </>
            ) : (
              <>
                Additionally, the low-profile design maintains the SEM&apos;s unique ergonomic structure, providing users<br />
                with a comfortable working environment. This system applies feedback and feedforward vibration control<br />
                algorithms to control vibrations from 0.5Hz, achieving 80-90% vibration isolation performance at 1Hz.<br />
                The DVIA-MLP2000 enhances stability and precision in SEM&apos;s nanoscale imaging.
              </>
            )}
          </h4>
          <div className="mt-4"></div>
        </div>
      </section>

      <section
        className="overview-sec-bottom"
        style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/dvia-mlp2000-overview-min.jpg)" }}
      >
        <div className="cover-black wow animated" data-wow-duration="1s" data-wow-delay="0.5s"></div>
      </section>

      {/* 분해도 모션 */}
      <div className="wrap">
        <div className="scrollmagic-pin-spacer">
          <div id="trigger2" className="pinned2 motion-box" style={{ textAlign: "center" }}>
            <img
              className="img-motion2"
              src="/products/dvia-mlp2000/assets/images/motion-disassembly/dvia-mlp2000-disassembly-0000.jpg"
              style={{ width: "80%", maxWidth: "1920px" }}
              alt="DVIA-MLP2000 Disassembly image"
            />
            <div className="text-overlay text-overlay2" id="text3">
              {isKorean ? "흠잡을 데 없는 완벽한 하드웨어 및 소프트웨어 구성" : "Flawless Hardware and Software Configuration"}
            </div>
          </div>
        </div>

        <div className="motion-box-mo">
          <div className="mo-text text-center">
            {isKorean ? "흠잡을 데 없는 완벽한 하드웨어 및 소프트웨어 구성" : "Flawless Hardware and Software Configuration"}
          </div>
          <img
            src="/products/dvia-mlp2000/assets/images/motion-disassembly/dvia-mlp2000-disassembly-0000.jpg"
            style={{ width: "100%" }}
            alt="DVIA-MLP2000 Disassembly image"
          />
        </div>
      </div>

      {/* Portfolio Section, 장점섹션 */}
      <section id="portfolio" className="pa-portfolio four-feat-sec">
        <div className="w-full text-center p-0">
          <div className="flex flex-wrap m-0">
            <div className="w-full p-0">
              <div className="pa-stripe-heading">
                <h2 className="pa-h1-v1 pa-bright title-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s">
                  <strong>{isKorean ? "하드웨어 구성" : "Hardware Configuration"}</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap pa-row-max2560">
            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0">
              <div
                className="pa-portfolio-thumb m-0 text-center fadeInDelay00Duration10 wow fadeIn"
                style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/dvia-mlp2000-features-01-min.png)" }}
                data-wow-duration="1.0s"
                data-wow-delay="0.0s"
              ></div>
            </div>
            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0 four-feat-sec-text">
              <div className="pa-portfolio-thumb-background-overlay"></div>
              <div className="pa-portfolio-thumb-deco-1"></div>
              <div className="pa-portfolio-thumb-deco-2"></div>
              <div className="pa-portfolio-thumb-centered-content w-full">
                <span className="pa-portfolio-thumb-hover-icon">
                  <i className="material-icons">widgets</i>
                </span>
                <h4 className="pa-portfolio-thumb-heading">
                  {isKorean ? "완벽한 호환성과 안정성" : "Perfect Compatibility and Stability"}
                </h4>
                <p className="pa-portfolio-thumb-desc">
                  {isKorean ? (
                    <>
                      SEM 본체의 베이스 프레임에 견고하게 체결할 수 있도록 맞춤 설계된 4개의 액티브 아이솔레이터가 적용됩니다.
                      각 아이솔레이터 상단 플레이트에는 두 개의 관통 구멍이 있어, SEM 베이스 프레임에 있는 캐스터 구멍과 정확히 일치하도록 디자인되었습니다.
                    </>
                  ) : (
                    <>
                      Four custom-designed active isolators are applied to be securely fastened to the SEM base frame.
                      Each isolator&apos;s top plate has two through-holes designed to exactly match the caster holes in the SEM base frame.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0">
              <div
                className="pa-portfolio-thumb m-0 text-center fadeInDelay00Duration10 wow fadeIn"
                style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/dvia-mlp2000-features-02-min.png)" }}
                data-wow-duration="1.0s"
                data-wow-delay="0.0s"
              ></div>
            </div>
            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0 four-feat-sec-text">
              <div className="pa-portfolio-thumb-background-overlay"></div>
              <div className="pa-portfolio-thumb-deco-1"></div>
              <div className="pa-portfolio-thumb-deco-2"></div>
              <div className="pa-portfolio-thumb-centered-content w-full">
                <span className="pa-portfolio-thumb-hover-icon">
                  <i className="material-icons">beenhere</i>
                </span>
                <h4 className="pa-portfolio-thumb-heading">
                  {isKorean ? "SEM에 최적화된 플랫폼 크기" : "SEM-Optimized Platform Size"}
                </h4>
                <p className="pa-portfolio-thumb-desc">
                  {isKorean ? (
                    <>
                      900 × 900 × 158 mm 규격의 DVIA-MLP2000은 Thermo Fisher SEM에 딱 맞도록 설계되었습니다.
                      낮은 프로파일 디자인으로 현미경을 시스템 위에 직접 올릴 수 있어 전체 높이를 최소화합니다.
                      이에 따라 공간이 협소한 환경이나 인클로저 내부에서도 별도의 개조 없이 쉽게 설치할 수 있으며,
                      사용자에게 편리한 인체공학적 사용 환경도 유지합니다.
                    </>
                  ) : (
                    <>
                      The DVIA-MLP2000 with dimensions of 900 × 900 × 158 mm is designed to fit perfectly with Thermo Fisher SEM.
                      The low-profile design allows the microscope to be placed directly on the system, minimizing overall height.
                      This enables easy installation in cramped spaces or inside enclosures without modification.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0">
              <div
                className="pa-portfolio-thumb m-0 text-center fadeInDelay00Duration10 wow fadeIn"
                style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/dvia-mlp2000-features-03-min.png)" }}
                data-wow-duration="1.0s"
                data-wow-delay="0.0s"
              ></div>
            </div>
            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0 four-feat-sec-text">
              <div className="pa-portfolio-thumb-background-overlay"></div>
              <div className="pa-portfolio-thumb-deco-1"></div>
              <div className="pa-portfolio-thumb-deco-2"></div>
              <div className="pa-portfolio-thumb-centered-content w-full">
                <span className="pa-portfolio-thumb-hover-icon">
                  <i className="material-icons">edgesensor_high</i>
                </span>
                <h4 className="pa-portfolio-thumb-heading">
                  {isKorean ? "향상된 이동성을 위한 캐스터" : "Enhanced Mobility with Casters"}
                </h4>
                <p className="pa-portfolio-thumb-desc">
                  {isKorean ? (
                    <>
                      DVIA-MLP2000 플랫폼은 네 면에 캐스터를 부착할 수 있어 이동성과 조작 편의성을 크게 높였습니다.
                      이 설계를 통해 다양한 방향으로 간편하게 움직일 수 있으므로 운반 및 설치 위치 조정이 더욱 수월해집니다.
                      또한 네 면 모두에 캐스터를 장착할 수 있어, 표면 위에서 부드럽게 굴리며 이동시키기 쉽습니다.
                    </>
                  ) : (
                    <>
                      The DVIA-MLP2000 platform can be fitted with casters on all four sides, greatly improving mobility and ease of operation.
                      This design allows easy movement in various directions, making transport and installation position adjustments much easier.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0">
              <div
                className="pa-portfolio-thumb m-0 text-center fadeInDelay00Duration10 wow fadeIn"
                style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/dvia-mlp2000-features-04-min.png)" }}
                data-wow-duration="1.0s"
                data-wow-delay="0.0s"
              ></div>
            </div>
            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0 four-feat-sec-text">
              <div className="pa-portfolio-thumb-background-overlay"></div>
              <div className="pa-portfolio-thumb-deco-1"></div>
              <div className="pa-portfolio-thumb-deco-2"></div>
              <div className="pa-portfolio-thumb-centered-content w-full">
                <span className="pa-portfolio-thumb-hover-icon">
                  <i className="material-icons">flash_on</i>
                </span>
                <h4 className="pa-portfolio-thumb-heading">
                  {isKorean ? (
                    <>낮은 공진 주파수의 에어 스프링<br />5Hz 이하 주파수에서 뛰어난 진동 제어 성능</>
                  ) : (
                    <>Low Resonant Frequency Air Spring<br />Outstanding Vibration Control Performance at Frequencies Below 5Hz</>
                  )}
                </h4>
                <p className="pa-portfolio-thumb-desc">
                  {isKorean ? (
                    <>
                      DVIA-MLP2000은 5Hz 이하의 낮은 공진 주파수를 갖는 에어 스프링을 사용해 저주파 대역에서의 제진 성능을 강화했습니다.
                      대부분의 제진 시스템은 공진 주파수가 높은 패시브 아이솔레이터와 피드백 알고리즘만을 사용하기에 5Hz 이하 영역의
                      진동을 제어하는데 어려움을 겪습니다. 하지만 DVIA-MLP2000은 저공진 주파수 아이솔레이터에 피드백 및 피드포워드
                      알고리즘을 접목하여 월등한 격리 성능을 구현합니다.
                    </>
                  ) : (
                    <>
                      The DVIA-MLP2000 uses air springs with low resonant frequencies below 5Hz to enhance vibration isolation performance
                      in the low-frequency range. Most vibration isolation systems have difficulty controlling vibrations in the sub-5Hz range.
                      However, the DVIA-MLP2000 combines low resonant frequency isolators with feedback and feedforward algorithms to achieve
                      superior isolation performance.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section, 소프트웨어 섹션 */}
      <section id="portfolio" className="pa-portfolio four-feat-sec software-sec">
        <div className="w-full text-center p-0">
          <div className="flex flex-wrap m-0">
            <div className="w-full p-0">
              <div className="pa-stripe-heading">
                <h2 className="pa-h1-v1 pa-bright title-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s">
                  <strong>{isKorean ? "소프트웨어 구성" : "Software Configuration"}</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap pa-row-max2560">
            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0">
              <div
                className="pa-portfolio-thumb m-0 text-center fadeInDelay00Duration10 wow fadeIn"
                style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/advanced-active-vibration-isolation-system-graph-min.jpg)" }}
                data-wow-duration="1.0s"
                data-wow-delay="0.0s"
              ></div>
            </div>
            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0 four-feat-sec-text">
              <div className="pa-portfolio-thumb-background-overlay"></div>
              <div className="pa-portfolio-thumb-deco-1"></div>
              <div className="pa-portfolio-thumb-deco-2"></div>
              <div className="pa-portfolio-thumb-centered-content w-full">
                <h4 className="pa-portfolio-thumb-heading">
                  {isKorean ? "세계 최고 수준의 액티브 제진 시스템" : "World's Most Advanced Active Vibration Isolation System"}
                </h4>
                <p className="pa-portfolio-thumb-desc">
                  {isKorean ? (
                    <>
                      DVIA-MLP2000 시스템은 0.3Hz부터 우수한 저주파 응답 특성을 지닌 11개의 고감도 지오폰(Geophone) 센서와
                      8개의 전자기 액추에이터를 탑재했습니다. 이들은 진동을 정밀하게 측정하고 상쇄하기 위해 정교하게 설계되었으며,
                      최첨단 임베디드 피드백 및 피드포워드 제어 알고리즘과 결합되어 2Hz 이하에서 엄격한 VC-G 진동 규격을 만족할 수 있게 합니다.
                    </>
                  ) : (
                    <>
                      The DVIA-MLP2000 system is equipped with 11 highly sensitive geophone sensors and 8 electromagnetic actuators
                      with excellent low-frequency response characteristics from 0.3Hz. When combined with state-of-the-art embedded
                      feedback and feedforward control algorithms, they can meet strict VC-G vibration specifications below 2Hz.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0">
              <div
                className="pa-portfolio-thumb m-0 text-center fadeInDelay00Duration10 wow fadeIn"
                style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/new-tuning-software-min.jpg)" }}
                data-wow-duration="1.0s"
                data-wow-delay="0.0s"
              ></div>
            </div>
            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0 four-feat-sec-text">
              <div className="pa-portfolio-thumb-background-overlay"></div>
              <div className="pa-portfolio-thumb-deco-1"></div>
              <div className="pa-portfolio-thumb-deco-2"></div>
              <div className="pa-portfolio-thumb-centered-content w-full">
                <h4 className="pa-portfolio-thumb-heading">
                  {isKorean ? (
                    <>새로운 튜닝 소프트웨어,<br />획기적인 성능 향상</>
                  ) : (
                    <>New Tuning Software,<br />Revolutionary Performance Enhancement</>
                  )}
                </h4>
                <p className="pa-portfolio-thumb-desc">
                  {isKorean ? (
                    <>
                      DVIA-MLP2000의 새로운 튜닝 소프트웨어는 필터와 게인을 더욱 다양하게 제공해 저주파 진동 제어 성능을 향상시킵니다.
                      필터 슬롯이 기존 3개에서 5개로 늘어나 피드백과 피드포워드 튜닝을 한층 정밀하게 수행할 수 있으며,
                      새롭게 도입된 피드포워드 D 게인과 D 주파수로 10Hz 이하 대역에서 탁월한 안정성을 보장하고 0.5Hz 이하 진동까지 감쇠할 수 있습니다.
                    </>
                  ) : (
                    <>
                      The DVIA-MLP2000&apos;s new tuning software provides more diverse filters and gains to improve low-frequency
                      vibration control performance. The filter slots have increased from 3 to 5, allowing more precise feedback and
                      feedforward tuning, and the newly introduced feedforward D gain ensures excellent stability below 10Hz.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0">
              <div
                className="pa-portfolio-thumb m-0 text-center fadeInDelay00Duration10 wow fadeIn"
                style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/feedback-control-min.png)" }}
                data-wow-duration="1.0s"
                data-wow-delay="0.0s"
              ></div>
            </div>
            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0 four-feat-sec-text">
              <div className="pa-portfolio-thumb-background-overlay"></div>
              <div className="pa-portfolio-thumb-deco-1"></div>
              <div className="pa-portfolio-thumb-deco-2"></div>
              <div className="pa-portfolio-thumb-centered-content w-full">
                <h4 className="pa-portfolio-thumb-heading">
                  {isKorean ? "피드백 제어(Feedback Control)" : "Feedback Control"}
                </h4>
                <p className="pa-portfolio-thumb-desc">
                  {isKorean ? (
                    <>
                      피드백 제어 시스템은 제진대 상판에서 발생하는 진동을 고성능 센서로 지속적으로 측정하고, 액추에이터를 이용해
                      동일하나 반대 방향의 힘을 가함으로써 진동을 효과적으로 줄입니다. 기본 설정만으로도 우수한 격리 효과를 발휘하지만,
                      제어가 필요한 고객 장비에 맞춰 게인을 조정하고 새로운 고급 노치 필터로 구조 공진이나 특정 진동원을 제어함으로써
                      피드백 오픈 루프를 최적화하면 더욱 향상된 제어 성능을 얻을 수 있습니다.
                    </>
                  ) : (
                    <>
                      The feedback control system continuously measures vibrations occurring on the isolation platform using high-performance
                      sensors and effectively reduces vibrations by applying forces in the same but opposite direction using actuators.
                      While excellent isolation effects are achieved with default settings alone, even better control performance can be obtained.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0">
              <div
                className="pa-portfolio-thumb m-0 text-center fadeInDelay00Duration10 wow fadeIn"
                style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/feedforward-control-min.png)" }}
                data-wow-duration="1.0s"
                data-wow-delay="0.0s"
              ></div>
            </div>
            <div className="w-full xl:w-1/4 sm:w-1/2 lg:w-1/2 p-0 four-feat-sec-text">
              <div className="pa-portfolio-thumb-background-overlay"></div>
              <div className="pa-portfolio-thumb-deco-1"></div>
              <div className="pa-portfolio-thumb-deco-2"></div>
              <div className="pa-portfolio-thumb-centered-content w-full">
                <h4 className="pa-portfolio-thumb-heading">
                  {isKorean ? "피드포워드 제어(Feedforward Control)" : "Feedforward Control"}
                </h4>
                <p className="pa-portfolio-thumb-desc">
                  {isKorean ? (
                    <>
                      피드포워드 제어는 실시간으로 바닥 진동 센서 값을 측정해 진동을 감지하고, 바닥 진동이 장비로 전달되기 전에
                      이를 상쇄할 수 있도록 액추에이터로 신호를 보냅니다. DVIA-MLP2000의 피드포워드 제어는 제진 성능을 획기적으로 개선하며,
                      동적 제어 방식을 통해 시설 내 진동 수준이 변화하더라도 쉽게 적응합니다.
                    </>
                  ) : (
                    <>
                      Feedforward control measures floor vibration sensor values in real-time to detect vibrations and sends signals
                      to actuators to cancel them before floor vibrations are transmitted to the equipment. The DVIA-MLP2000&apos;s feedforward
                      control dramatically improves vibration isolation performance.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 브로슈어 설명 섹션 */}
      <section className="brochure-sec">
        <section className="black-bg six-degree-sec">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex flex-wrap">
              <div className="brochure-text w-full">
                <p className="bro-txt-title fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.2s">
                  {isKorean ? "모든 6자유도에서의 능동형 진동 제어" : "Active Vibration Control in All Six Degrees of Freedom"}
                </p>
                <p className="bro-txt-des fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.3s">
                  {isKorean ? (
                    <>
                      DVIA 시리즈는 X, Y, Z축의 3가지 병진 운동과 피치(pitch), 롤(roll), 요(yaw)의<br />
                      3가지 회전 운동을 포함한 총 6자유도에서 진동을 제어합니다.
                    </>
                  ) : (
                    <>
                      The DVIA series controls vibrations in all six degrees of freedom, including<br />
                      three translational motions (X, Y, Z axes) and three rotational motions (pitch, roll, yaw).
                    </>
                  )}
                </p>
              </div>
              <div className="all-six-degrees-img w-full text-center fadeIn wow" data-wow-duration="1s" data-wow-delay="0.4s">
                <img
                  alt="Active Vibration Isolation in All Six Degrees of Freedom"
                  src="/products/dvia-mlp2000/assets/images/all-six-degrees-of-freedom-min.jpg"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          </div>

          <div className="container text-center">
            <div className="row">
              <div className="brochure-text col-12 col-xl-12">
                <p className="bro-txt-title fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.2s">
                  {isKorean ? "성능" : "Performance"}
                </p>
                <p className="bro-txt-des fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.3s">
                  {isKorean ? (
                    <>DVIA-MLP2000은 0.5Hz부터 진동을 제어하기 시작하여, 1Hz에서 80 – 90%의 진동 제어 성능을 제공합니다.</>
                  ) : (
                    <>The DVIA-MLP2000 starts controlling vibrations from 0.5Hz, providing 80-90% vibration control performance at 1Hz.</>
                  )}
                </p>
              </div>
              <div className="all-six-degrees-img w-full text-center fadeIn wow" data-wow-duration="1s" data-wow-delay="0.4s">
                <img
                  alt="Performance graph"
                  className="fadeInDelay03Duration10 wow fadeIn"
                  src="/products/dvia-mlp2000/assets/images/performance-min.png"
                  style={{ width: "75%" }}
                  data-wow-duration="1.0s"
                  data-wow-delay="0.3s"
                />
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 text-center viewer">
            <div className="flex flex-wrap justify-center">
              <div className="brochure-text w-full mb-3">
                <p className="bro-txt-title fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.2s">
                  DVIA-MLP2000 (Standard) 3D Modeling
                </p>
              </div>

              <div className="w-full fadeIn wow" data-wow-duration="1s" data-wow-delay="0.4s">
                <div style={{ overflowX: "auto", textAlign: "center" }}>
                  <div style={{ display: "inline-block", width: "640px", height: "480px", position: "relative" }}>
                    <iframe
                      src="https://daeilsys.autodesk360.com/shares/public/SH286ddQT78850c0d8a4febb757089713b99?mode=embed&ui=embed"
                      style={{ width: "100%", height: "100%", border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Services (What We Do) Section, 호환제품 */}
      <section
        id="services"
        className="pa-what-we-do pa-standard-section compati-sec text-center"
        style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/metalhairline-min.jpg)" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-10/12 xl:mx-auto">
              <h2 className="pa-h1-v2 pa-bright title-text fadeInDown wow" data-wow-duration="1s" data-wow-delay="0.1s">
                {isKorean ? "호환 가능한 Thermo Fisher SEM 모델" : "Compatible Thermo Fisher SEM Models"}
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap pa-services text-center">
            <div className="pc-list">
              <ul className="pa-services-ul left-ul fadeInDelay00Duration10 wow fadeIn animated" data-wow-duration="1.0s" data-wow-delay="0.0s">
                <li><h3 className="pa-h3-v1 pa-bright fadeIn wow animated" data-wow-duration="1s" data-wow-delay="0.4s">• &nbsp;&nbsp; Aquilos</h3></li>
                <li><h3 className="pa-h3-v1 pa-bright fadeIn wow animated" data-wow-duration="1s" data-wow-delay="0.5s">• &nbsp;&nbsp; Nova NanoSEM x50</h3></li>
                <li><h3 className="pa-h3-v1 pa-bright fadeIn wow animated" data-wow-duration="1s" data-wow-delay="0.6s">• &nbsp;&nbsp; Apreo</h3></li>
                <li><h3 className="pa-h3-v1 pa-bright fadeIn wow animated" data-wow-duration="1s" data-wow-delay="0.7s">• &nbsp;&nbsp; Hydra</h3></li>
                <li><h3 className="pa-h3-v1 pa-bright fadeIn wow animated" data-wow-duration="1s" data-wow-delay="0.8s">• &nbsp;&nbsp; Scios</h3></li>
                <li><h3 className="pa-h3-v1 pa-bright fadeIn wow animated" data-wow-duration="1s" data-wow-delay="0.9s">• &nbsp;&nbsp; Prisma</h3></li>
              </ul>
              <ul className="pa-services-ul right-ul fadeInDelay00Duration10 wow fadeIn animated" data-wow-duration="1.0s" data-wow-delay="0.0s">
                <li><h3 className="pa-h3-v1 pa-bright fadeIn wow animated" data-wow-duration="1s" data-wow-delay="0.4s">• &nbsp;&nbsp; Helios 5</h3></li>
                <li><h3 className="pa-h3-v1 pa-bright fadeIn wow animated" data-wow-duration="1s" data-wow-delay="0.5s">• &nbsp;&nbsp; Teneo</h3></li>
                <li><h3 className="pa-h3-v1 pa-bright fadeIn wow animated" data-wow-duration="1s" data-wow-delay="0.6s">• &nbsp;&nbsp; Verios 5</h3></li>
                <li><h3 className="pa-h3-v1 pa-bright fadeIn wow animated" data-wow-duration="1s" data-wow-delay="0.7s">• &nbsp;&nbsp; Versa 3D</h3></li>
                <li><h3 className="pa-h3-v1 pa-bright fadeIn wow animated" data-wow-duration="1s" data-wow-delay="0.8s">• &nbsp;&nbsp; Quattro S</h3></li>
                <li><h3 className="pa-h3-v1 pa-bright fadeIn wow animated" data-wow-duration="1s" data-wow-delay="0.9s">• &nbsp;&nbsp; Centrios</h3></li>
              </ul>
            </div>
          </div>

          <div className="w-full mo-list">
            <ul>
              <li><h3 className="pa-h3-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="0.6s">• &nbsp;&nbsp; Aquilos</h3></li>
              <li><h3 className="pa-h3-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="0.9s">• &nbsp;&nbsp; Apreo</h3></li>
              <li><h3 className="pa-h3-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="1.2s">• &nbsp;&nbsp; Hydra</h3></li>
              <li><h3 className="pa-h3-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="1.5s">• &nbsp;&nbsp; Quattro S</h3></li>
              <li><h3 className="pa-h3-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="1.8s">• &nbsp;&nbsp; Scios</h3></li>
              <li><h3 className="pa-h3-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="2.1s">• &nbsp;&nbsp; Prisma</h3></li>
            </ul>
            <ul>
              <li><h3 className="pa-h3-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="0.6s">• &nbsp;&nbsp; Helios 5</h3></li>
              <li><h3 className="pa-h3-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="0.9s">• &nbsp;&nbsp; Nova NanoSEM x50</h3></li>
              <li><h3 className="pa-h3-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="1.2s">• &nbsp;&nbsp; Teneo</h3></li>
              <li><h3 className="pa-h3-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="1.5s">• &nbsp;&nbsp; Verios 5</h3></li>
              <li><h3 className="pa-h3-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="1.8s">• &nbsp;&nbsp; Versa 3D</h3></li>
              <li><h3 className="pa-h3-v1 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="2.1s">• &nbsp;&nbsp; Centrios</h3></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 사양 */}
      <section className="spec-sec">
        <div className="max-w-7xl mx-auto px-4">
          <p className="spec-sec-title title-text text-center fadeInDown wow" data-wow-duration="1s" data-wow-delay="0.2s">
            Specifications
          </p>
          <ul className="spec-table fadeIn wow" data-wow-duration="1s" data-wow-delay="0.3s">
            <li><div className="spec-title">Model</div><div className="spec-value">DVIA-MLP2000</div></li>
            <li><div className="spec-title">Dimensions</div><div className="spec-value">900 x 900 x 158 mm (Customizable design)</div></li>
            <li><div className="spec-title">Maximum Load Capacity</div><div className="spec-value">2000 kg</div></li>
            <li><div className="spec-title">Vibration Isolation Technology</div><div className="spec-value">Feedback and Feedforward Control</div></li>
            <li><div className="spec-title">Degrees of Freedom</div><div className="spec-value">6 Degrees</div></li>
            <li><div className="spec-title">Active Isolation Bandwidth</div><div className="spec-value">0.5 – 200 Hz</div></li>
            <li><div className="spec-title">Vibration Isolation</div><div className="spec-value">80 – 90% at 1 Hz</div></li>
            <li><div className="spec-title">Actuator</div><div className="spec-value">Electromagnetic Actuator</div></li>
            <li><div className="spec-title">Maximum Actuator Force</div><div className="spec-value">Vertical 40 N, Horizontal 20 N</div></li>
            <li><div className="spec-title">Vibration Sensor</div><div className="spec-value">Geophone, Sensitivity: 2.55 V/in/s (100.4 V/m/s) ± 10%</div></li>
            <li><div className="spec-title">Leveling Repeatability</div><div className="spec-value">Repeatability: ± 0.1 mm</div></li>
            <li><div className="spec-title">Controller</div><div className="spec-value">External</div></li>
            <li><div className="spec-title">Environmental Protection Requirements</div><div className="spec-value">CE and TUV</div></li>
            <li><div className="spec-title">Power Requirements</div><div className="spec-value">Line Voltage: 100 – 260V AC, Line Frequency: 50/60 Hz</div></li>
            <li><div className="spec-title">Air Requirements</div><div className="spec-value">Air Pressure: 4 – 6 bar, Air Delivery: 30 L/min</div></li>
            <li><div className="spec-title">Environmental Requirements</div><div className="spec-value">Temperature: 5 – 50 °C, Humidity: 20 – 90 %</div></li>
          </ul>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact-us"
        className="pa-contact-us contact-us-sec"
        style={{ backgroundImage: "url(/products/dvia-mlp2000/assets/images/contact-background-image-min.jpg)" }}
      >
        <div className="cover-black"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap text-center">
            <div className="w-full xl:w-10/12 xl:mx-auto">
              <h2 className="pa-h1-v2 pa-bright fadeIn wow" data-wow-duration="1s" data-wow-delay="0.2s">
                {isKorean ? (
                  <>궁금한 점이 <strong>있으신가요?</strong></>
                ) : (
                  <>Do you have any <strong>Questions?</strong></>
                )}
              </h2>
              <p className="pa-p-v1 pa-white fadeIn wow" data-wow-duration="1s" data-wow-delay="0.3s">
                {isKorean ? (
                  <>
                    DAEIL SYSTEMS의 모든 연락처 정보를 확인하세요.<br />
                    질문이 있으시거나 기술 지원이 필요하시거나 피드백을 제공하고 싶으시면 언제든지 연락주세요.
                  </>
                ) : (
                  <>
                    Find all contact information for DAEIL SYSTEMS.<br />
                    If you have any questions, require technical assistance or want to provide feedback, contact us.<br />
                    We&apos;d love to hear you out.
                  </>
                )}
              </p>

              <div className="form-submit">
                <a className="pa-hvr-sweep-to-right" href="/contact" target="_self">
                  {isKorean ? "문의하기" : "Contact us"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Icons */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </div>
  )
}
