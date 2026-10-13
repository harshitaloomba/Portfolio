import { experience, leadership } from "@/lib/data";
import { Briefcase, Users, Check } from "lucide-react";

export function Experience() {
  const pspcl = experience[0];
  const aiesec = leadership[0];

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Career & Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Work Experience & Leadership
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
            Enterprise grid pipeline optimization at PSPCL and youth talent leadership at AIESEC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: PSPCL Internship */}
          <div className="bento-card p-7 rounded-3xl bg-card border border-white/[0.08] relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-border/80 p-1 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
                    <img
                      src="/pspcl.jpeg"
                      alt="PSPCL Logo"
                      className="object-contain w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">PSPCL</h3>
                    <p className="text-xs text-sky-400 font-semibold">{pspcl.position}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono text-muted-foreground bg-secondary/60 border border-border/60">
                  {pspcl.duration}
                </span>
              </div>

              <div className="text-xs font-mono text-muted-foreground mb-4">
                {pspcl.location} • Punjab State Power Corporation Limited
              </div>

              <ul className="space-y-3">
                {pspcl.description.map((desc, idx) => (
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
              <span>PHP & MySQL Pipeline</span>
              <span>12,477 Feeders</span>
            </div>
          </div>

          {/* Card 2: AIESEC Leadership */}
          <div className="bento-card p-7 rounded-3xl bg-card border border-white/[0.08] relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#037EF3]/10 border border-[#037EF3]/30 p-1 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="font-extrabold text-[#037EF3] text-xs tracking-wider">AIESEC</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">{aiesec.organization}</h3>
                    <p className="text-xs text-[#037EF3] font-semibold">{aiesec.position}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono text-muted-foreground bg-secondary/60 border border-border/60">
                  {aiesec.duration}
                </span>
              </div>

              <div className="text-xs font-mono text-muted-foreground mb-4">
                {aiesec.location}
              </div>

              <ul className="space-y-3">
                {aiesec.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                    <span className="w-4 h-4 rounded-full bg-[#037EF3]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={10} className="text-[#037EF3]" />
                    </span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-[#037EF3]">
              <span>National Recognition</span>
              <span>120+ Individuals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
