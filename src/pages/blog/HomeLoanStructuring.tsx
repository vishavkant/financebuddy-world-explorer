
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const HomeLoanStructuring = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog/finance">
            <Button variant="outline" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Finance Blog
            </Button>
          </Link>
          
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Home Loans
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Home Loan Structuring: Optimize Your Mortgage
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              May 28, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">Home Loan Structuring Guide</h2>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Home loan structuring in the UAE requires strategic thinking beyond just finding the lowest interest rate. With the right approach, you can save hundreds of thousands of dirhams over your loan tenure while building wealth more effectively. This comprehensive guide covers advanced strategies used by financial experts.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            UAE Mortgage Market: Understanding Your Options
          </h2>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Current Market Landscape</h3>
            <p className="text-gray-700 mb-4">
              The UAE mortgage market is highly competitive, with over 50 banks and financial institutions offering home loans. Interest rates typically range from 2.49% to 4.5% depending on your profile, loan amount, and chosen structure.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">UAE Nationals</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Up to 80% financing for first home</li>
                  <li>• Up to 70% for subsequent properties</li>
                  <li>• Interest rates from 2.49%</li>
                  <li>• Salary transfer not always required</li>
                  <li>• Longer repayment terms available</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Expatriates</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Up to 75% financing for first home</li>
                  <li>• Up to 60% for subsequent properties</li>
                  <li>• Interest rates from 2.75%</li>
                  <li>• Salary transfer typically required</li>
                  <li>• Maximum tenure until age 65</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Understanding Loan Structure Options</h3>
          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-gray-800 mb-2">Fixed vs. Variable Rate Strategy</h4>
              <p className="text-gray-700 mb-3">
                The choice between fixed and variable rates can significantly impact your total interest cost. In the current economic environment, a hybrid approach often works best.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Optimal Rate Strategy</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-medium text-gray-700 text-sm mb-1">Fixed Rate Benefits</h6>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Predictable monthly payments</li>
                      <li>• Protection against rate increases</li>
                      <li>• Better budgeting certainty</li>
                      <li>• Ideal for conservative investors</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-700 text-sm mb-1">Variable Rate Advantages</h6>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Lower initial rates</li>
                      <li>• Benefits from rate decreases</li>
                      <li>• More flexible terms</li>
                      <li>• Suitable for higher risk tolerance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold text-gray-800 mb-2">Reducing vs. Flat Payment Methods</h4>
              <p className="text-gray-700 mb-3">
                Most UAE banks offer reducing balance calculations, but understanding the mechanics helps you make better decisions about prepayments and loan terms.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Payment Method Comparison</h5>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-green-400">
                    <h6 className="font-medium text-gray-800 text-sm">Reducing Balance (Recommended)</h6>
                    <p className="text-xs text-gray-600">Interest calculated on outstanding principal. Early payments significantly reduce total interest.</p>
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-red-400">
                    <h6 className="font-medium text-gray-800 text-sm">Flat Rate (Avoid if possible)</h6>
                    <p className="text-xs text-gray-600">Interest calculated on original loan amount. Early payments don't reduce total interest proportionally.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            Advanced Cost Optimization Strategies
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Strategic Loan Tenure Optimization</h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-blue-800 mb-3">The Tenure vs. EMI Balance</h4>
            <p className="text-gray-700 mb-4">
              While longer tenures reduce monthly EMIs, they significantly increase total interest cost. The optimal strategy balances cash flow needs with wealth building objectives.
            </p>
            
            <div className="bg-white p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-gray-800 mb-2">Tenure Impact Analysis (AED 1 Million Loan at 3.5%)</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Tenure</th>
                      <th className="text-left p-2">Monthly EMI</th>
                      <th className="text-left p-2">Total Interest</th>
                      <th className="text-left p-2">Total Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b">
                      <td className="p-2">15 years</td>
                      <td className="p-2">AED 7,145</td>
                      <td className="p-2">AED 286,100</td>
                      <td className="p-2">AED 1,286,100</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">20 years</td>
                      <td className="p-2">AED 5,803</td>
                      <td className="p-2">AED 392,720</td>
                      <td className="p-2">AED 1,392,720</td>
                    </tr>
                    <tr className="border-b bg-yellow-50">
                      <td className="p-2">25 years</td>
                      <td className="p-2">AED 5,006</td>
                      <td className="p-2">AED 501,800</td>
                      <td className="p-2">AED 1,501,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                *Choosing 15 years over 25 years saves AED 215,700 in interest
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Smart Tenure Strategy</h5>
              <p className="text-gray-700 text-sm mb-2">
                Take a longer tenure initially for lower EMIs, then make strategic prepayments to reduce the effective tenure. This approach provides flexibility while minimizing interest costs.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Prepayment Strategy: Timing is Everything</h3>
          <div className="space-y-6 mb-8">
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-3">When to Make Prepayments</h4>
              <p className="text-gray-700 mb-4">
                The earlier you make prepayments, the greater the impact on total interest savings. However, timing should also consider your overall financial strategy and investment opportunities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Optimal Prepayment Timing</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Within first 5 years for maximum impact</li>
                    <li>• After receiving annual bonuses</li>
                    <li>• When investment returns are lower than loan rate</li>
                    <li>• During periods of stable income</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Prepayment vs. Investment Decision</h5>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <strong>Prepay if:</strong> Expected investment returns < Loan interest rate
                    </div>
                    <div className="text-sm">
                      <strong>Invest if:</strong> Expected returns > Loan rate + Risk premium
                    </div>
                    <div className="text-sm text-gray-600">
                      Consider tax implications and liquidity needs
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">Prepayment Amount vs. Tenure Reduction</h4>
              <p className="text-gray-700 mb-4">
                When making prepayments, you typically have two options: reduce EMI amount or reduce tenure. For most people, reducing tenure provides better long-term savings.
              </p>
              
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Example: AED 100,000 Prepayment in Year 2</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <h6 className="font-medium text-gray-800 text-sm mb-1">Reduce EMI</h6>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• EMI reduces by ~AED 500</li>
                      <li>• Tenure remains same</li>
                      <li>• Interest saving: ~AED 180,000</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                    <h6 className="font-medium text-gray-800 text-sm mb-1">Reduce Tenure (Better)</h6>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• EMI remains same</li>
                      <li>• Tenure reduces by ~3 years</li>
                      <li>• Interest saving: ~AED 220,000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Advanced Wealth Building Strategies
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Leveraging Real Estate for Wealth Creation</h3>
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-purple-800 mb-3">Investment Property Strategy</h4>
            <p className="text-gray-700 mb-4">
              Once you've optimized your primary residence loan, consider using leverage strategically for investment properties. The UAE's rental yields and capital appreciation potential can create substantial wealth over time.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Investment Property Financing</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-medium text-gray-700 text-sm mb-1">Financing Terms</h6>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Up to 60% financing for expats</li>
                      <li>• Up to 70% for UAE nationals</li>
                      <li>• Higher interest rates (0.5-1% premium)</li>
                      <li>• Stricter income requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-700 text-sm mb-1">Investment Considerations</h6>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Target 6-8% gross rental yield</li>
                      <li>• Factor in service charges and maintenance</li>
                      <li>• Consider location and future development</li>
                      <li>• Plan for vacancy periods</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Wealth Building Timeline</h5>
                <div className="space-y-2 text-sm">
                  <div><strong>Years 1-3:</strong> Focus on primary residence optimization and emergency fund building</div>
                  <div><strong>Years 4-7:</strong> Consider first investment property with strong rental yield</div>
                  <div><strong>Years 8-15:</strong> Scale investment portfolio based on market conditions and income growth</div>
                  <div><strong>Years 15+:</strong> Focus on loan reduction and portfolio optimization for retirement</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mt-12">
            <h3 className="text-green-800 font-semibold mb-4 text-xl">Optimize Your Home Loan Strategy Today</h3>
            <p className="text-gray-700 mb-6">
              Smart home loan structuring can save you hundreds of thousands of dirhams while accelerating your wealth building journey. Our mortgage specialists have helped over 500+ families optimize their home loan structures, achieving an average savings of AED 180,000 per client over their loan tenure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services/mortgage-loans">
                <Button className="bg-green-600 hover:bg-green-700">
                  Get Mortgage Optimization Services
                </Button>
              </Link>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Calculate Your Savings Potential
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Written by</p>
              <p className="font-semibold">Vishavkant Sethi</p>
              <p className="text-sm text-gray-600">Financial Planning Expert</p>
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

export default HomeLoanStructuring;
