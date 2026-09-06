"use client";

import { useState } from "react";
import { CASE_STUDIES, CaseStudy } from "@/data/portfolioData";
import CaseStudyModal from "./CaseStudyModal";
import ScrollSlideIn from "./ScrollSlideIn";
import { ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";

interface CaseStudiesSectionProps {
  playSfx: (freq?: number, type?: OscillatorType) => void;
}

export default function CaseStudiesSection({ playSfx }: CaseStudiesSectionProps) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleOpenModal = (cs: CaseStudy) => {
    playSfx(700, "triangle");
    setSelectedCaseStudy(cs);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <ScrollSlideIn direction="up" distance={30}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#8e9a82] font-mono mt-2 uppercase tracking-widest">
              Selected UI/UX Product Case Studies
            </p>
          </div>

          <div className="text-xs font-mono text-[#8e9a82]">
            Showing 4 Production Case Studies
          </div>
        </div>
      </ScrollSlideIn>

      {/* 2x2 Projects Grid matching user reference */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {CASE_STUDIES.map((study, idx) => (
          <ScrollSlideIn
            key={study.id}
            direction="up"
            delay={idx % 2 === 1 ? 0.12 : 0}
            distance={40}
            className="h-full"
          >
            <div
              onClick={() => handleOpenModal(study)}
              className="group relative rounded-3xl bg-[#0e120a] border border-white/5 hover:border-[#ccff00]/40 transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl flex flex-col justify-between hover:-translate-y-1 h-full"
            >
              {/* Ambient card corner glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#ccff00]/10 rounded-full blur-3xl group-hover:bg-[#ccff00]/20 transition-colors pointer-events-none" />

              <div className="p-7 sm:p-8">
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#ccff00] tracking-wider uppercase">
                    {study.category}
                  </span>
                  <span className="text-xs text-[#8e9a82] font-mono">{study.timeline}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-[#ccff00] transition-colors flex items-center justify-between">
                  <span>{study.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#8e9a82] group-hover:text-[#ccff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-xs font-medium text-[#8e9a82] mt-1 mb-3">
                  {study.subtitle}
                </p>

                {/* Tagline */}
                <p className="text-sm text-[#c5cebb] leading-relaxed mb-6">
                  &ldquo;{study.tagline}&rdquo;
                </p>

                {/* Problem / Solution snapshot */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs text-[#8e9a82]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                    <span className="text-white font-medium">Impact Metric:</span>
                    <span className="text-[#ccff00] font-mono font-bold">{study.impactMetrics[0].value}</span>
                    <span className="text-[11px] truncate">({study.impactMetrics[0].label})</span>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="px-7 py-4 bg-[#12170d] border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-[#8e9a82]">{study.badge}</span>
                <span className="text-[#ccff00] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  VIEW CASE STUDY <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </ScrollSlideIn>
        ))}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        playSfx={playSfx}
      />
    </section>
  );
}
