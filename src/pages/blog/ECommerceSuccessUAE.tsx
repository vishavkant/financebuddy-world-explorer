
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const ECommerceSuccessUAE = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog/business">
            <Button variant="outline" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Business Blog
            </Button>
          </Link>
          
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
            E-commerce
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            E-commerce Success in UAE: From Setup to Scale
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              April 15, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              10 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">E-commerce Success Guide</h2>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A comprehensive guide to launching and growing your e-commerce business in the UAE market.
          </p>

          <h2>E-commerce Market Opportunity in UAE</h2>
          <p>
            The UAE presents exceptional e-commerce growth potential:
          </p>
          <ul>
            <li>High internet penetration and smartphone adoption</li>
            <li>Growing consumer preference for online shopping</li>
            <li>Strategic location for regional expansion</li>
            <li>Strong logistics and payment infrastructure</li>
          </ul>

          <h2>Setting Up Your E-commerce Business</h2>
          <p>
            Essential steps for launching your online business:
          </p>
          <ul>
            <li>Business license and legal structure selection</li>
            <li>E-commerce platform and website development</li>
            <li>Payment gateway integration and security</li>
            <li>Logistics and fulfillment setup</li>
          </ul>

          <h2>Marketing and Customer Acquisition</h2>
          <p>
            Strategies to attract and retain customers:
          </p>
          <ul>
            <li>Social media marketing and influencer partnerships</li>
            <li>Search engine optimization and paid advertising</li>
            <li>Email marketing and customer retention programs</li>
            <li>Marketplace integration (Amazon, Noon, etc.)</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-blue-800 font-semibold mb-2">Ready to Launch Your E-commerce Business?</h3>
            <p className="text-blue-700 mb-4">
              Get expert guidance on e-commerce setup and growth strategies in UAE.
            </p>
            <Link to="/services/ecommerce-setup">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Start E-commerce Setup
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

export default ECommerceSuccessUAE;
