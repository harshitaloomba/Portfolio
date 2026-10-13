"use client";

import { AnimatedCounter } from "./animated-counter";
import { Code2, Briefcase, Award, Users } from "lucide-react";

export function Summary() {
  const highlights = [
    {
      icon: Code2,
      title: "Machine Learning & AI",
      description: "Developing computer vision models and ML algorithms with real-time posture analysis and high accuracy.",
      stat: 95,
      suffix: "%",
    },
    {
      icon: Briefcase,
      title: "Data Analytics & Insights",
      description: "Analyzed 5 years of operational data from global operations to drive strategic decision making and revenue.",
      stat: "Data-Driven",
      suffix: "",
    },
    {
      icon: Award,
      title: "Performance & Web Architecture",
      description: "Deployed modular component architectures, achieving 40% higher online visibility and 35% faster page load times.",
      stat: 40,
      suffix: "%",
    },
    {
      icon: Users,
      title: "Leadership & Global Operations",
      description: "Led a 15+ member team and managed outgoing volunteer products for 100+ individuals, boosting engagement by 20%.",
      stat: 100,
      suffix: "+",
    },
  ];

  return (
    <section className="py-12 px-4 bg-secondary/20 dark:bg-secondary/5 border-y border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Highlights & Impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my technical competencies, real-world impact, and operational leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-accent/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="text-accent" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {highlight.title}
                    </h3>
                    <div className="text-3xl font-extrabold text-accent mb-2">
                      {typeof highlight.stat === "number" ? (
                        <AnimatedCounter end={highlight.stat} suffix={highlight.suffix} />
                      ) : (
                        <span className="text-2xl md:text-3xl tracking-tight">{highlight.stat}</span>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
