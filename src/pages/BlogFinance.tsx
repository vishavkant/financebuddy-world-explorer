
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Calendar, ArrowLeft, ExternalLink, User as UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

const BlogFinance = () => {
  const financePosts = [
    {
      id: "mortgage-planning-guide-uae",
      title: "Mortgage Planning Guide for UAE Residents",
      excerpt: "Complete guide to mortgage planning, home loans, and property financing in the UAE.",
      date: "June 15, 2025",
      readTime: "10 min read",
      author: "Vishavkant Sethi",
      category: "Mortgage Planning"
    },
    {
      id: "home-loan-structuring-optimize",
      title: "Home Loan Structuring: Optimize Your Mortgage",
      excerpt: "Advanced strategies for structuring your home loan to minimize costs and maximize benefits.",
      date: "May 28, 2025",
      readTime: "8 min read",
      author: "Vishavkant Sethi",
      category: "Home Loans"
    },
    {
      id: "investment-opportunities-uae-india",
      title: "Investment Opportunities in UAE vs Indian Equity Markets",
      excerpt: "Comprehensive comparison of investment landscapes in UAE and India, helping you make informed decisions.",
      date: "May 15, 2025",
      readTime: "9 min read",
      author: "Vishavkant Sethi",
      category: "Investment Guide"
    },
    {
      id: "building-wealth-uae-expats",
      title: "Building Wealth in UAE: A Complete Guide for Expats",
      excerpt: "Strategic wealth building approaches tailored for expatriates living and working in the UAE.",
      date: "April 22, 2025",
      readTime: "11 min read",
      author: "Vishavkant Sethi",
      category: "Wealth Building"
    },
    {
      id: "retirement-planning-uae-tax-free",
      title: "Retirement Planning in UAE: Tax-Free Benefits and Strategies",
      excerpt: "How to leverage UAE's tax-free environment for optimal retirement planning and savings.",
      date: "March 18, 2025",
      readTime: "8 min read",
      author: "Vishavkant Sethi",
      category: "Retirement Planning"
    },
    {
      id: "personal-insurance-guide-uae",
      title: "Personal Insurance Guide for UAE Residents",
      excerpt: "Essential insurance coverage every UAE resident should consider for comprehensive financial protection.",
      date: "February 25, 2025",
      readTime: "6 min read",
      author: "Vishavkant Sethi",
      category: "Insurance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-12">
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Personal Finance & Mortgage Blog</h1>
              <p className="text-gray-600 mt-2">Investment strategies, mortgage solutions, and financial planning for UAE residents</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {financePosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-green-600 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <UserIcon className="w-3 h-3" />
                    {post.author}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/finance/${post.id}`}>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 group-hover:shadow-md transition-all">
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

export default BlogFinance;
