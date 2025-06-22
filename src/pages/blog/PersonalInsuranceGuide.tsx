
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalInsuranceGuide = () => {
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
            Insurance
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Personal Insurance Guide for UAE Residents
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              February 25, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">Personal Insurance Guide</h2>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Essential insurance coverage every UAE resident should consider for comprehensive financial protection.
          </p>

          <h2>Mandatory vs. Optional Insurance</h2>
          <p>
            Understanding what's required and what's recommended in UAE:
          </p>
          <ul>
            <li>Health insurance: Mandatory in most emirates</li>
            <li>Motor insurance: Mandatory for vehicle owners</li>
            <li>Life insurance: Optional but highly recommended</li>
            <li>Home insurance: Optional but valuable protection</li>
          </ul>

          <h2>Life Insurance for Expats</h2>
          <p>
            Protecting your family's financial future:
          </p>
          <ul>
            <li>Term vs. permanent life insurance options</li>
            <li>Coverage amount calculation methods</li>
            <li>International portability features</li>
            <li>Beneficiary designation across borders</li>
          </ul>

          <h2>Health Insurance Optimization</h2>
          <p>
            Getting the best healthcare coverage:
          </p>
          <ul>
            <li>Employer vs. individual health insurance</li>
            <li>Regional vs. international coverage</li>
            <li>Maternity and dental coverage considerations</li>
            <li>Pre-existing condition management</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-green-800 font-semibold mb-2">Review Your Insurance Coverage</h3>
            <p className="text-green-700 mb-4">
              Ensure you have adequate protection with a comprehensive insurance review.
            </p>
            <Link to="/services/personal-insurance">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Personal Insurance Services
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

export default PersonalInsuranceGuide;
