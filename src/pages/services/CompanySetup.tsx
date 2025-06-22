
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { Building, FileText, Users, Shield, CheckCircle, ArrowRight, MapPin, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CompanySetup = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleGetStarted = (setupType: string) => {
    setSelectedService(setupType);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const setupServices = [
    {
      title: "Mainland Company Formation",
      description: "Establish your business in UAE mainland with 100% foreign ownership and access to the local market with comprehensive support and guidance.",
      features: ["100% foreign ownership allowed", "Direct access to UAE market", "Government contracts eligibility", "Multiple business activities permitted", "Local sponsorship not required"],
      icon: Building,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Free Zone Company Setup",
      description: "Set up your business in one of UAE's 45+ free zones with tax benefits and streamlined processes for international business operations.",
      features: ["0% corporate tax benefits", "100% profit repatriation allowed", "No currency restrictions imposed", "Simplified procedures and processes", "International business focus"],
      icon: Shield,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Offshore Company Formation",
      description: "Establish an offshore company for international business, asset protection, and tax optimization with complete privacy and confidentiality.",
      features: ["Asset protection strategies", "Tax optimization benefits", "International banking access", "Complete confidentiality maintained", "Flexible business structures"],
      icon: MapPin,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Branch Office Setup",
      description: "Open a branch office of your existing foreign company to operate in the UAE market with cost-effective and streamlined structure.",
      features: ["Extension of parent company operations", "Local market access granted", "Simplified business structure", "Cost-effective setup option", "Regulatory compliance support"],
      icon: Users,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const processSteps = [
    { step: 1, title: "Initial Consultation", desc: "Discuss your business needs and choose the right structure for your goals" },
    { step: 2, title: "Documentation", desc: "Prepare and authenticate all required documents with our expert guidance" },
    { step: 3, title: "License Application", desc: "Submit applications to relevant authorities with full compliance" },
    { step: 4, title: "Bank Account Opening", desc: "Assist with corporate bank account setup and banking relationships" },
    { step: 5, title: "Final Setup", desc: "Complete registration and handover all documents with ongoing support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/business">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Building className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h1 className="text-5xl font-bold mb-6">Company Setup in UAE</h1>
          <p className="text-xl text-emerald-100 mb-8">
            Expert guidance for establishing your business in the UAE with complete legal compliance and optimal structure tailored to your business needs.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-emerald-900 hover:bg-emerald-50"
            onClick={() => handleGetStarted("Company Setup Consultation")}
          >
            Start Your Business
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Formation Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the right business structure for your needs with our comprehensive company formation services and expert guidance throughout the process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {setupServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => handleGetStarted(service.title)}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Setup Process</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => handleGetStarted("Complete Company Setup Package")}
            >
              Get Free Consultation
              <FileText className="ml-2 w-5 h-5" />
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

export default CompanySetup;
