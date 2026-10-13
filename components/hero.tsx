import { profileData } from "@/lib/data";
import { Mail, Github, Linkedin, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-between pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Background soft glow elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl w-full my-auto flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Profile Image with Modern Shape */}
        <div className="flex-shrink-0 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-accent/20 shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
            <Image
              src={profileData.image}
              alt={profileData.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-accent to-cyan-600 bg-clip-text text-transparent">{profileData.name}</span>
          </h1>

          <p className="text-lg md:text-xl font-medium text-muted-foreground mb-4 leading-relaxed">
            {profileData.title}
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
            {profileData.summary}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 max-w-xl mx-auto md:mx-0">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl hover:bg-sky-600 dark:hover:bg-sky-500 transition-all duration-300 font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                Get in Touch
              </a>
              <a
                href="/api/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-secondary/40 text-foreground rounded-xl transition-all duration-300 font-semibold border border-border shadow-sm hover:border-accent/30 hover:-translate-y-0.5"
              >
                View Resume
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-3 justify-center">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 hover:scale-105 hover:shadow-md transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 hover:scale-105 hover:shadow-md transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="w-full flex justify-center mt-8 animate-bounce">
        <a
          href="#experience"
          className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label="Scroll to content"
        >
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}
