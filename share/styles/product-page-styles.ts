/**
 * dvia-mlp1000 스타일의 제품 페이지 공통 CSS
 *
 * 애플 스타일의 다크 테마 제품 페이지를 위한 스타일 시트입니다.
 * 다음 기능을 포함합니다:
 * - 히어로 섹션 스타일
 * - 이미지 시퀀스 애니메이션 스타일
 * - 포트폴리오/기능 섹션 레이아웃
 * - 사양 테이블 스타일
 * - WOW.js 애니메이션 클래스
 */

export const productPageStyles = `
  /* Bootstrap 대체 유틸리티 */
  .text-center {
    text-align: center !important;
  }
  .m-0 {
    margin: 0 !important;
  }
  .p-0 {
    padding: 0 !important;
  }
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  .mt-4 {
    margin-top: 1.5rem !important;
  }
  .w-full {
    width: 100% !important;
  }

  /* 기본 스타일 */
  .pa-homepage {
    background: #000;
    color: #fff;
  }

  .pa-dark {
    background: #000;
  }

  .pa-hero {
    min-height: 100vh;
    position: relative;
  }

  .pa-centered-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pa-full-height {
    min-height: 100vh;
  }

  .pa-image-back {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .pa-absolute-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .pa-gradient-back-v1 {
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }

  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .pa-hero-content {
    position: relative;
    z-index: 2;
  }

  .typed-text {
    font-size: 2.5rem;
    font-weight: 300;
  }

  .typed-cursor {
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .pa-h2-v2-hero-subhead {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.4;
  }

  .pa-white {
    color: #fff;
  }

  .breadcrumbs {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 10;
  }

  .breadcrumbs ol {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .breadcrumbs li {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }

  .breadcrumbs li:not(:last-child)::after {
    content: "›";
    margin-left: 8px;
    color: rgba(255, 255, 255, 0.5);
  }

  .breadcrumbs a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s;
  }

  .breadcrumbs a:hover {
    color: #fff;
  }

  /* About Section */
  .pa-about-us {
    padding: 100px 0;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .pa-standard-section {
    padding: 80px 0;
  }

  .pa-h1-v2 {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  .pa-bright {
    color: #fff;
  }

  .pa-p-v1 {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .about-des {
    max-width: 900px;
    margin: 0 auto;
  }

  .pa-icon-list-horizontal-dark {
    display: flex;
    justify-content: center;
    gap: 3rem;
    list-style: none;
    padding: 0;
    margin-top: 3rem;
  }

  .pa-icon-list-horizontal-dark li {
    text-align: center;
  }

  .pa-icon-list-icon {
    display: block;
    margin-bottom: 1rem;
  }

  .pa-icon-list-icon i {
    font-size: 3rem;
    color: #4a90e2;
  }

  .pa-icon-list-text {
    font-weight: 600;
    letter-spacing: 1px;
  }

  /* Motion sections */
  .wrap {
    position: relative;
  }

  .motion-box {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-motion, .img-motion2 {
    max-width: 100%;
    height: auto;
  }

  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    font-weight: 300;
    text-align: center;
    color: #fff;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity 0.5s;
    max-width: 80%;
  }

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

  /* Overview Section */
  .overview-sec {
    padding: 100px 0;
    background: linear-gradient(180deg, #000 0%, #1a1a1a 100%);
  }

  .pa-h1-v1 {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  .pa-h4-v1 {
    font-size: 1.2rem;
    line-height: 1.8;
    font-weight: 300;
  }

  .overview-sec-bottom {
    min-height: 50vh;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .cover-black {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  /* Portfolio/Features Section */
  .pa-portfolio {
    background: #000;
  }

  .pa-stripe-heading {
    padding: 4rem 0;
    text-align: center;
    background: linear-gradient(90deg, transparent 0%, #1a1a1a 50%, transparent 100%);
  }

  .pa-row-max2560 {
    max-width: 2560px;
    margin: 0 auto;
  }

  .pa-portfolio-thumb {
    min-height: 400px;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .four-feat-sec-text {
    background: #1a1a1a;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .pa-portfolio-thumb-background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
  }

  .pa-portfolio-thumb-centered-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: #fff;
  }

  .pa-portfolio-thumb-hover-icon i {
    font-size: 3rem;
    color: #4a90e2;
    margin-bottom: 1.5rem;
  }

  .pa-portfolio-thumb-heading {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .pa-portfolio-thumb-desc {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
  }

  /* Brochure Section */
  .brochure-sec {
    background: #000;
    padding: 100px 0;
  }

  .six-degree-sec {
    padding: 50px 0;
  }

  .bro-txt-title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #fff;
  }

  .bro-txt-des {
    font-size: 1.2rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 3rem;
  }

  .all-six-degrees-img {
    margin: 3rem 0;
  }

  /* Compatible Section */
  .compati-sec {
    background-size: cover;
    background-position: center;
    padding: 100px 0;
    position: relative;
  }

  .compati-sec::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
  }

  .compati-sec .container {
    position: relative;
    z-index: 2;
  }

  .pa-services-ul {
    list-style: none;
    padding: 0;
  }

  .pa-h3-v1 {
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .pc-list {
    display: flex;
    gap: 4rem;
    justify-content: center;
  }

  .mo-list {
    display: none;
  }

  @media (max-width: 768px) {
    .pc-list {
      display: none;
    }
    .mo-list {
      display: block;
    }
  }

  /* Specifications Section */
  .spec-sec {
    padding: 100px 0;
    background: linear-gradient(180deg, #000 0%, #1a1a1a 100%);
  }

  .spec-sec-title {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 3rem;
    color: #fff;
  }

  .spec-table {
    list-style: none;
    padding: 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .spec-table li {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    padding: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .spec-title {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
  }

  .spec-value {
    color: #fff;
  }

  /* Contact Section */
  .contact-us-sec {
    background-size: cover;
    background-position: center;
    padding: 100px 0;
    position: relative;
  }

  .contact-us-sec .cover-black {
    background: rgba(0, 0, 0, 0.7);
  }

  .form-submit a {
    display: inline-block;
    padding: 1rem 3rem;
    background: #4a90e2;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 600;
    transition: all 0.3s;
    margin-top: 2rem;
  }

  .form-submit a:hover {
    background: #357abd;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(74, 144, 226, 0.4);
  }

  /* WOW Animations */
  .wow {
    visibility: hidden;
  }

  .wow.animated {
    visibility: visible;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeIn {
    animation-name: fadeIn;
  }

  .fadeInDown {
    animation-name: fadeInDown;
  }

  .fadeInUp {
    animation-name: fadeInUp;
  }

  .fadeInLeft {
    animation-name: fadeInLeft;
  }

  /* Software section specific */
  .software-sec {
    background: #0a0a0a;
  }

  /* Additional styles for proper layout */
  .about-us-sec {
    position: relative;
  }

  .about-us-sec::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  .about-us-sec .container {
    position: relative;
    z-index: 2;
  }

  .title-text {
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .icon-list-wrap {
    margin-top: 3rem;
  }

  .four-feat-sec {
    background: #000;
  }

  .pinned, .pinned2 {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }

  /* Bootstrap container fix */
  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
  }

  .text-center {
    text-align: center !important;
  }

  /* Ensure proper text alignment */
  .description,
  .bro-txt-des,
  .pa-p-v1 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  /* Mobile responsive fixes */
  @media (max-width: 1199px) {
    .pa-portfolio .row {
      flex-direction: column;
    }

    .pa-portfolio-thumb {
      min-height: 300px !important;
    }

    .four-feat-sec-text {
      min-height: auto !important;
      padding: 2rem 1.5rem !important;
    }

    .pa-portfolio-thumb-heading {
      font-size: 1.3rem !important;
    }

    .pa-portfolio-thumb-desc {
      font-size: 0.95rem !important;
    }
  }

  @media (max-width: 768px) {
    .pa-portfolio-thumb {
      min-height: 250px !important;
    }

    .four-feat-sec-text {
      padding: 1.5rem 1rem !important;
    }

    .pa-portfolio-thumb-heading {
      font-size: 1.1rem !important;
      margin-bottom: 1rem !important;
    }

    .pa-portfolio-thumb-desc {
      font-size: 0.9rem !important;
      line-height: 1.5 !important;
    }

    .pa-portfolio-thumb-hover-icon i {
      font-size: 2rem !important;
      margin-bottom: 1rem !important;
    }
  }
`
