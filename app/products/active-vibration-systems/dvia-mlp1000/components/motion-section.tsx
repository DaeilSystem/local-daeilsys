"use client"

interface MotionSectionProps {
  isKorean: boolean
}

export default function MotionSection({ isKorean }: MotionSectionProps) {
  return (
    <div className="wrap bg-black">
      <div className="scrollmagic-pin-spacer">
        <div id="trigger" className="pinned motion-box text-center">
          <img
            className="img-motion"
            src="/products/dvia-mlp2000/assets/images/motion-sample/dvia-mlp2000-motion-0001.jpg"
            style={{ width: "80%", maxWidth: "1920px" }}
            alt="DVIA-MLP2000 Motion image"
          />
          <div className="text-overlay" id="text1">
            {isKorean
              ? "세계에서 가장 뛰어난 액티브 제진 시스템"
              : "World's Most Advanced Active Vibration Isolation System"}
          </div>
          <div className="text-overlay" id="text2">
            {isKorean ? (
              <>
                완전 맞춤형 설계.
                <br />
                SEM과 완벽한 통합.
              </>
            ) : (
              <>
                Fully custom design.
                <br />
                Perfect integration with SEM.
              </>
            )}
          </div>
          <div className="text-overlay" id="text0">
            {isKorean ? (
              <>
                판도를 바꾸는 혁신.
                <br />
                액티브 제진 시스템의 새로운 표준.
              </>
            ) : (
              <>
                Game-changing innovation.
                <br />
                New standard for active vibration isolation systems.
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile fallback - hidden by default, shown on mobile via CSS */}
      <div className="motion-box-mo">
        <div className="mo-text mo-tit-txt text-center">DVIA-MLP2000</div>
        <div className="mo-text text-center">
          - {isKorean ? "세계에서 가장 뛰어난 액티브 제진 시스템" : "World's Most Advanced Active Vibration Isolation System"}
        </div>
        <div className="mo-text text-center">
          -{" "}
          {isKorean ? (
            <>
              완전 맞춤형 설계.
              <br />
              SEM과 완벽한 통합.
            </>
          ) : (
            <>
              Fully custom design.
              <br />
              Perfect integration with SEM.
            </>
          )}
        </div>
        <div className="mo-text text-center">
          -{" "}
          {isKorean ? (
            <>
              판도를 바꾸는 혁신.
              <br />
              액티브 제진 시스템의 새로운 표준.
            </>
          ) : (
            <>
              Game-changing innovation.
              <br />
              New standard for active vibration isolation systems.
            </>
          )}
        </div>
        <img
          src="/products/dvia-mlp2000/assets/images/motion-sample/dvia-mlp2000-motion-0060.jpg"
          style={{ width: "100%" }}
          alt="DVIA-MLP2000 Motion image"
        />
      </div>
    </div>
  )
}
