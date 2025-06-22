
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const InvestmentOpportunitiesUAEIndia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog/finance">
            <Button variant="outline" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Finance Blog
            </Button>
          </Link>
          
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Investment Guide
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Investment Opportunities in UAE vs Indian Equity Markets
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              May 15, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              9 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">Investment Opportunities Guide</h2>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive comparison of investment landscapes in UAE and India, helping you make informed decisions for your portfolio growth.
          </p>

          <h2>UAE Investment Market Overview</h2>
          <p>
            The UAE offers a unique investment landscape with tax-free benefits, strategic location, and growing market opportunities. Key advantages include:
          </p>
          <ul>
            <li>Zero capital gains tax on equity investments</li>
            <li>Access to emerging markets through Dubai Financial Market</li>
            <li>Strong regulatory framework and investor protection</li>
            <li>Diversified economy beyond oil dependency</li>
          </ul>

          <h2>Indian Equity Market Advantages</h2>
          <p>
            India's equity market presents compelling long-term growth prospects:
          </p>
          <ul>
            <li>Large domestic consumption market</li>
            <li>Growing middle class and digital adoption</li>
            <li>Strong technology and services sector</li>
            <li>Favorable demographic dividend</li>
          </ul>

          <h2>Investment Strategy Recommendations</h2>
          <p>
            For UAE residents, a balanced approach combining both markets can optimize returns:
          </p>
          <ul>
            <li>Allocate 40-50% to UAE/GCC markets for stability</li>
            <li>Invest 30-40% in Indian equity for growth potential</li>
            <li>Keep 10-20% in global diversified funds</li>
          </ul>

          <h2>Risk Management Considerations</h2>
          <p>
            Understanding currency risks, regulatory changes, and market volatility is crucial for successful cross-border investing.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-green-800 font-semibold mb-2">Ready to Start Investing?</h3>
            <p className="text-green-700 mb-4">
              Get personalized investment advice tailored to your financial goals and risk profile.
            </p>
            <Link to="/services/investment-planning">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Investment Planning Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Written by</p>
              <p className="font-semibold">Vishavkant Sethi</p>
              <p className="text-sm text-gray-600">Financial Planning Expert</p>
            </div>
            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingToggle />
    </div>
  );
};

export default InvestmentOpportunitiesUAEIndia;
