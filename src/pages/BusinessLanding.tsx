
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BusinessServiceCards from "@/components/BusinessServiceCards";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const BusinessLanding = () => {
  // Store user preference
  localStorage.setItem('financebuddy_user_type', 'business');

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="business" />
      <Hero userType="business" />
      <BusinessServiceCards />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default BusinessLanding;
