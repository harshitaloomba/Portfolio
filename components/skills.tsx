import { skills } from "@/lib/data";
import { Terminal, Layers, Server, Wrench, Award } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Technical Arsenal
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Skills & Core Competencies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
            Full-stack microservices, cloud infrastructure, machine learning toolkits, and agile team execution.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Tile 1: Programming Languages (6 cols) */}
          <div className="md:col-span-6 bento-card p-6 rounded-3xl bg-card border border-white/[0.08]">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Terminal size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">Programming Languages</h3>
                <p className="text-[11px] text-muted-foreground">Systems, scripting, and web languages</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-secondary/60 hover:bg-secondary text-foreground text-xs font-medium border border-border/80 hover:border-sky-500/40 transition-all duration-200"
                >
                  {skill.devicon && <i className={`${skill.devicon} text-sm`} />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 2: Frameworks & Libraries (6 cols) */}
          <div className="md:col-span-6 bento-card p-6 rounded-3xl bg-card border border-white/[0.08]">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Layers size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">Frameworks & Libraries</h3>
                <p className="text-[11px] text-muted-foreground">Frontend, backend microservices, and ML models</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-secondary/60 hover:bg-secondary text-foreground text-xs font-medium border border-border/80 hover:border-cyan-500/40 transition-all duration-200"
                >
                  {skill.devicon && <i className={`${skill.devicon} text-sm`} />}
                  {!skill.devicon && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 3: Tools, Cloud & Databases (8 cols) */}
          <div className="md:col-span-8 bento-card p-6 rounded-3xl bg-card border border-white/[0.08]">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Server size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">Tools, Cloud & Databases</h3>
                <p className="text-[11px] text-muted-foreground">Databases, containerization, CI/CD, and infrastructure</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.toolsAndCloud.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/60 hover:bg-secondary text-foreground text-xs font-medium border border-border/80 hover:border-emerald-500/40 transition-all duration-200"
                >
                  {skill.devicon && <i className={`${skill.devicon} text-sm`} />}
                  {!skill.devicon && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 4: Core Competencies (4 cols) */}
          <div className="md:col-span-4 bento-card p-6 rounded-3xl bg-card border border-white/[0.08]">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Award size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">Core Competencies</h3>
                <p className="text-[11px] text-muted-foreground">Leadership & delivery</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {skills.competencies.map((comp, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary/50 text-foreground text-xs font-medium border border-border/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
