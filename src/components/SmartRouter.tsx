
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SmartRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Smart routing logic
    const determineDefaultRoute = () => {
      // Check if user has a stored preference
      const storedPreference = localStorage.getItem('financebuddy_user_type');
      if (storedPreference === 'personal' || storedPreference === 'business') {
        return `/${storedPreference}`;
      }

      // Check time of day (business hours logic)
      const currentHour = new Date().getHours();
      const isBusinessHours = currentHour >= 9 && currentHour <= 17;

      // Check if it's weekday
      const currentDay = new Date().getDay();
      const isWeekday = currentDay >= 1 && currentDay <= 5;

      // Default to business during business hours on weekdays, otherwise personal
      if (isBusinessHours && isWeekday) {
        return '/business';
      } else {
        return '/personal';
      }
    };

    const defaultRoute = determineDefaultRoute();
    navigate(defaultRoute, { replace: true });
  }, [navigate]);

  return null;
};

export default SmartRouter;
