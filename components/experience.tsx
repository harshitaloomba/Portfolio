import { experience } from "@/lib/data";
import { Briefcase, Check } from "lucide-react";

const getCompanyLogo = (company: string) => {
  if (company.includes("AIESEC")) {
    return (
      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#037EF3]/10 border border-[#037EF3]/30 p-1 flex items-center justify-center flex-shrink-0 shadow-sm">
        <span className="font-extrabold text-[#037EF3] text-[11px] tracking-wider">AIESEC</span>
      </div>
    );
  }
  return null;
};

export function Experience() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="p-2 bg-accent/10 rounded-xl">
            <Briefcase className="text-accent" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Work Experience</h2>
        </div>

        <div className="relative border-l-2 border-border/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-accent group-hover:bg-accent transition-colors duration-300 z-10" />

              {/* Experience Card */}
              <div className="p-6 bg-card border border-border rounded-2xl hover:border-accent/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    {getCompanyLogo(exp.company)}
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <p className="text-sky-700 dark:text-sky-400 font-bold text-sm mt-0.5">
                        {exp.company}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-muted-foreground bg-secondary/50 dark:bg-secondary/20 rounded-full border border-border/50 self-start md:self-auto">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-accent" />
                      </span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
