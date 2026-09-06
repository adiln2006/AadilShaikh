"use client";

import { useState } from "react";
import { DEV_PROJECTS, DevProject } from "@/data/portfolioData";
import { 
  Code2, 
  Terminal, 
  Layers, 
  ExternalLink, 
  Cpu, 
  Database, 
  Sparkles, 
  CheckCircle, 
  Activity 
} from "lucide-react";
import ScrollSlideIn from "./ScrollSlideIn";

interface DevProjectsSectionProps {
  playSfx: (freq?: number, type?: OscillatorType) => void;
}

export default function DevProjectsSection({ playSfx }: DevProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>(DEV_PROJECTS[0].id);

  const currentProject = DEV_PROJECTS.find((p) => p.id === activeTab) || DEV_PROJECTS[0];

  return (
    <section id="dev-lab" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <ScrollSlideIn direction="up" distance={30}>
        <div className="mb-16 border-b border-white/5 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Developer Lab &amp; Systems
            </h2>
            <p className="text-xs sm:text-sm text-[#8e9a82] font-mono mt-2 uppercase tracking-widest">
              Full-Stack Architectures, Gemini AI &amp; Real-Time WebSockets
            </p>
          </div>
          <div className="text-xs font-mono text-[#ccff00]">
            Engineering DNA
          </div>
        </div>
      </ScrollSlideIn>

      {/* Project Selector Tabs */}
      <ScrollSlideIn direction="up" delay={0.08} distance={35}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {DEV_PROJECTS.map((proj) => {
          const isSelected = proj.id === activeTab;
          return (
            <button
              key={proj.id}
              type="button"
              onClick={() => {
                playSfx(550, "sine");
                setActiveTab(proj.id);
              }}
              className={`p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                isSelected
                  ? "bg-[#141b10] border-[#ccff00]/60 shadow-lg glow-lime-sm -translate-y-0.5"
                  : "bg-[#0e120a] border-white/5 hover:bg-[#12160d] hover:border-white/15"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-[#8e9a82]">
                  {proj.category}
                </span>
                <div className="flex items-center gap-1.5">
                  {proj.liveUrl && (
                    <span className="text-[9px] font-mono font-bold text-[#ccff00] bg-[#ccff00]/10 px-1.5 py-0.5 rounded border border-[#ccff00]/20">
                      LIVE
                    </span>
                  )}
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{proj.title}</h4>
                <p className="text-xs text-[#8e9a82] line-clamp-1 mt-0.5">{proj.tagline}</p>
              </div>
            </button>
          );
        })}
        </div>
      </ScrollSlideIn>

      {/* Selected Project Card */}
      <ScrollSlideIn direction="up" delay={0.16} distance={40}>
        <div className="rounded-3xl bg-[#0e120a] border border-white/10 p-7 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Left: Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30">
                  {currentProject.badge}
                </span>
                <span className="text-xs text-[#8e9a82] font-mono flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#ccff00]" />
                  Live Architecture
                </span>
              </div>

              {currentProject.liveUrl && (
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSfx(880, "triangle")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[#ccff00] text-black hover:bg-[#b8e600] transition-all hover:scale-105 shadow-md shadow-[#ccff00]/20"
                >
                  <span>OPEN LIVE APP</span>
                  <ExternalLink className="w-3.5 h-3.5 text-black" />
                </a>
              )}
            </div>

            <div>
              <div className="flex items-baseline gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentProject.title}
                </h3>
              </div>
              <p className="text-sm text-[#ccff00] font-medium mt-1">
                {currentProject.tagline}
              </p>
              <p className="text-xs sm:text-sm text-[#8e9a82] mt-3 leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            {/* System Highlights */}
            <div className="space-y-2.5">
              <p className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                Engineering Highlights
              </p>
              {currentProject.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#c5cebb]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#ccff00] mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-2.5">
                Stack &amp; Frameworks
              </p>
              <div className="flex flex-wrap gap-2">
                {currentProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono text-[#c5cebb] bg-white/[0.04] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Link Banner */}
            {currentProject.liveUrl && (
              <div className="pt-2">
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSfx(880, "triangle")}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#141b10] border border-[#ccff00]/40 text-[#ccff00] hover:bg-[#ccff00] hover:text-black transition-all group"
                >
                  <span>Launch Live Deployment:</span>
                  <span className="underline opacity-90 group-hover:no-underline">{currentProject.liveUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            )}
          </div>

          {/* Right: Architecture Blueprint Box */}
          <div className="lg:col-span-5 rounded-2xl bg-[#080b06] border border-white/10 p-5 shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00]" />
                <span className="text-[11px] font-mono text-[#8e9a82]">architecture_spec.json</span>
              </div>
              <Terminal className="w-3.5 h-3.5 text-[#ccff00]" />
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              {currentProject.architecture.map((arch, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[#ccff00] mr-2">0{i + 1}.</span>
                  <span className="text-[#8e9a82]">{arch}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      </ScrollSlideIn>
    </section>
  );
}
