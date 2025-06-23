
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, Shield, Heart, Car, Home } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalInsuranceGuide = () => {
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
            Insurance
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Personal Insurance Guide for UAE Residents: Complete Protection Strategy
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Vishavkant Sethi
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              February 25, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              14 min read
            </span>
          </div>

          <div className="h-64 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Shield className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Personal Insurance Guide</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Living in the UAE as an expatriate requires comprehensive insurance planning to protect yourself and your family from unexpected financial burdens. This guide covers essential insurance coverage every UAE resident should consider, from mandatory requirements to optional but crucial protection strategies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-600" />
            UAE Insurance Landscape: Mandatory vs. Recommended Coverage
          </h2>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Understanding UAE Insurance Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-gray-800 mb-2">Mandatory Insurance</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Health insurance (Dubai, Abu Dhabi mandatory)</li>
                  <li>• Motor insurance for vehicle owners</li>
                  <li>• Professional indemnity (certain professions)</li>
                  <li>• Workers' compensation (employer-provided)</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-gray-800 mb-2">Highly Recommended</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Life insurance for income protection</li>
                  <li>• Home contents and personal effects</li>
                  <li>• Travel insurance for frequent travelers</li>
                  <li>• Critical illness and disability coverage</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">UAE Insurance Market Overview</h3>
            <p className="text-gray-700 mb-4">
              The UAE insurance market is highly regulated and competitive, with over 60 licensed insurers operating across the Emirates. Key regulatory bodies include the Insurance Authority, Dubai Financial Services Authority (DFSA), and Abu Dhabi Global Market (ADGM).
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded">
                <h4 className="font-medium text-gray-800 text-sm mb-1">Market Size</h4>
                <p className="text-xs text-gray-600">AED 45+ billion annual premiums</p>
              </div>
              <div className="bg-white p-3 rounded">
                <h4 className="font-medium text-gray-800 text-sm mb-1">Growth Rate</h4>
                <p className="text-xs text-gray-600">8-12% annually across sectors</p>
              </div>
              <div className="bg-white p-3 rounded">
                <h4 className="font-medium text-gray-800 text-sm mb-1">Penetration</h4>
                <p className="text-xs text-gray-600">2.8% of GDP, growing steadily</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-600" />
            Health Insurance: Your Primary Protection
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Mandatory Health Insurance Requirements</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-semibold text-gray-800 mb-2">Dubai Health Insurance Law</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Mandatory for all Dubai residents since 2014</li>
                    <li>• Minimum coverage: AED 150,000 annually</li>
                    <li>• Essential Benefits Package (EBP) requirements</li>
                    <li>• Employer must provide for employees earning under AED 4,000</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-gray-800 mb-2">Abu Dhabi Basic Health Insurance</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Mandatory for all Abu Dhabi residents</li>
                    <li>• Thiqa scheme for UAE nationals</li>
                    <li>• Basic and enhanced packages available</li>
                    <li>• Covers emergency and essential healthcare</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Optimizing Your Health Insurance Strategy</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Coverage Enhancement Options</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-green-400">
                      <h5 className="font-medium text-gray-800 text-sm mb-1">Regional vs International</h5>
                      <p className="text-xs text-gray-600">Regional: AED 3,000-8,000 annually<br/>International: AED 15,000-50,000 annually</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                      <h5 className="font-medium text-gray-800 text-sm mb-1">Maternity Coverage</h5>
                      <p className="text-xs text-gray-600">Essential for families planning children<br/>Coverage: AED 15,000-30,000 per pregnancy</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features to Consider</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Pre-existing condition coverage</li>
                    <li>• Dental and optical benefits</li>
                    <li>• Specialist consultation limits</li>
                    <li>• Hospitalization room category</li>
                    <li>• Emergency evacuation coverage</li>
                    <li>• Wellness and preventive care</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Heart className="w-6 h-6 text-purple-600" />
            Life Insurance: Protecting Your Family's Future
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">Life Insurance for UAE Expats: Critical Considerations</h3>
              <p className="text-gray-700 mb-4">
                As an expatriate in the UAE, life insurance becomes even more critical due to the absence of social security benefits and the need to protect your family's financial security across borders.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Coverage Amount Calculation</h4>
                  <div className="bg-white p-3 rounded">
                    <h5 className="font-medium text-gray-800 text-sm mb-2">Income Replacement Method</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 10-12 times annual income</li>
                      <li>• Consider future income growth</li>
                      <li>• Account for inflation impact</li>
                      <li>• Include education fund needs</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Policy Types Comparison</h4>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded border-l-4 border-green-400">
                      <h6 className="font-medium text-gray-800 text-xs">Term Life Insurance</h6>
                      <p className="text-xs text-gray-600">Lower cost, pure protection, 10-30 year terms</p>
                    </div>
                    <div className="bg-white p-2 rounded border-l-4 border-blue-400">
                      <h6 className="font-medium text-gray-800 text-xs">Whole Life Insurance</h6>
                      <p className="text-xs text-gray-600">Lifetime coverage, cash value, higher premiums</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">International Life Insurance Features</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Portability</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Worldwide coverage</li>
                    <li>• No geographical restrictions</li>
                    <li>• Maintains coverage if relocating</li>
                    <li>• Currency flexibility options</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Tax Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tax-free death benefits</li>
                    <li>• Potential tax-deferred growth</li>
                    <li>• Estate planning advantages</li>
                    <li>• Offshore policy benefits</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Additional Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Critical illness riders</li>
                    <li>• Disability income protection</li>
                    <li>• Waiver of premium options</li>
                    <li>• Accidental death coverage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Car className="w-6 h-6 text-blue-600" />
            Motor Insurance: Beyond Basic Compliance
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">UAE Motor Insurance Requirements and Optimization</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Mandatory Third Party vs. Comprehensive Coverage</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Third Party (Minimum Legal Requirement)</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Covers injury to others</li>
                      <li>• Property damage to third parties</li>
                      <li>• No coverage for your vehicle</li>
                      <li>• Cost: AED 500-1,500 annually</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Comprehensive (Recommended)</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Own vehicle damage coverage</li>
                      <li>• Theft and fire protection</li>
                      <li>• Personal accident benefits</li>
                      <li>• Cost: AED 1,500-4,000 annually</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Key Coverage Enhancements</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Essential Add-ons</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Personal accident coverage (AED 100,000+)</li>
                      <li>• Roadside assistance and towing</li>
                      <li>• Rental car during repairs</li>
                      <li>• Natural disaster coverage</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Premium Optimization</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• No-claims discount (up to 50%)</li>
                      <li>• Multi-vehicle discounts</li>
                      <li>• Safe driver programs</li>
                      <li>• Annual vs. monthly payments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <Home className="w-6 h-6 text-green-600" />
            Home and Contents Insurance: Protecting Your Assets
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Home Insurance in UAE: Owners vs. Tenants</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-800 mb-2">Property Owners</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Building structure coverage</li>
                    <li>• Contents and personal belongings</li>
                    <li>• Public liability protection</li>
                    <li>• Loss of rental income</li>
                    <li>• Alternative accommodation costs</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">Annual Premium: AED 2,000-8,000 depending on property value</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-800 mb-2">Tenants</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Contents and personal effects</li>
                    <li>• Temporary accommodation</li>
                    <li>• Personal liability coverage</li>
                    <li>• Tenant's improvements</li>
                    <li>• Theft and damage protection</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">Annual Premium: AED 500-2,500 based on contents value</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Specialized Coverage Considerations</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">High-Value Items</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Jewelry and watches</li>
                    <li>• Art and collectibles</li>
                    <li>• Electronics and gadgets</li>
                    <li>• Professional equipment</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">May require separate scheduling and appraisals</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Travel Coverage</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Personal effects while traveling</li>
                    <li>• Baggage delay compensation</li>
                    <li>• Emergency accommodation</li>
                    <li>• Document replacement</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">Useful extension for frequent travelers</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Domestic Staff</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Employer liability coverage</li>
                    <li>• Domestic worker accidents</li>
                    <li>• Property damage by staff</li>
                    <li>• Legal expenses coverage</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">Important for households with domestic help</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Insurance Portfolio Optimization Strategy</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Annual Insurance Budget Planning</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Recommended Insurance Budget Allocation</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Single Professional (AED 15,000 monthly income)</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Health Insurance: AED 4,000-6,000</li>
                      <li>• Life Insurance: AED 3,000-5,000</li>
                      <li>• Motor Insurance: AED 2,000-3,000</li>
                      <li>• Contents Insurance: AED 800-1,200</li>
                      <li>• <strong>Total: AED 9,800-15,200 (5.4-8.4% of income)</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Family of 4 (AED 25,000 monthly income)</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Family Health Insurance: AED 12,000-18,000</li>
                      <li>• Life Insurance: AED 8,000-12,000</li>
                      <li>• Motor Insurance: AED 3,000-4,500</li>
                      <li>• Home Insurance: AED 2,500-4,000</li>
                      <li>• <strong>Total: AED 25,500-38,500 (8.5-12.8% of income)</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mt-12">
            <h3 className="text-green-800 font-semibold mb-4 text-xl">Secure Your Family's Financial Future</h3>
            <p className="text-gray-700 mb-6">
              Comprehensive insurance planning is essential for every UAE resident. Our insurance specialists help you navigate the complex landscape of coverage options, ensuring you get optimal protection at competitive rates. We've helped over 800+ families and individuals secure appropriate insurance coverage tailored to their specific needs and circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services/personal-insurance">
                <Button className="bg-green-600 hover:bg-green-700">
                  Get Personal Insurance Services
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
              <p className="text-xs text-gray-500 mt-1">10+ years UAE insurance advisory experience</p>
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

export default PersonalInsuranceGuide;
