
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
import CompanySetup from "./pages/services/CompanySetup";
import Bookkeeping from "./pages/services/Bookkeeping";
import ECommerceSetup from "./pages/services/ECommerceSetup";

// Blog Article Pages - Finance
import MortgagePlanningGuide from "./pages/blog/MortgagePlanningGuide";
import HomeLoanStructuring from "./pages/blog/HomeLoanStructuring";
import InvestmentOpportunitiesUAEIndia from "./pages/blog/InvestmentOpportunitiesUAEIndia";
import BuildingWealthUAEExpats from "./pages/blog/BuildingWealthUAEExpats";
import RetirementPlanningUAE from "./pages/blog/RetirementPlanningUAE";
import PersonalInsuranceGuide from "./pages/blog/PersonalInsuranceGuide";

// Blog Article Pages - Business
import CompanySetupGuide from "./pages/blog/CompanySetupGuide";
import VirtualCFOServices from "./pages/blog/VirtualCFOServices";
import StreamliningBookkeeping from "./pages/blog/StreamliningBookkeeping";
import ECommerceSuccessUAE from "./pages/blog/ECommerceSuccessUAE";
import CostOptimizationStrategies from "./pages/blog/CostOptimizationStrategies";
import FinancialModeling101 from "./pages/blog/FinancialModeling101";

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
      <Route path="/services/company-setup" element={<CompanySetup />} />
      <Route path="/services/bookkeeping" element={<Bookkeeping />} />
      <Route path="/services/ecommerce-setup" element={<ECommerceSetup />} />
      
      {/* Finance Blog Article Routes */}
      <Route path="/blog/finance/mortgage-planning-guide-uae" element={<MortgagePlanningGuide />} />
      <Route path="/blog/finance/home-loan-structuring-optimize" element={<HomeLoanStructuring />} />
      <Route path="/blog/finance/investment-opportunities-uae-india" element={<InvestmentOpportunitiesUAEIndia />} />
      <Route path="/blog/finance/building-wealth-uae-expats" element={<BuildingWealthUAEExpats />} />
      <Route path="/blog/finance/retirement-planning-uae-tax-free" element={<RetirementPlanningUAE />} />
      <Route path="/blog/finance/personal-insurance-guide-uae" element={<PersonalInsuranceGuide />} />
      
      {/* Business Blog Article Routes */}
      <Route path="/blog/business/complete-guide-company-setup-uae" element={<CompanySetupGuide />} />
      <Route path="/blog/business/virtual-cfo-services-financial-leadership" element={<VirtualCFOServices />} />
      <Route path="/blog/business/streamlining-bookkeeping-uae-businesses" element={<StreamliningBookkeeping />} />
      <Route path="/blog/business/ecommerce-success-uae-setup-scale" element={<ECommerceSuccessUAE />} />
      <Route path="/blog/business/cost-optimization-strategies-growing-businesses" element={<CostOptimizationStrategies />} />
      <Route path="/blog/business/financial-modeling-101-business-model" element={<FinancialModeling101 />} />
      
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
