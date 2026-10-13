"use client";

import { projects } from "@/lib/data";
import { Github, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Activity, Layers, Server } from "lucide-react";

export function Projects() {
  const hosmas = projects.find((p) => p.id === "hosmas") || projects[0];
  const mlProject = projects.find((p) => p.id === "customer-transaction") || projects[1];
  const secondaryProjects = projects.filter((p) => p.id !== "hosmas" && p.id !== "customer-transaction");

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Engineering Showcase
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Featured Systems & Case Studies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
            Production microservices platforms, neural prediction pipelines, and automated cloud deployments.
          </p>
        </div>

        <div className="space-y-12">
          {/* Case Study 1: HOSMAS */}
          <div className="rounded-3xl bg-card border border-white/[0.08] p-6 sm:p-10 relative overflow-hidden bento-card">
            {/* Background radial glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center gap-1.5">
                    <Layers size={12} /> {hosmas.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-secondary/80 text-muted-foreground border border-border/60">
                    Production In-House
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-3">
                    {hosmas.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {hosmas.description}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-border/50">
                  {hosmas.metrics?.map((m, idx) => (
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
                  {hosmas.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills & Actions */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {hosmas.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs rounded-lg bg-secondary/60 text-muted-foreground font-mono border border-border/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {hosmas.links.live && (
                    <a
                      href={hosmas.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-all shadow-md shadow-sky-500/20"
                    >
                      <ExternalLink size={14} /> Live Platform
                    </a>
                  )}
                </div>
              </div>

              {/* Right Mockup: 3D Microservices HUD */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/[0.1] bg-slate-950 p-4 font-mono text-xs shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-slate-300 font-bold">HOSMAS_MESH</span>
                    </div>
                    <span className="text-sky-400">10,000+ ACCOUNTS</span>
                  </div>

                  <div className="my-4 rounded-xl bg-slate-900/90 border border-white/[0.06] p-4 space-y-3">
                    <div className="flex justify-between items-center text-[10px] text-muted-foreground border-b border-white/[0.06] pb-2">
                      <span className="text-sky-400">3D VIEWPORT: ACTIVE</span>
                      <span className="text-emerald-400">17 HOSTELS LOADED</span>
                    </div>

                    <div className="h-32 rounded-lg bg-slate-950 border border-white/[0.06] relative flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-grid-dots opacity-40" />
                      {/* Isometric Block Mockup */}
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-16 rounded-lg bg-sky-500/10 border border-sky-500/30 mx-auto flex items-center justify-center text-sky-400 font-bold text-xs shadow-lg">
                          Three.js 3D
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-1">Floorplans & Blocks</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-slate-950 border border-white/[0.06] text-muted-foreground">
                        Services: <span className="text-emerald-400 font-bold">6 Go/Django</span>
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-white/[0.06] text-muted-foreground">
                        Auth: <span className="text-sky-400 font-bold">JWT Verified</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between text-[11px] text-muted-foreground pt-1">
                    <span>Target: TIET Campus</span>
                    <span className="text-emerald-400 font-bold">-40% Overhead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2: Customer Transaction Prediction */}
          <div className="rounded-3xl bg-card border border-white/[0.08] p-6 sm:p-10 relative overflow-hidden bento-card">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                    <Sparkles size={12} /> {mlProject.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-secondary/80 text-muted-foreground border border-border/60">
                    Semi-Supervised ML
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-3">
                    {mlProject.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {mlProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 py-3 border-y border-border/50">
                  {mlProject.metrics?.map((m, idx) => (
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

                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  {mlProject.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {mlProject.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs rounded-lg bg-secondary/60 text-muted-foreground font-mono border border-border/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {mlProject.links.github && (
                    <a
                      href={mlProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
                    >
                      <Github size={14} /> View Code
                    </a>
                  )}
                </div>
              </div>

              {/* Right Mockup: ML Model Diagnostic HUD */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/[0.1] bg-slate-950 p-4 font-mono text-xs shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px] text-muted-foreground">
                    <span className="text-slate-300 font-bold">MODEL_BENCHMARK</span>
                    <span className="text-cyan-400">10-FOLD CV</span>
                  </div>

                  <div className="my-4 rounded-xl bg-slate-900/90 border border-white/[0.06] p-4 space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-muted-foreground">Baseline Model:</span>
                        <span className="text-slate-400">0.89 AUROC</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-slate-600 rounded-full" style={{ width: "89%" }} />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-cyan-400 font-bold">Ensemble + Pseudo-Labeling:</span>
                        <span className="text-emerald-400 font-bold">0.95 AUROC</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full" style={{ width: "95%" }} />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/[0.06] grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-slate-950 border border-white/[0.06] text-muted-foreground">
                        Ratio: <span className="text-sky-400 font-bold">10:1 Imbalanced</span>
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-white/[0.06] text-muted-foreground">
                        Norm: <span className="text-cyan-400 font-bold">RankGauss</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between text-[11px] text-muted-foreground pt-1">
                    <span>Ensemble: LightGBM + NN</span>
                    <span className="text-emerald-400 font-bold">+6.7% Gain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Projects Grid (2 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((p, index) => (
              <div
                key={index}
                className="bento-card p-6 sm:p-7 rounded-3xl bg-card border border-white/[0.08] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-secondary/80 text-muted-foreground border border-border/60">
                      {p.category}
                    </span>
                    <span className="text-xs font-mono text-sky-400">
                      {p.duration}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-sky-400 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <ul className="space-y-2 text-xs text-muted-foreground mb-6">
                    {p.details.slice(0, 2).map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-sky-400 flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1">
                    {p.technologies.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] rounded-md bg-secondary/60 text-muted-foreground font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/60 transition-all"
                        aria-label="GitHub Repository"
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {p.links.live && (
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-all"
                      >
                        <ExternalLink size={12} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
