
import { Button } from "@/components/ui/button";
import { Building2, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const FloatingToggle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentType, setCurrentType] = useState<'personal' | 'business'>('personal');

  useEffect(() => {
    if (location.pathname.includes('/business')) {
      setCurrentType('business');
    } else if (location.pathname.includes('/personal')) {
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
        className="flex flex-col items-center gap-2 p-4 bg-white shadow-2xl border-2 border-gray-200 rounded-2xl hover:shadow-3xl transition-all duration-300 text-gray-700 hover:text-white group"
        size="lg"
      >
        <div className="flex items-center gap-2 mb-1">
          {currentType === 'personal' ? (
            <>
              <Building2 className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
              <span className="text-xs font-medium">Switch to</span>
            </>
          ) : (
            <>
              <User className="w-5 h-5 group-hover:text-green-500 transition-colors" />
              <span className="text-xs font-medium">Switch to</span>
            </>
          )}
        </div>
        <span className="text-sm font-bold">
          {currentType === 'personal' ? 'Business' : 'Personal'}
        </span>
      </Button>
    </div>
  );
};

export default FloatingToggle;
