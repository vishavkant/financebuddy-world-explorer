
// Comprehensive Google Analytics 4 setup with enhanced tracking
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'; // Replace with your actual GA4 ID

// Initialize Google Analytics
export const initGA = () => {
  // Create script tag for gtag
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  // Configure GA4
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
    // Enhanced measurement settings
    enhanced_measurement: {
      scrolls: true,
      outbound_clicks: true,
      site_search: true,
      video_engagement: true,
      file_downloads: true,
    },
    // Cookie settings
    cookie_flags: 'SameSite=None;Secure',
    anonymize_ip: true,
  });

  console.log('Google Analytics 4 initialized');
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: title || document.title,
      page_location: url,
    });
    
    window.gtag('event', 'page_view', {
      page_title: title || document.title,
      page_location: url,
      page_path: new URL(url).pathname,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'engagement',
      event_label: parameters?.label || '',
      value: parameters?.value || 0,
      ...parameters,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, formData?: any) => {
  trackEvent('form_submit', {
    event_category: 'form',
    form_name: formName,
    form_data: JSON.stringify(formData),
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('click', {
    event_category: 'button',
    button_name: buttonName,
    click_location: location || window.location.pathname,
  });
};

// Track service page visits
export const trackServiceView = (serviceName: string, serviceType: 'personal' | 'business') => {
  trackEvent('service_view', {
    event_category: 'service',
    service_name: serviceName,
    service_type: serviceType,
    page_location: window.location.href,
  });
};

// Track time spent on page
export const trackTimeOnPage = () => {
  const startTime = Date.now();
  
  const handleBeforeUnload = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackEvent('time_on_page', {
      event_category: 'engagement',
      time_spent_seconds: timeSpent,
      page_path: window.location.pathname,
    });
  };

  window.addEventListener('beforeunload', handleBeforeUnload);
  
  // Also track when user becomes inactive
  let lastActivity = Date.now();
  const handleActivity = () => {
    lastActivity = Date.now();
  };

  ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
    document.addEventListener(event, handleActivity, true);
  });

  // Check for inactivity every 30 seconds
  const inactivityTimer = setInterval(() => {
    if (Date.now() - lastActivity > 300000) { // 5 minutes of inactivity
      const timeSpent = Math.round((lastActivity - startTime) / 1000);
      trackEvent('session_timeout', {
        event_category: 'engagement',
        active_time_seconds: timeSpent,
        page_path: window.location.pathname,
      });
      clearInterval(inactivityTimer);
    }
  }, 30000);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    clearInterval(inactivityTimer);
  };
};

// Track scroll depth
export const trackScrollDepth = () => {
  let maxScroll = 0;
  const milestones = [25, 50, 75, 90, 100];
  const triggered = new Set();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
    }

    milestones.forEach(milestone => {
      if (scrollPercent >= milestone && !triggered.has(milestone)) {
        triggered.add(milestone);
        trackEvent('scroll_depth', {
          event_category: 'engagement',
          scroll_depth: milestone,
          page_path: window.location.pathname,
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Track user interactions with specific elements
export const trackElementInteraction = (element: HTMLElement, interactionType: string) => {
  const elementInfo = {
    tag: element.tagName.toLowerCase(),
    id: element.id || '',
    className: element.className || '',
    text: element.textContent?.substring(0, 100) || '',
  };

  trackEvent('element_interaction', {
    event_category: 'interaction',
    interaction_type: interactionType,
    element_info: JSON.stringify(elementInfo),
    page_path: window.location.pathname,
  });
};
