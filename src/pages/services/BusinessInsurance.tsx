
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Shield, Building, Users, FileCheck, CheckCircle, ArrowRight } from "lucide-react";

const BusinessInsurance = () => {
  const insuranceTypes = [
    { icon: Shield, title: "General Liability", desc: "Protect against third-party claims and damages" },
    { icon: FileCheck, title: "Professional Indemnity", desc: "Coverage for professional errors and omissions" },
    { icon: Users, title: "Medical Insurance", desc: "Comprehensive health coverage for employees" },
    { icon: Building, title: "Property Insurance", desc: "Protection for business assets and premises" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-blue-300" />
          <h1 className="text-5xl font-bold mb-6">Business Insurance</h1>
          <p className="text-xl text-blue-100 mb-8">
            Comprehensive insurance solutions to protect your business assets and operations.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            Protect Your Business
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {insuranceTypes.map((insurance, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <insurance.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{insurance.title}</h3>
                <p className="text-gray-600 mb-4">{insurance.desc}</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default BusinessInsurance;
