"use client";

import { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { 
  Sparkles, 
  Palette, 
  Code2, 
  Check, 
  Sliders, 
  Cpu, 
  Layers,
  Flame
} from "lucide-react";

interface SkillsSectionProps {
  playSfx: (freq?: number, type?: OscillatorType) => void;
}

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "UI/UX & Product Design": Palette,
  "Frontend Engineering": Code2,
  "AI, Agents & Backend": Sparkles,
};

export default function SkillsSection({ playSfx }: SkillsSectionProps) {
  const [selectedPill, setSelectedPill] = useState<string | null>(null);

  const handlePillClick = (skillName: string) => {
    playSfx(680, "sine");
    setSelectedPill(selectedPill === skillName ? null : skillName);
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="mb-12 border-b border-white/5 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
          <Sliders className="w-3.5 h-3.5" />
          <span>Core Capabilities &amp; Tooling</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Weapons of Choice
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-2xl">
          A balanced hybrid toolkit: eliminating the infamous engineering-design friction with deep fluency in both Figma auto-layouts and production JavaScript runtimes.
        </p>
      </div>

      {/* Dual Personality Meter */}
      <div className="mb-12 p-6 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-indigo-950/40 border border-white/10 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
              Product &amp; Systems Designer (50%)
            </span>
          </div>
          <div className="text-xs font-mono text-purple-300 font-semibold">
            ✦ Perfect Equilibrium ✦
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
              Frontend &amp; AI Engineer (50%)
            </span>
            <Code2 className="w-4 h-4 text-indigo-400" />
          </div>
        </div>

        {/* Progress Dual Bar */}
        <div className="w-full h-3 rounded-full bg-black/40 p-0.5 flex overflow-hidden border border-white/10">
          <div className="w-1/2 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-l-full" />
          <div className="w-1/2 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-r-full" />
        </div>

        <p className="text-center text-xs text-gray-400 font-mono mt-3">
          &ldquo;Why pick between great design and performant code when you can write both?&rdquo;
        </p>
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((catGroup, idx) => {
          const Icon = CATEGORY_ICONS[catGroup.category] || Sparkles;
          return (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#0e111e]/90 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{catGroup.category}</h3>
                    <p className="text-[11px] text-gray-400">{catGroup.description}</p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="space-y-2 mt-6">
                  {catGroup.skills.map((skill, sIdx) => {
                    const isSelected = selectedPill === skill.name;
                    return (
                      <div
                        key={sIdx}
                        onClick={() => handlePillClick(skill.name)}
                        className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-cyan-500/20 border-cyan-500/50 shadow-md"
                            : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/15"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="text-xs font-semibold text-gray-200">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">
                            {skill.tag}
                          </span>
                          <span className="text-[10px] font-mono font-medium text-cyan-300">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-gray-400 flex items-center justify-between">
                <span>Production tested</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Ready to ship
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
