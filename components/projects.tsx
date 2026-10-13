"use client";

import { useRef } from "react";
import { projects } from "@/lib/data";
import { ExternalLink, Github, Folder, ChevronLeft, ChevronRight } from "lucide-react";

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      const scrollTo = direction === "left" 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-xl">
              <Folder className="text-accent" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Featured Projects</h2>
          </div>
          
          {/* Slider Controls (Desktop Only) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-xl bg-card border border-border hover:border-accent/40 text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="Previous Project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-xl bg-card border border-border hover:border-accent/40 text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="Next Project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-6"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[360px] flex-shrink-0 snap-start flex flex-col justify-between p-6 bg-card border border-border/80 rounded-2xl hover:border-accent/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual Accent for Ongoing projects */}
                {project.duration === "Ongoing" && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-cyan-500" />
                )}
                
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-semibold text-muted-foreground whitespace-nowrap bg-secondary/50 dark:bg-secondary/25 px-2 py-0.5 rounded-full border border-border/40">
                      {project.duration.split(" -- ")[0]}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Bullet details (highly focused) */}
                  {project.details.length > 0 && (
                    <ul className="mb-6 space-y-2 text-[11px] text-muted-foreground">
                      {project.details.slice(0, 2).map((detail, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="text-accent flex-shrink-0 mt-0.5">•</span>
                          <span className="line-clamp-2">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack Badges */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1.5 max-h-[72px] overflow-hidden">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] bg-cool-light-1 dark:bg-cool-light-1/10 text-sky-800 dark:text-sky-300 rounded-lg border border-sky-100 dark:border-sky-950"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 text-[10px] bg-secondary text-muted-foreground rounded-lg border border-border">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2.5 pt-4 border-t border-border/30 mt-auto">
                  {project.links.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-secondary/40 hover:bg-secondary/85 text-foreground text-[11px] font-semibold rounded-xl border border-border transition-colors duration-200"
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                  ) : (
                    <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-secondary/10 text-muted-foreground text-[11px] font-medium rounded-xl border border-border/40 cursor-not-allowed">
                      Private Repo
                    </span>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-accent text-accent-foreground text-[11px] font-semibold rounded-xl hover:bg-sky-600 transition-colors duration-200 shadow-sm"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Swipe indicator for mobile */}
          <div className="flex md:hidden justify-center text-xs text-muted-foreground gap-1 animate-pulse mt-2">
            Swipe left/right to view projects
          </div>
        </div>
      </div>
    </section>
  );
}
