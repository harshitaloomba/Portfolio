import { experience } from "@/lib/data";
import { Briefcase, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section className="py-16 px-4 bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-accent" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                  <p className="text-accent font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
