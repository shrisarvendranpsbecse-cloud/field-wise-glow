import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ImpactSection from "@/components/ImpactSection";
import DataSourcesSection from "@/components/DataSourcesSection";
import PrototypeSection from "@/components/PrototypeSection";

import ContactForm from "@/components/forms/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <ImpactSection />
      <DataSourcesSection />
      <PrototypeSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
