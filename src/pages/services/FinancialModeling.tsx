
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart, Calculator, Target, CheckCircle, ArrowRight, DollarSign, PieChart, LineChart, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      description: "Comprehensive model linking Income Statement, Balance Sheet, and Cash Flow Statement for complete financial analysis and business decision-making.",
      useCases: ["Business valuation and assessment", "Investment analysis and planning", "Credit assessment and lending", "Strategic planning and forecasting"],
      icon: BarChart,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "DCF Valuation Model",
      description: "Discounted Cash Flow models for accurate business valuation and investment decision-making with detailed projections and scenario analysis.",
      useCases: ["Company valuation and worth assessment", "M&A analysis and due diligence", "Investment returns calculation", "Fair value assessment and pricing"],
      icon: TrendingUp,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Budget & Forecast Model",
      description: "Dynamic budgeting and forecasting models for operational planning and performance tracking with real-time updates and variance analysis.",
      useCases: ["Annual budgeting and planning", "Quarterly forecasts and updates", "Scenario planning and what-if analysis", "Variance analysis and performance tracking"],
      icon: Calculator,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Scenario Analysis Model",
      description: "Multi-scenario models for risk assessment and strategic decision-making under uncertainty with Monte Carlo simulations and sensitivity analysis.",
      useCases: ["Risk assessment and management", "Sensitivity analysis and testing", "What-if scenarios and planning", "Monte Carlo simulation and modeling"],
      icon: Target,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const services = [
    "Financial statement modeling and integration with live data feeds",
    "Cash flow forecasting and working capital analysis with trend predictions", 
    "Investment appraisal and ROI calculations with risk assessments",
    "Sensitivity and scenario analysis with detailed reporting",
    "Monte Carlo simulations for comprehensive risk modeling",
    "Management reporting dashboards with real-time KPI tracking"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <div className="bg-gradient-to-r from-green-900 to-green-800 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/business">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-green-300" />
          <h1 className="text-5xl font-bold mb-6">Financial Modeling Services</h1>
          <p className="text-xl text-green-100 mb-8">
            Advanced financial models for forecasting, valuation, budgeting, and strategic decision-making tailored for UAE businesses with comprehensive analysis.
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
              From simple budgeting tools to complex valuation models, we create bespoke financial models that drive informed business decisions with precision and clarity.
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
                  Build This Model
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
                  <h4 className="font-semibold text-gray-900">Advanced Analytics</h4>
                  <p className="text-sm text-gray-600">Deep data analysis and insights</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <LineChart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Predictive Forecasting</h4>
                  <p className="text-sm text-gray-600">Future trend modeling</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Business Valuation</h4>
                  <p className="text-sm text-gray-600">Accurate worth assessment</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Strategic Planning</h4>
                  <p className="text-sm text-gray-600">Decision support systems</p>
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
