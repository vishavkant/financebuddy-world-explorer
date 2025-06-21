
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { PiggyBank, Target, Calculator, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const FinancialPlanning = () => {
  const planningServices = [
    "Personal budgeting and expense management",
    "Emergency fund planning and setup",
    "Debt consolidation and management strategies",
    "Retirement planning and pension optimization",
    "Education funding and savings plans",
    "Tax planning and optimization strategies"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PiggyBank className="w-16 h-16 mx-auto mb-6 text-orange-300" />
          <h1 className="text-5xl font-bold mb-6">Financial Planning</h1>
          <p className="text-xl text-orange-100 mb-8">
            Secure your financial future with comprehensive planning and strategic guidance.
          </p>
          <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-50">
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
                Take control of your financial future with our personalized planning services designed to help you achieve your goals.
              </p>
              <ul className="space-y-4">
                {planningServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Target className="w-8 h-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Goal Setting</h4>
                    <p className="text-gray-600 text-sm">Define clear, achievable financial objectives</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Calculator className="w-8 h-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Analysis</h4>
                    <p className="text-gray-600 text-sm">Comprehensive review of your current situation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <TrendingUp className="w-8 h-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategy</h4>
                    <p className="text-gray-600 text-sm">Customized plan to achieve your goals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default FinancialPlanning;
