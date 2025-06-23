
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Building2, User, Calculator } from "lucide-react";

interface HeroProps {
  userType?: 'personal' | 'business';
}

const Hero = ({ userType }: HeroProps) => {
  const isPersonal = userType === 'personal';
  const isBusiness = userType === 'business';

  const getTitle = () => {
    if (isPersonal) return "Personal Finance & Mortgage Solutions";
    if (isBusiness) return "Business Solutions & Growth";
    return "FinanceBuddy";
  };

  const getSubtitle = () => {
    if (isPersonal) return "Expert guidance for personal finance management, mortgage solutions, and investment planning";
    if (isBusiness) return "Comprehensive business setup, bookkeeping, and growth optimization services";
    return "Your comprehensive partner for Business Solutions, Personal Finance, and Mortgage Planning";
  };

  const getFeatures = () => {
    if (isPersonal) {
      return [
        { icon: Calculator, text: "Mortgage Solutions", color: "text-green-400" },
        { icon: Shield, text: "Financial Security", color: "text-blue-400" },
        { icon: TrendingUp, text: "Investment Planning", color: "text-purple-400" }
      ];
    }
    if (isBusiness) {
      return [
        { icon: Building2, text: "Business Setup", color: "text-green-400" },
        { icon: TrendingUp, text: "Growth Optimization", color: "text-blue-400" },
        { icon: Shield, text: "Financial Management", color: "text-purple-400" }
      ];
    }
    return [
      { icon: TrendingUp, text: "Business Growth", color: "text-green-400" },
      { icon: Shield, text: "Financial Security", color: "text-blue-400" },
      { icon: Calculator, text: "Mortgage Planning", color: "text-purple-400" }
    ];
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
            {getTitle()}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
            {getSubtitle()}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {getFeatures().map((feature, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <feature.icon className={`w-5 h-5 ${feature.color}`} />
              <span className="font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={scrollToContact}
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={scrollToServices}
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-full transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
