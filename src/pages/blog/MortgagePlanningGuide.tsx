import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2, Home } from "lucide-react";
import { Link } from "react-router-dom";

const MortgagePlanningGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex gap-4 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link to="/blog/finance">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Finance Blog
              </Button>
            </Link>
          </div>
          
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Mortgage Planning
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mortgage Planning Guide for UAE Residents
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              June 15, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              10 min read
            </span>
          </div>
          
          <div className="h-64 bg-gradient-to-r from-green-600 to-green-700 rounded-lg mb-8 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">Complete Mortgage Planning Guide</h2>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Planning to buy your dream home in the UAE? This comprehensive guide will walk you through everything you need to know about mortgage planning, from understanding eligibility criteria to choosing the right loan structure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding UAE Mortgage Landscape</h2>
          <p className="mb-6">
            The UAE property market offers diverse opportunities for both UAE nationals and expatriates. With proper mortgage planning, you can leverage financing options to make your homeownership dreams a reality while maintaining financial stability.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Key Mortgage Types Available</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Fixed Rate Mortgages:</strong> Interest rate remains constant throughout the loan term</li>
            <li><strong>Variable Rate Mortgages:</strong> Interest rate fluctuates based on market conditions</li>
            <li><strong>Islamic Mortgages:</strong> Sharia-compliant financing options available</li>
            <li><strong>Construction Mortgages:</strong> Financing for under-construction properties</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility and Documentation</h2>
          <p className="mb-4">
            Before applying for a mortgage, ensure you meet the basic eligibility criteria and have all necessary documentation ready.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">For UAE Nationals</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Minimum age: 21 years</li>
            <li>Maximum age at loan maturity: 65 years</li>
            <li>Minimum salary: AED 10,000 per month</li>
            <li>Special financing limits available</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3">For Expatriates</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Minimum age: 21 years</li>
            <li>Maximum age at loan maturity: 65 years</li>
            <li>Minimum salary: AED 15,000 per month</li>
            <li>Up to 80% financing available</li>
            <li>Valid UAE residence visa required</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Planning Tips</h2>
          <p className="mb-4">
            Successful mortgage planning involves more than just securing approval. Consider these strategic elements:
          </p>

          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li><strong>Budget Planning:</strong> Calculate total cost of ownership including maintenance, utilities, and community fees</li>
            <li><strong>Down Payment Strategy:</strong> Aim for the optimal down payment to balance monthly payments and upfront costs</li>
            <li><strong>Interest Rate Analysis:</strong> Compare fixed vs. variable rates based on your risk tolerance</li>
            <li><strong>Loan Term Optimization:</strong> Balance monthly affordability with total interest paid</li>
            <li><strong>Pre-approval Benefits:</strong> Get pre-approved to strengthen your negotiating position</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Not considering all associated costs beyond the mortgage payment</li>
            <li>Choosing the longest loan term without considering total interest</li>
            <li>Not shopping around for the best rates and terms</li>
            <li>Overlooking early settlement penalties and charges</li>
            <li>Not maintaining adequate emergency funds after purchase</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <h3 className="font-bold text-green-900 mb-2">Expert Tip</h3>
            <p className="text-green-800">
              Work with experienced mortgage advisors who understand the UAE market intricacies. Professional guidance can save you thousands of dirhams and ensure you choose the most suitable mortgage structure for your circumstances.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <p className="mb-6">
            Ready to start your mortgage journey? Begin by assessing your financial position, gathering required documentation, and consulting with mortgage specialists who can guide you through the process.
          </p>
        </div>

        <div className="border-t pt-8 mt-12">
          <div className="flex items-center justify-end">
            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingToggle />
    </div>
  );
};

export default MortgagePlanningGuide;
