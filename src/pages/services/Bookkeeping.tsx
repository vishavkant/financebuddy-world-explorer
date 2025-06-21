
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, PieChart, TrendingUp, CheckCircle, ArrowRight, Clock, Shield, Award } from "lucide-react";
import { useState } from "react";

const Bookkeeping = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleGetStarted = (serviceType: string) => {
    setSelectedService(serviceType);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const bookkeepingServices = [
    {
      title: "Monthly Bookkeeping",
      description: "Complete monthly accounting services including transaction recording, reconciliation, and financial statements.",
      features: ["Daily transaction recording", "Bank reconciliation", "Monthly financial statements", "VAT compliance"],
      icon: Calculator,
      color: "bg-blue-100 text-blue-600",
      price: "Starting from AED 1,500/month"
    },
    {
      title: "Annual Accounting",
      description: "Comprehensive year-end accounting services for audit preparation and regulatory compliance.",
      features: ["Year-end adjustments", "Audit preparation", "Tax return filing", "Regulatory compliance"],
      icon: FileText,
      color: "bg-green-100 text-green-600",
      price: "Starting from AED 5,000/year"
    },
    {
      title: "Management Reporting",
      description: "Detailed management reports and financial analysis to support business decision-making.",
      features: ["Custom financial reports", "KPI dashboards", "Budgeting support", "Cash flow analysis"],
      icon: PieChart,
      color: "bg-purple-100 text-purple-600",
      price: "Starting from AED 2,000/month"
    },
    {
      title: "Payroll Processing",
      description: "Complete payroll management including salary processing, WPS compliance, and employee benefits.",
      features: ["Monthly payroll processing", "WPS compliance", "Leave management", "End of service calculations"],
      icon: TrendingUp,
      color: "bg-orange-100 text-orange-600",
      price: "Starting from AED 50/employee"
    }
  ];

  const whyChooseUs = [
    "Qualified chartered accountants with UAE experience",
    "Cloud-based accounting systems for real-time access",
    "VAT registration and compliance support",
    "Audit preparation and liaison with auditors",
    "Management reporting and business insights",
    "Dedicated account manager for personalized service"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Calculator className="w-16 h-16 mx-auto mb-6 text-indigo-300" />
          <h1 className="text-5xl font-bold mb-6">Accounting & Bookkeeping Services</h1>
          <p className="text-xl text-indigo-100 mb-8">
            Professional accounting and bookkeeping services to keep your business compliant and financially healthy.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-indigo-900 hover:bg-indigo-50"
            onClick={() => handleGetStarted("Bookkeeping Consultation")}
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Accounting Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From basic bookkeeping to comprehensive financial management, we provide all the accounting services your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {bookkeepingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-4">
                  <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                    <span className="text-indigo-800 font-semibold">{service.price}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => handleGetStarted(service.title)}
                >
                  Get Quote
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 rounded-2xl p-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h3>
                <ul className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => handleGetStarted("Complete Accounting Package")}
                  >
                    Start Your Package
                    <FileText className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Clock className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Timely Service</h4>
                  <p className="text-sm text-gray-600">On-time delivery always</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Data Security</h4>
                  <p className="text-sm text-gray-600">Complete confidentiality</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Qualified Team</h4>
                  <p className="text-sm text-gray-600">Certified professionals</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Growth Support</h4>
                  <p className="text-sm text-gray-600">Scalable solutions</p>
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

export default Bookkeeping;
