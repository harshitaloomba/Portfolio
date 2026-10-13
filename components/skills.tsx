import { skills } from "@/lib/data";
import { Sparkles, Terminal, Layers, Server, Wrench } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Technical Stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Tools & Technologies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
            Production-ready tooling across computer vision algorithms, backend services, and scalable cloud deployments.
          </p>
        </div>

        {/* Bento Grid of Skills */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Tile 1: AI & Data Science (Featured Wide - 7 cols) */}
          <div className="md:col-span-7 bento-card p-6 rounded-3xl bg-card border border-white/[0.08] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/20 transition-all" />
            
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">Computer Vision & Data Science</h3>
                <p className="text-[11px] text-muted-foreground">Neural models, pose landmarks, numerical processing</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {skills.mlAndData.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-secondary/60 hover:bg-secondary text-foreground text-xs font-medium border border-border/80 hover:border-sky-500/40 transition-all duration-200"
                >
                  {skill.devicon && <i className={`${skill.devicon} text-sm`} />}
                  {!skill.devicon && <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 2: Languages (5 cols) */}
          <div className="md:col-span-5 bento-card p-6 rounded-3xl bg-card border border-white/[0.08]">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Terminal size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">Core Languages</h3>
                <p className="text-[11px] text-muted-foreground">Algorithmic and systems foundations</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.core.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/60 hover:bg-secondary text-foreground text-xs font-medium border border-border/80 hover:border-indigo-500/40 transition-all duration-200"
                >
                  {skill.devicon && <i className={`${skill.devicon} text-sm`} />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 3: Full-Stack & Database (6 cols) */}
          <div className="md:col-span-6 bento-card p-6 rounded-3xl bg-card border border-white/[0.08]">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Layers size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">Full-Stack & Databases</h3>
                <p className="text-[11px] text-muted-foreground">Component libraries, APIs, and document/relational stores</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {[...skills.frontend, ...skills.backend].map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/60 hover:bg-secondary text-foreground text-xs font-medium border border-border/80 hover:border-cyan-500/40 transition-all duration-200"
                >
                  {skill.devicon && <i className={`${skill.devicon} text-sm`} />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 4: Cloud & DevOps (6 cols) */}
          <div className="md:col-span-6 bento-card p-6 rounded-3xl bg-card border border-white/[0.08]">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Server size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">Cloud & CI/CD</h3>
                <p className="text-[11px] text-muted-foreground">Automated workflows, containerization, and hosting</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.devops.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/60 hover:bg-secondary text-foreground text-xs font-medium border border-border/80 hover:border-emerald-500/40 transition-all duration-200"
                >
                  {skill.devicon && <i className={`${skill.devicon} text-sm`} />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 5: Development Tools (12 cols) */}
          <div className="md:col-span-12 bento-card p-6 rounded-3xl bg-card border border-white/[0.08]">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Wrench size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">Workflows & Productivity</h3>
                <p className="text-[11px] text-muted-foreground">Design handoff, project management, and API orchestration</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/60 hover:bg-secondary text-foreground text-xs font-medium border border-border/80 hover:border-amber-500/40 transition-all duration-200"
                >
                  {skill.devicon && <i className={`${skill.devicon} text-sm`} />}
                  {!skill.devicon && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
