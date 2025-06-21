
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { BarChart, DollarSign, TrendingDown, Target, CheckCircle, ArrowRight } from "lucide-react";

const CostOptimization = () => {
  const optimizationAreas = [
    "Expense Analysis & Reduction Strategies",
    "Supply Chain Cost Optimization",
    "Energy Efficiency & Sustainability",
    "Tax Planning & Compliance",
    "Operational Efficiency Improvements",
    "Technology Cost Management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <BarChart className="w-16 h-16 mx-auto mb-6 text-red-300" />
          <h1 className="text-5xl font-bold mb-6">Cost Optimization</h1>
          <p className="text-xl text-red-100 mb-8">
            Identify and implement strategies to reduce costs and improve profitability.
          </p>
          <Button size="lg" className="bg-white text-red-900 hover:bg-red-50">
            Optimize Costs
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Maximize Your Profitability</h2>
              <p className="text-lg text-gray-600 mb-8">
                Strategic cost reduction without compromising quality or growth potential.
              </p>
              <ul className="space-y-4">
                {optimizationAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-xl p-6 text-center">
                <TrendingDown className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Reduce Costs</h3>
              </div>
              <div className="bg-red-50 rounded-xl p-6 text-center">
                <DollarSign className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Save Money</h3>
              </div>
              <div className="bg-red-50 rounded-xl p-6 text-center">
                <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Hit Targets</h3>
              </div>
              <div className="bg-red-50 rounded-xl p-6 text-center">
                <BarChart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Track ROI</h3>
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

export default CostOptimization;
