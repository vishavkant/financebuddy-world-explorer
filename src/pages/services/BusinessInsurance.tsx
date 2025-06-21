
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { Shield, Building, Users, FileCheck, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { useState } from "react";

const BusinessInsurance = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleGetQuote = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const insuranceTypes = [
    { 
      icon: Shield, 
      title: "General Liability", 
      desc: "Comprehensive third-party protection covering bodily injury, property damage, and legal defense costs. Essential for any business interacting with customers or operating in public spaces.",
      details: [
        "Coverage up to AED 5 million per incident",
        "Product liability protection included",
        "Legal defense cost coverage",
        "Worldwide coverage available"
      ]
    },
    { 
      icon: FileCheck, 
      title: "Professional Indemnity", 
      desc: "Specialized coverage for service-based businesses protecting against claims of professional negligence, errors, or omissions in your professional services.",
      details: [
        "Coverage for legal costs and damages",
        "Retroactive coverage options",
        "Defense against frivolous claims",
        "Industry-specific policy wording"
      ]
    },
    { 
      icon: Users, 
      title: "Medical Insurance", 
      desc: "Comprehensive health coverage for your employees ensuring their wellbeing while meeting UAE regulatory requirements for businesses.",
      details: [
        "Inpatient and outpatient coverage",
        "Maternity and dental benefits",
        "Worldwide emergency coverage",
        "Network of 500+ hospitals in UAE"
      ]
    },
    { 
      icon: Building, 
      title: "Property Insurance", 
      desc: "Complete protection for your business premises, equipment, inventory, and assets against fire, theft, natural disasters, and other covered perils.",
      details: [
        "Building and contents coverage",
        "Business interruption protection",
        "Equipment breakdown coverage",
        "Cyber risk protection available"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-blue-300" />
          <h1 className="text-5xl font-bold mb-6">Business Insurance Solutions</h1>
          <p className="text-xl text-blue-100 mb-8">
            Comprehensive insurance solutions to protect your business assets, operations, and employees in the UAE.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50"
            onClick={() => handleGetQuote("Business Insurance Consultation")}
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Insurance Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protect your business with our comprehensive range of insurance products designed specifically for UAE businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {insuranceTypes.map((insurance, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <insurance.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{insurance.title}</h3>
                <p className="text-gray-600 mb-6">{insurance.desc}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {insurance.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleGetQuote(insurance.title)}
                >
                  Get Free Quote
                  <Phone className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => handleGetQuote("Comprehensive Business Insurance")}
            >
              Get Comprehensive Coverage Quote
              <Mail className="ml-2 w-5 h-5" />
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

export default BusinessInsurance;
