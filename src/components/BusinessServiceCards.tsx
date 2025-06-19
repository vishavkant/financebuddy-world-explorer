
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ArrowRight, Calculator, FileText, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessServiceCards = () => {
  const businessServices = [
    {
      title: "Company Setup & Registration",
      description: "Complete UAE company formation services",
      icon: Building2,
      features: [
        "UAE Company Setup",
        "Business License Processing",
        "Legal Documentation",
        "Compliance Management"
      ],
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Financial Services",
      description: "Comprehensive financial management solutions",
      icon: Calculator,
      features: [
        "Financial Modeling & Analysis",
        "Virtual CFO Services",
        "Cost Optimization",
        "Financial Planning"
      ],
      color: "from-green-600 to-green-700"
    },
    {
      title: "Bookkeeping & Accounting",
      description: "Professional accounting and record maintenance",
      icon: FileText,
      features: [
        "Monthly Bookkeeping",
        "VAT Registration & Filing",
        "Financial Reporting",
        "Audit Preparation"
      ],
      color: "from-purple-600 to-purple-700"
    },
    {
      title: "Business Insurance",
      description: "Protect your business with comprehensive coverage",
      icon: Users,
      features: [
        "General Business Insurance",
        "Professional Indemnity",
        "Employee Benefits",
        "Commercial Property Insurance"
      ],
      color: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Business Growth Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Focus on your core business while we handle your non-core financial tasks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                
                <Button className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog/business">
            <Button variant="outline" className="mr-4">
              Read Business Blog
            </Button>
          </Link>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700">
            Free Business Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessServiceCards;
