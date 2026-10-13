import { leadership } from "@/lib/data";
import { Users, Check } from "lucide-react";

const getOrgLogo = (org: string) => {
  if (org.includes("AIESEC")) {
    return (
      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#037EF3]/10 border border-[#037EF3]/30 p-1 flex items-center justify-center flex-shrink-0 shadow-sm">
        <span className="font-extrabold text-[#037EF3] text-[11px] tracking-wider">AIESEC</span>
      </div>
    );
  }
  return null;
};

export function Leadership() {
  return (
    <section className="py-12 px-4 bg-secondary/20 dark:bg-secondary/5 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="p-2 bg-accent/10 rounded-xl">
            <Users className="text-accent" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Leadership & Activities</h2>
        </div>

        <div className="space-y-8">
          {leadership.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border/80 rounded-2xl hover:border-accent/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {getOrgLogo(item.organization)}
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {item.position}
                    </h3>
                    <p className="text-sky-700 dark:text-sky-400 font-bold text-sm mt-0.5">
                      {item.organization}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.location}
                    </p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-muted-foreground bg-secondary/50 dark:bg-secondary/25 rounded-full border border-border/50 self-start md:self-auto">
                  {item.duration}
                </span>
              </div>

              <ul className="space-y-3">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-accent" />
                    </span>
                    <span>{resp}</span>
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
