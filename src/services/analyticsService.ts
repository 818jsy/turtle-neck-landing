const API_BASE_URL = 'https://core-guard-backend.vercel.app/api';

interface AnalyticsData {
  ctaClickCount: number;
  mainPageVisitCount: number;
  formSubmissionCount: number;
  timestamp: string;
}

interface PreOrderData {
  nickname: string;
  phoneNumber?: string | undefined;
  email?: string | undefined;
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
    this.sendPageViewToBackend();
  }

  public trackCTAClick(): void {
    this.analyticsData.ctaClickCount++;
    this.analyticsData.timestamp = new Date().toISOString();
    this.saveToLocalStorage();
    this.sendCTAClickToBackend();
  }

  public trackFormSubmission(): void {
    this.analyticsData.formSubmissionCount++;
    this.analyticsData.timestamp = new Date().toISOString();
    this.saveToLocalStorage();
    // 폼 제출은 별도 API로 처리되므로 여기서는 로컬 저장만
  }

  private async sendPageViewToBackend(): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/analytics/page-view`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageUrl: window.location.href,
          referrer: document.referrer || ''
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('페이지 방문 데이터가 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('페이지 방문 데이터 전송 실패:', error);
    }
  }

  private async sendCTAClickToBackend(): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/analytics/cta-click`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ctaId: 'main-cta',
          pageUrl: window.location.href
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('CTA 클릭 데이터가 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('CTA 클릭 데이터 전송 실패:', error);
    }
  }

  public async submitPreOrder(data: PreOrderData): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/forms/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: data.nickname,
          phoneNumber: data.phoneNumber || '.',
          email: data.email || '.',
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

  public async getAnalyticsStats(): Promise<any> {
    try {
      const response = await fetch(`${API_BASE_URL}/analytics/stats`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const stats = await response.json();
      console.log('분석 통계 데이터를 성공적으로 조회했습니다:', stats);
      return stats;
    } catch (error) {
      console.error('분석 통계 데이터 조회 실패:', error);
      return null;
    }
  }
}

export default AnalyticsService;
