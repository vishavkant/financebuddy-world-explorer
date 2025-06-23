
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, TrendingUp, ShoppingCart, Globe, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const ECommerceSuccessUAE = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog/business">
            <Button variant="outline" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Business Blog
            </Button>
          </Link>
          
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
            E-commerce Strategy
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            E-commerce Success in UAE: From Setup to Scale
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              April 15, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              12 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <ShoppingCart className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">E-commerce Success Guide</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            The UAE e-commerce market is experiencing unprecedented growth, with online retail sales expected to reach $27.1 billion by 2025. This comprehensive guide will walk you through everything you need to know to build a successful e-commerce business in the UAE market.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            UAE E-commerce Market Landscape: The Golden Opportunity
          </h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Market Statistics That Matter</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Digital Adoption Rates</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• 99% internet penetration rate</li>
                  <li>• 95% smartphone penetration</li>
                  <li>• 73% of population shops online regularly</li>
                  <li>• Average online spend: AED 8,400 per person annually</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Consumer Behavior Insights</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• 65% prefer mobile shopping</li>
                  <li>• 45% research online before buying offline</li>
                  <li>• 78% value same-day delivery</li>
                  <li>• 82% trust customer reviews significantly</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Why UAE is Perfect for E-commerce</h3>
          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-gray-800 mb-2">Strategic Geographic Location</h4>
              <p className="text-gray-700">
                The UAE serves as a gateway between East and West, offering unparalleled access to over 2 billion consumers within a 4-hour flight radius. This positioning makes it ideal for businesses looking to serve the Middle East, Africa, and South Asian markets from a single hub.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-gray-800 mb-2">Robust Infrastructure</h4>
              <p className="text-gray-700">
                World-class logistics infrastructure including Dubai International Airport, Jebel Ali Port, and advanced telecommunications networks provide the backbone for efficient e-commerce operations. Last-mile delivery solutions are highly developed with multiple local and international providers.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold text-gray-800 mb-2">Business-Friendly Environment</h4>
              <p className="text-gray-700">
                Zero corporate tax for most businesses, 100% foreign ownership allowed in many sectors, and streamlined business setup processes make the UAE an attractive destination for e-commerce entrepreneurs.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-green-600" />
            Setting Up Your E-commerce Business: A Step-by-Step Guide
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Legal Structure and Licensing</h3>
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-green-800 mb-3">Business License Options</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Mainland License</h5>
                <p className="text-sm text-gray-600 mb-2">Best for: Businesses targeting UAE market primarily</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Can trade anywhere in UAE</li>
                  <li>• Requires local service agent (UAE national)</li>
                  <li>• Lower setup costs</li>
                  <li>• Suitable for B2B and B2C operations</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Free Zone License</h5>
                <p className="text-sm text-gray-600 mb-2">Best for: Import/export focused businesses</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• 100% foreign ownership</li>
                  <li>• Tax benefits and exemptions</li>
                  <li>• Easy repatriation of profits</li>
                  <li>• Ideal for regional distribution</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">2. E-commerce Platform Selection</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">Platform Comparison</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium text-gray-800 text-sm">Shopify Plus</h5>
                  <p className="text-xs text-gray-600">Best for: Scalable businesses, AED 500-2000/month</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium text-gray-800 text-sm">WooCommerce</h5>
                  <p className="text-xs text-gray-600">Best for: WordPress users, Free + hosting costs</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium text-gray-800 text-sm">Magento Commerce</h5>
                  <p className="text-xs text-gray-600">Best for: Large enterprises, AED 8000+ setup</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">Key Features to Consider</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Multi-currency support (AED, USD, EUR)</li>
                <li>• Arabic language support</li>
                <li>• Mobile-responsive design</li>
                <li>• SEO optimization capabilities</li>
                <li>• Inventory management integration</li>
                <li>• Multiple payment gateway support</li>
                <li>• Third-party app ecosystem</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-purple-600" />
            Marketing and Customer Acquisition Strategies
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Marketing Channels That Work in UAE</h3>
          <div className="space-y-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3">Social Media Marketing</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Instagram</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• 4.2M active users in UAE</li>
                    <li>• High engagement rates</li>
                    <li>• Instagram Shopping integration</li>
                    <li>• Influencer partnerships</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">TikTok</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Fastest growing platform</li>
                    <li>• Strong Gen Z presence</li>
                    <li>• Creative content opportunities</li>
                    <li>• TikTok Shopping features</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">LinkedIn</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• B2B audience focus</li>
                    <li>• Professional networking</li>
                    <li>• Thought leadership content</li>
                    <li>• Lead generation tools</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">Search Engine Optimization (SEO)</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Local SEO Priorities</h5>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Google My Business optimization</li>
                    <li>• Local keywords (Dubai, Abu Dhabi, etc.)</li>
                    <li>• Arabic keyword research</li>
                    <li>• Local directory listings</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Content Strategy</h5>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Bilingual content creation</li>
                    <li>• Product-focused blog posts</li>
                    <li>• Video content optimization</li>
                    <li>• User-generated content campaigns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Marketplace Integration Strategy</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-gray-800 mb-4">Multi-Channel Approach</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-800 mb-3">Primary Marketplaces</h5>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                    <h6 className="font-medium text-gray-800 text-sm">Amazon.ae</h6>
                    <p className="text-xs text-gray-600">Largest reach, FBA benefits, competitive</p>
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                    <h6 className="font-medium text-gray-800 text-sm">Noon.com</h6>
                    <p className="text-xs text-gray-600">Regional focus, Arabic support, growing</p>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-3">Niche Marketplaces</h5>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                    <h6 className="font-medium text-gray-800 text-sm">Carrefour MAF</h6>
                    <p className="text-xs text-gray-600">Grocery and household items</p>
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-green-400">
                    <h6 className="font-medium text-gray-800 text-sm">Dubizzle</h6>
                    <p className="text-xs text-gray-600">Electronics and second-hand goods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg mt-12">
            <h3 className="text-blue-800 font-semibold mb-4 text-xl">Ready to Launch Your E-commerce Success Story?</h3>
            <p className="text-gray-700 mb-6">
              From business setup to marketplace optimization, we've helped over 200+ businesses establish successful e-commerce operations in the UAE. Our comprehensive approach covers everything from legal compliance to marketing strategy implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services/ecommerce-setup">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Start Your E-commerce Journey
                </Button>
              </Link>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Schedule Free Strategy Session
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Written by</p>
              <p className="font-semibold">Vishavkant Sethi</p>
              <p className="text-sm text-gray-600">E-commerce Strategy Expert</p>
              <p className="text-xs text-gray-500 mt-1">12+ years helping businesses succeed online</p>
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

export default ECommerceSuccessUAE;
