
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { BarChart, DollarSign, TrendingDown, Target, CheckCircle, ArrowRight, PieChart, LineChart, Calculator, ArrowLeft, CreditCard } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      description: "Comprehensive analysis of your business expenses to identify cost-saving opportunities and implement strategic reduction plans with measurable results.",
      benefits: ["15-30% average cost reduction potential", "Detailed expense categorization and analysis", "ROI tracking and comprehensive reporting", "Ongoing monitoring and optimization systems"],
      icon: BarChart,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Supply Chain Cost Optimization",
      description: "Streamline your supply chain operations to reduce procurement costs, improve efficiency, and enhance vendor relationships for better profitability.",
      benefits: ["Strategic vendor negotiation and management", "Inventory optimization and cost reduction", "Logistics cost reduction strategies", "Quality improvement and efficiency programs"],
      icon: TrendingDown,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Point of Sales - Credit Card Commission Savings",
      description: "Restructure your Point of Sales systems and negotiate better credit card processing rates to significantly reduce transaction costs and improve profit margins.",
      benefits: ["Credit card processing fee optimization", "POS system cost analysis and restructuring", "Payment gateway comparison and selection", "Transaction cost reduction strategies"],
      icon: CreditCard,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Technology Cost Management",
      description: "Optimize your technology investments by eliminating redundancies, renegotiating contracts, and implementing cost-effective solutions without compromising performance.",
      benefits: ["Software license optimization and consolidation", "Cloud infrastructure cost management", "IT infrastructure rightsizing and optimization", "Automation implementation for cost savings"],
      icon: Calculator,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const services = [
    "Comprehensive expense analysis and industry benchmarking",
    "Strategic cost reduction planning and implementation with timelines",
    "Vendor management and contract negotiation expertise",
    "Process optimization and operational efficiency improvements",
    "Technology cost analysis and optimization strategies",
    "POS system restructuring and credit card commission reduction"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <div className="bg-gradient-to-r from-red-900 to-red-800 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/business">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <BarChart className="w-16 h-16 mx-auto mb-6 text-red-300" />
          <h1 className="text-5xl font-bold mb-6">Cost Optimization Services</h1>
          <p className="text-xl text-red-100 mb-8">
            Identify and implement strategic cost reduction initiatives to improve profitability without compromising quality or growth potential with proven methodologies.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-900 hover:bg-red-50"
            onClick={() => handleOptimizeCosts("Cost Optimization Consultation")}
          >
            Optimize Costs Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Cost Optimization Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help businesses achieve sustainable cost reductions while maintaining operational excellence and growth potential through strategic analysis and implementation.
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
                  Start Optimization
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-red-50 rounded-2xl p-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Maximize Your Profitability</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Strategic cost reduction without compromising quality or growth potential. Our proven methodology delivers measurable results with sustainable improvements.
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
                  <p className="text-sm text-gray-600">Detailed breakdown and insights</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <LineChart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Trend Tracking</h4>
                  <p className="text-sm text-gray-600">Performance monitoring systems</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Target Setting</h4>
                  <p className="text-sm text-gray-600">Strategic goal achievement</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <DollarSign className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Savings Tracking</h4>
                  <p className="text-sm text-gray-600">ROI measurement and reporting</p>
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
