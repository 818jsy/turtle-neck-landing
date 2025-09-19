import React from 'react';
import { motion } from 'framer-motion';
import './CTASection.css';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title">
            <div className="cta-line">이제 더 이상 자세 걱정 없이</div>
            <div className="cta-line highlight">스마트한 센서가 당신의 건강한 자세를 지켜드립니다</div>
          </h2>
          
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            지금 바로 예약하기
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
