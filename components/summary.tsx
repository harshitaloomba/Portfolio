"use client";

import { Activity, Database, Cpu, Users, Eye, ArrowUpRight } from "lucide-react";

export function Summary() {
  return (
    <section id="bento" className="py-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Capabilities & Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Engineering Highlights
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
            Architecting high-accuracy vision systems and analyzing multi-year datasets to drive measurable outcomes.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Bento Tile 1: Large Featured Computer Vision Tile (Span 2 cols) */}
          <div className="md:col-span-2 bento-card p-6 sm:p-7 rounded-3xl bg-card border border-white/[0.08] relative overflow-hidden group">
            {/* Ambient accent glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all duration-500" />

            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-mono">
                  <Eye size={12} /> Computer Vision Engine
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Sub-50ms Latency
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-2">
                    95<span className="text-sky-400">%</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Pose Vector Classification
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    MOKSHA maps 33 anatomical landmarks in real-time to compute geometric joint vectors, flagging posture errors and reducing injury risk by 30%.
                  </p>
                </div>

                {/* Stylized Visual Landmark HUD */}
                <div className="bg-secondary/40 border border-border/80 rounded-2xl p-4 font-mono text-[11px] text-muted-foreground relative">
                  <div className="flex justify-between items-center pb-2 mb-3 border-b border-border/50 text-[10px]">
                    <span className="text-sky-400">INPUT: LIVE_FEED</span>
                    <span className="text-emerald-400">60 FPS</span>
                  </div>
                  
                  {/* Wireframe Body Mockup with Angles */}
                  <div className="relative h-28 flex items-center justify-center">
                    <svg className="w-full h-full text-sky-400/80" viewBox="0 0 200 120" fill="none">
                      {/* Torso / Spine */}
                      <circle cx="100" cy="20" r="8" className="stroke-sky-400 fill-sky-400/20 stroke-2" />
                      <line x1="100" y1="28" x2="100" y2="70" className="stroke-sky-400 stroke-2" />
                      {/* Arms */}
                      <line x1="100" y1="38" x2="55" y2="45" className="stroke-sky-400 stroke-2" />
                      <line x1="55" y1="45" x2="30" y2="30" className="stroke-emerald-400 stroke-2" />
                      <line x1="100" y1="38" x2="145" y2="45" className="stroke-sky-400 stroke-2" />
                      <line x1="145" y1="45" x2="175" y2="55" className="stroke-emerald-400 stroke-2" />
                      {/* Legs */}
                      <line x1="100" y1="70" x2="70" y2="105" className="stroke-sky-400 stroke-2" />
                      <line x1="100" y1="70" x2="135" y2="105" className="stroke-sky-400 stroke-2" />
                      
                      {/* Joint points */}
                      <circle cx="55" cy="45" r="3" className="fill-emerald-400" />
                      <circle cx="145" cy="45" r="3" className="fill-emerald-400" />
                      <circle cx="70" cy="105" r="3" className="fill-sky-400" />
                      <circle cx="135" cy="105" r="3" className="fill-sky-400" />
                    </svg>

                    <div className="absolute top-1 left-2 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      θ: 168° Aligned
                    </div>
                    <div className="absolute bottom-1 right-2 text-[10px] text-sky-400 font-mono bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
                      Conf: 0.98
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Tile 2: Data Analytics */}
          <div className="bento-card p-6 rounded-3xl bg-card border border-white/[0.08] flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-105 transition-transform">
                <Database size={18} />
              </div>
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block mb-1">
                Data Analytics
              </span>
              <div className="text-3xl font-extrabold text-foreground mb-1">
                5+ Years
              </div>
              <p className="text-xs font-semibold text-indigo-400 mb-3">
                Historical Operational Data
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Synthesized 5 years of exchange records to identify conversion falloffs and optimize cross-border participant pipelines.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>Impact: +20% Engagement</span>
              <Activity size={14} />
            </div>
          </div>

          {/* Bento Tile 3: Full-Stack Web Architecture */}
          <div className="bento-card p-6 rounded-3xl bg-card border border-white/[0.08] flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
                <Cpu size={18} />
              </div>
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block mb-1">
                Performance Optimization
              </span>
              <div className="text-3xl font-extrabold text-foreground mb-1">
                35<span className="text-cyan-400">%</span> Faster
              </div>
              <p className="text-xs font-semibold text-cyan-400 mb-3">
                TIET Robotics Research Lab
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Developed 12+ modular React components with automated routing and SEO architecture, driving 40% higher visibility.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-cyan-400">
              <span>12+ Modular Components</span>
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Bento Tile 4: Strategic Leadership & Outreach (Span 2 cols) */}
          <div className="md:col-span-2 bento-card p-6 sm:p-7 rounded-3xl bg-card border border-white/[0.08] flex flex-col justify-between group">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">Operational Leadership</h4>
                  <p className="text-xs text-muted-foreground">AIESEC Team Leader — Outgoing Global Volunteer</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                15+ Team Members Led
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Directed talent development and resource allocation for 15+ members while stewarding international exchange products for 100+ youth delegates.
              </p>
              <div className="bg-secondary/30 p-3 rounded-xl border border-border/60 flex items-center justify-between font-mono text-xs">
                <span className="text-muted-foreground">Product Scaled</span>
                <span className="font-bold text-foreground">100+ Delegates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
