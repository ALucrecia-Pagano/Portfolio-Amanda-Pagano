import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechStack } from "@/components/TechStack";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-zinc-100 overflow-x-hidden">
      {/* Textura sutil de cuadrícula de fondo estilo Softiva Studio */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-[0.25]"
      />

      {/* Contenido en capa superior */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between">
        <Navbar />

        <main className="flex-1 space-y-6 sm:space-y-12">
          <Hero />
          <ProjectsSection />
          <TechStack />
          <ExperienceSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
