import { education } from "@/lib/data";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export function Education() {
  const edu = education[0];
  const courses = [
    "Data Structures & Algorithms",
    "Artificial Intelligence",
    "Machine Learning",
    "Database Management Systems",
    "Finance Accounting & Valuation",
  ];

  return (
    <section className="pb-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="bento-card p-7 sm:p-8 rounded-3xl bg-card border border-white/[0.08] relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/50">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border border-border/80 p-1 flex items-center justify-center flex-shrink-0 shadow-sm">
                <img
                  src="/tiet.jpeg"
                  alt="Thapar University Logo"
                  className="object-contain w-11 h-11"
                />
              </div>
              <div>
                <span className="text-[11px] font-mono text-sky-400 font-semibold uppercase tracking-wider block mb-0.5">
                  Academic Foundation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {edu.school}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {edu.degree} • {edu.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-start md:self-auto">
              <div className="px-3 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs font-semibold">
                CGPA {edu.cgpa}
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-secondary/80 border border-border/60 text-muted-foreground font-mono text-xs">
                {edu.duration}
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
              <BookOpen size={14} className="text-sky-400" /> Key Coursework & Specializations:
            </div>
            <div className="flex flex-wrap gap-2">
              {courses.map((course, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-lg bg-secondary/50 text-foreground font-medium border border-border/60"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
