
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { BarChart, DollarSign, TrendingDown, Target, CheckCircle, ArrowRight, PieChart, LineChart, Calculator } from "lucide-react";
import { useState } from "react";

const CostOptimization = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleOptimizeCosts = (optimizationType: string) => {
    setSelectedService(optimizationType);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const optimizationAreas = [
    {
      title: "Expense Analysis & Reduction Strategies",
      description: "Comprehensive analysis of your business expenses to identify cost-saving opportunities and implement strategic reduction plans.",
      benefits: ["15-30% average cost reduction", "Detailed expense categorization", "ROI tracking and reporting", "Ongoing monitoring systems"],
      icon: BarChart,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Supply Chain Cost Optimization",
      description: "Streamline your supply chain operations to reduce procurement costs, improve efficiency, and enhance vendor relationships.",
      benefits: ["Vendor negotiation strategies", "Inventory optimization", "Logistics cost reduction", "Quality improvement programs"],
      icon: TrendingDown,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Energy Efficiency & Sustainability",
      description: "Implement energy-saving solutions and sustainable practices to reduce operational costs while supporting environmental goals.",
      benefits: ["20-40% energy cost savings", "Green certification support", "Sustainable practice implementation", "Carbon footprint reduction"],
      icon: Target,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Technology Cost Management",
      description: "Optimize your technology investments by eliminating redundancies, renegotiating contracts, and implementing cost-effective solutions.",
      benefits: ["Software license optimization", "Cloud cost management", "IT infrastructure rightsizing", "Automation cost savings"],
      icon: Calculator,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const services = [
    "Comprehensive expense analysis and benchmarking",
    "Strategic cost reduction planning and implementation",
    "Vendor management and contract negotiation",
    "Process optimization and efficiency improvements",
    "Technology cost analysis and optimization",
    "Sustainability and energy efficiency programs"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <BarChart className="w-16 h-16 mx-auto mb-6 text-red-300" />
          <h1 className="text-5xl font-bold mb-6">Cost Optimization Services</h1>
          <p className="text-xl text-red-100 mb-8">
            Identify and implement strategic cost reduction initiatives to improve profitability without compromising quality or growth.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-900 hover:bg-red-50"
            onClick={() => handleOptimizeCosts("Cost Optimization Consultation")}
          >
            Optimize Costs
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Cost Optimization Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help businesses achieve sustainable cost reductions while maintaining operational excellence and growth potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {optimizationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-lg ${area.color} flex items-center justify-center mb-4`}>
                  <area.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {area.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => handleOptimizeCosts(area.title)}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-red-50 rounded-2xl p-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Maximize Your Profitability</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Strategic cost reduction without compromising quality or growth potential. Our proven methodology delivers measurable results.
                </p>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700"
                    onClick={() => handleOptimizeCosts("Complete Cost Optimization Program")}
                  >
                    Start Cost Analysis
                    <DollarSign className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <PieChart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Cost Analysis</h4>
                  <p className="text-sm text-gray-600">Detailed breakdown</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <LineChart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Trend Tracking</h4>
                  <p className="text-sm text-gray-600">Performance monitoring</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Target Setting</h4>
                  <p className="text-sm text-gray-600">Goal achievement</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <DollarSign className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Savings Tracking</h4>
                  <p className="text-sm text-gray-600">ROI measurement</p>
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

export default CostOptimization;
