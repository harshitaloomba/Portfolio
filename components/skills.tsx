import { skills } from "@/lib/data";
import { Code2 } from "lucide-react";

function SkillCategory({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="font-semibold text-foreground mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-cool-light-2 dark:bg-cool-light-2 text-sky-700 dark:text-sky-300 rounded-lg border border-sky-100 dark:border-sky-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section className="py-16 px-4 bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="text-accent" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-card border border-border rounded-lg">
            <SkillCategory title="Languages" items={skills.languages} />
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <SkillCategory title="Frontend Development" items={skills.frontend} />
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <SkillCategory title="Backend Development" items={skills.backend} />
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <SkillCategory title="Database & Storage" items={skills.database} />
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <SkillCategory title="DevOps & Cloud" items={skills.devops} />
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <SkillCategory title="Development Tools" items={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
}
