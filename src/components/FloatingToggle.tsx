
import { Button } from "@/components/ui/button";
import { Building2, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const FloatingToggle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentType, setCurrentType] = useState<'personal' | 'business'>('personal');

  useEffect(() => {
    if (location.pathname.includes('/business') || location.pathname.includes('/services/business-insurance') || 
        location.pathname.includes('/services/financial-modeling') || location.pathname.includes('/services/process-automation') ||
        location.pathname.includes('/services/cost-optimization') || location.pathname.includes('/services/company-setup') ||
        location.pathname.includes('/services/bookkeeping') || location.pathname.includes('/services/ecommerce-setup')) {
      setCurrentType('business');
    } else if (location.pathname.includes('/personal') || location.pathname.includes('/services/mortgage-loans') ||
               location.pathname.includes('/services/investment-planning') || location.pathname.includes('/services/personal-insurance') ||
               location.pathname.includes('/services/financial-planning')) {
      setCurrentType('personal');
    }
  }, [location.pathname]);

  const toggleUserType = () => {
    const newType = currentType === 'personal' ? 'business' : 'personal';
    setCurrentType(newType);
    navigate(`/${newType}`, { replace: true });
    localStorage.setItem('financebuddy_user_type', newType);
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <Button
        onClick={toggleUserType}
        className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 shadow-2xl border-0 rounded-2xl hover:shadow-3xl transition-all duration-300 text-white hover:scale-105 group backdrop-blur-sm"
        size="lg"
      >
        <div className="flex items-center gap-2 mb-1">
          {currentType === 'personal' ? (
            <>
              <Building2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">Switch to</span>
            </>
          ) : (
            <>
              <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">Switch to</span>
            </>
          )}
        </div>
        <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
          {currentType === 'personal' ? 'Business' : 'Personal'}
        </span>
      </Button>
    </div>
  );
};

export default FloatingToggle;
