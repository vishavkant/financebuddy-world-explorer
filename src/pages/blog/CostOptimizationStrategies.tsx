
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const CostOptimizationStrategies = () => {
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
              7 min read
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Proven methods to reduce operational costs while maintaining quality and growth trajectory.
          </p>

          <h2>Cost Analysis Framework</h2>
          <p>
            Systematic approach to identifying cost optimization opportunities:
          </p>
          <ul>
            <li>Fixed vs. variable cost categorization</li>
            <li>Activity-based costing analysis</li>
            <li>Vendor and supplier cost benchmarking</li>
            <li>Process efficiency evaluation</li>
          </ul>

          <h2>Technology-Driven Cost Reduction</h2>
          <p>
            Leverage technology for sustainable cost savings:
          </p>
          <ul>
            <li>Process automation and workflow optimization</li>
            <li>Cloud infrastructure and SaaS solutions</li>
            <li>Data analytics for informed decision making</li>
            <li>Remote work and virtual collaboration tools</li>
          </ul>

          <h2>Operational Efficiency Improvements</h2>
          <p>
            Streamline operations without compromising quality:
          </p>
          <ul>
            <li>Lean methodology implementation</li>
            <li>Supply chain optimization</li>
            <li>Energy efficiency and sustainability measures</li>
            <li>Space utilization and facility optimization</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-blue-800 font-semibold mb-2">Optimize Your Business Costs</h3>
            <p className="text-blue-700 mb-4">
              Discover cost reduction opportunities specific to your business operations.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Cost Analysis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOptimizationStrategies;
