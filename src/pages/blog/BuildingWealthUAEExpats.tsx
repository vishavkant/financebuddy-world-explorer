
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, TrendingUp, DollarSign, PieChart, Building } from "lucide-react";
import { Link } from "react-router-dom";

const BuildingWealthUAEExpats = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-4 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
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
          
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Wealth Building
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Building Wealth in UAE: A Complete Guide for Expats
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              April 22, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              15 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <DollarSign className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Building Wealth Guide</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            The UAE presents unparalleled wealth-building opportunities for expatriates, combining tax-free income with access to global investment markets. This comprehensive guide outlines proven strategies to maximize your financial potential while living and working in the Emirates.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            The UAE Wealth Building Advantage: Beyond Tax-Free Income
          </h2>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Unique Financial Benefits for UAE Residents</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Tax Advantages</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Zero personal income tax on salary and bonuses</li>
                  <li>• No capital gains tax on investment profits</li>
                  <li>• No inheritance tax on wealth transfers</li>
                  <li>• Potential for tax-free repatriation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Financial Infrastructure</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• World-class banking system with global reach</li>
                  <li>• Access to international investment platforms</li>
                  <li>• Strong currency stability (AED pegged to USD)</li>
                  <li>• Sophisticated wealth management services</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Strategic Location Benefits</h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-4">
              The UAE's position as a global financial hub provides unique investment opportunities across emerging and developed markets. Residents can easily invest in:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Regional Markets</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• GCC stock exchanges</li>
                  <li>• Middle East REITs</li>
                  <li>• Regional sukuk bonds</li>
                  <li>• Emerging market funds</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Global Markets</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• US and European stocks</li>
                  <li>• International ETFs</li>
                  <li>• Global commodities</li>
                  <li>• Currency diversification</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Alternative Investments</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Dubai real estate</li>
                  <li>• Private equity opportunities</li>
                  <li>• Islamic financial products</li>
                  <li>• Gold and precious metals</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <PieChart className="w-6 h-6 text-blue-600" />
            The 5-Pillar Wealth Building Framework
          </h2>

          <div className="space-y-8 mb-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pillar 1: Emergency Fund Optimization</h3>
              <p className="text-gray-700 mb-4">
                In the UAE's dynamic economy, maintaining adequate liquidity is crucial. The recommended emergency fund should cover 6-12 months of expenses, but the strategy differs from home countries due to visa dependencies and potential job market volatility.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">UAE-Specific Emergency Fund Strategy</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Local Component (40%)</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• UAE bank savings accounts</li>
                      <li>• Short-term fixed deposits</li>
                      <li>• Money market funds in AED</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">International Component (60%)</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Home country bank accounts</li>
                      <li>• USD/EUR liquid investments</li>
                      <li>• Global money market funds</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pillar 2: Strategic Real Estate Investment</h3>
              <p className="text-gray-700 mb-4">
                Real estate forms the cornerstone of wealth building in the UAE, offering both capital appreciation and rental income opportunities. The market dynamics favor strategic investors who understand the cycles and regulations.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Dubai Real Estate Investment Strategy</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <h5 className="font-medium text-gray-800 text-sm mb-1">Primary Residence Strategy</h5>
                    <p className="text-xs text-gray-600">Focus on established communities with strong resale value and rental demand. Target 20-25% down payment to optimize cash flow.</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <h5 className="font-medium text-gray-800 text-sm mb-1">Investment Property Portfolio</h5>
                    <p className="text-xs text-gray-600">Build a portfolio of 2-3 properties across different segments: studio apartments for high yield, villas for capital appreciation.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">ROI Analysis Example</h4>
                <p className="text-sm text-gray-600 mb-2">AED 1.5M apartment in Dubai Marina:</p>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <strong>Annual Rental Income:</strong> AED 105,000 (7% yield)<br/>
                    <strong>Service Charges:</strong> AED 18,000<br/>
                    <strong>Net Rental Yield:</strong> 5.8%
                  </div>
                  <div>
                    <strong>Capital Appreciation:</strong> 4-6% annually<br/>
                    <strong>Total Return Potential:</strong> 10-12%<br/>
                    <strong>Financing Available:</strong> Up to 75%
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pillar 3: Diversified Investment Portfolio</h3>
              <p className="text-gray-700 mb-4">
                Beyond real estate, building a globally diversified investment portfolio ensures long-term wealth growth and currency protection. The tax-free environment allows for more aggressive growth strategies.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Recommended Asset Allocation for UAE Expats</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-medium text-gray-800 mb-2">Conservative Portfolio (Age 45+)</h5>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Bonds/Fixed Income: 40%</div>
                      <div>International Equities: 35%</div>
                      <div>Regional Stocks: 15%</div>
                      <div>Alternative Investments: 10%</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-medium text-gray-800 mb-2">Growth Portfolio (Age 25-45)</h5>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>International Equities: 50%</div>
                      <div>Emerging Markets: 20%</div>
                      <div>Regional Stocks: 15%</div>
                      <div>Bonds/Cash: 15%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pillar 4: Business and Entrepreneurship</h3>
              <p className="text-gray-700 mb-4">
                The UAE's business-friendly environment offers exceptional opportunities for wealth creation through entrepreneurship and business ownership.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Business Investment Opportunities</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Traditional Business</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Trading and import/export</li>
                      <li>• Professional services</li>
                      <li>• Retail and hospitality</li>
                      <li>• Real estate development</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Modern Opportunities</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• E-commerce and digital services</li>
                      <li>• Fintech and blockchain</li>
                      <li>• Healthcare and education</li>
                      <li>• Renewable energy projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pillar 5: Long-term Financial Security</h3>
              <p className="text-gray-700 mb-4">
                Planning for eventual repatriation or retirement requires sophisticated strategies that account for changing residency status and tax implications.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Exit Strategy Planning</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <h5 className="font-medium text-gray-800 text-sm mb-1">Retirement Location Planning</h5>
                    <p className="text-xs text-gray-600">Consider tax implications, healthcare costs, and cost of living when choosing retirement destination.</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <h5 className="font-medium text-gray-800 text-sm mb-1">Asset Structure Optimization</h5>
                    <p className="text-xs text-gray-600">Organize investments in tax-efficient structures that remain beneficial after leaving UAE.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Building className="w-6 h-6 text-green-600" />
            Implementation Timeline and Action Steps
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Year-by-Year Wealth Building Plan</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-gray-800">Year 1-2: Foundation Building</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Establish emergency fund (6 months expenses)</li>
                  <li>• Open international investment accounts</li>
                  <li>• Purchase primary residence or start renting strategically</li>
                  <li>• Begin systematic investment in index funds</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-gray-800">Year 3-5: Expansion Phase</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Acquire first investment property</li>
                  <li>• Increase investment portfolio to AED 500K+</li>
                  <li>• Consider business investment opportunities</li>
                  <li>• Expand to international markets</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
                <h4 className="font-semibold text-gray-800">Year 6-10: Wealth Multiplication</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Build real estate portfolio (2-3 properties)</li>
                  <li>• Achieve AED 2M+ investment portfolio</li>
                  <li>• Launch or invest in business ventures</li>
                  <li>• Begin exit strategy planning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mt-12">
            <h3 className="text-green-800 font-semibold mb-4 text-xl">Start Your Wealth Building Journey Today</h3>
            <p className="text-gray-700 mb-6">
              The UAE offers a unique window of opportunity for wealth creation. With proper planning and execution, you can build substantial wealth while enjoying the benefits of tax-free living. Our financial planning experts have helped over 300+ expat families create comprehensive wealth building strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services/financial-planning">
                <Button className="bg-green-600 hover:bg-green-700">
                  Get Financial Planning Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Written by</p>
              <p className="font-semibold">Vishavkant Sethi</p>
              <p className="text-sm text-gray-600">Financial Planning Expert</p>
              <p className="text-xs text-gray-500 mt-1">12+ years helping UAE expats build wealth</p>
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

export default BuildingWealthUAEExpats;
