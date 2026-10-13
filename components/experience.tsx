import { experience, leadership } from "@/lib/data";
import { Briefcase, Users, Check } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Background & Track Record
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Experience & Leadership
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
            Product operations, cross-border youth exchange coordination, and data-driven performance management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1: Operational Experience */}
          <div className="bento-card p-7 rounded-3xl bg-card border border-white/[0.08] relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">AIESEC in India</h3>
                    <p className="text-xs text-sky-400 font-medium">Team Leader, Outgoing Global Volunteer</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono text-muted-foreground bg-secondary/60 border border-border/60">
                  2024 — 2025
                </span>
              </div>

              <div className="text-xs font-mono text-muted-foreground mb-4">
                Patiala, Punjab, India
              </div>

              <ul className="space-y-3">
                {experience[0].description.map((desc, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                    <span className="w-4 h-4 rounded-full bg-sky-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={10} className="text-sky-400" />
                    </span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-sky-400">
              <span>Operational Analytics</span>
              <span>100+ Delegates</span>
            </div>
          </div>

          {/* Column 2: Team Leadership & Community */}
          <div className="bento-card p-7 rounded-3xl bg-card border border-white/[0.08] relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">AIESEC in Patiala</h3>
                    <p className="text-xs text-amber-400 font-medium">Leadership & Talent Management</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono text-muted-foreground bg-secondary/60 border border-border/60">
                  Team Leader
                </span>
              </div>

              <div className="text-xs font-mono text-muted-foreground mb-4">
                Thapar Institute of Engineering & Technology
              </div>

              <ul className="space-y-3">
                {leadership[0].responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                    <span className="w-4 h-4 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={10} className="text-amber-400" />
                    </span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-amber-400">
              <span>People Leadership</span>
              <span>15+ Team Members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
