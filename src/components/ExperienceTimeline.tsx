"use client";

import { WORK_EXPERIENCE, PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  GraduationCap, 
  CheckCircle2,
  Sparkles,
  Award,
  Terminal
} from "lucide-react";
import ScrollSlideIn from "./ScrollSlideIn";

interface ExperienceTimelineProps {
  playSfx: (freq?: number, type?: OscillatorType) => void;
}

export default function ExperienceTimeline({ playSfx }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto relative">
      {/* Glow subtle backdrop */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#ccff00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#8e9a82]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header with ScrollSlideIn */}
      <ScrollSlideIn direction="up" distance={30}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/25 text-[#ccff00] text-xs font-mono mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Experience &amp; Education
            </h2>
            <p className="text-xs sm:text-sm text-[#8e9a82] font-mono mt-2 uppercase tracking-widest">
              Proven Leadership, Angular Engineering &amp; AI-Driven Product Systems
            </p>
          </div>

          <div className="text-xs font-mono text-[#8e9a82] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
            <span className="text-white">Active Product Contributor</span>
          </div>
        </div>
      </ScrollSlideIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Work Experience (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          <ScrollSlideIn direction="up" delay={0.05} distance={25}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                <Sparkles className="w-4 h-4 text-[#ccff00]" />
                Professional Roles
              </h3>
              <span className="text-xs font-mono text-[#8e9a82]">Chronological</span>
            </div>
          </ScrollSlideIn>

          <div className="space-y-6">
            {WORK_EXPERIENCE.map((exp, idx) => (
              <ScrollSlideIn
                key={idx}
                direction="up"
                delay={0.1 + idx * 0.12}
                distance={35}
                className="h-full"
              >
                <div
                  onMouseEnter={() => playSfx(620, "triangle")}
                  className="group relative p-7 sm:p-8 rounded-3xl bg-[#0e120a] border border-white/10 hover:border-[#ccff00]/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  {/* Subtle hover neon bar */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#ccff00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30 font-semibold tracking-wide">
                          {exp.type}
                        </span>
                        <span className="text-xs text-[#8e9a82] font-mono flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#ccff00]" />
                          {exp.period}
                        </span>
                      </div>
                      <span className="text-xs text-[#8e9a82] font-mono flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-white/40" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Role Title & Company Header */}
                    <div className="mb-5">
                      <h4 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#ccff00] transition-colors tracking-tight">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-mono text-[#ccff00] mt-1 flex items-center gap-2">
                        <span className="font-bold text-white/90">{exp.company}</span>
                        {exp.linkText && (
                          <span className="text-xs text-[#8e9a82] px-2 py-0.5 rounded bg-white/5 border border-white/5">
                            {exp.linkText}
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#c8cebe] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#ccff00] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Applied Tags */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                    {exp.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#182011] text-[#8e9a82] border border-[#ccff00]/10 group-hover:border-[#ccff00]/25 group-hover:text-white transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollSlideIn>
            ))}
          </div>
        </div>

        {/* Right: Education & Academics (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <ScrollSlideIn direction="up" delay={0.12} distance={25}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                <GraduationCap className="w-4 h-4 text-[#ccff00]" />
                Education
              </h3>
              <span className="text-xs font-mono text-[#8e9a82]">Academic Base</span>
            </div>
          </ScrollSlideIn>

          <div className="space-y-4">
            {PERSONAL_INFO.education.map((edu, idx) => (
              <ScrollSlideIn
                key={idx}
                direction="up"
                delay={0.18 + idx * 0.1}
                distance={35}
              >
                <div
                  onMouseEnter={() => playSfx(680, "sine")}
                  className="p-6 rounded-3xl bg-[#0e120a] border border-white/10 hover:border-[#ccff00]/30 transition-all duration-300 shadow-xl group"
                >
                  <div className="flex items-center justify-between text-xs text-[#8e9a82] font-mono mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#ccff00]" />
                      {edu.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/25 font-bold">
                      {edu.score}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-[#ccff00] transition-colors leading-snug">
                    {edu.institution}
                  </h4>
                  <p className="text-xs font-mono text-[#8e9a82] mt-1 mb-3">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-[#8e9a82] leading-relaxed border-t border-white/5 pt-3">
                    {edu.details}
                  </p>
                </div>
              </ScrollSlideIn>
            ))}

            {/* Quick Summary Badge Card */}
            <ScrollSlideIn direction="up" delay={0.35} distance={30}>
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#182011] to-[#0e120a] border border-[#ccff00]/20 text-xs font-mono text-[#c8cebe] leading-relaxed shadow-lg">
                <div className="flex items-center gap-2 text-[#ccff00] font-bold uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4" />
                  <span>The Hybrid Advantage</span>
                </div>
                <p>
                  Engineered with an architectural eye for human interaction, design system scalability, and high-performance production code.
                </p>
              </div>
            </ScrollSlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
