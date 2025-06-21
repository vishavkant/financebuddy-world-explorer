
import { Shield, TrendingUp, Lightbulb, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BusinessServiceCards = () => {
  const services = [
    {
      icon: Shield,
      title: "Business Insurance",
      description: "Comprehensive insurance solutions to protect your business assets and operations",
      features: ["General Liability", "Professional Indemnity", "Medical Insurance", "Property Insurance"],
      color: "from-blue-600 to-blue-700",
      link: "/services/business-insurance"
    },
    {
      icon: TrendingUp,
      title: "Financial Modeling",
      description: "Advanced financial models for forecasting, budgeting, and strategic decision-making",
      features: ["Scenario Analysis", "Budgeting & Forecasting", "Investment Analysis", "Valuation Services"],
      color: "from-green-600 to-green-700",
      link: "/services/financial-modeling"
    },
    {
      icon: Lightbulb,
      title: "Process Automation",
      description: "Automate repetitive tasks to improve efficiency and reduce operational costs",
      features: ["Workflow Automation", "RPA Implementation", "Custom Software Solutions", "Data Integration"],
      color: "from-purple-600 to-purple-700",
      link: "/services/process-automation"
    },
    {
      icon: BarChart,
      title: "Cost Optimization",
      description: "Identify and implement strategies to reduce costs and improve profitability",
      features: ["Expense Reduction", "Supply Chain Optimization", "Energy Efficiency", "Tax Planning"],
      color: "from-red-600 to-red-700",
      link: "/services/cost-optimization"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Empowering Your Business Growth
          </h2>
          <p className="text-gray-600 mt-4">
            Explore our comprehensive suite of business solutions designed to
            drive efficiency, reduce costs, and maximize profitability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden bg-white">
              <div className={`h-32 bg-gradient-to-br ${service.color} relative flex items-center justify-center`}>
                <service.icon className="w-12 h-12 text-white" />
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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
      </div>
    </section>
  );
};

export default BusinessServiceCards;
