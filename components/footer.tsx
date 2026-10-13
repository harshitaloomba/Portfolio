"use client";

import { profileData } from "@/lib/data";
import { Mail, Github, Linkedin, ChevronUp, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-slate-800 bg-slate-900 dark:bg-slate-950 text-slate-400 relative overflow-hidden">
      {/* Background soft glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[95px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Column 1: Info & Brand */}
          <div className="flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-2 tracking-tight">
                {profileData.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                {profileData.title}
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-accent hover:border-accent/40 hover:scale-105 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-accent hover:border-accent/40 hover:scale-105 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-accent hover:border-accent/40 hover:scale-105 transition-all duration-200"
                aria-label="Email Contact"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-bold text-xs text-slate-300 mb-3 tracking-wider uppercase">
              Sitemap
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-slate-100 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-slate-100 transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-slate-100 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-slate-100 transition-colors duration-200">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-slate-100 transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-slate-100 transition-colors duration-200">
                  Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Links & Scroll Up */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h4 className="font-bold text-xs text-slate-300 mb-3 tracking-wider uppercase">
                Featured Profiles & Credentials
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_q8p7KrRxWCuCfAoaa_1753806895241_completion_certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-100 transition-colors duration-200 flex items-center gap-1.5"
                  >
                    Deloitte Australia Certificate
                    <ExternalLink size={11} className="opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-100 transition-colors duration-200 flex items-center gap-1.5"
                  >
                    GitHub Repositories
                    <ExternalLink size={11} className="opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-100 transition-colors duration-200 flex items-center gap-1.5"
                  >
                    LinkedIn Network
                    <ExternalLink size={11} className="opacity-60" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="self-start md:self-end p-2 rounded-lg bg-slate-800 border border-slate-700/50 hover:border-accent/40 text-slate-300 hover:text-slate-100 transition-all duration-200 shadow-sm flex items-center gap-1.5 text-xs font-semibold"
              aria-label="Back to top"
            >
              Back to Top
              <ChevronUp size={14} className="animate-pulse" />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between text-[11px] text-slate-500 gap-4">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS v4</p>
        </div>
      </div>
    </footer>
  );
}
