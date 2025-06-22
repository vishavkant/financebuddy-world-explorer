
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import ECommerceHero from "@/components/ecommerce/ECommerceHero";
import ECommerceServices from "@/components/ecommerce/ECommerceServices";
import ECommercePlatforms from "@/components/ecommerce/ECommercePlatforms";
import ECommerceSupportServices from "@/components/ecommerce/ECommerceSupportServices";
import { ShoppingCart, Globe, Smartphone, CreditCard, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ECommerceSetup = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleGetStarted = (setupType: string) => {
    setSelectedService(setupType);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const ecommerceServices = [
    {
      title: "Amazon Marketplace Setup",
      description: "Complete Amazon seller account setup with product listing optimization and advertising strategy for the UAE market.",
      features: ["Amazon Seller Central setup", "Product listing optimization", "Amazon PPC campaign setup", "Inventory management system"],
      icon: ShoppingCart,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Noon Marketplace Integration",
      description: "Establish your presence on Noon.com with professional store setup and product catalog optimization.",
      features: ["Noon seller account creation", "Product catalog setup", "Noon advertising campaigns", "Order fulfillment setup"],
      icon: Smartphone,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Multi-Marketplace Management",
      description: "Manage your presence across multiple UAE marketplaces with centralized inventory and order management.",
      features: ["Cross-platform inventory sync", "Unified order management", "Multi-channel pricing strategy", "Performance analytics"],
      icon: CreditCard,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "E-Commerce Strategy & Optimization",
      description: "Comprehensive e-commerce strategy development with marketplace optimization and growth planning.",
      features: ["Market research and analysis", "Competitor analysis", "Growth strategy development", "Performance optimization"],
      icon: Globe,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const platforms = [
    { name: "Amazon UAE", description: "Leading marketplace in Middle East", features: ["Largest customer base", "FBA fulfillment", "Global reach"] },
    { name: "Noon.com", description: "Regional e-commerce leader", features: ["Local market focus", "Fast delivery", "Arabic language support"] },
    { name: "Dubizzle", description: "UAE's classified marketplace", features: ["Local audience", "Category diversity", "Mobile-first platform"] },
    { name: "Carrefour Online", description: "Retail giant's marketplace", features: ["Established brand trust", "Grocery & retail", "Omnichannel presence"] }
  ];

  const supportServices = [
    "Complete marketplace account setup and verification",
    "Product photography and content creation",
    "SEO optimization for marketplace listings",
    "Inventory management and stock monitoring",
    "Customer service and review management",
    "Advertising campaign setup and management",
    "Analytics and performance reporting",
    "Cross-border selling and logistics support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/business">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <ECommerceHero onGetStarted={handleGetStarted} />
      
      <ECommerceServices services={ecommerceServices} onGetStarted={handleGetStarted} />
      
      <div className="max-w-6xl mx-auto px-4">
        <ECommercePlatforms platforms={platforms} />
        <ECommerceSupportServices supportServices={supportServices} onGetStarted={handleGetStarted} />
      </div>

      <ContactSection selectedService={selectedService} />
      <Footer />
      <FloatingToggle />
    </div>
  );
};

export default ECommerceSetup;
