
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface ECommerceService {
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  color: string;
  deliveryTime: string;
}

interface ECommerceServicesProps {
  services: ECommerceService[];
  onGetStarted: (setupType: string) => void;
}

const ECommerceServices = ({ services, onGetStarted }: ECommerceServicesProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our E-Commerce Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we provide everything you need to build a successful online business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="mb-4">
                <div className="bg-cyan-50 rounded-lg p-3 mb-4">
                  <span className="text-cyan-800 font-semibold">Delivery: {service.deliveryTime}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                className="w-full bg-cyan-600 hover:bg-cyan-700"
                onClick={() => onGetStarted(service.title)}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ECommerceServices;
