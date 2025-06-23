
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, TrendingDown, DollarSign, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const CostOptimizationStrategies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <div className="bg-gradient-to-br from-red-50 to-red-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog/business">
            <Button variant="outline" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Business Blog
            </Button>
          </Link>
          
          <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Cost Management
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cost Optimization Strategies for Growing Businesses
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              March 28, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              10 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-8">
            <TrendingDown className="w-16 h-16 text-white" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
            In today's competitive business landscape, cost optimization isn't just about cutting expenses—it's about strategic resource allocation that drives sustainable growth while maintaining operational excellence and customer satisfaction.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <div className="flex items-center mb-2">
              <Target className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-green-800 font-semibold">The Strategic Approach</h3>
            </div>
            <p className="text-green-700">
              Successful cost optimization focuses on improving efficiency and eliminating waste rather than simply reducing spending. 
              The goal is to do more with less while maintaining or improving quality and customer experience.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <DollarSign className="w-8 h-8 text-green-600 mr-3" />
            Cost Analysis Framework
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Before implementing cost reduction strategies, it's essential to understand where your money is going and which expenses 
            drive the most value for your business. A systematic analysis provides the foundation for informed decision-making.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Fixed vs. Variable Costs
              </h4>
              <p className="text-gray-700 text-sm mb-3">Categorize expenses to understand your cost structure:</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Rent, salaries, insurance (Fixed)</li>
                <li>• Materials, utilities, commissions (Variable)</li>
                <li>• Equipment, software licenses (Semi-fixed)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                Activity-Based Costing
              </h4>
              <p className="text-gray-700 text-sm mb-3">Allocate costs to specific business activities:</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Product development and design</li>
                <li>• Marketing and customer acquisition</li>
                <li>• Operations and fulfillment</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-8 h-8 text-yellow-600 mr-3" />
            Technology-Driven Cost Reduction
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Modern technology offers unprecedented opportunities for cost optimization through automation, cloud computing, 
            and data-driven decision making. Here's how to leverage technology strategically:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">Process Automation Benefits</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Time Savings</h5>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Automated invoicing and payments</li>
                    <li>• Customer service chatbots</li>
                    <li>• Inventory management systems</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Error Reduction</h5>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Consistent data entry</li>
                    <li>• Automated compliance checks</li>
                    <li>• Quality control processes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-3">Cloud Infrastructure Advantages</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-purple-800 mb-2">Reduced IT Costs</h5>
                  <p className="text-purple-700 text-sm">Eliminate hardware maintenance and reduce IT staff requirements</p>
                </div>
                <div>
                  <h5 className="font-medium text-purple-800 mb-2">Scalability</h5>
                  <p className="text-purple-700 text-sm">Pay only for resources you use, scale up or down as needed</p>
                </div>
                <div>
                  <h5 className="font-medium text-purple-800 mb-2">Accessibility</h5>
                  <p className="text-purple-700 text-sm">Enable remote work and reduce office space requirements</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Operational Efficiency Improvements</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Operational efficiency improvements often provide the highest return on investment in cost optimization efforts. 
            These strategies focus on eliminating waste and streamlining processes:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Lean Methodology Implementation</h4>
                <p className="text-gray-700 text-sm mb-3">Identify and eliminate waste in all business processes:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Reduce waiting times in workflows</li>
                    <li>• Minimize inventory holding costs</li>
                    <li>• Eliminate redundant processes</li>
                  </ul>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Optimize resource utilization</li>
                    <li>• Standardize best practices</li>
                    <li>• Continuous improvement culture</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Supply Chain Optimization</h4>
                <p className="text-gray-700 text-sm mb-3">Streamline your supply chain for maximum efficiency:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Negotiate better supplier terms</li>
                    <li>• Implement just-in-time inventory</li>
                    <li>• Consolidate purchasing power</li>
                  </ul>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Optimize logistics and shipping</li>
                    <li>• Reduce supplier dependency risks</li>
                    <li>• Implement quality control measures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg mt-12">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Ready to Optimize Your Business Costs?</h3>
            </div>
            <p className="text-red-100 mb-6 text-lg">
              Our cost optimization experts can help you identify savings opportunities specific to your business model and industry. 
              Get a comprehensive cost analysis and actionable optimization plan.
            </p>
            <Link to="/services/cost-optimization">
              <Button className="bg-white text-red-600 hover:bg-red-50 font-semibold">
                Get Cost Optimization Consultation
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Written by</p>
              <p className="font-semibold text-lg">Vishavkant Sethi</p>
              <p className="text-sm text-gray-600">Financial Planning Expert & Business Strategy Consultant</p>
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

export default CostOptimizationStrategies;
