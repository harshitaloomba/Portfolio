import { profileData } from "@/lib/data";
import { Mail, Github, Linkedin, ArrowDown, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 overflow-hidden bg-grid-dots">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full bg-sky-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10 md:gap-14">
          {/* Main Hero Copy */}
          <div className="flex-1 max-w-2xl">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.status}</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
              Engineering{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Computer Vision
              </span>{" "}
              & Data-Driven Systems.
            </h1>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              I&apos;m <span className="font-semibold text-foreground">{profileData.name}</span>, a Computer Engineering student at Thapar Institute. I develop real-time vision pipelines, analyze multi-year operational datasets, and deploy performant web applications.
            </p>

            {/* Meta Tags Strip */}
            <div className="flex flex-wrap gap-2.5 mb-8 text-xs font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/60 border border-border/80">
                <MapPin size={12} className="text-sky-400" /> Patiala, India
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/60 border border-border/80">
                <Sparkles size={12} className="text-sky-400" /> TIET Class of 2027
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/60 border border-border/80">
                CGPA 8.21 / 10
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 text-slate-950 font-semibold text-xs hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20 hover:-translate-y-0.5"
              >
                Explore Projects <ArrowDown size={14} />
              </a>

              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary/80 hover:bg-secondary text-foreground font-semibold text-xs border border-border/80 hover:border-sky-500/40 transition-all hover:-translate-y-0.5"
              >
                <Mail size={14} className="text-sky-400" /> Get in Touch
              </a>

              {/* Socials */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/60 hover:border-sky-500/30 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={16} />
                </a>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/60 hover:border-sky-500/30 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Photo with Luminous Frame */}
          <div className="relative group self-center md:self-auto">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/40 to-indigo-500/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border border-white/10 bg-card shadow-2xl">
              <Image
                src={profileData.image}
                alt={profileData.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
