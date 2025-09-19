import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Bell, Smartphone, BarChart3, Shield, Zap } from 'lucide-react';
import backgroundImage from '../assets/background.png';
import './SolutionSection.css';

const SolutionSection: React.FC = () => {
  return (
    <section className="solution-section">
      <div className="section">
        <motion.div
          className="solution-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="header-background">
            <img 
              src={backgroundImage} 
              alt="배경 이미지" 
              className="background-image"
            />
            <div className="header-overlay">
              <h2 className="section-title">
                당신의 자세를 실시간으로<br />
                지켜주는 '코어가드'
              </h2>
              <p className="section-subtitle">
                초소형 센서로 목과 어깨의 각도를 정확히 감지하고,<br />
                자세가 흐트러지는 순간 즉시 알림으로 교정해드립니다.
              </p>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default SolutionSection;
