
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Calendar, ArrowLeft, ExternalLink, User as UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

const BlogFinance = () => {
  const financePosts = [
    {
      title: "Investment Opportunities in UAE vs Indian Equity Markets",
      excerpt: "Comprehensive comparison of investment landscapes in UAE and India, helping you make informed decisions.",
      date: "December 12, 2024",
      readTime: "9 min read",
      author: "Raj Patel",
      category: "Investment Guide"
    },
    {
      title: "Building Wealth in UAE: A Complete Guide for Expats",
      excerpt: "Strategic wealth building approaches tailored for expatriates living and working in the UAE.",
      date: "December 8, 2024",
      readTime: "11 min read",
      author: "Amina Hassan",
      category: "Wealth Building"
    },
    {
      title: "Retirement Planning in UAE: Tax-Free Benefits and Strategies",
      excerpt: "How to leverage UAE's tax-free environment for optimal retirement planning and savings.",
      date: "December 3, 2024",
      readTime: "8 min read",
      author: "John Miller",
      category: "Retirement Planning"
    },
    {
      title: "Personal Insurance Guide for UAE Residents",
      excerpt: "Essential insurance coverage every UAE resident should consider for comprehensive financial protection.",
      date: "November 25, 2024",
      readTime: "6 min read",
      author: "Fatima Al-Rashid",
      category: "Insurance"
    },
    {
      title: "Investment Portfolio Diversification: UAE Edition",
      excerpt: "Smart diversification strategies for building a robust investment portfolio while living in UAE.",
      date: "November 18, 2024",
      readTime: "10 min read",
      author: "Ahmed Al-Mansoori",
      category: "Portfolio Management"
    },
    {
      title: "Financial Planning for Young Professionals in UAE",
      excerpt: "Essential financial planning steps for young professionals starting their careers in the UAE.",
      date: "November 10, 2024",
      readTime: "7 min read",
      author: "Sarah Thompson",
      category: "Financial Planning"
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
              <h1 className="text-4xl font-bold text-gray-900">Personal Finance Blog</h1>
              <p className="text-gray-600 mt-2">Investment strategies and financial planning for UAE residents</p>
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
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 group-hover:shadow-md transition-all">
                  Read Article
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFinance;
