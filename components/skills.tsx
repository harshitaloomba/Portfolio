import { skills } from "@/lib/data";
import { Code2, Layout, Server, Database, Cloud, Wrench } from "lucide-react";

// Mapping of skills to Devicon CSS classes for official colored logos
const deviconMap: Record<string, string> = {
  // Languages
  "JavaScript": "devicon-javascript-plain colored",
  "Python": "devicon-python-plain colored",
  "C/C++": "devicon-cplusplus-plain colored",
  "HTML": "devicon-html5-plain colored",
  "CSS": "devicon-css3-plain colored",
  "R": "devicon-r-plain colored",

  // Frontend
  "React.js": "devicon-react-original colored",
  "Tailwind CSS": "devicon-tailwindcss-plain colored",

  // Backend
  "Node.js": "devicon-nodejs-plain colored",
  "Express.js": "devicon-express-original colored",

  // Databases
  "MongoDB": "devicon-mongodb-plain colored",
  "MySQL": "devicon-mysql-plain colored",

  // DevOps & Cloud
  "Docker": "devicon-docker-plain colored",
  "Jenkins": "devicon-jenkins-line colored",
  "Nginx": "devicon-nginx-original colored",
  "GitHub Actions": "devicon-github-original colored",
  "Git": "devicon-git-plain colored",
  "Vercel": "devicon-vercel-plain",
  "AWS": "devicon-amazonwebservices-original colored",
  "Azure": "devicon-azure-plain colored",

  // Tools
  "Visual Studio Code": "devicon-vscode-plain colored",
  "GitHub": "devicon-github-original colored",
  "Postman": "devicon-postman-plain colored",
  "Figma": "devicon-figma-plain colored",
  "Notion": "devicon-notion-plain colored",
  "Jira": "devicon-jira-plain colored",
  "Trello": "devicon-trello-plain colored",
};

// Modern theme configuration for each category
const categoryConfig = {
  languages: {
    title: "Languages",
    icon: Code2,
    colorClass: "text-amber-500 bg-amber-500/10 border-amber-500/20 dark:border-amber-500/30",
    badgeClass: "bg-amber-500/5 text-amber-700 dark:text-amber-400 border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/10",
    dotClass: "bg-amber-500",
    cardHover: "hover:border-amber-500/40 hover:shadow-amber-500/5",
  },
  frontend: {
    title: "Frontend Development",
    icon: Layout,
    colorClass: "text-sky-500 bg-sky-500/10 border-sky-500/20 dark:border-sky-500/30",
    badgeClass: "bg-sky-500/5 text-sky-700 dark:text-sky-400 border-sky-500/20 hover:border-sky-500/50 hover:bg-sky-500/10",
    dotClass: "bg-sky-500",
    cardHover: "hover:border-sky-500/40 hover:shadow-sky-500/5",
  },
  backend: {
    title: "Backend Development",
    icon: Server,
    colorClass: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20 dark:border-emerald-500/30",
    badgeClass: "bg-emerald-500/5 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/10",
    dotClass: "bg-emerald-500",
    cardHover: "hover:border-emerald-500/40 hover:shadow-emerald-500/5",
  },
  database: {
    title: "Database & Storage",
    icon: Database,
    colorClass: "text-purple-500 bg-purple-500/10 border-purple-500/20 dark:border-purple-500/30",
    badgeClass: "bg-purple-500/5 text-purple-700 dark:text-purple-400 border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10",
    dotClass: "bg-purple-500",
    cardHover: "hover:border-purple-500/40 hover:shadow-purple-500/5",
  },
  devops: {
    title: "DevOps & Cloud",
    icon: Cloud,
    colorClass: "text-orange-500 bg-orange-500/10 border-orange-500/20 dark:border-orange-500/30",
    badgeClass: "bg-orange-500/5 text-orange-700 dark:text-orange-400 border-orange-500/20 hover:border-orange-500/50 hover:bg-orange-500/10",
    dotClass: "bg-orange-500",
    cardHover: "hover:border-orange-500/40 hover:shadow-orange-500/5",
  },
  tools: {
    title: "Development Tools",
    icon: Wrench,
    colorClass: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20 dark:border-indigo-500/30",
    badgeClass: "bg-indigo-500/5 text-indigo-700 dark:text-indigo-400 border-indigo-500/20 hover:border-indigo-500/50 hover:bg-indigo-500/10",
    dotClass: "bg-indigo-500",
    cardHover: "hover:border-indigo-500/40 hover:shadow-indigo-500/5",
  },
};

function SkillCategory({
  category,
  items,
}: {
  category: keyof typeof categoryConfig;
  items: string[];
}) {
  const config = categoryConfig[category];
  const IconComponent = config.icon;

  return (
    <div className="flex flex-col h-full">
      {/* Category Header */}
      <h4 className="font-bold text-foreground text-sm mb-4 flex items-center justify-between border-b border-border/40 pb-3">
        <span className="flex items-center gap-2.5">
          <span className={`p-1.5 rounded-lg border ${config.colorClass}`}>
            <IconComponent size={16} />
          </span>
          {config.title}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-border" />
      </h4>
      
      {/* Badges Grid */}
      <div className="flex flex-wrap gap-2.5">
        {items.map((item, idx) => {
          const deviconClass = deviconMap[item];
          
          return (
            <span
              key={idx}
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg border transition-all duration-300 cursor-default shadow-sm ${config.badgeClass}`}
            >
              {deviconClass ? (
                <i className={`${deviconClass} text-sm flex-shrink-0`} />
              ) : (
                <span className={`w-1.5 h-1.5 rounded-full ${config.dotClass}`} />
              )}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section className="py-12 px-4 bg-secondary/20 dark:bg-secondary/5 border-y border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-accent/10 rounded-xl">
            <Code2 className="text-accent" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className={`p-6 bg-card border border-border/80 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${categoryConfig.languages.cardHover}`}>
            <SkillCategory category="languages" items={skills.languages} />
          </div>

          <div className={`p-6 bg-card border border-border/80 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${categoryConfig.frontend.cardHover}`}>
            <SkillCategory category="frontend" items={skills.frontend} />
          </div>

          <div className={`p-6 bg-card border border-border/80 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${categoryConfig.backend.cardHover}`}>
            <SkillCategory category="backend" items={skills.backend} />
          </div>

          <div className={`p-6 bg-card border border-border/80 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${categoryConfig.database.cardHover}`}>
            <SkillCategory category="database" items={skills.database} />
          </div>

          <div className={`p-6 bg-card border border-border/80 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${categoryConfig.devops.cardHover}`}>
            <SkillCategory category="devops" items={skills.devops} />
          </div>

          <div className={`p-6 bg-card border border-border/80 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${categoryConfig.tools.cardHover}`}>
            <SkillCategory category="tools" items={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
}
