
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, User, ArrowRight, Calendar, Clock, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogVerticals = [
    {
      title: "Business Solutions Blog",
      description: "Expert insights on business optimization, financial modeling, and UAE company setup",
      icon: Building2,
      color: "from-blue-600 to-blue-700",
      path: "/blog/business",
      postCount: 12,
      latestPost: "Complete Guide to Setting Up Your Company in UAE"
    },
    {
      title: "Personal Finance & Mortgage Blog",
      description: "Investment strategies, mortgage solutions, and financial planning tips for UAE residents",
      icon: User,
      color: "from-green-600 to-green-700",
      path: "/blog/finance",
      postCount: 18,
      latestPost: "Mortgage Planning Guide for UAE Residents"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              FinanceBuddy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, tips, and guides across Business Solutions and Personal Finance & Mortgage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogVerticals.map((vertical, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                <div className={`h-32 bg-gradient-to-br ${vertical.color} relative flex items-center justify-center`}>
                  <vertical.icon className="w-12 h-12 text-white" />
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {vertical.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {vertical.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {vertical.postCount} articles
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Updated weekly
                    </span>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-700">Latest:</p>
                    <p className="text-sm text-gray-600 mt-1">{vertical.latestPost}</p>
                  </div>
                  
                  <Link to={vertical.path}>
                    <Button className={`w-full bg-gradient-to-r ${vertical.color} hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                      Read Articles
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
