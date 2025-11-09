"use client"

interface DisassemblySectionProps {
  isKorean: boolean
}

export default function DisassemblySection({ isKorean }: DisassemblySectionProps) {
  return (
    <div className="wrap bg-black">
      <div className="scrollmagic-pin-spacer">
        <div id="trigger2" className="pinned2 motion-box text-center">
          <img
            className="img-motion2"
            src="/products/dvia-mlp2000/assets/images/motion-disassembly/dvia-mlp2000-disassembly-0000.jpg"
            style={{ width: "80%", maxWidth: "1920px" }}
            alt="DVIA-MLP2000 Disassembly image"
          />
          <div className="text-overlay text-overlay2" id="text3">
            {isKorean
              ? "흠잡을 데 없는 완벽한 하드웨어 및 소프트웨어 구성"
              : "Flawless Hardware and Software Configuration"}
          </div>
        </div>
      </div>

      {/* Mobile fallback */}
      <div className="motion-box-mo">
        <div className="mo-text text-center">
          {isKorean
            ? "흠잡을 데 없는 완벽한 하드웨어 및 소프트웨어 구성"
            : "Flawless Hardware and Software Configuration"}
        </div>
        <img
          src="/products/dvia-mlp2000/assets/images/motion-disassembly/dvia-mlp2000-disassembly-0000.jpg"
          style={{ width: "100%" }}
          alt="DVIA-MLP2000 Disassembly image"
        />
      </div>
    </div>
  )
}
