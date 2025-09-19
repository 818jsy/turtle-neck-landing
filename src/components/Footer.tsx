import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="brand-name">코어가드</h3>
          <p className="brand-description">
            당신의 건강한 자세를 지켜주는 스마트 센서
          </p>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 코어가드. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
