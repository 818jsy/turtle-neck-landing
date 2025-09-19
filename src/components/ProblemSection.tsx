import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Laptop, Smartphone } from 'lucide-react';
import badPostureImage from '../assets/bad.png';
import goodPostureImage from '../assets/good.png';
import './ProblemSection.css';

const ProblemSection: React.FC = () => {
  return (
    <section className="problem-section">
      <div className="section">
        <motion.div
          className="problem-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            현대인의 고질병, 거북목과 라운드 숄더
          </h2>
          <p className="section-subtitle">
            장시간 스마트폰, 노트북 사용으로 <span className="emphasis">거북목과 라운드 숄더</span>는 
            <br />
            현대인의 고질병이 되었습니다.
            <br />
            이는 단순 불편을 넘어, <span className="warning">목디스크·두통·피로</span>로 이어집니다.
          </p>
        </motion.div>

        <div className="problem-stats">
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="stat-icon">
              <Smartphone />
            </div>
            <div className="stat-number">8시간</div>
            <div className="stat-label">평균 스마트폰 사용시간</div>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="stat-icon">
              <Laptop />
            </div>
            <div className="stat-number">6시간</div>
            <div className="stat-label">평균 컴퓨터 사용시간</div>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="stat-icon">
              <AlertTriangle />
            </div>
            <div className="stat-number">80%</div>
            <div className="stat-label">거북목 증상 경험률</div>
          </motion.div>
        </div>

        <div className="posture-comparison">
          <motion.div
            className="comparison-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="posture-card bad-posture">
              <div className="posture-header">
                <h3>나쁜 자세</h3>
                <div className="warning-badge">위험</div>
              </div>
              <div className="posture-figure">
                <img 
                  src={badPostureImage} 
                  alt="나쁜 자세 예시" 
                  className="posture-image"
                />
              </div>
              <div className="posture-symptoms">
                <div className="symptoms-grid">
                  <div className="symptom">• 목과 어깨 통증</div>
                  <div className="symptom">• 두통과 어지러움</div>
                  <div className="symptom">• 목디스크 위험</div>
                  <div className="symptom">• 피로감 증가</div>
                </div>
              </div>
            </div>

            <div className="vs-divider">
              <div className="vs-text">VS</div>
            </div>

            <div className="posture-card good-posture">
              <div className="posture-header">
                <h3>올바른 자세</h3>
                <div className="success-badge">건강</div>
              </div>
              <div className="posture-figure">
                <img 
                  src={goodPostureImage} 
                  alt="올바른 자세 예시" 
                  className="posture-image"
                />
              </div>
              <div className="posture-benefits">
                <div className="benefits-grid">
                  <div className="benefit">• 자연스러운 곡선</div>
                  <div className="benefit">• 근육 긴장 완화</div>
                  <div className="benefit">• 집중력 향상</div>
                  <div className="benefit">• 에너지 효율성</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="problem-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="cta-text">
            하지만 <strong>의식적으로 자세를 바꾸는 것은 쉽지 않습니다.</strong>
            <br />
            습관이 되기 전까지는 <strong>지속적인 알림과 교정</strong>이 필요합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
