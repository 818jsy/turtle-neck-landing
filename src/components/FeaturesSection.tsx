import React from 'react';
import { motion } from 'framer-motion';
import { Target, Bell, BarChart3, Shirt } from 'lucide-react';
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: '정확한 센서 측정',
      description: '1° 단위로 각도 감지',
      detail: '초정밀 센서로 목과 어깨의 미세한 각도 변화까지 정확히 감지합니다.'
    },
    {
      icon: Bell,
      title: '즉각 알림',
      description: '바른 자세로 돌아오게 리마인드',
      detail: '자세가 흐트러지는 순간 진동과 소리로 즉시 알림해드립니다.'
    },
    {
      icon: BarChart3,
      title: '앱 연동',
      description: '자세 패턴 리포트',
      detail: '스마트폰 앱을 통해 자세 데이터를 분석하고 개선 리포트를 제공합니다.'
    },
    {
      icon: Shirt,
      title: '가볍고 편안한 착용감',
      description: '가벼운 무게, 24시간 착용 가능',
      detail: '가벼운 무게와 인체공학적 디자인으로 하루 종일 편안하게 착용할 수 있습니다.'
    }
  ];

  return (
    <section className="features-section">
      <div className="section">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">왜 우리 제품을 선택해야 할까요?</h2>
          <p className="section-subtitle">
            정확한 센서 기술과 사용자 중심의 디자인으로 
            건강한 자세 습관을 만들어드립니다.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="feature-icon-container">
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <div className="icon-glow"></div>
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <p className="feature-detail">{feature.detail}</p>
              </div>
              
              <div className="feature-number">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
