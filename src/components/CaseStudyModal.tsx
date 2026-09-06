"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CaseStudy } from "@/data/portfolioData";
import { 
  X, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  Compass, 
  BarChart3, 
  Bot, 
  TrendingUp, 
  LayoutGrid, 
  Cpu, 
  LineChart, 
  Layers, 
  BookOpen, 
  HelpCircle, 
  PlayCircle, 
  Award, 
  Leaf, 
  Navigation, 
  Share2, 
  Flame, 
  Lock,
  Maximize2
} from "lucide-react";
import { FigmaIcon } from "./SocialIcons";

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  playSfx: (freq?: number, type?: OscillatorType) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  BarChart3,
  Bot,
  TrendingUp,
  LayoutGrid,
  Cpu,
  LineChart,
  Layers,
  BookOpen,
  HelpCircle,
  PlayCircle,
  Award,
  Leaf,
  Navigation,
  Share2,
  Flame,
};

export default function CaseStudyModal({ caseStudy, onClose, playSfx }: CaseStudyModalProps) {
  const [activeGlimpseIdx, setActiveGlimpseIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        scrollContainerRef.current?.scrollBy({ top: 120, behavior: "smooth" });
      }
      if (e.key === "ArrowUp") {
        scrollContainerRef.current?.scrollBy({ top: -120, behavior: "smooth" });
      }
      if (e.key === "PageDown" || e.key === " ") {
        scrollContainerRef.current?.scrollBy({ top: 400, behavior: "smooth" });
      }
      if (e.key === "PageUp") {
        scrollContainerRef.current?.scrollBy({ top: -400, behavior: "smooth" });
      }
    };

    if (caseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setActiveGlimpseIdx(0);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div 
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div 
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl h-[90vh] max-h-[90vh] flex flex-col bg-[#0b0e08] border border-[#ccff00]/25 rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#10140c]/90 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full text-[#ccff00] font-bold bg-[#ccff00]/10 border border-[#ccff00]/30 uppercase">
              {caseStudy.badge || caseStudy.category}
            </span>
            {caseStudy.isConfidential && (
              <span className="text-xs font-mono px-2.5 py-1 rounded-full text-amber-300 font-semibold bg-amber-500/15 border border-amber-500/30 uppercase flex items-center gap-1">
                <Lock className="w-3 h-3" />
                CONFIDENTIAL
              </span>
            )}
            <span className="hidden sm:inline text-xs text-[#8e9a82] font-mono">• {caseStudy.timeline}</span>
          </div>

          <button
            type="button"
            onClick={() => {
              playSfx(400, "sine");
              onClose();
            }}
            className="p-2 rounded-full text-[#8e9a82] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div 
          ref={scrollContainerRef}
          data-lenis-prevent
          tabIndex={0}
          onWheel={(e) => e.stopPropagation()}
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain modal-scrollbar p-6 sm:p-8 space-y-8 focus:outline-none"
        >
          
          {/* Main Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
              {caseStudy.title}
            </h2>
            <p className="text-sm sm:text-base text-[#8e9a82] font-medium leading-relaxed">
              {caseStudy.subtitle}
            </p>

            {/* Direct Figma File Link if present */}
            {caseStudy.figmaUrl && (
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={caseStudy.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSfx(750, "triangle")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold font-mono text-black bg-[#ccff00] hover:bg-[#b8e600] transition-all shadow-md glow-lime-sm"
                >
                  <FigmaIcon className="w-4 h-4 text-black" />
                  <span>Open Live Figma File ↗</span>
                </a>
                <span className="text-[11px] font-mono text-[#8e9a82]">
                  Includes interactive component variants &amp; design tokens
                </span>
              </div>
            )}
          </div>

          {/* 3-Column Metadata Box (Platform, Role, Key Focus) if present */}
          {(caseStudy.platform || caseStudy.role || caseStudy.keyFocus) && (
            <div className="p-6 rounded-2xl bg-[#12170d] border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-[10px] font-mono text-[#8e9a82] uppercase tracking-wider mb-1">
                  PLATFORM
                </p>
                <p className="text-base sm:text-lg font-bold text-white font-mono">
                  {caseStudy.platform || "Web / Mobile"}
                </p>
              </div>
              <div className="sm:border-l sm:border-r border-white/10 sm:px-4">
                <p className="text-[10px] font-mono text-[#8e9a82] uppercase tracking-wider mb-1">
                  ROLE
                </p>
                <p className="text-base sm:text-lg font-bold text-[#ccff00] font-mono">
                  {caseStudy.role}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#8e9a82] uppercase tracking-wider mb-1">
                  KEY FOCUS
                </p>
                <p className="text-base sm:text-lg font-bold text-white font-mono">
                  {caseStudy.keyFocus || "UI/UX Architecture"}
                </p>
              </div>
            </div>
          )}

          {/* Project Overview */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
              Project Overview
            </h3>
            <p className="text-sm text-[#c5cebb] leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* Methodologies & Tools Applied */}
          {caseStudy.methodologies && caseStudy.methodologies.length > 0 && (
            <div>
              <p className="text-[11px] font-mono font-semibold text-[#8e9a82] uppercase tracking-wider mb-3">
                METHODOLOGIES &amp; TOOLS APPLIED
              </p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.methodologies.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-full text-xs font-mono text-[#f3f5ed] bg-[#12170d] border border-white/10 hover:border-[#ccff00]/40 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Protected / Confidential Notice banner */}
          {caseStudy.isConfidential && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-amber-200">
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{caseStudy.confidentialNotice}</span>
              </div>
              <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase self-start sm:self-auto">
                PROTECTED / NDA
              </span>
            </div>
          )}

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#0f140c] border border-white/5">
              <div className="text-xs font-mono font-bold text-[#8e9a82] uppercase mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                The Core Friction / Problem
              </div>
              <p className="text-xs sm:text-sm text-[#c5cebb] leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#11170d] border border-[#ccff00]/25">
              <div className="text-xs font-mono font-bold text-[#ccff00] uppercase mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                The UX Solution &amp; Intervention
              </div>
              <p className="text-xs sm:text-sm text-white leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Design Glimpses Gallery (If Present) */}
          {caseStudy.designGlimpses && caseStudy.designGlimpses.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#ccff00]" />
                  Design Glimpses &amp; UI Workspace
                </h3>
                <span className="text-xs font-mono text-[#8e9a82]">
                  {caseStudy.designGlimpses.length} High-Fidelity Views
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex flex-wrap gap-2">
                {caseStudy.designGlimpses.map((glimpse, gIdx) => (
                  <button
                    key={gIdx}
                    type="button"
                    onClick={() => {
                      playSfx(550, "sine");
                      setActiveGlimpseIdx(gIdx);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                      activeGlimpseIdx === gIdx
                        ? "bg-[#ccff00] text-black shadow-md glow-lime-sm"
                        : "bg-[#12170d] text-[#8e9a82] hover:text-white hover:bg-white/5 border border-white/5"
                    }`}
                  >
                    {glimpse.tag}
                  </button>
                ))}
              </div>

              {/* Active Screenshot Display */}
              <div className="rounded-2xl overflow-hidden bg-[#070905] border border-white/10 shadow-2xl p-2 sm:p-4 relative group">
                <div className="relative w-full h-[460px] sm:h-[620px] rounded-xl overflow-hidden bg-[#0a0d07] flex items-center justify-center">
                  <Image
                    src={caseStudy.designGlimpses[activeGlimpseIdx].imageSrc}
                    alt={caseStudy.designGlimpses[activeGlimpseIdx].title}
                    fill
                    className="object-contain object-center"
                  />
                </div>

                {/* Caption Bar */}
                <div className="p-3 sm:p-4 bg-[#0e120a] rounded-xl mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {caseStudy.designGlimpses[activeGlimpseIdx].title}
                    </h4>
                    <p className="text-xs text-[#8e9a82] mt-0.5">
                      {caseStudy.designGlimpses[activeGlimpseIdx].subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/25 uppercase font-bold shrink-0 self-start sm:self-auto">
                    LIVE DESIGN SPEC
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Impact Metrics */}
          <div>
            <h3 className="text-base font-bold text-white mb-3">Key Measurable Outcomes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.impactMetrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-[#11160d] border border-white/5 flex flex-col justify-between"
                >
                  <p className="text-2xl sm:text-3xl font-mono font-extrabold text-[#ccff00]">
                    {metric.value}
                  </p>
                  <div className="mt-2">
                    <p className="text-xs font-semibold text-white">{metric.label}</p>
                    <p className="text-[11px] text-[#8e9a82] mt-0.5">{metric.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Core Interaction Patterns</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.keyFeatures.map((feat, idx) => {
                const IconComponent = ICON_MAP[feat.iconName] || CheckCircle;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-[#11160d] border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-[#ccff00]/15 text-[#ccff00]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{feat.title}</h4>
                    </div>
                    <p className="text-xs text-[#8e9a82] leading-relaxed pl-9">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 p-4 sm:p-6 border-t border-white/5 bg-[#0e120a] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#8e9a82]">Designed by Aadil Shaikh</span>
          <div className="flex items-center gap-3">
            {caseStudy.figmaUrl && (
              <a
                href={caseStudy.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSfx(750, "triangle")}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-[#ccff00] bg-[#141b0f] hover:bg-[#1f2a17] border border-[#ccff00]/40 transition-colors uppercase font-mono"
              >
                <FigmaIcon className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>Open Figma File ↗</span>
              </a>
            )}
            <button
              type="button"
              onClick={() => {
                playSfx(440, "sine");
                onClose();
              }}
              className="px-6 py-2 rounded-full text-xs font-bold text-black bg-[#ccff00] hover:bg-[#b8e600] transition-colors uppercase tracking-wider"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
