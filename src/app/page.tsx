import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      
      {/* Subtle section dividers */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-[#590907]/30 to-transparent" />
      </div>

      <AboutSection />

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-[#A5A79B]/20 to-transparent" />
      </div>

      <ProjectsSection />

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-[#590907]/30 to-transparent" />
      </div>

      <ContactSection />
    </div>
  );
}
