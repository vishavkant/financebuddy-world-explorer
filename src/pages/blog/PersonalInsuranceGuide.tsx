import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, Home } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalInsuranceGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Personal Insurance Guide for UAE Residents
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              February 25, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg mb-8 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">Essential Insurance Coverage</h2>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Living in the UAE comes with unique financial considerations, and having the right insurance coverage is essential for protecting yourself and your family. This guide will walk you through the key types of personal insurance every UAE resident should consider.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Health Insurance</h2>
          <p className="mb-6">
            Health insurance is mandatory in Dubai and Abu Dhabi, and highly recommended for all UAE residents. It ensures access to quality medical care without incurring significant financial burdens.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Key Considerations</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Comprehensive coverage for inpatient and outpatient treatments</li>
            <li>Direct billing options with a wide network of providers</li>
            <li>Coverage for pre-existing conditions and chronic illnesses</li>
            <li>Maternity benefits and newborn coverage</li>
            <li>Optional add-ons like dental and vision care</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Life Insurance</h2>
          <p className="mb-6">
            Life insurance provides financial protection for your loved ones in the event of your untimely demise. It can help cover outstanding debts, living expenses, and future education costs.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Types of Life Insurance</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Term Life Insurance:</strong> Coverage for a specific period, typically 10-30 years</li>
            <li><strong>Whole Life Insurance:</strong> Lifelong coverage with a cash value component</li>
            <li><strong>Endowment Plans:</strong> Savings-oriented plans with a maturity benefit</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Home and Property Insurance</h2>
          <p className="mb-6">
            Whether you own or rent your home in the UAE, protecting your property and belongings is crucial. Home insurance covers damages from fire, theft, natural disasters, and other unforeseen events.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Coverage Options</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Building coverage for structural damages</li>
            <li>Contents coverage for furniture, electronics, and personal items</li>
            <li>Liability coverage for accidents on your property</li>
            <li>Optional coverage for valuables and jewelry</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Car Insurance</h2>
          <p className="mb-6">
            Car insurance is mandatory in the UAE and provides financial protection in case of accidents, theft, or damages to your vehicle.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Types of Car Insurance</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Third-Party Liability:</strong> Covers damages to other vehicles or property</li>
            <li><strong>Comprehensive Coverage:</strong> Covers damages to your vehicle, as well as third-party liabilities</li>
            <li><strong>Optional Add-ons:</strong> Personal accident cover, roadside assistance, and more</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Travel Insurance</h2>
          <p className="mb-6">
            If you travel frequently from the UAE, travel insurance is essential for covering medical expenses, trip cancellations, lost luggage, and other travel-related emergencies.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Key Benefits</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Emergency medical coverage</li>
            <li>Trip cancellation and interruption coverage</li>
            <li>Lost or delayed baggage coverage</li>
            <li>Personal liability coverage</li>
          </ul>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-8">
            <h3 className="font-bold text-orange-900 mb-2">Expert Tip</h3>
            <p className="text-orange-800">
              Work with an experienced insurance advisor who can assess your specific needs and recommend the most suitable coverage options. Comparing quotes from multiple providers can help you find the best value for your money.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
          <p className="mb-6">
            Protect yourself and your family by securing the right insurance coverage in the UAE. Start by assessing your risks, comparing policy options, and consulting with insurance professionals who can guide you through the process.
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
      </div>

      <Footer />
      <FloatingToggle />
    </div>
  );
};

export default PersonalInsuranceGuide;
