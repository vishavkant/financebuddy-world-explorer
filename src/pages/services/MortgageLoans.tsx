
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import LoanCalculator from "@/components/LoanCalculator";
import { Button } from "@/components/ui/button";
import { Home, Calculator, TrendingUp, Shield, CheckCircle, ArrowRight, MapPin, DollarSign, Clock, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MortgageLoans = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Loan Calculator UAE | Home Loan & Personal Loan EMI Calculator | Mortgage Loans UAE";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free Loan Calculator UAE - Calculate Home Loan EMI, Personal Loan interest, and mortgage payments. Best Loan App in UAE for Home Loan Calculator and Personal Loan Calculator with competitive rates.');
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Free Loan Calculator UAE - Calculate Home Loan EMI, Personal Loan interest, and mortgage payments. Best Loan App in UAE for Home Loan Calculator and Personal Loan Calculator with competitive rates.";
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Loan Calculator, Loan Calculator UAE, Loan EMI Calculator, Personal Loan Calculator, Home Loan Calculator, Loan in UAE, Personal Loan UAE, Home Loan UAE, Loan App UAE, Loan Interest Calculator');
    } else {
      const meta = document.createElement('meta');
      meta.name = "keywords";
      meta.content = "Loan Calculator, Loan Calculator UAE, Loan EMI Calculator, Personal Loan Calculator, Home Loan Calculator, Loan in UAE, Personal Loan UAE, Home Loan UAE, Loan App UAE, Loan Interest Calculator";
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  const handleGetConsultation = (serviceType: string) => {
    setSelectedService(serviceType);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const mortgageTypes = [
    {
      title: "Conventional Home Loans",
      description: "Traditional financing options with competitive rates and flexible terms for qualified borrowers purchasing primary residences or investment properties.",
      features: ["Financing limits up to AED 10M for UAE Nationals", "Up to 80% financing for expats", "Competitive interest rates", "Flexible repayment terms"],
      icon: Home,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "First-Time Buyer Programs",
      description: "Specialized mortgage solutions designed for first-time homeowners with reduced down payment requirements and additional support services.",
      features: ["Lower down payment options", "First-time buyer assistance programs", "Educational resources and guidance", "Streamlined approval process"],
      icon: TrendingUp,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Refinancing Solutions",
      description: "Optimize your existing mortgage with refinancing options to reduce monthly payments, access equity, or consolidate debt.",
      features: ["Lower interest rates", "Reduced monthly payments", "Cash-out refinancing", "Debt consolidation opportunities"],
      icon: Calculator,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Investment Property Loans",
      description: "Specialized financing for real estate investors looking to expand their portfolio with buy-to-let properties and commercial investments.",
      features: ["Investment property financing", "Rental income consideration", "Portfolio lending options", "Commercial property solutions"],
      icon: Shield,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const benefits = [
    "Expert guidance through UAE mortgage process with 10+ years experience",
    "Access to best rates from 15+ banks and financial institutions",
    "Pre-approval assistance and complete documentation support services",
    "Property valuation coordination and comprehensive legal guidance",
    "Refinancing and restructuring options for existing mortgage holders",
    "Investment property financing solutions with portfolio management support"
  ];

  const process = [
    { step: 1, title: "Initial Consultation", desc: "Assess your financial situation, requirements, and eligibility with expert guidance" },
    { step: 2, title: "Pre-approval", desc: "Get pre-approved with multiple banks for best rates and terms available" },
    { step: 3, title: "Property Search", desc: "Find suitable properties within your budget with our professional guidance" },
    { step: 4, title: "Final Approval", desc: "Complete documentation and secure your mortgage with the best available terms" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <div className="bg-gradient-to-r from-green-900 to-green-800 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/personal">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Home className="w-16 h-16 mx-auto mb-6 text-green-300" />
          <h1 className="text-5xl font-bold mb-6">Mortgage & Home Loans in UAE</h1>
          <p className="text-xl text-green-100 mb-8">
            Secure your dream home with our comprehensive mortgage solutions. Expert guidance, 
            competitive rates, and personalized service to make homeownership achievable.
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

      {/* Loan Calculator Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loan Calculator UAE - Home Loan & Personal Loan EMI Calculator</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use our advanced Loan Calculator UAE to calculate Home Loan EMI, Personal Loan interest, and plan your loan budget effectively.
            </p>
          </div>
          <LoanCalculator />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mortgage Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From first-time buyers to seasoned investors, we offer tailored mortgage solutions 
              to meet your unique needs and financial goals.
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
                  tailored to your unique financial situation and long-term goals.
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
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
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
