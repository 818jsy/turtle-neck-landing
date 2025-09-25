const API_BASE_URL = 'https://core-guard-backend.vercel.app/api';

interface AnalyticsData {
  ctaClickCount: number;
  mainPageVisitCount: number;
  formSubmissionCount: number;
  timestamp: string;
}

interface PreOrderData {
  nickname: string;
  email?: string;
  phone?: string;
  contactType: 'email' | 'phone';
}

class AnalyticsService {
  private static instance: AnalyticsService;
  private analyticsData: AnalyticsData;

  private constructor() {
    this.analyticsData = this.loadFromLocalStorage();
  }

  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  private loadFromLocalStorage(): AnalyticsData {
    try {
      const stored = localStorage.getItem('core-guard-analytics');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('로컬 스토리지에서 분석 데이터 로드 실패:', error);
    }

    return {
      ctaClickCount: 0,
      mainPageVisitCount: 0,
      formSubmissionCount: 0,
      timestamp: new Date().toISOString()
    };
  }

  private saveToLocalStorage(): void {
    try {
      localStorage.setItem('core-guard-analytics', JSON.stringify(this.analyticsData));
    } catch (error) {
      console.error('로컬 스토리지에 분석 데이터 저장 실패:', error);
    }
  }

  public trackPageVisit(): void {
    this.analyticsData.mainPageVisitCount++;
    this.analyticsData.timestamp = new Date().toISOString();
    this.saveToLocalStorage();
    this.sendAnalyticsToBackend();
  }

  public trackCTAClick(): void {
    this.analyticsData.ctaClickCount++;
    this.analyticsData.timestamp = new Date().toISOString();
    this.saveToLocalStorage();
    this.sendAnalyticsToBackend();
  }

  public trackFormSubmission(): void {
    this.analyticsData.formSubmissionCount++;
    this.analyticsData.timestamp = new Date().toISOString();
    this.saveToLocalStorage();
    this.sendAnalyticsToBackend();
  }

  private async sendAnalyticsToBackend(): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/analytics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.analyticsData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('분석 데이터가 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('분석 데이터 전송 실패:', error);
      // 네트워크 오류 시에도 로컬에 저장된 데이터는 유지
    }
  }

  public async submitPreOrder(data: PreOrderData): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/preorder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // 폼 제출 성공 시 추적
      this.trackFormSubmission();
      return true;
    } catch (error) {
      console.error('사전 주문 제출 실패:', error);
      return false;
    }
  }

  public getAnalyticsData(): AnalyticsData {
    return { ...this.analyticsData };
  }
}

export default AnalyticsService;
