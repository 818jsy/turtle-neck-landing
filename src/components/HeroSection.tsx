import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import productImage from '../assets/product-hero.png';
import logoImage from '../assets/logo.png';
import './HeroSection.css';

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  return (
    <section className="hero-section">
      <div className="hero-header">
        <motion.div
          className="brand-logo"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={logoImage} 
            alt="코어가드 로고" 
            className="logo-image"
          />
          <span className="brand-name">CoreGuard</span>
        </motion.div>
      </div>
      
      <div className="hero-container">
        <div className="hero-main-content">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title">
              거북목, 이제 그만.
              <br />
              <span className="highlight">코어가드로 완벽한 자세 지키기</span>
            </h1>
            
            <p className="hero-subtitle">
              어깨와 목의 작은 변화도 감지, 올바른 순간에 알림으로 교정
            </p>
            
            <div className="hero-buttons">
              <motion.button
                className="cta-button primary"
                onClick={onCTAClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                사전 신청하기
              </motion.button>
              <motion.button
                className="cta-button secondary"
                onClick={onCTAClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                알림 받기
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
          <div className="product-showcase">
            <div className="product-image-container">
              <img 
                src={productImage} 
                alt="코어가드 디바이스 착용 모습" 
                className="product-image"
              />
              <div className="product-overlay">
                <motion.div
                  className="sensor-indicator"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Bell className="sensor-icon" />
                </motion.div>
              </div>
            </div>
            
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
