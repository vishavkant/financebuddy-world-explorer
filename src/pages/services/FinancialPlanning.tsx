
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { PiggyBank, Target, Calculator, TrendingUp, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FinancialPlanning = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleGetConsultation = (serviceType: string) => {
    setSelectedService(serviceType);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const planningServices = [
    "Personal budgeting and comprehensive expense management strategies",
    "Emergency fund planning and setup with strategic savings approaches",
    "Debt consolidation and management strategies for financial freedom",
    "Retirement planning and pension optimization for long-term security",
    "Education funding and savings plans for children's future",
    "Tax planning and optimization strategies for UAE residents"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <div className="bg-gradient-to-r from-orange-900 to-orange-800 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/personal">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PiggyBank className="w-16 h-16 mx-auto mb-6 text-orange-300" />
          <h1 className="text-5xl font-bold mb-6">Financial Planning Services</h1>
          <p className="text-xl text-orange-100 mb-8">
            Secure your financial future with comprehensive planning and strategic guidance tailored for UAE residents.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-900 hover:bg-orange-50"
            onClick={() => handleGetConsultation("Financial Planning Consultation")}
          >
            Plan Your Future
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Financial Planning</h2>
              <p className="text-lg text-gray-600 mb-8">
                Take control of your financial future with our personalized planning services designed to help you achieve your goals with strategic guidance and expert support.
              </p>
              <ul className="space-y-4">
                {planningServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700"
                  onClick={() => handleGetConsultation("Complete Financial Planning Service")}
                >
                  Get Consultation
                  <PiggyBank className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Strategic Approach</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Target className="w-8 h-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Goal Setting & Planning</h4>
                    <p className="text-gray-600 text-sm">Define clear, achievable financial objectives with strategic roadmaps</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Calculator className="w-8 h-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Financial Analysis</h4>
                    <p className="text-gray-600 text-sm">Comprehensive review of your current financial situation and opportunities</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <TrendingUp className="w-8 h-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategic Implementation</h4>
                    <p className="text-gray-600 text-sm">Customized action plan to achieve your financial goals with ongoing support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection selectedService={selectedService} />
      <Footer />
      <FloatingToggle />
    </div>
  );
};

export default FinancialPlanning;
