
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Home, Calculator, TrendingUp, Shield, CheckCircle, ArrowRight } from "lucide-react";

const MortgageLoans = () => {
  const benefits = [
    "Expert guidance through UAE mortgage process",
    "Access to best rates from multiple banks",
    "Pre-approval assistance and documentation support",
    "Property valuation and legal guidance",
    "Refinancing and restructuring options",
    "Investment property financing solutions"
  ];

  const process = [
    { step: 1, title: "Initial Consultation", desc: "Assess your financial situation and requirements" },
    { step: 2, title: "Pre-approval", desc: "Get pre-approved with multiple banks for best rates" },
    { step: 3, title: "Property Search", desc: "Find suitable properties within your budget" },
    { step: 4, title: "Final Approval", desc: "Complete documentation and secure your mortgage" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Home className="w-16 h-16 mx-auto mb-6 text-green-300" />
          <h1 className="text-5xl font-bold mb-6">Mortgage & Home Loans</h1>
          <p className="text-xl text-green-100 mb-8">
            Your trusted partner for home financing in the UAE. We make homeownership dreams come true.
          </p>
          <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Mortgage Services?</h2>
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
            </div>
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
              <div className="space-y-6">
                {process.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
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

export default MortgageLoans;
