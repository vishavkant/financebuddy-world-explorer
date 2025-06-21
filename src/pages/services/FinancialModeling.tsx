
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart, Calculator, Target, CheckCircle, ArrowRight } from "lucide-react";

const FinancialModeling = () => {
  const services = [
    "Scenario Analysis & Sensitivity Testing",
    "Budgeting & Forecasting Models", 
    "Investment Analysis & Valuation",
    "Financial Planning & Strategy",
    "Risk Assessment & Management",
    "Performance Monitoring & KPIs"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-green-300" />
          <h1 className="text-5xl font-bold mb-6">Financial Modeling</h1>
          <p className="text-xl text-green-100 mb-8">
            Advanced financial models for forecasting, budgeting, and strategic decision-making.
          </p>
          <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
            Build Your Model
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Financial Modeling</h2>
              <p className="text-lg text-gray-600 mb-8">
                Make informed business decisions with our sophisticated financial modeling and analysis services.
              </p>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <BarChart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Analytics</h3>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Calculator className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Modeling</h3>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Strategy</h3>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Growth</h3>
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

export default FinancialModeling;
