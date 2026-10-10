import dynamic from "next/dynamic";
import { AboutSection } from "@/components/sections/about-section";
import { AILabSection } from "@/components/sections/ai-lab-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TimelineSection } from "@/components/sections/timeline-section";

const GitHubAnalyticsSection = dynamic(
  () => import("@/components/sections/github-analytics-section").then((module) => module.GitHubAnalyticsSection),
  { loading: () => <div className="section-shell h-96 animate-pulse rounded-3xl bg-white/[0.02]" /> }
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AILabSection />
      <SkillsSection />
      <TimelineSection />
      <GitHubAnalyticsSection />
      <ContactSection />
    </>
  );
}
