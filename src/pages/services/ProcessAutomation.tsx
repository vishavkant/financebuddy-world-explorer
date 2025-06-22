
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { Lightbulb, Workflow, Zap, Settings, CheckCircle, ArrowRight, Cpu, Database, Globe, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProcessAutomation = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleAutomateNow = (automationType: string) => {
    setSelectedService(automationType);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const automationSolutions = [
    {
      title: "Workflow Design & Optimization",
      description: "Streamline your business processes by designing efficient workflows that eliminate bottlenecks and reduce manual intervention with comprehensive analysis.",
      details: [
        "Comprehensive process mapping and documentation",
        "Bottleneck identification and strategic resolution",
        "Standard Operating Procedures (SOPs) development",
        "Performance metrics and KPIs setup and monitoring"
      ],
      icon: Workflow,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your specific business needs, from web applications to mobile apps and desktop software with full integration.",
      details: [
        "Web application development and deployment",
        "Mobile app development (iOS & Android platforms)",
        "Desktop application solutions and maintenance",
        "API development and system integrations"
      ],
      icon: Cpu,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Data Integration & Migration",
      description: "Seamlessly connect disparate systems and migrate data across platforms to create a unified business ecosystem with real-time synchronization.",
      details: [
        "System integration and API connections setup",
        "Data migration and transformation services",
        "Real-time data synchronization implementation",
        "Legacy system modernization and upgrades"
      ],
      icon: Database,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Business Process Re-engineering",
      description: "Completely redesign your business processes to achieve dramatic improvements in performance, cost, quality, and speed with strategic implementation.",
      details: [
        "End-to-end process analysis and evaluation",
        "Process redesign and optimization strategies",
        "Change management support and guidance",
        "Training and implementation with ongoing support"
      ],
      icon: Settings,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const automationServices = [
    "Workflow automation and comprehensive process optimization",
    "Custom software development and seamless system integration",
    "Data migration and real-time system synchronization",
    "Business process re-engineering and strategic optimization",
    "Digital transformation strategy and implementation roadmap",
    "Change management and comprehensive training programs"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/business">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Lightbulb className="w-16 h-16 mx-auto mb-6 text-purple-300" />
          <h1 className="text-5xl font-bold mb-6">Process Automation Solutions</h1>
          <p className="text-xl text-purple-100 mb-8">
            Transform your business operations with intelligent automation solutions that boost productivity and reduce costs through strategic implementation.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-900 hover:bg-purple-50"
            onClick={() => handleAutomateNow("Process Automation Consultation")}
          >
            Automate Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Automation Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From simple workflow automation to complex system integrations, we help businesses achieve operational excellence through strategic automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {automationSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-lg ${solution.color} flex items-center justify-center mb-4`}>
                  <solution.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What We Deliver:</h4>
                  <ul className="space-y-2">
                    {solution.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => handleAutomateNow(solution.title)}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-purple-50 rounded-2xl p-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Operations</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Streamline your business processes with cutting-edge automation solutions that boost productivity and eliminate manual errors through strategic implementation.
                </p>
                <ul className="space-y-4">
                  {automationServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => handleAutomateNow("Complete Automation Solution")}
                  >
                    Start Automation Project
                    <Zap className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Workflow className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Smart Workflows</h4>
                  <p className="text-sm text-gray-600">Intelligent process flows</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Fast Processing</h4>
                  <p className="text-sm text-gray-600">Lightning-fast execution</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Cloud Integration</h4>
                  <p className="text-sm text-gray-600">Seamless connectivity</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Lightbulb className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Innovation</h4>
                  <p className="text-sm text-gray-600">Cutting-edge solutions</p>
                </div>
              </div>
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

export default ProcessAutomation;
