
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, FileText, CheckCircle, ArrowRight } from "lucide-react";

const PersonalInsurance = () => {
  const insuranceTypes = [
    { icon: Heart, title: "Health Insurance", desc: "Comprehensive medical coverage for you and your family" },
    { icon: Shield, title: "Life Insurance", desc: "Financial protection for your loved ones' future security" },
    { icon: Users, title: "Family Protection", desc: "Complete family insurance plans and coverage options" },
    { icon: FileText, title: "Personal Accident", desc: "Coverage against unexpected accidents and disabilities" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-purple-300" />
          <h1 className="text-5xl font-bold mb-6">Personal Insurance</h1>
          <p className="text-xl text-purple-100 mb-8">
            Comprehensive protection for you and your family with tailored insurance solutions.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
            Get Protected Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Insurance Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protect what matters most with our comprehensive range of personal insurance products.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {insuranceTypes.map((insurance, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <insurance.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{insurance.title}</h3>
                <p className="text-gray-600 mb-4">{insurance.desc}</p>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Learn More
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

export default PersonalInsurance;
