
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Plane } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            FinanceBuddy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive partner for Business Solutions, Personal Finance, and Travel Planning
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="font-medium">Business Growth</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="font-medium">Financial Security</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Plane className="w-5 h-5 text-purple-400" />
            <span className="font-medium">Travel Planning</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-full transition-all duration-300">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
