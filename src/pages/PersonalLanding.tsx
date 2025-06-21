
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PersonalServiceCards from "@/components/PersonalServiceCards";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingToggle from "@/components/FloatingToggle";

const PersonalLanding = () => {
  // Store user preference
  localStorage.setItem('financebuddy_user_type', 'personal');

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="personal" />
      <Hero userType="personal" />
      <PersonalServiceCards />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingToggle />
    </div>
  );
};

export default PersonalLanding;
