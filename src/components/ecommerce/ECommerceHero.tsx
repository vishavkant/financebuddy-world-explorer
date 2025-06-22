
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";

interface ECommerceHeroProps {
  onGetStarted: (setupType: string) => void;
}

const ECommerceHero = ({ onGetStarted }: ECommerceHeroProps) => {
  return (
    <section className="bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <ShoppingCart className="w-16 h-16 mx-auto mb-6 text-cyan-300" />
        <h1 className="text-5xl font-bold mb-6">Marketplace E-Commerce Setup</h1>
        <p className="text-xl text-cyan-100 mb-8">
          Launch and scale your business on major UAE marketplaces like Amazon, Noon, and more with our comprehensive setup services.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-cyan-900 hover:bg-cyan-50"
          onClick={() => onGetStarted("Marketplace E-Commerce Setup Consultation")}
        >
          Start Selling Online
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default ECommerceHero;
