
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const FinancialModeling101 = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog/business">
            <Button variant="outline" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Business Blog
            </Button>
          </Link>
          
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Financial Analysis
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Financial Modeling 101: Building Your First Business Model
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              February 18, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              12 min read
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Step-by-step guide to creating financial models that help you make informed business decisions.
          </p>

          <h2>Financial Modeling Fundamentals</h2>
          <p>
            Understanding the building blocks of effective financial models:
          </p>
          <ul>
            <li>Revenue forecasting and growth assumptions</li>
            <li>Cost structure and expense modeling</li>
            <li>Cash flow projection and working capital</li>
            <li>Scenario analysis and sensitivity testing</li>
          </ul>

          <h2>Essential Financial Statements</h2>
          <p>
            Building integrated financial statement models:
          </p>
          <ul>
            <li>Income statement (P&L) construction</li>
            <li>Balance sheet modeling and balancing</li>
            <li>Cash flow statement and cash management</li>
            <li>Financial ratios and KPI tracking</li>
          </ul>

          <h2>Model Validation and Testing</h2>
          <p>
            Ensuring your model is reliable and accurate:
          </p>
          <ul>
            <li>Error checking and formula validation</li>
            <li>Sensitivity analysis and stress testing</li>
            <li>Scenario modeling for different outcomes</li>
            <li>Model documentation and version control</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-blue-800 font-semibold mb-2">Need Financial Modeling Help?</h3>
            <p className="text-blue-700 mb-4">
              Get professional assistance in building robust financial models for your business.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Build Financial Model
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialModeling101;
