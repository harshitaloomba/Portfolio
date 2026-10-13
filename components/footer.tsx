"use client";

import { profileData } from "@/lib/data";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 px-4 border-t border-white/[0.06] bg-card/50 text-muted-foreground relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-mono font-bold text-xs">
                HL
              </span>
              <span className="font-bold text-base text-foreground tracking-tight">
                {profileData.name}
              </span>
            </div>

            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
              Computer Engineering undergraduate focusing on Computer Vision architectures, data-driven systems, and modern web platforms.
            </p>

            <div className="flex gap-2.5 pt-1">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/60 hover:border-sky-500/40 transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={15} />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/60 hover:border-sky-500/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="p-2 rounded-xl bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/60 hover:border-sky-500/40 transition-all"
                aria-label="Email Contact"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#bento" className="hover:text-foreground transition-colors">
                  Highlights
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-foreground transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-foreground transition-colors">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Links & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground mb-3">
                Quick Actions
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="/api/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    Download Resume (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_q8p7KrRxWCuCfAoaa_1753806895241_completion_certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Deloitte Credential
                  </a>
                </li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary/60 hover:bg-secondary text-foreground text-xs font-mono border border-border/60 hover:border-sky-500/40 transition-all"
            >
              Back to Top <ArrowUp size={12} />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-muted-foreground">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <p>Designed with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
