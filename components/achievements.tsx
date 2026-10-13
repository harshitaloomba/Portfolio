import { achievements } from "@/lib/data";
import { Award, ExternalLink, Code2, Trophy, CheckCircle2 } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Recognition
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Certifications & Honors
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
            Verified industry simulations, technical certifications, and university awards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievements.map((item, index) => {
            const hasLink = Boolean(item.link);
            const CardTag = hasLink ? "a" : "div";

            return (
              <CardTag
                key={index}
                {...(hasLink
                  ? {
                      href: item.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="bento-card p-6 sm:p-7 rounded-3xl bg-card border border-white/[0.08] flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/15 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary/70 border border-border/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {item.icon === "deloitte" && (
                        <span className="font-extrabold text-foreground text-xs font-mono">
                          D<span className="text-[#86BC25]">.</span>
                        </span>
                      )}
                      {item.icon === "code" && <Code2 className="text-sky-400" size={18} />}
                      {item.icon === "trophy" && <Trophy className="text-amber-400" size={18} />}
                    </div>

                    <span className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-secondary/80 text-muted-foreground border border-border/60">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-2xl font-black text-foreground tracking-tight mb-1">
                    {item.stat}
                  </div>
                  <div className="text-xs font-mono text-sky-400 mb-3">
                    {item.label}
                  </div>

                  <h3 className="font-bold text-sm text-foreground mb-2 group-hover:text-sky-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono">
                  {hasLink ? (
                    <span className="inline-flex items-center gap-1.5 text-sky-400 font-semibold group-hover:underline">
                      Verify Credential <ExternalLink size={12} />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <CheckCircle2 size={12} className="text-emerald-400" /> TIET Verified
                    </span>
                  )}
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
