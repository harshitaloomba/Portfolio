import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Summary } from "@/components/summary";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Achievements } from "@/components/achievements";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
      <Header />
      <main className="flex-1">
        <section id="about" className="scroll-mt-16">
          <Hero />
        </section>

        <section id="bento" className="scroll-mt-16">
          <Summary />
        </section>

        <section id="projects" className="scroll-mt-16">
          <Projects />
        </section>

        <section id="skills" className="scroll-mt-16">
          <Skills />
        </section>

        <section id="experience" className="scroll-mt-16">
          <Experience />
          <Education />
        </section>

        <section id="achievements" className="scroll-mt-16">
          <Achievements />
        </section>
      </main>
      <Footer />
    </div>
  );
}
