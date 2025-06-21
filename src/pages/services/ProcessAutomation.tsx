
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Lightbulb, Workflow, Zap, Settings, CheckCircle, ArrowRight } from "lucide-react";

const ProcessAutomation = () => {
  const automationServices = [
    "Workflow Design & Optimization",
    "RPA Implementation & Support",
    "Custom Software Development",
    "Data Integration & Migration",
    "Business Process Re-engineering",
    "Digital Transformation Strategy"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Lightbulb className="w-16 h-16 mx-auto mb-6 text-purple-300" />
          <h1 className="text-5xl font-bold mb-6">Process Automation</h1>
          <p className="text-xl text-purple-100 mb-8">
            Automate repetitive tasks to improve efficiency and reduce operational costs.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
            Automate Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Operations</h2>
              <p className="text-lg text-gray-600 mb-8">
                Streamline your business processes with cutting-edge automation solutions that boost productivity.
              </p>
              <ul className="space-y-4">
                {automationServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <Workflow className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Workflows</h3>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Automation</h3>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <Settings className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Integration</h3>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <Lightbulb className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Innovation</h3>
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

export default ProcessAutomation;
