import { AboutSection } from "@/components/sections/about-section";
import { AILabSection } from "@/components/sections/ai-lab-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AILabSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
