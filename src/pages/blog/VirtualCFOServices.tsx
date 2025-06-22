
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const VirtualCFOServices = () => {
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
            Financial Management
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Virtual CFO Services: When Your Business Needs Financial Leadership
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              May 22, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">Virtual CFO Services</h2>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Discover how virtual CFO services can provide strategic financial guidance without the cost of a full-time executive.
          </p>

          <h2>When Do You Need a Virtual CFO?</h2>
          <p>
            Growing businesses often reach a point where financial complexity requires expert oversight:
          </p>
          <ul>
            <li>Revenue exceeding AED 5-10 million annually</li>
            <li>Multiple revenue streams or business units</li>
            <li>Seeking investment or funding opportunities</li>
            <li>Expanding into new markets or regions</li>
          </ul>

          <h2>Virtual CFO Service Benefits</h2>
          <p>
            Access C-level financial expertise at a fraction of the cost:
          </p>
          <ul>
            <li>Strategic financial planning and analysis</li>
            <li>Cash flow management and optimization</li>
            <li>Financial reporting and KPI dashboards</li>
            <li>Risk management and compliance oversight</li>
          </ul>

          <h2>Services Typically Included</h2>
          <p>
            Comprehensive financial leadership services:
          </p>
          <ul>
            <li>Monthly financial reporting and analysis</li>
            <li>Budget preparation and variance analysis</li>
            <li>Investor relations and fundraising support</li>
            <li>Financial system setup and optimization</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-blue-800 font-semibold mb-2">Ready for Financial Leadership?</h3>
            <p className="text-blue-700 mb-4">
              Discover how virtual CFO services can accelerate your business growth.
            </p>
            <Link to="/services/financial-modeling">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Explore Financial Modeling Services
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

export default VirtualCFOServices;
