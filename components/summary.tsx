"use client";

import { profileData } from "@/lib/data";
import { Code2, Briefcase, Award, Users } from "lucide-react";
import { AnimatedCounter } from "./animated-counter";

export function Summary() {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "LeetCode problems solved, ranked top 10K globally. Strong foundation in data structures, algorithms, and full-stack development.",
      stat: 650,
      suffix: "+",
    },
    {
      icon: Briefcase,
      title: "Real-World Experience",
      description: "improvement in report generation and reduction in administrative workload through innovative solutions.",
      stat: 40,
      suffix: "%",
    },
    {
      icon: Award,
      title: "Competitive Programming",
      description: "CodeChef 3-Star (1615), Codeforces Specialist (1408). Proven problem-solving skills across multiple platforms.",
      stat: 1615,
      suffix: "",
    },
    {
      icon: Users,
      title: "Leadership Impact",
      description: "students mentored through DSA programs and organized MLH-partnered hackathon with 500+ participants.",
      stat: 1000,
      suffix: "+",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Summary
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {profileData.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={index}
                className="group p-6 border border-border rounded-lg hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="text-accent" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {highlight.title}
                    </h3>
                    <div className="text-3xl font-bold text-accent mb-2">
                      <AnimatedCounter end={highlight.stat} suffix={highlight.suffix} />
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
