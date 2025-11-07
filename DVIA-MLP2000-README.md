# DVIA-MLP2000 제품 페이지

## 개요
DVIA-MLP2000은 Thermo Fisher SEM에 특화된 커스텀 액티브 제진 시스템 제품 페이지입니다.
원본 daeilsys.com의 HTML/CSS/JavaScript를 Next.js로 클론 코딩했습니다.

## 완성된 파일들

### 1. 페이지 파일
- `app/products/active-vibration-systems/dvia-mlp2000/page.tsx` - Next.js 페이지
- `app/products/active-vibration-systems/dvia-mlp2000/client.tsx` - 클라이언트 컴포넌트
- `app/products/active-vibration-systems/dvia-mlp2000/layout.tsx` - 전용 레이아웃 (CSS & JS)

### 2. 데이터 파일
- `data/products/dvia-mlp2000-full.json` - 제품 정보 JSON

### 3. 에셋 파일들
```
public/products/dvia-mlp2000/assets/images/
├── motion-sample/              # Hero 모션 이미지 (120 프레임)
│   └── dvia-mlp2000-motion-0001.jpg ~ 0120.jpg
├── motion-disassembly/         # 분해도 모션 이미지 (60 프레임)
│   └── dvia-mlp2000-disassembly-0000.jpg ~ 0060.jpg
├── main-visual-min.jpg
├── about-dvia-mlp2000-min.jpg
├── dvia-mlp2000-overview-min.jpg
├── dvia-mlp2000-features-01~04-min.png
├── advanced-active-vibration-isolation-system-graph-min.jpg
├── new-tuning-software-min.jpg
├── feedback-control-min.png
├── feedforward-control-min.png
├── all-six-degrees-of-freedom-min.jpg
├── performance-min.png
├── metalhairline-min.jpg
└── contact-background-image-min.jpg
```

## 주요 기능

### ✅ 완벽히 구현된 섹션들
1. **Hero Section** - Particles.js 배경 효과, Typed.js 타이핑 애니메이션
2. **About Section** - WOW.js 스크롤 애니메이션
3. **이미지 모션** - ScrollMagic + GSAP으로 120 프레임 스크롤 애니메이션
4. **개요 Section**
5. **분해도 모션** - 60 프레임 스크롤 애니메이션
6. **하드웨어 구성** - 4개 특징 (그리드 레이아웃)
7. **소프트웨어 구성** - 4개 특징
8. **6자유도 설명**
9. **성능 그래프**
10. **3D 뷰어** - Autodesk 3D 모델
11. **호환 모델** - Thermo Fisher SEM 12개 모델
12. **사양 테이블**
13. **Contact Section**

### 🎨 스타일링
- Bootstrap 5.1.3 그리드 시스템
- 원본 사이트의 모든 CSS 클래스 재현
- Material Icons, Font Awesome 아이콘
- WOW.js 스크롤 애니메이션
- 반응형 디자인 (PC/Mobile)

### 🌐 다국어 지원
- 영어/한국어 자동 전환
- `useLanguage` 훅 사용

### 📱 반응형
- Desktop: 전체 기능
- Mobile: motion-box-mo 대체 뷰

## 기술 스택

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **React Hooks** (useLanguage, useEffect)

### CSS/UI
- **Bootstrap 5.1.3**
- **Custom CSS** (Particle Theme)
- **Google Fonts** (Open Sans, Play, Titillium Web, Blinker)
- **Material Icons**
- **Font Awesome 6**

### 애니메이션 라이브러리
- **Particles.js** - Hero 배경 파티클 효과
- **WOW.js** - 스크롤 트리거 애니메이션
- **ScrollMagic** - 스크롤 기반 타임라인
- **GSAP** - 고급 애니메이션
- **Animate.css** - CSS 애니메이션

## 사용 방법

### 개발 서버 실행
```bash
npm run dev
```

### 페이지 접속
```
http://localhost:3000/products/active-vibration-systems/dvia-mlp2000
```

## 구조 설명

### Layout.tsx
모든 외부 라이브러리와 CSS를 로드합니다:
- Bootstrap CSS/JS
- Google Fonts
- Material Icons
- Font Awesome
- WOW.js
- Particles.js
- ScrollMagic
- GSAP
- Custom CSS (인라인)

### Client.tsx
모든 섹션의 HTML 구조를 포함:
- 원본 HTML의 클래스명 그대로 사용
- Bootstrap 그리드 시스템 (container, row, col-*)
- 다국어 처리 (`isKorean` 변수)
- 반응형 처리 (PC/Mobile 분기)

### JSON Data
제품 정보를 JSON으로 관리:
- 이름, 설명, 스펙
- 다국어 데이터
- 이미지 경로
- 호환 모델 리스트

## MLP1000 vs MLP2000 차이점

| 항목 | MLP1000 | MLP2000 |
|------|---------|---------|
| 플랫폼 크기 | 874 × 846 × 158 mm | 900 × 900 × 158 mm |
| 최대 적재 용량 | 1700 kg | 2000 kg |
| 모델명 | DVIA-MLP1000 | DVIA-MLP2000 |
| 이미지 경로 | /products/dvia-mlp1000/ | /products/dvia-mlp2000/ |

## 애니메이션 작동 원리

### 1. Hero Particles
```javascript
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    // ... 설정
  }
})
```

### 2. WOW.js 스크롤 애니메이션
```html
<h2 class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
```

### 3. ScrollMagic 이미지 시퀀스
- 스크롤 위치에 따라 프레임 변경
- 120 프레임 (0001~0120)
- 60 프레임 (0000~0060)

## 주의사항

### 이미지 준비
실제 이미지 파일이 필요합니다:
1. Hero 모션: 120장 (dvia-mlp2000-motion-0001.jpg ~ 0120.jpg)
2. 분해도 모션: 61장 (dvia-mlp2000-disassembly-0000.jpg ~ 0060.jpg)
3. 배경/특징 이미지들

현재는 MLP1000 이미지를 복사하여 사용 중입니다.

### CSS 클래스
원본 사이트의 CSS 클래스를 그대로 사용했으므로:
- `pa-*` 접두사 클래스
- Bootstrap 그리드
- WOW 애니메이션 클래스

모두 layout.tsx의 인라인 CSS에 정의되어 있습니다.

## 브라우저 지원
- Chrome/Edge (권장)
- Firefox
- Safari
- Mobile browsers

## 성능 최적화
- 이미지 lazy loading
- Script 지연 로딩 (lazyOnload)
- CSS 인라인 (초기 로딩 속도 향상)

## 추가 작업 필요 사항
1. 실제 제품 이미지 교체
2. 3D 뷰어 URL 업데이트 (현재는 MLP1000 공유)
3. ScrollMagic 이미지 시퀀스 세밀 조정
4. SEO 메타데이터 최적화
5. OG 이미지 추가

## 문의
- 개발: 심재형
- 날짜: 2025-11-07
