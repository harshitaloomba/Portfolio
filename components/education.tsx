import { education } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";

const getSchoolLogo = (school: string) => {
  if (school.includes("Thapar")) {
    return (
      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-border/80 p-1 flex items-center justify-center flex-shrink-0 shadow-sm">
        <img
          src="/tiet.jpeg"
          alt="Thapar Logo"
          className="object-contain w-10 h-10"
        />
      </div>
    );
  }
  return null;
};

export function Education() {
  return (
    <section className="pt-0 pb-12 px-4 bg-secondary/20 dark:bg-secondary/5 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="p-2 bg-accent/10 rounded-xl">
            <GraduationCap className="text-accent" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Education</h2>
        </div>

        <div className="relative border-l-2 border-border/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-accent group-hover:bg-accent transition-colors duration-300 z-10" />

              {/* Education Card */}
              <div className="p-6 bg-card border border-border rounded-2xl hover:border-accent/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    {getSchoolLogo(edu.school)}
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-sky-700 dark:text-sky-400 font-bold text-sm mt-0.5">
                        {edu.school}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {edu.location}
                      </p>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-muted-foreground bg-secondary/50 dark:bg-secondary/25 rounded-full border border-border/50 self-start md:self-auto">
                    {edu.duration}
                  </span>
                </div>

                <div className="space-y-4 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-foreground">CGPA:</span>
                    <span className="px-2 py-0.5 bg-accent/10 text-accent font-semibold rounded-md text-xs">
                      {edu.cgpa}
                    </span>
                  </p>

                  {edu.achievement && (
                    <div className="flex gap-3 items-start mt-2 p-3 bg-secondary/20 dark:bg-secondary/15 rounded-xl border border-border/30">
                      <Award size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <p className="leading-relaxed text-xs">{edu.achievement}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
