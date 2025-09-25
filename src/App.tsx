import React, { useState, useEffect } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import PreOrderForm from './components/PreOrderForm';
import AnalyticsService from './services/analyticsService';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadResources = async () => {
      try {
        // 이미지 리소스 프리로드
        const imagePromises = [
          import('./assets/logo.png'),
          import('./assets/product-hero.png'),
          import('./assets/background.png'),
          import('./assets/posture-bad.png'),
          import('./assets/posture-good.png')
        ];

        // 모든 이미지 로드 완료 대기
        await Promise.all(imagePromises);

        // 최소 로딩 시간 보장 (UX를 위한 최소 1초)
        await new Promise(resolve => setTimeout(resolve, 0));

        setIsLoading(false);
      } catch (error) {
        console.error('리소스 로딩 중 오류:', error);
        // 오류가 발생해도 앱은 렌더링
        setIsLoading(false);
      }
    };

    loadResources();
  }, []);

  useEffect(() => {
    // 메인페이지 접속 시 분석 데이터 추적
    if (!isLoading && !showForm) {
      const analytics = AnalyticsService.getInstance();
      analytics.trackPageVisit();
    }
  }, [isLoading, showForm]);

  const handleCTAClick = () => {
    // CTA 버튼 클릭 추적
    const analytics = AnalyticsService.getInstance();
    analytics.trackCTAClick();
    setShowForm(true);
  };

  const handleBackToMain = () => {
    setShowForm(false);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <h2 className="loading-title">코어가드</h2>
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
          <p className="loading-text">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (showForm) {
    return <PreOrderForm onBack={handleBackToMain} />;
  }

  return (
    <div className="App">
      <HeroSection onCTAClick={handleCTAClick} />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <CTASection onCTAClick={handleCTAClick} />
      <Footer />
    </div>
  );
}

export default App;