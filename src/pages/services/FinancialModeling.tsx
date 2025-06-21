
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart, Calculator, Target, CheckCircle, ArrowRight, DollarSign, PieChart, LineChart } from "lucide-react";
import { useState } from "react";

const FinancialModeling = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleBuildModel = (modelType: string) => {
    setSelectedService(modelType);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const modelTypes = [
    {
      title: "3-Statement Financial Model",
      description: "Comprehensive model linking Income Statement, Balance Sheet, and Cash Flow Statement for complete financial analysis.",
      useCases: ["Business valuation", "Investment analysis", "Credit assessment", "Strategic planning"],
      icon: BarChart,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "DCF Valuation Model",
      description: "Discounted Cash Flow models for accurate business valuation and investment decision-making.",
      useCases: ["Company valuation", "M&A analysis", "Investment returns", "Fair value assessment"],
      icon: TrendingUp,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Budget & Forecast Model",
      description: "Dynamic budgeting and forecasting models for operational planning and performance tracking.",
      useCases: ["Annual budgeting", "Quarterly forecasts", "Scenario planning", "Variance analysis"],
      icon: Calculator,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Scenario Analysis Model",
      description: "Multi-scenario models for risk assessment and strategic decision-making under uncertainty.",
      useCases: ["Risk assessment", "Sensitivity analysis", "What-if scenarios", "Monte Carlo simulation"],
      icon: Target,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const services = [
    "Financial statement modeling and integration",
    "Cash flow forecasting and working capital analysis", 
    "Investment appraisal and ROI calculations",
    "Sensitivity and scenario analysis",
    "Monte Carlo simulations for risk modeling",
    "Management reporting dashboards"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-green-300" />
          <h1 className="text-5xl font-bold mb-6">Financial Modeling Services</h1>
          <p className="text-xl text-green-100 mb-8">
            Advanced financial models for forecasting, valuation, budgeting, and strategic decision-making tailored for UAE businesses.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-900 hover:bg-green-50"
            onClick={() => handleBuildModel("Custom Financial Model")}
          >
            Build Your Model
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Types of Financial Models We Build</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From simple budgeting tools to complex valuation models, we create bespoke financial models that drive informed business decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {modelTypes.map((model, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-lg ${model.color} flex items-center justify-center mb-4`}>
                  <model.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Common Use Cases:</h4>
                  <ul className="space-y-2">
                    {model.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => handleBuildModel(model.title)}
                >
                  Get This Model
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-2xl p-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Modeling Services</h3>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => handleBuildModel("Professional Financial Modeling Service")}
                  >
                    Start Your Project
                    <Calculator className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <PieChart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Analytics</h4>
                  <p className="text-sm text-gray-600">Advanced data analysis</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <LineChart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Forecasting</h4>
                  <p className="text-sm text-gray-600">Predictive modeling</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Valuation</h4>
                  <p className="text-sm text-gray-600">Business worth assessment</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Strategy</h4>
                  <p className="text-sm text-gray-600">Decision support</p>
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

export default FinancialModeling;
