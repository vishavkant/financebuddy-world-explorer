
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const StreamliningBookkeeping = () => {
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
            Bookkeeping
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Streamlining Your Bookkeeping: Best Practices for UAE Businesses
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              May 8, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">Streamlining Bookkeeping</h2>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Essential bookkeeping practices that will keep your UAE business compliant and financially organized.
          </p>

          <h2>UAE Bookkeeping Requirements</h2>
          <p>
            Understanding mandatory bookkeeping obligations:
          </p>
          <ul>
            <li>VAT recording and reporting requirements</li>
            <li>Economic Substance Regulations (ESR) compliance</li>
            <li>Corporate tax preparation requirements</li>
            <li>Audit trail maintenance standards</li>
          </ul>

          <h2>Digital Bookkeeping Solutions</h2>
          <p>
            Leverage technology for efficient record keeping:
          </p>
          <ul>
            <li>Cloud-based accounting software benefits</li>
            <li>Automated transaction categorization</li>
            <li>Real-time financial reporting capabilities</li>
            <li>Integration with banking and payment systems</li>
          </ul>

          <h2>Monthly Bookkeeping Checklist</h2>
          <p>
            Stay on top of your financial records:
          </p>
          <ul>
            <li>Bank reconciliation and cash flow analysis</li>
            <li>Accounts receivable and payable management</li>
            <li>Expense categorization and documentation</li>
            <li>VAT return preparation and submission</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-blue-800 font-semibold mb-2">Need Bookkeeping Support?</h3>
            <p className="text-blue-700 mb-4">
              Let our experts handle your bookkeeping while you focus on growing your business.
            </p>
            <Link to="/services/bookkeeping">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Bookkeeping Services
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

export default StreamliningBookkeeping;
