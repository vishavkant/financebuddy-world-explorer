
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, BarChart3, Zap, TrendingDown, Building2, Calculator, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessServiceCards = () => {
  const businessServices = [
    {
      title: "Business Insurance",
      description: "Comprehensive insurance solutions for UAE businesses",
      icon: Shield,
      features: [
        "General Liability Insurance",
        "Professional Indemnity Coverage",
        "Medical Insurance for Employees",
        "Property & Asset Protection"
      ],
      color: "from-blue-600 to-blue-700",
      link: "/services/business-insurance"
    },
    {
      title: "Financial Modeling",
      description: "Advanced financial models for strategic decision-making",
      icon: BarChart3,
      features: [
        "3-Statement Financial Models",
        "DCF Valuation Models",
        "Budget & Forecast Models",
        "Scenario Analysis Models"
      ],
      color: "from-green-600 to-green-700",
      link: "/services/financial-modeling"
    },
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation",
      icon: Zap,
      features: [
        "Workflow Design & Optimization",
        "Custom Software Development",
        "Data Integration & Migration",
        "Business Process Re-engineering"
      ],
      color: "from-purple-600 to-purple-700",
      link: "/services/process-automation"
    },
    {
      title: "Cost Optimization",
      description: "Strategic cost reduction and profitability improvement",
      icon: TrendingDown,
      features: [
        "Expense Analysis & Reduction",
        "Supply Chain Optimization",
        "POS Credit Card Commission Savings",
        "Technology Cost Management"
      ],
      color: "from-red-600 to-red-700",
      link: "/services/cost-optimization"
    },
    {
      title: "Company Setup",
      description: "Complete business formation services in UAE",
      icon: Building2,
      features: [
        "Mainland Company Formation",
        "Free Zone Company Setup",
        "Offshore Company Formation",
        "Branch Office Setup"
      ],
      color: "from-emerald-600 to-emerald-700",
      link: "/services/company-setup"
    },
    {
      title: "Accounting & Bookkeeping",
      description: "Professional accounting services for compliance",
      icon: Calculator,
      features: [
        "Monthly Bookkeeping Services",
        "Management Reporting",
        "Payroll Processing",
        "VAT Compliance Support"
      ],
      color: "from-indigo-600 to-indigo-700",
      link: "/services/bookkeeping"
    },
    {
      title: "E-Commerce Setup",
      description: "Marketplace setup and online business solutions",
      icon: ShoppingCart,
      features: [
        "Amazon Marketplace Setup",
        "Noon Platform Integration",
        "Multi-Marketplace Management",
        "E-Commerce Strategy & Optimization"
      ],
      color: "from-cyan-600 to-cyan-700",
      link: "/services/ecommerce-setup"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Business Growth Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive services to establish, optimize, and scale your business in the UAE
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
              <div className={`h-32 bg-gradient-to-br ${service.color} relative flex items-center justify-center`}>
                <service.icon className="w-12 h-12 text-white" />
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={service.link} onClick={scrollToTop}>
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700">
            Schedule Business Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessServiceCards;
