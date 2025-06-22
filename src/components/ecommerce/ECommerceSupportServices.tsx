
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface ECommerceSupportServicesProps {
  supportServices: string[];
  onGetStarted: (setupType: string) => void;
}

const ECommerceSupportServices = ({ supportServices, onGetStarted }: ECommerceSupportServicesProps) => {
  return (
    <div className="bg-cyan-50 rounded-2xl p-8 mb-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Marketplace Setup & Support Services</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {supportServices.map((service, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{service}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button 
          size="lg" 
          className="bg-cyan-600 hover:bg-cyan-700"
          onClick={() => onGetStarted("Marketplace Setup & Support Services")}
        >
          Get Complete Support
        </Button>
      </div>
    </div>
  );
};

export default ECommerceSupportServices;
