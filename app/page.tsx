import { Hero } from "@/components/hero";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Achievements } from "@/components/achievements";
import { Leadership } from "@/components/leadership";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Leadership />
    </main>
  );
}
