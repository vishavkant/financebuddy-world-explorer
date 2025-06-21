
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingToggle from "@/components/FloatingToggle";
import ECommerceHero from "@/components/ecommerce/ECommerceHero";
import ECommerceServices from "@/components/ecommerce/ECommerceServices";
import ECommercePlatforms from "@/components/ecommerce/ECommercePlatforms";
import ECommerceSupportServices from "@/components/ecommerce/ECommerceSupportServices";
import { ShoppingCart, Globe, Smartphone, CreditCard } from "lucide-react";
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
