
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAnalytics } from "@/hooks/useAnalytics";
import Index from "./pages/Index";
import PersonalLanding from "./pages/PersonalLanding";
import BusinessLanding from "./pages/BusinessLanding";
import Blog from "./pages/Blog";
import BlogBusiness from "./pages/BlogBusiness";
import BlogFinance from "./pages/BlogFinance";
import NotFound from "./pages/NotFound";

// Personal Service Pages
import MortgageLoans from "./pages/services/MortgageLoans";
import InvestmentPlanning from "./pages/services/InvestmentPlanning";
import PersonalInsurance from "./pages/services/PersonalInsurance";
import FinancialPlanning from "./pages/services/FinancialPlanning";

// Business Service Pages
import BusinessInsurance from "./pages/services/BusinessInsurance";
import FinancialModeling from "./pages/services/FinancialModeling";
import ProcessAutomation from "./pages/services/ProcessAutomation";
import CostOptimization from "./pages/services/CostOptimization";

const queryClient = new QueryClient();

const AppContent = () => {
  useAnalytics();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/personal" element={<PersonalLanding />} />
      <Route path="/business" element={<BusinessLanding />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/business" element={<BlogBusiness />} />
      <Route path="/blog/finance" element={<BlogFinance />} />
      
      {/* Personal Service Routes */}
      <Route path="/services/mortgage-loans" element={<MortgageLoans />} />
      <Route path="/services/investment-planning" element={<InvestmentPlanning />} />
      <Route path="/services/personal-insurance" element={<PersonalInsurance />} />
      <Route path="/services/financial-planning" element={<FinancialPlanning />} />
      
      {/* Business Service Routes */}
      <Route path="/services/business-insurance" element={<BusinessInsurance />} />
      <Route path="/services/financial-modeling" element={<FinancialModeling />} />
      <Route path="/services/process-automation" element={<ProcessAutomation />} />
      <Route path="/services/cost-optimization" element={<CostOptimization />} />
      
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
