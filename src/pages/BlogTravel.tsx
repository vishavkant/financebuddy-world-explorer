
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Calendar, User, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const BlogTravel = () => {
  const travelPosts = [
    {
      title: "Hidden Gems in UAE: A Local's Travel Guide",
      excerpt: "Discover lesser-known but spectacular destinations across the UAE that offer unique experiences.",
      date: "December 14, 2024",
      readTime: "7 min read",
      author: "Omar Al-Zaabi",
      category: "UAE Tourism"
    },
    {
      title: "Corporate Travel Management: Best Practices for UAE Companies",
      excerpt: "Streamline your corporate travel processes with these proven strategies and cost-saving tips.",
      date: "December 7, 2024",
      readTime: "8 min read",
      author: "Jennifer Lewis",
      category: "Corporate Travel"
    },
    {
      title: "Visa Guide: Traveling from UAE to Popular Destinations",
      excerpt: "Complete visa requirements and documentation guide for UAE residents traveling internationally.",
      date: "December 1, 2024",
      readTime: "10 min read",
      author: "Khalid Rahman",
      category: "Visa & Documentation"
    },
    {
      title: "Planning Your Dream European Tour from UAE",
      excerpt: "Step-by-step guide to planning an unforgettable European vacation with customized itineraries.",
      date: "November 22, 2024",
      readTime: "12 min read",
      author: "Maria Gonzalez",
      category: "International Travel"
    },
    {
      title: "UAE Desert Adventures: Beyond the Typical Safari",
      excerpt: "Explore unique desert experiences that go beyond traditional camel rides and dune bashing.",
      date: "November 15, 2024",
      readTime: "6 min read",
      author: "Abdullah Al-Maktoum",
      category: "UAE Tourism"
    },
    {
      title: "Family Travel Tips: Exploring UAE with Kids",
      excerpt: "Family-friendly destinations and activities across the UAE that create lasting memories.",
      date: "November 8, 2024",
      readTime: "9 min read",
      author: "Priya Sharma",
      category: "Family Travel"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 py-12">
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Travel Planning Blog</h1>
              <p className="text-gray-600 mt-2">Travel guides and planning tips for UAE and international destinations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-purple-600 transition-colors">
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
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 group-hover:shadow-md transition-all">
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

export default BlogTravel;
