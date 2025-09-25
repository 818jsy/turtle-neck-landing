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
  const [contactType, setContactType] = useState<'email' | 'phone'>('email');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactTypeChange = (type: 'email' | 'phone') => {
    setContactType(type);
    // 연락처 타입 변경 시 다른 필드 초기화
    setFormData(prev => ({
      ...prev,
      email: type === 'email' ? prev.email : '',
      phoneNumber: type === 'phone' ? prev.phoneNumber : ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 필수 필드 검증
    if (!formData.nickname.trim()) {
      alert('별명을 입력해주세요.');
      return;
    }
    
    if (contactType === 'email' && !formData.email.trim()) {
      alert('이메일을 입력해주세요.');
      return;
    }
    
    if (contactType === 'phone' && !formData.phoneNumber.trim()) {
      alert('전화번호를 입력해주세요.');
      return;
    }
    
    try {
      const analytics = AnalyticsService.getInstance();
      
      // 백엔드 API로 사전 주문 데이터 전송
      const success = await analytics.submitPreOrder({
        nickname: formData.nickname,
        email: contactType === 'email' ? formData.email : '',
        phoneNumber: contactType === 'phone' ? formData.phoneNumber : ''
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
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>연락처 선택</label>
          <div className="contact-type-selector">
            <button
              type="button"
              className={`contact-type-btn ${contactType === 'email' ? 'active' : ''}`}
              onClick={() => handleContactTypeChange('email')}
            >
              <Mail className="btn-icon" />
              이메일
            </button>
            <button
              type="button"
              className={`contact-type-btn ${contactType === 'phone' ? 'active' : ''}`}
              onClick={() => handleContactTypeChange('phone')}
            >
              <Phone className="btn-icon" />
              전화번호
            </button>
          </div>
        </div>

        {contactType === 'email' && (
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
                required
              />
            </div>
          </div>
        )}

        {contactType === 'phone' && (
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
                required
              />
            </div>
          </div>
        )}

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
