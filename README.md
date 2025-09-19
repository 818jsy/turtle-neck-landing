# 코어가드 (CoreGuard) - 거북목 방지 디바이스 랜딩페이지

> 당신의 건강한 자세를 지켜주는 스마트 센서

## 📱 프로젝트 소개

코어가드는 현대인의 고질병인 거북목과 라운드 숄더를 예방하는 스마트 웨어러블 디바이스입니다. 초소형 센서로 목과 어깨의 각도를 실시간으로 감지하고, 자세가 흐트러지는 순간 즉시 알림으로 교정해드립니다.

## ✨ 주요 기능

- **실시간 자세 감지**: 초소형 센서로 목과 어깨 각도 정확히 측정
- **즉시 알림**: 자세가 흐트러지는 순간 바로 알림 제공
- **사전 신청 시스템**: Netlify Forms를 통한 간편한 사전 신청
- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **리소스 프리로딩**: 모든 이미지 로드 완료 후 렌더링

## 🚀 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: CSS Modules, CSS3 Animations
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Netlify Forms
- **Build Tool**: Create React App

## 📦 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/turtle-neck-landing.git
cd turtle-neck-landing
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm start
```

브라우저에서 `http://localhost:3000`으로 접속하여 확인할 수 있습니다.

### 4. 프로덕션 빌드
```bash
npm run build
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: `#f1c40f` (노란색)
- **Secondary**: `#f39c12` (주황색)
- **Background**: `#1a1a1a` (다크 그레이)
- **Text**: `#ffffff` (화이트)

### 타이포그래피
- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'
- **Primary Title**: 2.5rem - 3.5rem
- **Secondary Title**: 1.8rem - 2.2rem
- **Body Text**: 1rem - 1.2rem

## 📁 프로젝트 구조

```
src/
├── components/           # React 컴포넌트
│   ├── HeroSection.tsx   # 메인 히어로 섹션
│   ├── ProblemSection.tsx # 문제점 소개 섹션
│   ├── SolutionSection.tsx # 솔루션 소개 섹션
│   ├── FeaturesSection.tsx # 기능 소개 섹션
│   ├── CTASection.tsx    # 행동 유도 섹션
│   ├── PreOrderForm.tsx  # 사전 신청 폼
│   └── Footer.tsx        # 푸터
├── assets/              # 이미지 리소스
│   ├── logo.png         # 로고
│   ├── product-hero.png # 제품 이미지
│   ├── background.png   # 배경 이미지
│   ├── posture-bad.png  # 나쁜 자세 예시
│   └── posture-good.png # 좋은 자세 예시
├── App.tsx              # 메인 앱 컴포넌트
├── App.css              # 글로벌 스타일
└── index.tsx            # 앱 진입점
```

## 🔧 주요 컴포넌트

### HeroSection
- 브랜드 로고 및 메인 제품 이미지
- CTA 버튼 (사전 신청하기, 알림 받기)
- 애니메이션 효과

### ProblemSection
- 현대인의 자세 문제점 통계
- 나쁜 자세 vs 좋은 자세 비교
- 2x2 그리드 레이아웃

### SolutionSection
- 제품 소개 및 핵심 기능
- 배경 이미지와 오버레이 텍스트
- 풀스크린 레이아웃

### PreOrderForm
- Netlify Forms 연동
- 별명, 이메일/전화번호 입력
- 연락처 방식 선택 기능

## 📱 반응형 디자인

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

모든 섹션이 다양한 화면 크기에서 최적화되어 표시됩니다.

## 🚀 배포

### Netlify 배포
1. GitHub 저장소와 연결
2. Build Command: `npm run build`
3. Publish Directory: `build`
4. Netlify Forms 자동 활성화

### 환경 변수
```env
REACT_APP_SITE_URL=https://your-domain.netlify.app
```

## 📊 성능 최적화

- **이미지 프리로딩**: 모든 리소스 로드 완료 후 렌더링
- **CSS 최적화**: 불필요한 스타일 제거
- **애니메이션 최적화**: GPU 가속 활용
- **번들 최적화**: 코드 스플리팅 적용

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

- **이메일**: contact@coreguard.com
- **웹사이트**: https://coreguard.netlify.app
- **GitHub**: https://github.com/your-username/turtle-neck-landing

---

**코어가드와 함께 건강한 자세를 만들어가세요! 🚀**