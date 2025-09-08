import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <MissionVisionSection />
        </section>
        <ServicesSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
