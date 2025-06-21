
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { Home, Calculator, TrendingUp, Shield, CheckCircle, ArrowRight, MapPin, DollarSign, Clock } from "lucide-react";
import { useState } from "react";

const MortgageLoans = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleGetConsultation = (serviceType: string) => {
    setSelectedService(serviceType);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const mortgageTypes = [
    {
      title: "Home Purchase Mortgage",
      description: "Finance your dream home with competitive rates and flexible terms designed for UAE residents.",
      features: ["Up to 80% financing for UAE nationals", "Up to 75% financing for expats", "Competitive interest rates", "Flexible repayment terms"],
      icon: Home,
      color: "bg-green-100 text-green-600",
      rate: "Starting from 2.99%"
    },
    {
      title: "Home Refinancing",
      description: "Refinance your existing mortgage to get better rates, lower payments, or access equity.",
      features: ["Lower interest rates", "Reduced monthly payments", "Cash-out refinancing", "Debt consolidation options"],
      icon: TrendingUp,
      color: "bg-blue-100 text-blue-600",
      rate: "Rates from 2.75%"
    },
    {
      title: "Investment Property Loan",
      description: "Finance your investment property with specialized loan products for property investors.",
      features: ["Up to 60% financing", "Rental income consideration", "Portfolio lending options", "Commercial property financing"],
      icon: Calculator,
      color: "bg-purple-100 text-purple-600",
      rate: "Starting from 3.25%"
    },
    {
      title: "Construction Mortgage",
      description: "Build your custom home with our construction-to-permanent mortgage solutions.",
      features: ["Land acquisition financing", "Construction phase funding", "Permanent mortgage conversion", "Flexible draw schedule"],
      icon: Shield,
      color: "bg-orange-100 text-orange-600", 
      rate: "Starting from 3.15%"
    }
  ];

  const benefits = [
    "Expert guidance through UAE mortgage process with 10+ years experience",
    "Access to best rates from 15+ banks and financial institutions",
    "Pre-approval assistance and complete documentation support",
    "Property valuation coordination and legal guidance",
    "Refinancing and restructuring options for existing mortgages",
    "Investment property financing solutions with portfolio management"
  ];

  const process = [
    { step: 1, title: "Initial Consultation", desc: "Assess your financial situation, requirements, and eligibility", duration: "30 mins" },
    { step: 2, title: "Pre-approval", desc: "Get pre-approved with multiple banks for best rates and terms", duration: "2-3 days" },
    { step: 3, title: "Property Search", desc: "Find suitable properties within your budget with our guidance", duration: "Ongoing" },
    { step: 4, title: "Final Approval", desc: "Complete documentation and secure your mortgage with best terms", duration: "5-7 days" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Home className="w-16 h-16 mx-auto mb-6 text-green-300" />
          <h1 className="text-5xl font-bold mb-6">Mortgage & Home Loans</h1>
          <p className="text-xl text-green-100 mb-8">
            Your trusted partner for home financing in the UAE. We make homeownership dreams come true with expert guidance and competitive rates.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-900 hover:bg-green-50"
            onClick={() => handleGetConsultation("Mortgage Consultation")}
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mortgage Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From first-time homebuyers to seasoned investors, we offer comprehensive mortgage solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {mortgageTypes.map((mortgage, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-lg ${mortgage.color} flex items-center justify-center mb-4`}>
                  <mortgage.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{mortgage.title}</h3>
                <p className="text-gray-600 mb-6">{mortgage.description}</p>
                
                <div className="mb-4">
                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <span className="text-green-800 font-semibold">{mortgage.rate}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {mortgage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => handleGetConsultation(mortgage.title)}
                >
                  Get Consultation
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-2xl p-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Mortgage Services?</h3>
                <p className="text-lg text-gray-600 mb-8">
                  With years of experience in UAE's mortgage market, we provide comprehensive home loan solutions 
                  tailored to your unique financial situation and goals.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => handleGetConsultation("Complete Mortgage Service")}
                  >
                    Get Free Consultation
                    <Home className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
                <div className="space-y-6">
                  {process.map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">{item.duration}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Competitive Rates</h4>
              <p className="text-gray-600 text-sm">Best mortgage rates from multiple banks</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Quick Approval</h4>
              <p className="text-gray-600 text-sm">Fast processing and quick approvals</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">UAE Expertise</h4>
              <p className="text-gray-600 text-sm">Deep knowledge of UAE property market</p>
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

export default MortgageLoans;
