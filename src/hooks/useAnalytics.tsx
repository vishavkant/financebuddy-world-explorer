
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  initGA, 
  trackPageView, 
  trackTimeOnPage, 
  trackScrollDepth,
  trackElementInteraction 
} from '@/utils/analytics';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA on first load
    initGA();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    trackPageView(window.location.href, document.title);
    
    // Track time spent on each page
    const timeTracker = trackTimeOnPage();
    
    // Track scroll depth
    const scrollTracker = trackScrollDepth();

    // Cleanup function
    return () => {
      timeTracker();
      scrollTracker();
    };
  }, [location]);

  // Enhanced click tracking for all interactive elements
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.role === 'button') {
        trackElementInteraction(target, 'click');
      }
    };

    const handleFormSubmit = (event: SubmitEvent) => {
      const target = event.target as HTMLFormElement;
      trackElementInteraction(target, 'form_submit');
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleFormSubmit);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, []);
};
