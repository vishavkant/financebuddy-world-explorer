import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, TrendingUp, BarChart3, Globe, Target, Home } from "lucide-react";
import { Link } from "react-router-dom";

const InvestmentOpportunitiesUAEIndia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-12">
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
            Indian Equity Markets: Strong Fundamentals and Growth Opportunities
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              May 15, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              9 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Indian Market Investment Guide</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            India's equity markets present one of the most compelling long-term investment opportunities globally. With robust economic fundamentals, strong demographic trends, and transformative structural reforms, Indian markets offer exceptional growth potential for informed investors.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-green-600" />
            India's Economic Foundation: Built for Growth
          </h2>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Demographic Dividend: The Youth Advantage</h3>
            <p className="text-gray-700 mb-4">
              India's demographic profile is unique among major economies. With a median age of just 28 years and over 65% of the population below 35, India has the world's youngest workforce. This demographic dividend translates to sustained consumption growth, rising income levels, and expanding market opportunities.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Population Dynamics</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 1.4+ billion population</li>
                  <li>• 500+ million millennials and Gen Z</li>
                  <li>• Rising literacy rates (77%+)</li>
                  <li>• Expanding middle class (350+ million)</li>
                  <li>• Urbanization rate: 35% and growing</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Economic Impact</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Growing consumer spending power</li>
                  <li>• Increasing formal employment</li>
                  <li>• Rising household savings rates</li>
                  <li>• Expanding digital adoption</li>
                  <li>• Growing entrepreneurship ecosystem</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Transformation: The New Growth Engine</h3>
          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-gray-800 mb-2">Digital Infrastructure Revolution</h4>
              <p className="text-gray-700 mb-3">
                India's digital infrastructure transformation has been unprecedented. The Digital India initiative, Aadhaar system, and UPI payments have created a robust foundation for the digital economy, enabling financial inclusion and business innovation at scale.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Key Digital Milestones</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 750+ million internet users</li>
                    <li>• 1.2+ billion Aadhaar enrollments</li>
                    <li>• 8+ billion UPI transactions monthly</li>
                    <li>• 400+ million smartphone users</li>
                  </ul>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• World's largest biometric ID system</li>
                    <li>• Fastest-growing fintech ecosystem</li>
                    <li>• 100+ unicorn startups</li>
                    <li>• $100B+ digital economy</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold text-gray-800 mb-2">Technology Sector Leadership</h4>
              <p className="text-gray-700 mb-3">
                India has established itself as a global technology hub, with strength across IT services, product development, and emerging technologies. The sector contributes significantly to GDP and exports while creating high-value employment.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Technology Sector Highlights</h5>
                <div className="space-y-2">
                  <div className="text-sm text-gray-700">
                    <strong>IT Services:</strong> $200B+ industry, serving 75% of Fortune 500 companies
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>Software Products:</strong> Growing SaaS ecosystem with global reach
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>R&D Centers:</strong> 1,400+ global R&D centers established by MNCs
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Structural Reforms: Building for the Future
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Government Initiatives Driving Growth</h3>
            <p className="text-gray-700 mb-4">
              India's government has implemented comprehensive structural reforms aimed at improving ease of doing business, reducing bureaucracy, and creating a more competitive economy. These reforms are creating long-term value for businesses and investors.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Tax and Regulatory Reforms</h4>
                <div className="space-y-2">
                  <div className="text-sm text-gray-700">
                    <strong>GST Implementation:</strong> Unified tax system improving efficiency
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>Corporate Tax Reduction:</strong> Reduced to 25% for most companies
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>IBC (Insolvency Code):</strong> Faster resolution of stressed assets
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>RERA:</strong> Improved transparency in real estate sector
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Infrastructure Development</h4>
                <div className="space-y-2">
                  <div className="text-sm text-gray-700">
                    <strong>National Infrastructure Pipeline:</strong> $1.4 trillion investment
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>Smart Cities Mission:</strong> 100 cities transformation
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>Bharatmala Project:</strong> Highway connectivity improvement
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>Sagarmala Initiative:</strong> Port modernization program
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Manufacturing Renaissance: Make in India</h3>
          <div className="bg-orange-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-orange-800 mb-3">Production-Linked Incentive (PLI) Schemes</h4>
            <p className="text-gray-700 mb-4">
              The government's PLI schemes across 14 sectors aim to make India a global manufacturing hub. These incentives are attracting significant domestic and foreign investment, creating new growth opportunities.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-medium text-gray-800 text-sm mb-1">Electronics & IT</h5>
                <p className="text-xs text-gray-600">Mobile manufacturing, semiconductors, IT hardware</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-medium text-gray-800 text-sm mb-1">Automotive</h5>
                <p className="text-xs text-gray-600">EVs, auto components, advanced chemistry cells</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-medium text-gray-800 text-sm mb-1">Pharmaceuticals</h5>
                <p className="text-xs text-gray-600">APIs, medical devices, bulk drugs</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-purple-600" />
            Investment Opportunities Across Sectors
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">High-Growth Sectors for Long-Term Investment</h3>
          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Financial Services: Digital Banking Revolution
              </h4>
              <p className="text-gray-700 mb-3">
                India's financial services sector is undergoing rapid transformation with digital banking, fintech innovation, and expanding financial inclusion creating significant opportunities.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-medium text-gray-800 text-sm mb-1">Key Opportunities</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Digital lending platforms</li>
                    <li>• Wealth management services</li>
                    <li>• Insurance penetration growth</li>
                    <li>• Payment system innovations</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-medium text-gray-800 text-sm mb-1">Market Drivers</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Rising disposable incomes</li>
                    <li>• Financial inclusion initiatives</li>
                    <li>• Regulatory support for fintech</li>
                    <li>• Growing digital adoption</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Consumer Discretionary: Rising Aspirations
              </h4>
              <p className="text-gray-700 mb-3">
                Growing middle class and changing consumer preferences are driving demand across automobiles, consumer durables, and lifestyle products.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-medium text-gray-800 text-sm mb-1">Growth Areas</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Electric vehicle ecosystem</li>
                    <li>• Premium consumer brands</li>
                    <li>• E-commerce and retail</li>
                    <li>• Travel and hospitality</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-medium text-gray-800 text-sm mb-1">Key Trends</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Premiumization across categories</li>
                    <li>• Sustainability focus</li>
                    <li>• Digital-first brands</li>
                    <li>• Health and wellness focus</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Healthcare: Aging Population and Rising Incomes
              </h4>
              <p className="text-gray-700 mb-3">
                Healthcare spending is set to grow rapidly as India's population ages and incomes rise, creating opportunities across pharmaceuticals, hospitals, and health technology.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-medium text-gray-800 text-sm mb-1">Investment Themes</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Specialty pharmaceuticals</li>
                    <li>• Healthcare delivery chains</li>
                    <li>• Medical technology</li>
                    <li>• Telemedicine platforms</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="font-medium text-gray-800 text-sm mb-1">Market Dynamics</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Government health initiatives</li>
                    <li>• Rising health insurance penetration</li>
                    <li>• Medical tourism growth</li>
                    <li>• Preventive healthcare focus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Investment Strategies for Indian Markets</h3>
          <div className="bg-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-800 mb-3">Systematic Investment Approach</h4>
            <p className="text-gray-700 mb-4">
              Given India's long-term growth potential and market volatility, a systematic and disciplined investment approach works best. Here's how to structure your Indian equity exposure:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Diversified Portfolio Allocation</h5>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">60%</div>
                    <div className="text-sm text-gray-600">Large Cap Funds</div>
                    <div className="text-xs text-gray-500">Stability and consistent returns</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">25%</div>
                    <div className="text-sm text-gray-600">Mid & Small Cap</div>
                    <div className="text-xs text-gray-500">Higher growth potential</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">15%</div>
                    <div className="text-sm text-gray-600">Sectoral/Thematic</div>
                    <div className="text-xs text-gray-500">Specific opportunities</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Investment Timeframe Strategy</h5>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">3-5 Years:</span>
                    <span className="text-sm text-gray-600">Balanced diversified approach</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">5-10 Years:</span>
                    <span className="text-sm text-gray-600">Growth-oriented with mid-cap exposure</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">10+ Years:</span>
                    <span className="text-sm text-gray-600">Aggressive growth with thematic plays</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mt-12">
            <h3 className="text-green-800 font-semibold mb-4 text-xl">Start Your Indian Market Investment Journey</h3>
            <p className="text-gray-700 mb-6">
              India's stock market offers exceptional growth opportunities for long-term investors. With our expert guidance, you can build a diversified portfolio that captures the country's economic transformation while managing risks effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services/investment-planning">
                <Button className="bg-green-600 hover:bg-green-700">
                  Get Investment Planning Services
                </Button>
              </Link>
            </div>
          </div>
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

export default InvestmentOpportunitiesUAEIndia;
