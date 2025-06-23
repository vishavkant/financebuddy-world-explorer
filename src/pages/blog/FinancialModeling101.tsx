import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, TrendingUp, BarChart3, Calculator, Target, Home } from "lucide-react";
import { Link } from "react-router-dom";

const FinancialModeling101 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-4 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link to="/blog/business">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Business Blog
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Financial Modeling: Building Your First Business Model
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              February 18, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              12 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Financial Modeling Mastery</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Financial modeling is the cornerstone of strategic business decision-making. Whether you're seeking investment, planning expansion, or optimizing operations, a robust financial model provides the roadmap to success. This comprehensive guide will take you through building professional-grade financial models that drive real business results.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            Understanding Financial Modeling Fundamentals
          </h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">What Makes a Financial Model Effective?</h3>
            <p className="text-gray-700 mb-4">
              An effective financial model is more than just numbers in spreadsheets. It's a dynamic tool that tells your business story through data, projections, and scenarios. The best models balance complexity with usability, providing detailed insights while remaining accessible to stakeholders.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Key Characteristics</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Clear assumptions and drivers</li>
                  <li>• Logical flow and structure</li>
                  <li>• Scenario analysis capabilities</li>
                  <li>• Error-checking mechanisms</li>
                  <li>• Professional presentation</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Business Applications</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Investment decision support</li>
                  <li>• Fundraising and valuations</li>
                  <li>• Strategic planning</li>
                  <li>• Performance monitoring</li>
                  <li>• Risk management</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Building Blocks of Financial Models</h3>
          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-gray-800 mb-2">Revenue Forecasting & Growth Assumptions</h4>
              <p className="text-gray-700 mb-3">
                Revenue modeling forms the foundation of your financial model. Start with historical performance analysis, then build forward-looking projections based on market research, customer acquisition patterns, and growth strategies.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Revenue Model Components</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Customer acquisition rates and channels</li>
                  <li>• Average customer value and retention rates</li>
                  <li>• Pricing strategy and market positioning</li>
                  <li>• Seasonal variations and market cycles</li>
                  <li>• Product mix and cross-selling opportunities</li>
                </ul>
              </div>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-gray-800 mb-2">Cost Structure & Expense Modeling</h4>
              <p className="text-gray-700 mb-3">
                Understanding your cost structure is crucial for profitability analysis. Separate fixed costs from variable costs, and model how expenses scale with revenue growth.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Cost Categories</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-medium text-gray-700 text-sm mb-1">Variable Costs</h6>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Cost of goods sold (COGS)</li>
                      <li>• Sales commissions</li>
                      <li>• Payment processing fees</li>
                      <li>• Shipping and fulfillment</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-700 text-sm mb-1">Fixed Costs</h6>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Salaries and benefits</li>
                      <li>• Rent and utilities</li>
                      <li>• Software subscriptions</li>
                      <li>• Insurance and legal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Building Integrated Financial Statements
          </h2>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-4">The Three-Statement Model</h3>
            <p className="text-gray-700 mb-4">
              Professional financial models integrate three core financial statements: Income Statement, Balance Sheet, and Cash Flow Statement. Each statement serves a specific purpose while connecting to create a comprehensive financial picture.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Income Statement (P&L) Construction
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  The income statement shows your company's profitability over a specific period. It starts with revenue and subtracts various expenses to arrive at net income.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="font-mono space-y-1">
                    <div>Revenue</div>
                    <div className="ml-2">- Cost of Goods Sold</div>
                    <div className="font-semibold">= Gross Profit</div>
                    <div className="ml-2">- Operating Expenses</div>
                    <div className="font-semibold">= EBITDA</div>
                    <div className="ml-2">- Depreciation & Amortization</div>
                    <div className="font-semibold">= EBIT</div>
                    <div className="ml-2">- Interest Expense</div>
                    <div className="ml-2">- Taxes</div>
                    <div className="font-semibold">= Net Income</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Balance Sheet Modeling and Balancing
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  The balance sheet provides a snapshot of your company's financial position at a specific point in time, showing assets, liabilities, and equity.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <h5 className="font-semibold mb-2">Assets</h5>
                    <div className="space-y-1">
                      <div>• Cash & Cash Equivalents</div>
                      <div>• Accounts Receivable</div>
                      <div>• Inventory</div>
                      <div>• Property, Plant & Equipment</div>
                      <div>• Intangible Assets</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <h5 className="font-semibold mb-2">Liabilities & Equity</h5>
                    <div className="space-y-1">
                      <div>• Accounts Payable</div>
                      <div>• Accrued Expenses</div>
                      <div>• Debt Obligations</div>
                      <div>• Shareholders' Equity</div>
                      <div>• Retained Earnings</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Cash Flow Statement and Cash Management
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  The cash flow statement tracks actual cash movements, crucial for understanding liquidity and funding requirements.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h6 className="font-semibold mb-1">Operating Activities</h6>
                      <div>Net Income adjustments</div>
                      <div>Working capital changes</div>
                    </div>
                    <div>
                      <h6 className="font-semibold mb-1">Investing Activities</h6>
                      <div>Capital expenditures</div>
                      <div>Asset sales/purchases</div>
                    </div>
                    <div>
                      <h6 className="font-semibold mb-1">Financing Activities</h6>
                      <div>Debt issuance/repayment</div>
                      <div>Equity transactions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Advanced Modeling Techniques and Validation
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Scenario Analysis and Sensitivity Testing</h3>
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-purple-800 mb-3">Building Robust Scenario Models</h4>
            <p className="text-gray-700 mb-4">
              Professional financial models must account for uncertainty. Scenario analysis helps stakeholders understand potential outcomes under different market conditions and business assumptions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <h5 className="font-semibold text-gray-800 mb-2">Base Case</h5>
                <p className="text-sm text-gray-600">Most likely scenario based on realistic assumptions</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <h5 className="font-semibold text-gray-800 mb-2">Optimistic</h5>
                <p className="text-sm text-gray-600">Best-case scenario with favorable conditions</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <h5 className="font-semibold text-gray-800 mb-2">Conservative</h5>
                <p className="text-sm text-gray-600">Worst-case scenario for risk assessment</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-semibold text-gray-800 mb-2">Key Variables to Test</h5>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Revenue growth rates</li>
                  <li>• Customer acquisition costs</li>
                  <li>• Market penetration rates</li>
                  <li>• Competitive pricing pressure</li>
                </ul>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Operating margin compression</li>
                  <li>• Working capital requirements</li>
                  <li>• Capital expenditure needs</li>
                  <li>• Economic cycle impacts</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Model Validation and Error Prevention</h3>
          <div className="space-y-6 mb-8">
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-3">Common Modeling Errors to Avoid</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Formula Errors</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Circular references</li>
                    <li>• Hard-coded numbers in formulas</li>
                    <li>• Inconsistent time periods</li>
                    <li>• Missing error checks</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Logic Errors</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Unrealistic growth assumptions</li>
                    <li>• Missing cost relationships</li>
                    <li>• Balance sheet imbalances</li>
                    <li>• Cash flow inconsistencies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">Best Practices for Model Integrity</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Documentation Standards</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Clear assumption documentation</li>
                    <li>• Color-coded cell formatting (inputs, calculations, outputs)</li>
                    <li>• Comprehensive model summary</li>
                    <li>• Version control and change tracking</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Quality Assurance Process</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Peer review and validation</li>
                    <li>• Sensitivity analysis testing</li>
                    <li>• Balance sheet balancing checks</li>
                    <li>• Historical data reconciliation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg mt-12">
            <h3 className="text-blue-800 font-semibold mb-4 text-xl">Master Financial Modeling for Your Business</h3>
            <p className="text-gray-700 mb-6">
              Professional financial models are crucial for business success, fundraising, and strategic planning. Our modeling experts have created over 300+ financial models for UAE businesses across various industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services/financial-modeling">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Financial Modeling Services
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

export default FinancialModeling101;
