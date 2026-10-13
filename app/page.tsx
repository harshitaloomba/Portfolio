import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Summary } from "@/components/summary";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Achievements } from "@/components/achievements";
import { Leadership } from "@/components/leadership";
import { Footer } from "@/components/footer";

function SectionDivider() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-2">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <section id="about" className="scroll-mt-16">
          <Hero />
          <SectionDivider />
          <Summary />
        </section>

        <SectionDivider />

        <section id="experience" className="scroll-mt-16">
          <Experience />
          <Education />
        </section>

        <SectionDivider />

        <section id="projects" className="scroll-mt-16">
          <Projects />
        </section>

        <SectionDivider />

        <section id="achievements" className="scroll-mt-16">
          <Achievements />
        </section>

        <SectionDivider />

        <section id="skills" className="scroll-mt-16">
          <Skills />
        </section>

        <SectionDivider />

        <section id="leadership" className="scroll-mt-16">
          <Leadership />
        </section>
      </main>
      <Footer />
    </>
  );
}
