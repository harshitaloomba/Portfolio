import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="text-accent" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-accent font-semibold">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>

              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">CGPA:</span> {edu.cgpa}
                </p>
                <p className="leading-relaxed">{edu.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
