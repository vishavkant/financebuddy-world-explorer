
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ServiceCards />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
