
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, User, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const BlogBusiness = () => {
  const businessPosts = [
    {
      id: "complete-guide-company-setup-uae",
      title: "Complete Guide to Setting Up Your Company in UAE",
      excerpt: "Everything you need to know about establishing your business in the UAE, from choosing the right jurisdiction to obtaining licenses.",
      date: "June 10, 2025",
      readTime: "8 min read",
      author: "Vishavkant Sethi",
      category: "Company Setup"
    },
    {
      id: "virtual-cfo-services-financial-leadership",
      title: "Virtual CFO Services: When Your Business Needs Financial Leadership",
      excerpt: "Discover how virtual CFO services can provide strategic financial guidance without the cost of a full-time executive.",
      date: "May 22, 2025",
      readTime: "6 min read",
      author: "Vishavkant Sethi",
      category: "Financial Management"
    },
    {
      id: "streamlining-bookkeeping-uae-businesses",
      title: "Streamlining Your Bookkeeping: Best Practices for UAE Businesses",
      excerpt: "Essential bookkeeping practices that will keep your UAE business compliant and financially organized.",
      date: "May 8, 2025",
      readTime: "5 min read",
      author: "Vishavkant Sethi",
      category: "Bookkeeping"
    },
    {
      id: "ecommerce-success-uae-setup-scale",
      title: "E-commerce Success in UAE: From Setup to Scale",
      excerpt: "A comprehensive guide to launching and growing your e-commerce business in the UAE market.",
      date: "April 15, 2025",
      readTime: "10 min read",
      author: "Vishavkant Sethi",
      category: "E-commerce"
    },
    {
      id: "cost-optimization-strategies-growing-businesses",
      title: "Cost Optimization Strategies for Growing Businesses",
      excerpt: "Proven methods to reduce operational costs while maintaining quality and growth trajectory.",
      date: "March 28, 2025",
      readTime: "7 min read",
      author: "Vishavkant Sethi",
      category: "Cost Management"
    },
    {
      id: "financial-modeling-101-business-model",
      title: "Financial Modeling 101: Building Your First Business Model",
      excerpt: "Step-by-step guide to creating financial models that help you make informed business decisions.",
      date: "February 18, 2025",
      readTime: "12 min read",
      author: "Vishavkant Sethi",
      category: "Financial Analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/blog">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Business Solutions Blog</h1>
              <p className="text-gray-600 mt-2">Expert insights on business optimization and growth strategies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/business/${post.id}`}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 group-hover:shadow-md transition-all">
                    Read Article
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogBusiness;
