
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, CheckCircle, AlertCircle, FileText, TrendingUp } from "lucide-react";
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
              8 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-8">
            <FileText className="w-16 h-16 text-white" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
            Effective bookkeeping is the backbone of any successful business in the UAE. With proper systems and practices in place, you can ensure compliance, make informed decisions, and focus on growing your business while maintaining financial transparency.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
            <div className="flex items-center mb-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
              <h3 className="text-amber-800 font-semibold">Why Proper Bookkeeping Matters</h3>
            </div>
            <p className="text-amber-700">
              In the UAE's regulatory environment, accurate bookkeeping isn't just good practice—it's essential for VAT compliance, 
              Economic Substance Regulations (ESR), and the upcoming Corporate Tax requirements.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
            UAE Bookkeeping Requirements
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Understanding the mandatory bookkeeping obligations in the UAE is crucial for business compliance and success. 
            Here's what every business owner needs to know:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="font-semibold text-gray-900 mb-3">VAT Recording & Reporting</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Maintain detailed records of all taxable supplies</li>
                <li>• Track input and output VAT accurately</li>
                <li>• Submit quarterly VAT returns on time</li>
                <li>• Keep records for at least 5 years</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="font-semibold text-gray-900 mb-3">Economic Substance Regulations</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Document core income-generating activities</li>
                <li>• Maintain records of employees and expenditure</li>
                <li>• Track assets used in UAE operations</li>
                <li>• Prepare annual ESR notifications</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
            Digital Bookkeeping Solutions
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Embracing technology can transform your bookkeeping from a time-consuming chore into an efficient, 
            automated process that provides real-time insights into your business performance.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-blue-900 mb-4">Recommended Features in Bookkeeping Software:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-blue-800 space-y-2">
                <li>✓ Cloud-based accessibility</li>
                <li>✓ Automated bank reconciliation</li>
                <li>✓ Multi-currency support</li>
                <li>✓ VAT compliance features</li>
              </ul>
              <ul className="text-blue-800 space-y-2">
                <li>✓ Real-time financial reporting</li>
                <li>✓ Integration with banking systems</li>
                <li>✓ Mobile app access</li>
                <li>✓ Audit trail capabilities</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Monthly Bookkeeping Checklist</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Consistency is key to effective bookkeeping. Follow this monthly checklist to stay on top of your financial records 
            and ensure nothing falls through the cracks:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Bank Reconciliation</h4>
                <p className="text-gray-700 text-sm">Match all bank transactions with your records, identify discrepancies, and ensure cash flow accuracy.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Accounts Receivable & Payable</h4>
                <p className="text-gray-700 text-sm">Update customer payments, track outstanding invoices, and manage supplier payments efficiently.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Expense Categorization</h4>
                <p className="text-gray-700 text-sm">Properly categorize all business expenses, attach receipts, and ensure tax deductibility documentation.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">VAT Return Preparation</h4>
                <p className="text-gray-700 text-sm">Compile VAT records, calculate net VAT position, and prepare for quarterly submission deadlines.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg mt-12">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Need Professional Bookkeeping Support?</h3>
            </div>
            <p className="text-blue-100 mb-6 text-lg">
              Let our certified bookkeeping experts handle your financial records while you focus on growing your business. 
              We ensure compliance, accuracy, and timely reporting for UAE businesses.
            </p>
            <Link to="/services/bookkeeping">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                Get Professional Bookkeeping Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Written by</p>
              <p className="font-semibold text-lg">Vishavkant Sethi</p>
              <p className="text-sm text-gray-600">Financial Planning Expert & Business Advisor</p>
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
