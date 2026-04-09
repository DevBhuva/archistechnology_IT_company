// Website Personalization Engine for ArchiTechnology
// Implements dynamic content based on user behavior, location, and preferences

interface UserData {
  location?: string;
  referralSource?: string;
  visitedPages: string[];
  deviceType: 'mobile' | 'desktop' | 'tablet';
  isReturning: boolean;
  preferences?: {
    industry?: string;
    projectSize?: string;
    interests: string[];
  };
  sessionStart: number;
  totalVisits: number;
}

interface PersonalizedContent {
  heroTitle?: string;
  heroSubtitle?: string;
  featuredServices: string[];
  testimonials: string[];
  caseStudies: string[];
  ctaText?: string;
}

class PersonalizationEngine {
  private userData: UserData;
  private storageKey = 'architech_user_data';

  constructor() {
    this.userData = this.loadUserData();
    this.updateUserData();
  }

  private loadUserData(): UserData {
    const stored = localStorage.getItem(this.storageKey);
    const defaultData: UserData = {
      visitedPages: [],
      deviceType: this.detectDeviceType(),
      isReturning: false,
      sessionStart: Date.now(),
      totalVisits: 1
    };

    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...defaultData,
        ...parsed,
        isReturning: true,
        totalVisits: (parsed.totalVisits || 0) + 1,
        sessionStart: Date.now()
      };
    }

    return defaultData;
  }

  private updateUserData() {
    // Update location if not set
    if (!this.userData.location) {
      this.detectLocation();
    }

    // Update referral source
    if (!this.userData.referralSource) {
      this.userData.referralSource = this.detectReferralSource();
    }

    // Track current page
    const currentPage = window.location.pathname;
    if (!this.userData.visitedPages.includes(currentPage)) {
      this.userData.visitedPages.push(currentPage);
    }

    this.saveUserData();
  }

  private detectDeviceType(): 'mobile' | 'desktop' | 'tablet' {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  private detectLocation() {
    // Use IP geolocation or browser geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In production, use reverse geocoding service
          this.userData.location = 'User Location';
          this.saveUserData();
        },
        (error) => {
          // Fallback to IP-based location
          this.getUserLocationByIP();
        }
      );
    } else {
      this.getUserLocationByIP();
    }
  }

  private async getUserLocationByIP() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      this.userData.location = `${data.city}, ${data.region}`;
      this.saveUserData();
    } catch (error) {
      console.log('Location detection failed');
    }
  }

  private detectReferralSource(): string {
    const referrer = document.referrer;
    const utmSource = new URLSearchParams(window.location.search).get('utm_source');
    
    if (utmSource) return utmSource;
    if (referrer.includes('google')) return 'google';
    if (referrer.includes('linkedin')) return 'linkedin';
    if (referrer.includes('facebook')) return 'facebook';
    if (referrer.includes('twitter')) return 'twitter';
    if (referrer) return 'referral';
    return 'direct';
  }

  private saveUserData() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.userData));
  }

  // Personalization Logic
  public getPersonalizedContent(): PersonalizedContent {
    const content: PersonalizedContent = {
      featuredServices: [],
      testimonials: [],
      caseStudies: []
    };

    // Personalize based on referral source
    switch (this.userData.referralSource) {
      case 'google':
        content.heroTitle = "Found Us on Google?";
        content.heroSubtitle = "Discover why we're the top-rated AI architecture firm";
        content.ctaText = "Get Your Free Consultation";
        break;
      case 'linkedin':
        content.heroTitle = "Welcome LinkedIn Professionals";
        content.heroSubtitle = "B2B architecture solutions for forward-thinking companies";
        content.ctaText = "Schedule Enterprise Demo";
        break;
      case 'direct':
        content.heroTitle = "Welcome Back to ArchiTechnology";
        content.heroSubtitle = "Ready to start your next project?";
        break;
      default:
        content.heroTitle = "Future-Ready Architecture Powered by AI";
        content.heroSubtitle = "Revolutionary AI technology meets architectural excellence";
    }

    // Personalize based on visited pages
    if (this.userData.visitedPages.includes('/services')) {
      content.featuredServices = ['ai-design-optimization', 'smart-building-integration'];
    }
    if (this.userData.visitedPages.includes('/portfolio')) {
      content.caseStudies = ['smart-urban-tower', 'eco-residential'];
    }

    // Personalize for returning visitors
    if (this.userData.isReturning) {
      content.heroTitle = `Welcome Back! Ready for Your ${this.getOrdinal(this.userData.totalVisits)} Visit?`;
      if (this.userData.totalVisits > 3) {
        content.ctaText = "Let's Finally Get Started";
      }
    }

    // Device-specific personalization
    if (this.userData.deviceType === 'mobile') {
      content.ctaText = content.ctaText || "Call Now";
      content.featuredServices = content.featuredServices.slice(0, 3); // Show fewer on mobile
    }

    return content;
  }

  private getOrdinal(num: number): string {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const value = num % 100;
    return num + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
  }

  // A/B Testing
  public getVariant(testName: string): 'A' | 'B' | 'C' {
    const hash = this.simpleHash(this.userData.sessionStart.toString() + testName);
    const variants: ('A' | 'B' | 'C')[] = ['A', 'B', 'C'];
    return variants[hash % variants.length];
  }

  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  // Track user interactions
  public trackEvent(eventName: string, properties?: Record<string, any>) {
    const event = {
      name: eventName,
      timestamp: Date.now(),
      properties: properties || {},
      page: window.location.pathname
    };

    // Store in localStorage for now, could send to analytics service
    const events = JSON.parse(localStorage.getItem('architech_events') || '[]');
    events.push(event);
    localStorage.setItem('architech_events', JSON.stringify(events));

    // Update user preferences based on events
    this.updatePreferences(eventName, properties);
  }

  private updatePreferences(eventName: string, properties?: Record<string, any>) {
    if (!this.userData.preferences) {
      this.userData.preferences = { interests: [] };
    }

    // Infer interests from behavior
    if (eventName === 'service_viewed') {
      const service = properties?.service;
      if (service && !this.userData.preferences.interests.includes(service)) {
        this.userData.preferences.interests.push(service);
      }
    }

    if (eventName === 'portfolio_viewed') {
      const category = properties?.category;
      if (category && !this.userData.preferences.interests.includes(category)) {
        this.userData.preferences.interests.push(category);
      }
    }

    this.saveUserData();
  }

  // Get personalized recommendations
  public getRecommendations(): {
    services: string[];
    content: string[];
    nextSteps: string[];
  } {
    const interests = this.userData.preferences?.interests || [];
    const visitedPages = this.userData.visitedPages;

    const recommendations = {
      services: [] as string[],
      content: [] as string[],
      nextSteps: [] as string[]
    };

    // Service recommendations based on interests
    if (interests.includes('ai-design') || visitedPages.includes('/services')) {
      recommendations.services.push('3d-bim-modeling', 'vr-ar-visualization');
    }

    if (interests.includes('sustainability') || interests.includes('green-building')) {
      recommendations.services.push('sustainable-design-analysis');
    }

    // Content recommendations
    if (this.userData.deviceType === 'mobile') {
      recommendations.content.push('mobile-optimized-portfolio');
    }

    // Next steps based on behavior
    if (visitedPages.length > 2 && !visitedPages.includes('/contact')) {
      recommendations.nextSteps.push('Schedule a consultation');
    }

    if (this.userData.totalVisits > 2) {
      recommendations.nextSteps.push('Download our project guide');
    }

    return recommendations;
  }

  // Get user data for debugging/analytics
  public getUserData(): UserData {
    return { ...this.userData };
  }

  // Reset user data (for testing)
  public reset() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem('architech_events');
    this.userData = this.loadUserData();
  }
}

// React Hook for using personalization
export function usePersonalization() {
  const engine = new PersonalizationEngine();

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    engine.trackEvent(eventName, properties);
  };

  const getPersonalizedContent = () => {
    return engine.getPersonalizedContent();
  };

  const getVariant = (testName: string) => {
    return engine.getVariant(testName);
  };

  const getRecommendations = () => {
    return engine.getRecommendations();
  };

  const getUserData = () => {
    return engine.getUserData();
  };

  return {
    trackEvent,
    getPersonalizedContent,
    getVariant,
    getRecommendations,
    getUserData,
    reset: () => engine.reset()
  };
}

export default PersonalizationEngine;