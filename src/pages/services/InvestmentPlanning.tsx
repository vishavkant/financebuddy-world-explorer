
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, PieChart, DollarSign, CheckCircle, ArrowRight, BarChart, LineChart, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const InvestmentPlanning = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleGetConsultation = (serviceType: string) => {
    setSelectedService(serviceType);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { 
      icon: PieChart, 
      title: "Indian Equity Market Investment", 
      desc: "Comprehensive guidance on investing in Indian stock markets with growth potential analysis and strategic portfolio management.",
      details: [
        "Fundamental analysis of Indian companies and sectors",
        "Growth opportunity identification in emerging markets",
        "Diversified portfolio construction strategies",
        "Risk management and timing strategies"
      ]
    },
    { 
      icon: Target, 
      title: "Goal-Based Investment Planning", 
      desc: "Strategic investment planning aligned with your financial objectives and risk tolerance for sustainable wealth creation.",
      details: [
        "Personalized investment strategy development",
        "Long-term wealth creation planning",
        "Risk assessment and tolerance analysis",
        "Regular portfolio review and rebalancing"
      ]
    },
    { 
      icon: TrendingUp, 
      title: "Market Analysis & Research", 
      desc: "Expert insights on Indian equity markets, sector analysis, and investment opportunities with comprehensive research support.",
      details: [
        "In-depth market research and analysis",
        "Sector rotation and timing strategies",
        "Economic trend analysis and forecasting",
        "Investment opportunity identification"
      ]
    },
    { 
      icon: DollarSign, 
      title: "Portfolio Optimization", 
      desc: "Advanced portfolio management strategies to maximize returns while minimizing risks through strategic asset allocation.",
      details: [
        "Strategic asset allocation planning",
        "Performance tracking and optimization",
        "Tax-efficient investment strategies",
        "Regular portfolio health assessments"
      ]
    }
  ];

  const indianMarketInsights = [
    "India's GDP growth potential of 6-7% annually offers significant investment opportunities",
    "Emerging sectors like technology, healthcare, and renewable energy show exceptional growth prospects",
    "Demographic dividend with 65% population under 35 years driving consumption and economic growth",
    "Government initiatives like Digital India and Make in India creating new investment avenues",
    "Strong fundamentals with improving corporate governance and regulatory framework",
    "Currency hedging strategies to optimize returns for UAE-based investors"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/personal">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-blue-300" />
          <h1 className="text-5xl font-bold mb-6">Investment Planning & Indian Equity Markets</h1>
          <p className="text-xl text-blue-100 mb-8">
            Build wealth systematically with expert guidance on Indian equity markets, growth opportunities, and strategic investment planning.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50"
            onClick={() => handleGetConsultation("Investment Planning Consultation")}
          >
            Start Investing Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Indian Equity Market Investment Guide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock the growth potential of Indian equity markets with expert guidance on fundamentals, opportunities, and strategic investment approaches.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleGetConsultation(service.title)}
                  >
                    Get Consultation
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Invest in Indian Equity Markets?</h3>
                <p className="text-lg text-gray-600 mb-8">
                  India represents one of the world's fastest-growing major economies with exceptional investment opportunities across multiple sectors.
                </p>
                <ul className="space-y-4">
                  {indianMarketInsights.map((insight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleGetConsultation("Indian Equity Market Investment")}
                  >
                    Start Your Investment Journey
                    <TrendingUp className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <BarChart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Market Analysis</h4>
                  <p className="text-sm text-gray-600">Deep sector and company research</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <LineChart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Growth Tracking</h4>
                  <p className="text-sm text-gray-600">Performance monitoring and optimization</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Strategic Planning</h4>
                  <p className="text-sm text-gray-600">Goal-aligned investment strategies</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <PieChart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Portfolio Diversification</h4>
                  <p className="text-sm text-gray-600">Risk-optimized allocation strategies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Explore Indian Market Opportunities?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get expert guidance on Indian equity market fundamentals, growth sectors, and strategic investment approaches tailored for UAE residents.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50"
              onClick={() => handleGetConsultation("Complete Investment Planning Service")}
            >
              Schedule Investment Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <ContactSection selectedService={selectedService} />
      <Footer />
      <FloatingToggle />
    </div>
  );
};

export default InvestmentPlanning;
