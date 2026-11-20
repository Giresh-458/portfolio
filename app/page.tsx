import dynamic from "next/dynamic";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PipelineSection } from "@/components/sections/pipeline-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

const GitHubAnalyticsSection = dynamic(
  () => import("@/components/sections/github-analytics-section").then((m) => m.GitHubAnalyticsSection),
  { loading: () => <div className="wrap h-56 animate-pulse" /> }
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <PipelineSection />
      <AboutSection />
      <SkillsSection />
      <GitHubAnalyticsSection />
      <ContactSection />
    </>
  );
}
