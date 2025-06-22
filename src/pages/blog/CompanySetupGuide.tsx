
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const CompanySetupGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/blog/business">
            <Button variant="outline" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Business Blog
            </Button>
          </Link>
          
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Company Setup
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Guide to Setting Up Your Company in UAE
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              June 10, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>
          
          <div className="h-64 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg mb-8 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">UAE Company Formation Guide</h2>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Starting a business in the UAE? This comprehensive guide covers everything you need to know about company formation, from choosing the right jurisdiction to completing the registration process.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding UAE Business Jurisdictions</h2>
          <p className="mb-6">
            The UAE offers three main business setup options, each with distinct advantages depending on your business model and objectives.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Mainland Company Formation</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Trade anywhere in the UAE and internationally</li>
            <li>No restrictions on business activities</li>
            <li>Can bid for government contracts</li>
            <li>Requires local sponsor or service agent</li>
            <li>Corporate tax applicable from June 2023</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Free Zone Company Setup</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>100% foreign ownership allowed</li>
            <li>Tax exemptions and incentives</li>
            <li>Streamlined setup process</li>
            <li>Trading restrictions may apply</li>
            <li>Over 45+ free zones to choose from</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Offshore Company Formation</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Ideal for holding companies and investments</li>
            <li>No local business activities allowed</li>
            <li>Tax optimization benefits</li>
            <li>Enhanced privacy and confidentiality</li>
            <li>Minimal reporting requirements</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Setup Process</h2>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">1. Business Planning Phase</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Define your business activities and scope</li>
            <li>Choose the appropriate legal structure</li>
            <li>Select the optimal jurisdiction</li>
            <li>Determine capital requirements</li>
            <li>Plan your business location and setup</li>
          </ol>

          <h3 className="text-xl font-bold text-gray-900 mb-3">2. Documentation and Approval</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Prepare and notarize required documents</li>
            <li>Submit trade name reservation application</li>
            <li>Obtain initial approvals from relevant authorities</li>
            <li>Complete MOA and AOA preparation</li>
            <li>Secure necessary pre-approvals if required</li>
          </ol>

          <h3 className="text-xl font-bold text-gray-900 mb-3">3. Registration and Licensing</h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Submit final application with all documents</li>
            <li>Pay registration fees and government charges</li>
            <li>Obtain trade license and registration certificate</li>
            <li>Complete bank account opening procedures</li>
            <li>Register for VAT if applicable</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Considerations for Success</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="font-bold text-blue-900 mb-2">Important Note</h3>
            <p className="text-blue-800">
              Recent changes in UAE corporate tax laws and regulations require careful planning. Ensure you understand the tax implications and compliance requirements for your chosen business structure.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Choosing the Right Partners</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Select experienced business setup consultants</li>
            <li>Work with PRO services for government procedures</li>
            <li>Choose reliable local sponsors or service agents</li>
            <li>Partner with qualified legal and accounting firms</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Setup Compliance</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Maintain proper bookkeeping and accounting records</li>
            <li>File annual returns and renewals on time</li>
            <li>Comply with VAT registration and filing requirements</li>
            <li>Ensure corporate tax compliance from June 2023</li>
            <li>Maintain required approvals and permits</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Optimization Strategies</h2>
          <p className="mb-4">
            Smart planning can significantly reduce your setup costs and ongoing expenses:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Compare different free zones for the best package deals</li>
            <li>Consider shared office spaces initially to reduce overhead</li>
            <li>Bundle services with setup consultants for better rates</li>
            <li>Plan your business activities to optimize licensing costs</li>
            <li>Understand all hidden costs and fees upfront</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
          <p className="mb-6">
            Ready to establish your business in the UAE? Start by consulting with experienced business setup specialists who can guide you through the process and help you choose the most suitable structure for your specific needs.
          </p>
        </div>

        <div className="border-t pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Written by</p>
              <p className="font-semibold">Vishavkant Sethi</p>
              <p className="text-sm text-gray-600">Business Setup Expert</p>
            </div>
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

export default CompanySetupGuide;
