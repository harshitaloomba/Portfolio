import { achievements } from "@/lib/data";
import { Award, ExternalLink, Code2, Star, Trophy } from "lucide-react";

const iconMap = {
  code: Code2,
  star: Star,
  trophy: Trophy,
};

export function Achievements() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award className="text-accent" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Achievements</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
            return (
              <a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <IconComponent className="text-accent" size={40} />
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                  {achievement.title}
                </h3>

                <div className="mb-2">
                  <span className="inline-block px-2 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20">
                    {achievement.badge}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-accent">{achievement.stat}</span>
                  <span className="text-sm text-muted-foreground">{achievement.label}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all font-medium text-sm">
                  View Profile <ExternalLink size={16} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
