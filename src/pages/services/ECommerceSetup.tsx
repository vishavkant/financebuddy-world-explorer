
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Globe, Smartphone, CreditCard, CheckCircle, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";

const ECommerceSetup = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleGetStarted = (setupType: string) => {
    setSelectedService(setupType);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const ecommerceServices = [
    {
      title: "Complete E-Commerce Store Setup",
      description: "Full-service e-commerce website development with custom design, product catalog, and payment integration.",
      features: ["Custom website design", "Product catalog setup", "Payment gateway integration", "Mobile-responsive design"],
      icon: ShoppingCart,
      color: "bg-blue-100 text-blue-600",
      deliveryTime: "4-6 weeks"
    },
    {
      title: "Mobile App Development",
      description: "Native mobile applications for iOS and Android to expand your reach and improve customer experience.",
      features: ["iOS & Android apps", "Push notifications", "Offline functionality", "App store optimization"],
      icon: Smartphone,
      color: "bg-green-100 text-green-600",
      deliveryTime: "6-8 weeks"
    },
    {
      title: "Payment Solutions Integration",
      description: "Comprehensive payment processing setup with multiple payment methods and secure transactions.",
      features: ["Multiple payment methods", "Secure payment processing", "Subscription billing", "International payments"],
      icon: CreditCard,
      color: "bg-purple-100 text-purple-600",
      deliveryTime: "1-2 weeks"
    },
    {
      title: "Digital Marketing Setup",
      description: "Complete digital marketing ecosystem including SEO, social media, and advertising campaign setup.",
      features: ["SEO optimization", "Social media integration", "Google Ads setup", "Email marketing automation"],
      icon: Globe,
      color: "bg-orange-100 text-orange-600",
      deliveryTime: "2-3 weeks"
    }
  ];

  const platforms = [
    { name: "Shopify", description: "Perfect for small to medium businesses", features: ["Easy setup", "Built-in payments", "App ecosystem"] },
    { name: "WooCommerce", description: "WordPress-based flexible solution", features: ["Highly customizable", "Cost-effective", "SEO-friendly"] },
    { name: "Magento", description: "Enterprise-level e-commerce platform", features: ["Advanced features", "Scalable", "Multi-store support"] },
    { name: "Custom Development", description: "Tailored solution for unique needs", features: ["Complete control", "Unique features", "Scalable architecture"] }
  ];

  const supportServices = [
    "E-commerce strategy and planning",
    "Product photography and content creation",
    "Inventory management system setup",
    "Order fulfillment and logistics integration",
    "Customer service automation",
    "Analytics and reporting setup"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <section className="bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ShoppingCart className="w-16 h-16 mx-auto mb-6 text-cyan-300" />
          <h1 className="text-5xl font-bold mb-6">E-Commerce Setup Services</h1>
          <p className="text-xl text-cyan-100 mb-8">
            Launch your online business with our comprehensive e-commerce solutions designed for the UAE market.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-cyan-900 hover:bg-cyan-50"
            onClick={() => handleGetStarted("E-Commerce Setup Consultation")}
          >
            Launch Your Store
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our E-Commerce Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we provide everything you need to build a successful online business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {ecommerceServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-4">
                  <div className="bg-cyan-50 rounded-lg p-3 mb-4">
                    <span className="text-cyan-800 font-semibold">Delivery: {service.deliveryTime}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-cyan-600 hover:bg-cyan-700"
                  onClick={() => handleGetStarted(service.title)}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-cyan-50 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">E-Commerce Platforms We Work With</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">{platform.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{platform.description}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {platform.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Support Services</h3>
                <ul className="space-y-4">
                  {supportServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-cyan-600 hover:bg-cyan-700"
                    onClick={() => handleGetStarted("Complete E-Commerce Package")}
                  >
                    Get Full Package
                    <ShoppingCart className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-cyan-50 rounded-xl p-6 text-center">
                  <Zap className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Fast Setup</h4>
                  <p className="text-sm text-gray-600">Quick deployment</p>
                </div>
                <div className="bg-cyan-50 rounded-xl p-6 text-center">
                  <Shield className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Secure Platform</h4>
                  <p className="text-sm text-gray-600">SSL & PCI compliance</p>
                </div>
                <div className="bg-cyan-50 rounded-xl p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">Growth Ready</h4>
                  <p className="text-sm text-gray-600">Scalable solutions</p>
                </div>
                <div className="bg-cyan-50 rounded-xl p-6 text-center">
                  <Globe className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900">UAE Market</h4>
                  <p className="text-sm text-gray-600">Local expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection selectedService={selecte
Service} />
      <Footer />
      <FloatingToggle />
    </div>
  );
};

export default ECommerceSetup;
