import { Building2, User, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              FinanceBuddy
            </h3>
            <p className="text-gray-300 mb-4">
              Your comprehensive partner for business growth and personal finance management.
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Business Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Insurance Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financial Modeling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cost Optimization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Personal Finance</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Mortgage Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financial Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wealth Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@thefinancebuddy.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+971561144627</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FinanceBuddy. All rights reserved. | Empowering your business and financial journey.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
