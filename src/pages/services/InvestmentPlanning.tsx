
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, PieChart, DollarSign, CheckCircle, ArrowRight } from "lucide-react";

const InvestmentPlanning = () => {
  const services = [
    { icon: PieChart, title: "Portfolio Management", desc: "Diversified investment portfolios tailored to your risk tolerance" },
    { icon: Target, title: "Goal-Based Planning", desc: "Investment strategies aligned with your financial objectives" },
    { icon: TrendingUp, title: "Market Analysis", desc: "Expert insights on UAE and international investment opportunities" },
    { icon: DollarSign, title: "Tax Optimization", desc: "Strategies to minimize tax impact on your investments" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-blue-300" />
          <h1 className="text-5xl font-bold mb-6">Investment Planning</h1>
          <p className="text-xl text-blue-100 mb-8">
            Build wealth systematically with our expert investment guidance and portfolio management services.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            Start Investing Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Investment Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From UAE local markets to international opportunities, we help you build a robust investment portfolio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Opportunities</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">UAE Markets</h4>
                <p className="text-gray-600 text-sm">Local stocks, real estate, and UAE-focused funds</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">International</h4>
                <p className="text-gray-600 text-sm">Global equities, bonds, and diversified funds</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Alternative</h4>
                <p className="text-gray-600 text-sm">Commodities, REITs, and structured products</p>
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

export default InvestmentPlanning;
