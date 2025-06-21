
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, TrendingUp, Globe, ShoppingCart } from "lucide-react";

interface ECommerceSupportServicesProps {
  supportServices: string[];
  onGetStarted: (setupType: string) => void;
}

const ECommerceSupportServices = ({ supportServices, onGetStarted }: ECommerceSupportServicesProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Support Services</h3>
          <ul className="space-y-4">
            {supportServices.map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-cyan-600 hover:bg-cyan-700"
              onClick={() => onGetStarted("Complete E-Commerce Package")}
            >
              Get Full Package
              <ShoppingCart className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-cyan-50 rounded-xl p-6 text-center">
            <Zap className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900">Fast Setup</h4>
            <p className="text-sm text-gray-600">Quick deployment</p>
          </div>
          <div className="bg-cyan-50 rounded-xl p-6 text-center">
            <Shield className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900">Secure Platform</h4>
            <p className="text-sm text-gray-600">SSL & PCI compliance</p>
          </div>
          <div className="bg-cyan-50 rounded-xl p-6 text-center">
            <TrendingUp className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900">Growth Ready</h4>
            <p className="text-sm text-gray-600">Scalable solutions</p>
          </div>
          <div className="bg-cyan-50 rounded-xl p-6 text-center">
            <Globe className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900">UAE Market</h4>
            <p className="text-sm text-gray-600">Local expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceSupportServices;
