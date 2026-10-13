"use client";

import { projects } from "@/lib/data";
import { Github, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Activity } from "lucide-react";

export function Projects() {
  const moksha = projects.find((p) => p.id === "moksha") || projects[0];
  const robotics = projects.find((p) => p.id === "robotics-lab") || projects[1];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Featured Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Selected Case Studies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
            Deep dive into technical architecture, model performance, and real-world system deployments.
          </p>
        </div>

        <div className="space-y-12">
          {/* Case Study 1: MOKSHA AI */}
          <div className="rounded-3xl bg-card border border-white/[0.08] p-6 sm:p-10 relative overflow-hidden bento-card">
            {/* Background radial glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center gap-1.5">
                    <Sparkles size={12} /> {moksha.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-secondary/80 text-muted-foreground border border-border/60">
                    Real-Time Inference
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-3">
                    {moksha.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {moksha.description}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-border/50">
                  {moksha.metrics?.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xl sm:text-2xl font-black text-sky-400 tracking-tight">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-mono text-muted-foreground">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Architectural Highlights */}
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  {moksha.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills & Actions */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {moksha.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs rounded-lg bg-secondary/60 text-muted-foreground font-mono border border-border/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {moksha.links.github && (
                    <a
                      href={moksha.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-all shadow-md shadow-sky-500/20"
                    >
                      <Github size={14} /> View Repository
                    </a>
                  )}
                </div>
              </div>

              {/* Right Mockup (5 cols): Simulated Computer Vision HUD */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/[0.1] bg-slate-950 p-4 font-mono text-xs shadow-2xl relative overflow-hidden">
                  {/* Viewport Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-slate-300 font-bold">STREAM_01</span>
                    </div>
                    <span className="text-sky-400">FPS: 59.8</span>
                  </div>

                  {/* Pose Landmarks Simulation Box */}
                  <div className="my-4 h-48 rounded-xl bg-slate-900/90 border border-white/[0.06] p-3 relative flex items-center justify-center overflow-hidden">
                    {/* Grid lines */}
                    <div className="absolute inset-0 bg-grid-dots opacity-30" />

                    {/* Stick Vector Graphic */}
                    <svg className="w-40 h-40 relative z-10 text-sky-400" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="18" r="6" className="stroke-sky-400 stroke-2 fill-sky-400/20" />
                      <line x1="50" y1="24" x2="50" y2="55" className="stroke-sky-400 stroke-2" />
                      <line x1="50" y1="32" x2="20" y2="35" className="stroke-emerald-400 stroke-2" />
                      <line x1="20" y1="35" x2="10" y2="25" className="stroke-emerald-400 stroke-2" />
                      <line x1="50" y1="32" x2="80" y2="35" className="stroke-emerald-400 stroke-2" />
                      <line x1="80" y1="35" x2="92" y2="45" className="stroke-emerald-400 stroke-2" />
                      <line x1="50" y1="55" x2="32" y2="85" className="stroke-sky-400 stroke-2" />
                      <line x1="50" y1="55" x2="68" y2="85" className="stroke-sky-400 stroke-2" />

                      <circle cx="20" cy="35" r="2.5" className="fill-emerald-400" />
                      <circle cx="80" cy="35" r="2.5" className="fill-emerald-400" />
                      <circle cx="32" cy="85" r="2.5" className="fill-sky-400" />
                      <circle cx="68" cy="85" r="2.5" className="fill-sky-400" />
                    </svg>

                    {/* Status Tags Inside Frame */}
                    <div className="absolute top-2 left-2 text-[10px] bg-slate-950/80 px-2 py-0.5 rounded border border-white/10 text-emerald-400">
                      ✓ Posture: Aligned
                    </div>
                    <div className="absolute bottom-2 right-2 text-[10px] bg-slate-950/80 px-2 py-0.5 rounded border border-white/10 text-sky-400">
                      Spine: 172°
                    </div>
                  </div>

                  {/* Real-time Diagnostics Bar */}
                  <div className="space-y-1.5 text-[11px] pt-1">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Model Inference:</span>
                      <span className="text-emerald-400 font-bold">42ms</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Joint Confidence:</span>
                      <span className="text-sky-400 font-bold">98.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2: TIET Robotics Lab */}
          <div className="rounded-3xl bg-card border border-white/[0.08] p-6 sm:p-10 relative overflow-hidden bento-card">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                    <ShieldCheck size={12} /> {robotics.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-secondary/80 text-muted-foreground border border-border/60">
                    Production Deployed
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-3">
                    {robotics.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {robotics.description}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-border/50">
                  {robotics.metrics?.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xl sm:text-2xl font-black text-cyan-400 tracking-tight">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-mono text-muted-foreground">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Architectural Highlights */}
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  {robotics.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {robotics.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs rounded-lg bg-secondary/60 text-muted-foreground font-mono border border-border/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {robotics.links.github && (
                      <a
                        href={robotics.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-secondary hover:bg-secondary/80 text-foreground border border-border/80 transition-all"
                      >
                        <Github size={14} /> Code
                      </a>
                    )}
                    {robotics.links.live && (
                      <a
                        href={robotics.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
                      >
                        <ExternalLink size={14} /> Live Showcase
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Mockup (5 cols): Browser Window Mockup */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/[0.1] bg-slate-950 shadow-2xl overflow-hidden font-mono text-xs">
                  {/* Browser Chrome Header */}
                  <div className="px-4 py-3 bg-slate-900 border-b border-white/[0.08] flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="mx-auto text-[10px] text-muted-foreground bg-slate-950/80 px-3 py-1 rounded-md border border-white/[0.06] flex items-center gap-1.5">
                      <span className="text-emerald-400">https://</span>robotics-lab-tiet.vercel.app
                    </div>
                  </div>

                  {/* Browser Content Simulated View */}
                  <div className="p-5 space-y-4 bg-slate-950">
                    <div className="space-y-2">
                      <div className="h-3 w-1/3 bg-cyan-400/30 rounded" />
                      <div className="h-5 w-3/4 bg-slate-800 rounded" />
                      <div className="h-2.5 w-full bg-slate-800/60 rounded" />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 pt-2">
                      <div className="p-3 rounded-xl bg-slate-900 border border-white/[0.06] space-y-1.5">
                        <div className="w-4 h-4 rounded bg-cyan-500/20" />
                        <div className="h-2.5 w-16 bg-slate-700 rounded" />
                        <div className="h-2 w-12 bg-slate-800 rounded" />
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-white/[0.06] space-y-1.5">
                        <div className="w-4 h-4 rounded bg-indigo-500/20" />
                        <div className="h-2.5 w-16 bg-slate-700 rounded" />
                        <div className="h-2 w-12 bg-slate-800 rounded" />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center text-[10px] text-muted-foreground border-t border-white/[0.06]">
                      <span className="text-cyan-400 flex items-center gap-1">
                        <Activity size={12} /> 12 Modular Components
                      </span>
                      <span>Next.js + React</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
