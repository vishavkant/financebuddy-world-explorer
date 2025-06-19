import { Shield, TrendingUp, Lightbulb, BarChart, User, Lock } from "lucide-react";

const BusinessServiceCards = () => {
  const services = [
    {
      icon: Shield,
      title: "Business Insurance",
      description: "Comprehensive insurance solutions to protect your business assets and operations",
      features: ["General Liability", "Professional Indemnity", "Medical Insurance", "Property Insurance"]
    },
    {
      icon: TrendingUp,
      title: "Financial Modeling",
      description: "Advanced financial models for forecasting, budgeting, and strategic decision-making",
      features: ["Scenario Analysis", "Budgeting & Forecasting", "Investment Analysis", "Valuation Services"]
    },
    {
      icon: Lightbulb,
      title: "Process Automation",
      description: "Automate repetitive tasks to improve efficiency and reduce operational costs",
      features: ["Workflow Automation", "RPA Implementation", "Custom Software Solutions", "Data Integration"]
    },
    {
      icon: BarChart,
      title: "Cost Optimization",
      description: "Identify and implement strategies to reduce costs and improve profitability",
      features: ["Expense Reduction", "Supply Chain Optimization", "Energy Efficiency", "Tax Planning"]
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
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
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {service.description}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {service.features.map((feature, i) => (
                    <li key={i} className="mb-1">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessServiceCards;
