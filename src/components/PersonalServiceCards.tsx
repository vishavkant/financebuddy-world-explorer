
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Home, TrendingUp, Shield, PiggyBank } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalServiceCards = () => {
  const personalServices = [
    {
      title: "Mortgage & Home Loans",
      description: "Expert guidance for your home buying journey in UAE",
      icon: Home,
      features: [
        "Mortgage Advisory & Planning",
        "Home Loan Structuring", 
        "Property Investment Guidance",
        "Refinancing Solutions"
      ],
      color: "from-green-600 to-green-700",
      link: "/services/mortgage-loans"
    },
    {
      title: "Investment Planning",
      description: "Build wealth with smart investment strategies",
      icon: TrendingUp,
      features: [
        "Investment Portfolio Management",
        "UAE Investment Guide",
        "Indian Equity Market Investment",
        "Retirement Planning"
      ],
      color: "from-blue-600 to-blue-700",
      link: "/services/investment-planning"
    },
    {
      title: "Personal Insurance",
      description: "Comprehensive protection for you and your family",
      icon: Shield,
      features: [
        "Life Insurance Advisory",
        "Health Insurance Planning",
        "Personal Accident Coverage",
        "Family Protection Plans"
      ],
      color: "from-purple-600 to-purple-700",
      link: "/services/personal-insurance"
    },
    {
      title: "Financial Planning",
      description: "Secure your financial future with personalized strategies",
      icon: PiggyBank,
      features: [
        "Personal Budgeting",
        "Emergency Fund Planning",
        "Debt Management",
        "Financial Goal Setting"
      ],
      color: "from-orange-600 to-orange-700",
      link: "/services/financial-planning"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Personal Finance Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From mortgage solutions to investment planning - we help you achieve your financial goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {personalServices.map((service, index) => (
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
                
                <Link to={service.link}>
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
          <Link to="/blog/finance">
            <Button variant="outline" className="mr-4">
              Read Finance Blog
            </Button>
          </Link>
          <Button className="bg-gradient-to-r from-green-600 to-green-700">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PersonalServiceCards;
