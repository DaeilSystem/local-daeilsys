/**
 * GSAP 애니메이션 프리셋 라이브러리
 *
 * 자주 사용하는 애니메이션 패턴을 미리 정의한 프리셋 모음입니다.
 * dvia-mlp1000 스타일의 부드러운 애니메이션 효과를 쉽게 적용할 수 있습니다.
 */

export type AnimationPreset = {
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  duration?: number
  ease?: string
  stagger?: number
}

/**
 * 페이드 인 애니메이션 프리셋
 */
export const fadeInPresets = {
  /** 기본 페이드 인 */
  default: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 0.8,
    ease: "power2.out",
  },

  /** 아래에서 페이드 인 */
  up: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    duration: 1,
    ease: "power2.out",
  },

  /** 위에서 페이드 인 */
  down: {
    from: { opacity: 0, y: -50 },
    to: { opacity: 1, y: 0 },
    duration: 1,
    ease: "power2.out",
  },

  /** 왼쪽에서 페이드 인 */
  left: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
    duration: 1,
    ease: "power2.out",
  },

  /** 오른쪽에서 페이드 인 */
  right: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 },
    duration: 1,
    ease: "power2.out",
  },

  /** 확대되며 페이드 인 */
  scale: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
    duration: 1,
    ease: "back.out(1.7)",
  },

  /** 순차적 페이드 인 (여러 요소) */
  stagger: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,
  },
}

/**
 * 슬라이드 애니메이션 프리셋
 */
export const slidePresets = {
  /** 왼쪽에서 슬라이드 */
  fromLeft: {
    from: { x: "-100%", opacity: 0 },
    to: { x: "0%", opacity: 1 },
    duration: 1.2,
    ease: "power3.out",
  },

  /** 오른쪽에서 슬라이드 */
  fromRight: {
    from: { x: "100%", opacity: 0 },
    to: { x: "0%", opacity: 1 },
    duration: 1.2,
    ease: "power3.out",
  },

  /** 위에서 슬라이드 */
  fromTop: {
    from: { y: "-100%", opacity: 0 },
    to: { y: "0%", opacity: 1 },
    duration: 1.2,
    ease: "power3.out",
  },

  /** 아래에서 슬라이드 */
  fromBottom: {
    from: { y: "100%", opacity: 0 },
    to: { y: "0%", opacity: 1 },
    duration: 1.2,
    ease: "power3.out",
  },
}

/**
 * 회전 애니메이션 프리셋
 */
export const rotatePresets = {
  /** 360도 회전하며 나타남 */
  in: {
    from: { rotation: -360, opacity: 0, scale: 0.5 },
    to: { rotation: 0, opacity: 1, scale: 1 },
    duration: 1.5,
    ease: "back.out(1.7)",
  },

  /** 3D 회전 효과 */
  flip: {
    from: { rotationY: 90, opacity: 0 },
    to: { rotationY: 0, opacity: 1 },
    duration: 1.2,
    ease: "power2.out",
  },

  /** 부드러운 회전 */
  gentle: {
    from: { rotation: -15, opacity: 0 },
    to: { rotation: 0, opacity: 1 },
    duration: 1,
    ease: "power2.out",
  },
}

/**
 * 텍스트 애니메이션 프리셋
 */
export const textPresets = {
  /** 타이핑 효과 (글자별로) */
  typing: {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    duration: 0.05,
    ease: "none",
    stagger: 0.03,
  },

  /** 글자가 날아오는 효과 */
  flyIn: {
    from: { opacity: 0, y: -50, rotationX: -90 },
    to: { opacity: 1, y: 0, rotationX: 0 },
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.05,
  },

  /** 블러에서 선명하게 */
  blur: {
    from: { opacity: 0, filter: "blur(10px)" },
    to: { opacity: 1, filter: "blur(0px)" },
    duration: 1,
    ease: "power2.out",
  },

  /** 언더라인 그려지는 효과 */
  underline: {
    from: { backgroundSize: "0% 2px" },
    to: { backgroundSize: "100% 2px" },
    duration: 0.8,
    ease: "power2.inOut",
  },
}

/**
 * 카드/박스 애니메이션 프리셋
 */
export const cardPresets = {
  /** 들어올림 효과 */
  lift: {
    to: { y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" },
    duration: 0.3,
    ease: "power2.out",
  },

  /** 펼쳐지는 효과 */
  unfold: {
    from: { scaleY: 0, transformOrigin: "top" },
    to: { scaleY: 1 },
    duration: 0.8,
    ease: "power3.out",
  },

  /** 뒤집히는 효과 */
  flip: {
    from: { rotationY: 180, opacity: 0 },
    to: { rotationY: 0, opacity: 1 },
    duration: 1,
    ease: "back.out(1.7)",
  },

  /** 순차적 등장 (그리드) */
  grid: {
    from: { opacity: 0, scale: 0.8, y: 20 },
    to: { opacity: 1, scale: 1, y: 0 },
    duration: 0.6,
    ease: "back.out(1.7)",
    stagger: {
      amount: 0.8,
      from: "start",
      grid: "auto" as any,
    },
  },
}

/**
 * 배경/오버레이 애니메이션 프리셋
 */
export const overlayPresets = {
  /** 왼쪽에서 와이프 */
  wipeLeft: {
    from: { x: "-100%" },
    to: { x: "0%" },
    duration: 1.2,
    ease: "power3.inOut",
  },

  /** 오른쪽에서 와이프 */
  wipeRight: {
    from: { x: "100%" },
    to: { x: "0%" },
    duration: 1.2,
    ease: "power3.inOut",
  },

  /** 확장하는 효과 */
  expand: {
    from: { scaleX: 0, transformOrigin: "left" },
    to: { scaleX: 1 },
    duration: 1,
    ease: "power3.inOut",
  },

  /** 페이드 인 오버레이 */
  fade: {
    from: { opacity: 0 },
    to: { opacity: 0.8 },
    duration: 0.6,
    ease: "power2.out",
  },
}

/**
 * 스크롤 진행도 기반 애니메이션 프리셋
 */
export const scrollProgressPresets = {
  /** 시차 효과 (Parallax) */
  parallax: {
    to: { y: "30%", ease: "none" },
    duration: 1,
  },

  /** 확대 효과 */
  zoomIn: {
    from: { scale: 1 },
    to: { scale: 1.2, ease: "none" },
    duration: 1,
  },

  /** 회전 효과 */
  rotate: {
    to: { rotation: 360, ease: "none" },
    duration: 1,
  },

  /** 페이드 아웃 */
  fadeOut: {
    to: { opacity: 0, y: -100, ease: "none" },
    duration: 1,
  },
}

/**
 * 제품 페이지 특화 프리셋
 */
export const productPagePresets = {
  /** 히어로 타이틀 등장 */
  heroTitle: {
    from: { opacity: 0, y: 100, scale: 0.9 },
    to: { opacity: 1, y: 0, scale: 1 },
    duration: 1.5,
    ease: "power3.out",
  },

  /** 피처 아이템 등장 */
  featureItem: {
    from: { opacity: 0, y: 50, rotationX: -30 },
    to: { opacity: 1, y: 0, rotationX: 0 },
    duration: 1,
    ease: "back.out(1.7)",
    stagger: 0.2,
  },

  /** 이미지 갤러리 */
  imageGallery: {
    from: { opacity: 0, scale: 0.9, clipPath: "inset(10% 10%)" },
    to: { opacity: 1, scale: 1, clipPath: "inset(0% 0%)" },
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.15,
  },

  /** 사양 테이블 행 */
  specRow: {
    from: { opacity: 0, x: -30 },
    to: { opacity: 1, x: 0 },
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.08,
  },

  /** CTA 버튼 */
  ctaButton: {
    from: { opacity: 0, scale: 0.8, y: 20 },
    to: { opacity: 1, scale: 1, y: 0 },
    duration: 0.8,
    ease: "elastic.out(1, 0.75)",
  },
}

/**
 * 프리셋 적용 헬퍼 함수
 */
export function applyPreset(gsap: any, target: any, preset: AnimationPreset) {
  const { from, to, duration, ease, stagger } = preset

  if (from && to) {
    return gsap.fromTo(target, from, { ...to, duration, ease, stagger })
  } else if (to) {
    return gsap.to(target, { ...to, duration, ease, stagger })
  } else if (from) {
    return gsap.from(target, { ...from, duration, ease, stagger })
  }
}

/**
 * 커스텀 이징 함수들
 */
export const customEasing = {
  /** 부드러운 시작과 끝 */
  smooth: "power2.inOut",
  /** 탄성 효과 */
  elastic: "elastic.out(1, 0.75)",
  /** 바운스 효과 */
  bounce: "bounce.out",
  /** 백 효과 (오버슈트) */
  back: "back.out(1.7)",
  /** 급격한 가속 */
  expo: "expo.out",
  /** 원형 궤도 */
  circ: "circ.out",
  /** 3차 곡선 */
  cubic: "power3.out",
  /** 4차 곡선 (매우 부드러움) */
  quart: "power4.out",
}

/**
 * 애니메이션 시퀀스 빌더
 */
export class AnimationSequence {
  private timeline: any = null
  private gsap: any = null

  constructor(gsap: any, options?: { paused?: boolean }) {
    this.gsap = gsap
    this.timeline = gsap.timeline(options)
  }

  add(target: any, preset: AnimationPreset, position?: string) {
    const { from, to, duration, ease, stagger } = preset

    if (from && to) {
      this.timeline.fromTo(target, from, { ...to, duration, ease, stagger }, position)
    } else if (to) {
      this.timeline.to(target, { ...to, duration, ease, stagger }, position)
    } else if (from) {
      this.timeline.from(target, { ...from, duration, ease, stagger }, position)
    }

    return this
  }

  play() {
    this.timeline.play()
    return this
  }

  pause() {
    this.timeline.pause()
    return this
  }

  getTimeline() {
    return this.timeline
  }
}
