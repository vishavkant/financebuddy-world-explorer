
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, User, ArrowRight } from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      title: "Business Solutions",
      description: "Focus on your core business while we handle your non-core tasks",
      icon: Building2,
      features: [
        "General & Medical Insurance",
        "Financial Modeling & Analysis", 
        "Process Automation",
        "Cost Optimization Initiatives",
        "Setting up Companies in UAE",
        "Bookkeeping Services",
        "Virtual CFO Services",
        "Ecommerce Support Services"
      ],
      color: "from-blue-600 to-blue-700",
      ctaText: "Get Free Business Consultation",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Personal Finance & Mortgage",
      description: "Secure your financial future with personalized planning and mortgage solutions",
      icon: User,
      features: [
        "Mortgage Advisory & Planning",
        "Home Loan Structuring",
        "Financial Planning & Budgeting",
        "Investment Portfolio Management",
        "Investment Guide in UAE",
        "Investment in Indian Equity Market",
        "Retirement Planning",
        "Personal Insurance Advisory"
      ],
      color: "from-green-600 to-green-700",
      ctaText: "Start Your Financial Plan",
      image: "photo-1649972904349-6e44c42644a7"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Trusted Financial & Business Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From business optimization to personal wealth building and mortgage solutions - we've got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${service.color} relative`}>
                <img 
                  src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=400&h=200`}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
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
                  {service.ctaText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
