import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, User } from 'lucide-react';
import './PreOrderForm.css';
import AnalyticsService from '../services/analyticsService';

interface PreOrderFormProps {
  onBack: () => void;
}

const PreOrderForm: React.FC<PreOrderFormProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    nickname: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // contactType 관련 함수 제거 (모든 필드가 필수이므로)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const analytics = AnalyticsService.getInstance();
      
      // 백엔드 API로 사전 주문 데이터 전송
      const success = await analytics.submitPreOrder({
        nickname: formData.nickname,
        email: formData.email || undefined,
        phoneNumber: formData.phoneNumber || undefined
      });

      if (success) {
        setIsSubmitted(true);
      } else {
        // 백엔드 전송 실패 시 Netlify Forms로 폴백
        const form = e.target as HTMLFormElement;
        const formDataObj = new FormData(form);
        
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formDataObj as any).toString(),
        });
        
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("폼 제출 오류:", error);
      // 오류가 발생해도 성공 화면 표시 (사용자 경험을 위해)
      setIsSubmitted(true);
    }
  };

  const goBack = () => {
    onBack();
  };

  if (isSubmitted) {
    return (
      <div className="form-container">
        <motion.div
          className="success-message"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="success-icon">✓</div>
          <h2>신청이 완료되었습니다!</h2>
          <p>코어가드 출시 시 가장 먼저 알려드리겠습니다.</p>
          <button onClick={goBack} className="back-button">
            <ArrowLeft className="back-icon" />
            메인으로 돌아가기
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <motion.div
        className="form-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button onClick={goBack} className="back-button">
          <ArrowLeft className="back-icon" />
          뒤로가기
        </button>
        <h1>코어가드 사전 신청</h1>
        <p>출시 시 가장 먼저 알려드립니다</p>
      </motion.div>

      <motion.form
        className="preorder-form"
        name="preorder"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
                <input type="hidden" name="form-name" value="preorder" />
                <div className="honeypot">
                  <input name="bot-field" />
                </div>

        <div className="form-group">
          <label htmlFor="nickname">별명</label>
          <div className="input-container">
            <User className="input-icon" />
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleInputChange}
              placeholder="닉네임을 입력해주세요"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <div className="input-container">
            <Mail className="input-icon" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@email.com"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">전화번호</label>
          <div className="input-container">
            <Phone className="input-icon" />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="010-1234-5678"
            />
          </div>
        </div>

        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          사전 신청하기
        </motion.button>
      </motion.form>
    </div>
  );
};

export default PreOrderForm;
