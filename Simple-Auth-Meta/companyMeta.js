const CDN_BASE = "https://cdn.jsdelivr.net/gh/Asertwice020/Assets-Hub";
const CDN_VERSION = "v1.0.0-beta";
const ROOT = `${CDN_BASE}@${CDN_VERSION}/Simple-Auth-Meta`;

const COMPANY = {
  name: "Your Company",
  url: "https://yourcompany.com",
  logo: `${ROOT}/assets/images/company-logo.svg`,
  slogan: "Your Company Slogan",
  description: "Your Company Description",
  
  headquarter_address: "Your Company Headquarters Address",
  contact_email: "contact@yourcompany.com",
  contact_phone: "+1 12345-67890",
  
  TYPOGRAPHY: {
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
    primary: "#6366f1",
    secondary: "#4f46e5",
    accent: "#ef4444"
  },
  
  COLORS: {
    primary: {
      light: "#818cf8",
      main: "#6366f1",
      dark: "#4f46e5",
      gradient: "linear-gradient(135deg, #6366f1, #4f46e5)"
    },
    secondary: {
      light: "#a5b4fc",
      main: "#818cf8",
      dark: "#6366f1"
    },
    success: {
      light: "#34d399",
      main: "#10b981",
      dark: "#059669",
      gradient: "linear-gradient(135deg, #10B981, #059669)"
    },
    warning: {
      light: "#fbbf24",
      main: "#f59e0b",
      dark: "#d97706",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)"
    },
    error: {
      light: "#f87171",
      main: "#ef4444",
      dark: "#dc2626",
      gradient: "linear-gradient(135deg, #ef4444, #dc2626)"
    },
    background: {
      light: "#ffffff",
      main: "#f9fafb",
      dark: "#f3f4f6",
      gradient: "linear-gradient(to bottom, #ffffff, #f5f7ff)"
    }
  },
  
  DEPARTMENTS: {
    SECURITY: {
      name: "Security Team",
      email: "security@yourcompany.com",
      signature: "The Security Team at Your Company"
    },
    SUPPORT: {
      name: "Support Team",
      email: "support@yourcompany.com",
      signature: "The Support Team at Your Company"
    },
  },
  
  SOCIALS: {
    FACEBOOK: {
      icon: `${ROOT}/assets/icons/facebook.svg`,
      url: "https://github.com/Asertwice020"
    },
    INSTAGRAM: {
      icon: `${ROOT}/assets/icons/instagram.svg`,
      url: "https://github.com/Asertwice020"
    },
    LINKEDIN: {
      icon: `${ROOT}/assets/icons/linkedin.svg`,
      url: "https://www.linkedin.com/in/sumit-saraswat-web-dev07/"
    },
    X: {
      icon: `${ROOT}/assets/icons/x.svg`,
      url: "https://x.com/sumit_bindass07"
    },
    YOUTUBE: {
      icon: `${ROOT}/assets/icons/youtube.svg`,
      url: "https://github.com/Asertwice020"
    },
  },
  
  COPYRIGHT: `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
  PRIVACY_POLICY_PAGE: "https://yourcompany.com/privacy",
  TERMS_OF_SERVICE_PAGE: 'https://yourcompany.com/terms',
  UNSUBSCRIBE: 'https://yourcompany.com/unsubscribe'
};

export default COMPANY