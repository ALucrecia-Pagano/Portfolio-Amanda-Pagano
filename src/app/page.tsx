import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TechStack } from "@/components/TechStack";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-6xl space-y-24 sm:space-y-32">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TechStack />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
