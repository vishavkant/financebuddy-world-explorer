
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const BuildingWealthUAEExpats = () => {
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
            Wealth Building
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Building Wealth in UAE: A Complete Guide for Expats
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              April 22, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              11 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">Building Wealth Guide</h2>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Strategic wealth building approaches tailored for expatriates living and working in the UAE.
          </p>

          <h2>The UAE Advantage for Wealth Building</h2>
          <p>
            The UAE's tax-free environment creates unique opportunities for wealth accumulation:
          </p>
          <ul>
            <li>No personal income tax on salary and bonuses</li>
            <li>No capital gains tax on investments</li>
            <li>Strong banking infrastructure and financial services</li>
            <li>Strategic location for global investments</li>
          </ul>

          <h2>Creating Multiple Income Streams</h2>
          <p>
            Diversify your income beyond your primary employment:
          </p>
          <ul>
            <li>Real estate investment in UAE and home country</li>
            <li>Stock market investments and dividends</li>
            <li>Business investments and partnerships</li>
            <li>Freelancing and consulting opportunities</li>
          </ul>

          <h2>Investment Strategies for Expats</h2>
          <p>
            Optimal investment allocation considering your expat status:
          </p>
          <ul>
            <li>Emergency fund: 6-12 months of expenses in UAE banks</li>
            <li>Property investment: UAE vs. home country analysis</li>
            <li>International diversification through global funds</li>
            <li>Retirement planning with portable investments</li>
          </ul>

          <h2>Long-term Wealth Preservation</h2>
          <p>
            Protecting and growing wealth across borders and currencies:
          </p>
          <ul>
            <li>Currency hedging strategies</li>
            <li>International insurance and protection</li>
            <li>Estate planning considerations</li>
            <li>Repatriation planning for eventual return</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-green-800 font-semibold mb-2">Start Your Wealth Journey</h3>
            <p className="text-green-700 mb-4">
              Get a personalized wealth building strategy designed for your expat lifestyle.
            </p>
            <Link to="/services/financial-planning">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Financial Planning Services
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

export default BuildingWealthUAEExpats;
