
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const HomeLoanStructuring = () => {
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
            Home Loans
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Home Loan Structuring: Optimize Your Mortgage
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              May 28, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">Home Loan Structuring Guide</h2>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Advanced strategies for structuring your home loan to minimize costs and maximize benefits in the UAE market.
          </p>

          <h2>Understanding Loan Structure Options</h2>
          <p>
            UAE banks offer various mortgage structures, each with distinct advantages:
          </p>
          <ul>
            <li>Fixed vs. Variable rate considerations</li>
            <li>Reducing vs. Flat payment methods</li>
            <li>Loan tenure optimization</li>
            <li>Down payment strategy</li>
          </ul>

          <h2>Cost Optimization Strategies</h2>
          <p>
            Smart structuring can save thousands of dirhams over your loan tenure:
          </p>
          <ul>
            <li>Choose reducing balance over flat rate when possible</li>
            <li>Consider partial prepayments strategically</li>
            <li>Negotiate processing fees and insurance premiums</li>
            <li>Time your application with promotional rates</li>
          </ul>

          <h2>Tax Benefits and Considerations</h2>
          <p>
            While UAE doesn't have income tax, there are still financial benefits to consider:
          </p>
          <ul>
            <li>Property registration fee structures</li>
            <li>Mortgage protection insurance benefits</li>
            <li>Investment vs. residential property implications</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-green-800 font-semibold mb-2">Need Mortgage Guidance?</h3>
            <p className="text-green-700 mb-4">
              Our mortgage specialists can help you structure the optimal home loan for your situation.
            </p>
            <Link to="/services/mortgage-loans">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Mortgage Services
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

export default HomeLoanStructuring;
