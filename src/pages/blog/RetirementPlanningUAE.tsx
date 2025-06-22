
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const RetirementPlanningUAE = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog/finance">
            <Button variant="outline" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Finance Blog
            </Button>
          </Link>
          
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Retirement Planning
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Retirement Planning in UAE: Tax-Free Benefits and Strategies
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              March 18, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            How to leverage UAE's tax-free environment for optimal retirement planning and savings.
          </p>

          <h2>UAE Retirement Planning Fundamentals</h2>
          <p>
            The absence of income tax in UAE creates unique retirement planning opportunities:
          </p>
          <ul>
            <li>Higher disposable income for retirement savings</li>
            <li>Tax-free growth on investment returns</li>
            <li>Flexible retirement account options</li>
            <li>International portability considerations</li>
          </ul>

          <h2>Retirement Savings Strategies</h2>
          <p>
            Maximize your retirement corpus with these approaches:
          </p>
          <ul>
            <li>Systematic Investment Plans (SIPs) in diversified funds</li>
            <li>Property investments for rental income</li>
            <li>International pension schemes</li>
            <li>Gold and commodity investments</li>
          </ul>

          <h2>Cross-Border Retirement Planning</h2>
          <p>
            Planning for retirement across multiple countries:
          </p>
          <ul>
            <li>Social security agreements and benefits</li>
            <li>Tax implications in retirement destination</li>
            <li>Healthcare coverage planning</li>
            <li>Currency and inflation protection</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-green-800 font-semibold mb-2">Plan Your Retirement Today</h3>
            <p className="text-green-700 mb-4">
              Start building your retirement corpus with expert guidance and tailored strategies.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              Get Retirement Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementPlanningUAE;
