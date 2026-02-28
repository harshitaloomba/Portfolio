"use client";

import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Featured Projects</h2>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.duration}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-cool-light-1 dark:bg-cool-light-1 text-sky-700 dark:text-sky-300 rounded-full border border-sky-200 dark:border-sky-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.details.length > 0 && (
                <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
