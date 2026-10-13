"use client";

import { Activity, Database, Cpu, Users, Eye, ArrowUpRight, Zap, Network } from "lucide-react";

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
            Architecting microservices for 10,000+ residents, analyzing electrical telemetry across 12,477 feeders, and training predictive models.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Bento Tile 1: Large Featured Microservices Tile (Span 2 cols) */}
          <div className="md:col-span-2 bento-card p-6 sm:p-7 rounded-3xl bg-card border border-white/[0.08] relative overflow-hidden group">
            {/* Ambient accent glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all duration-500" />

            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-mono">
                  <Network size={12} /> HOSMAS Core Architecture
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 6 Microservices Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-2">
                    10,000<span className="text-sky-400">+</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Campus Residents Served
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Architected an in-house microservices platform replacing paid third-party software, cutting institutional overhead by 40% and rendering 17 hostels in interactive Three.js 3D.
                  </p>
                </div>

                {/* Stylized Microservices Mesh HUD */}
                <div className="bg-secondary/40 border border-border/80 rounded-2xl p-4 font-mono text-[11px] text-muted-foreground relative">
                  <div className="flex justify-between items-center pb-2 mb-3 border-b border-border/50 text-[10px]">
                    <span className="text-sky-400">CLUSTER: PROD-NORTH</span>
                    <span className="text-emerald-400">99.9% UPTIME</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 my-2">
                    <div className="p-2 rounded-lg bg-card/80 border border-border/60">
                      <div className="text-sky-400 font-bold text-[10px]">GO BACKEND</div>
                      <div className="text-[9px] text-muted-foreground">High-thruput API</div>
                    </div>
                    <div className="p-2 rounded-lg bg-card/80 border border-border/60">
                      <div className="text-indigo-400 font-bold text-[10px]">POSTGRESQL</div>
                      <div className="text-[9px] text-muted-foreground">Isolated DBs</div>
                    </div>
                    <div className="p-2 rounded-lg bg-card/80 border border-border/60">
                      <div className="text-cyan-400 font-bold text-[10px]">THREE.JS 3D</div>
                      <div className="text-[9px] text-muted-foreground">17 Hostels Mapped</div>
                    </div>
                    <div className="p-2 rounded-lg bg-card/80 border border-border/60">
                      <div className="text-emerald-400 font-bold text-[10px]">DOCKER + JWT</div>
                      <div className="text-[9px] text-muted-foreground">Role Auth Control</div>
                    </div>
                  </div>

                  <div className="text-[10px] text-emerald-400 font-mono text-right pt-1">
                    Overhead: -40% Institutional Cost
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Tile 2: Grid Analytics at PSPCL */}
          <div className="bento-card p-6 rounded-3xl bg-card border border-white/[0.08] flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-105 transition-transform">
                <Zap size={18} />
              </div>
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block mb-1">
                PSPCL Grid Optimization
              </span>
              <div className="text-3xl font-extrabold text-foreground mb-1">
                12,477
              </div>
              <p className="text-xs font-semibold text-amber-400 mb-3">
                Power Feeders Analyzed
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Engineered PHP/MySQL pipeline detecting 150+ false feeder clearances while computing optimal capacitor placement to cut transmission loss by 10%.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-amber-400">
              <span>-15% Report Backlog</span>
              <Activity size={14} />
            </div>
          </div>

          {/* Bento Tile 3: Machine Learning Ensembles */}
          <div className="bento-card p-6 rounded-3xl bg-card border border-white/[0.08] flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
                <Cpu size={18} />
              </div>
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block mb-1">
                Predictive Modeling
              </span>
              <div className="text-3xl font-extrabold text-foreground mb-1">
                0.95 <span className="text-cyan-400 text-lg">AUROC</span>
              </div>
              <p className="text-xs font-semibold text-cyan-400 mb-3">
                Customer Transaction Pipeline
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Benchmarked LightGBM and Neural Networks on severe 10:1 imbalanced data using semi-supervised pseudo-labeling and RankGauss normalization.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-cyan-400">
              <span>10-Fold Cross-Validation</span>
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Bento Tile 4: Strategic Leadership & Outreach (Span 2 cols) */}
          <div className="md:col-span-2 bento-card p-6 sm:p-7 rounded-3xl bg-card border border-white/[0.08] flex flex-col justify-between group">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">AIESEC Team Leader</h4>
                  <p className="text-xs text-muted-foreground">Outgoing Global Volunteer (oGV) Product Lead</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                120+ Individuals Managed
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Led a high-performing team of 15+ members while developing a data-driven dashboard analyzing 5 years of market trends, boosting approvals & revenue by 20% to earn national recognition.
              </p>
              <div className="bg-secondary/30 p-3 rounded-xl border border-border/60 flex items-center justify-between font-mono text-xs">
                <span className="text-muted-foreground">Market Trend Dashboard</span>
                <span className="font-bold text-emerald-400">+20% Approvals & Revenue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
