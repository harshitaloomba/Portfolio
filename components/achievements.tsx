import { achievements } from "@/lib/data";
import { Award, ExternalLink, Code2, Star, Trophy, CheckCircle } from "lucide-react";

const getAchievementIcon = (achievement: typeof achievements[0]) => {
  const title = achievement.title.toLowerCase();
  if (title.includes("deloitte")) {
    return (
      <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center font-bold text-white text-xs">
        D<span className="text-[#86BC25] font-extrabold">.</span>
      </div>
    );
  }
  if (title.includes("summer school") || title.includes("thapar")) {
    return <Code2 className="text-accent" size={24} />;
  }
  if (achievement.icon === "trophy" || title.includes("roadies")) {
    return <Trophy className="text-amber-500" size={24} />;
  }
  if (achievement.icon === "star") {
    return <Star className="text-accent" size={24} />;
  }
  return <Award className="text-accent" size={24} />;
};

export function Achievements() {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="p-2 bg-accent/10 rounded-xl">
            <Award className="text-accent" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Honors & Certifications</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const hasLink = Boolean(achievement.link);
            const CardComponent = hasLink ? "a" : "div";

            return (
              <CardComponent
                key={index}
                {...(hasLink
                  ? {
                      href: achievement.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="group flex flex-col justify-between p-6 bg-card border border-border/80 rounded-2xl hover:border-accent/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual accent bar at the top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-secondary/35 dark:bg-secondary/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getAchievementIcon(achievement)}
                    </div>
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-accent/10 text-sky-800 dark:text-sky-300 rounded-full border border-accent/20">
                      {achievement.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200 mb-4">
                    {achievement.title}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-extrabold text-sky-800 dark:text-sky-300 tracking-tight">{achievement.stat}</span>
                    <span className="text-xs font-medium text-muted-foreground">{achievement.label}</span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {achievement.description}
                  </p>
                </div>

                {hasLink ? (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-accent group-hover:gap-2 transition-all duration-200 mt-auto pt-2 border-t border-border/30 w-full">
                    View Certificate <ExternalLink size={12} className="opacity-70" />
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/60 mt-auto pt-2 border-t border-border/30 w-full">
                    <CheckCircle size={12} className="opacity-60 text-emerald-500" /> Verified Credential
                  </div>
                )}
              </CardComponent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
