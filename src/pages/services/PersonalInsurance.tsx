
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, FileText, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PersonalInsurance = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleGetConsultation = (serviceType: string) => {
    setSelectedService(serviceType);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const insuranceTypes = [
    { 
      icon: Heart, 
      title: "Health Insurance", 
      desc: "Comprehensive medical coverage for you and your family with extensive network access and preventive care benefits.",
      details: [
        "Comprehensive inpatient and outpatient medical coverage",
        "Access to 500+ hospitals and clinics across UAE",
        "Maternity benefits and pediatric care included",
        "Annual health check-ups and preventive care services",
        "Emergency medical evacuation and repatriation coverage",
        "Dental and optical care with specialist consultations"
      ]
    },
    { 
      icon: Shield, 
      title: "Life Insurance", 
      desc: "Financial protection for your loved ones' future security with flexible coverage options and investment components.",
      details: [
        "Term life insurance with flexible coverage amounts",
        "Whole life insurance with investment components",
        "Family income protection and education fund coverage",
        "Critical illness and disability benefit riders",
        "Flexible premium payment options and terms",
        "Tax-efficient wealth transfer and estate planning benefits"
      ]
    },
    { 
      icon: Users, 
      title: "Family Protection Plans", 
      desc: "Complete family insurance plans and coverage options designed to protect your entire family's financial future.",
      details: [
        "Comprehensive family health insurance coverage",
        "Children's education fund and future planning",
        "Spouse and dependent coverage with flexible options",
        "Family income replacement in case of disability",
        "Emergency fund and financial security planning",
        "Multi-generational wealth protection strategies"
      ]
    },
    { 
      icon: FileText, 
      title: "Personal Accident Insurance", 
      desc: "Coverage against unexpected accidents and disabilities with comprehensive protection and rehabilitation support.",
      details: [
        "Accidental death and dismemberment coverage",
        "Permanent and temporary disability benefits",
        "Medical expenses for accident-related injuries",
        "Rehabilitation and recovery support services",
        "Income replacement during recovery period",
        "24/7 emergency assistance and support services"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/personal">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-purple-300" />
          <h1 className="text-5xl font-bold mb-6">Personal Insurance Solutions</h1>
          <p className="text-xl text-purple-100 mb-8">
            Comprehensive protection for you and your family with tailored insurance solutions designed for UAE residents.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-900 hover:bg-purple-50"
            onClick={() => handleGetConsultation("Personal Insurance Consultation")}
          >
            Get Protected Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Insurance Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protect what matters most with our comprehensive range of personal insurance products designed specifically for UAE residents.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {insuranceTypes.map((insurance, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <insurance.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{insurance.title}</h3>
                <p className="text-gray-600 mb-4">{insurance.desc}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Coverage Details:</h4>
                  <ul className="space-y-2">
                    {insurance.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => handleGetConsultation(insurance.title)}
                >
                  Get Consultation
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Protect Your Family?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Get expert guidance on choosing the right insurance coverage for your family's needs with comprehensive protection and peace of mind.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-purple-50"
              onClick={() => handleGetConsultation("Complete Insurance Coverage")}
            >
              Schedule Insurance Consultation
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

export default PersonalInsurance;
