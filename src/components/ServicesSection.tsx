"use client";

import { Palette, Box, Code2, Sparkles, Layers, Terminal } from "lucide-react";
import ScrollSlideIn from "./ScrollSlideIn";

interface ServicesSectionProps {
  playSfx: (freq?: number, type?: OscillatorType) => void;
}

export default function ServicesSection({ playSfx }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto relative">
      {/* Section Title */}
      <ScrollSlideIn direction="up" distance={30}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services
          </h2>
          <p className="text-xs sm:text-sm text-[#8e9a82] font-mono mt-2 uppercase tracking-widest">
            Comprehensive Product Execution &amp; Design Architecture
          </p>
        </div>
      </ScrollSlideIn>

      {/* 3 Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-stretch">
        
        {/* Card 1: UX/UI Design */}
        <ScrollSlideIn direction="up" delay={0} distance={40} className="h-full">
          <div 
            onClick={() => playSfx(580, "sine")}
            className="p-8 rounded-3xl bg-[#0f140c] border border-white/5 hover:border-[#ccff00]/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 shadow-xl h-full"
          >
            <div>
              {/* Minimal Line Art Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#151d10] border border-white/5 flex items-center justify-center text-[#ccff00] mb-8 group-hover:scale-110 transition-transform">
                <Palette className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                UX/UI Design
              </h3>
              <p className="text-xs sm:text-sm text-[#8e9a82] leading-relaxed">
                Transforming ambiguous product concepts into clean, accessible design systems, user journeys, wireframes, and high-fidelity interactive Figma prototypes.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#8e9a82]">
              <span>Figma • Systems</span>
              <span className="text-[#ccff00]">✦ 01</span>
            </div>
          </div>
        </ScrollSlideIn>

        {/* Card 2: Product Design (FEATURED with signature tilted neon lime outline card behind it) */}
        <ScrollSlideIn direction="up" delay={0.12} distance={40} className="h-full">
          <div className="relative group cursor-pointer h-full" onClick={() => playSfx(720, "triangle")}>
            {/* Tilted neon lime outline backdrop */}
            <div className="absolute inset-0 rounded-3xl border-2 border-[#ccff00] rotate-[-2.5deg] scale-[1.02] opacity-85 group-hover:rotate-[-4deg] group-hover:scale-[1.04] transition-all duration-300 pointer-events-none glow-lime-sm" />

            {/* Actual Card Foreground */}
            <div className="relative p-8 rounded-3xl bg-[#12170d] border border-[#ccff00]/40 shadow-2xl flex flex-col justify-between h-full group-hover:-translate-y-1 transition-transform duration-300">
              <div>
                {/* Line Art Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#ccff00]/15 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] mb-8 group-hover:scale-110 transition-transform">
                  <Box className="w-6 h-6" />
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#ccff00] text-black text-[10px] font-bold tracking-wider font-mono uppercase mb-2">
                  CORE FOCUS
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  Product Design
                </h3>
                <p className="text-xs sm:text-sm text-[#8e9a82] leading-relaxed">
                  End-to-end product thinking: cognitive friction reduction, onboarding progressive disclosure, behavioral feedback loops, and metrics-driven design iterations.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#ccff00]/20 flex items-center justify-between text-xs font-mono text-[#8e9a82]">
                <span>Strategy • Flows</span>
                <span className="text-[#ccff00] font-bold">✦ 02</span>
              </div>
            </div>
          </div>
        </ScrollSlideIn>

        {/* Card 3: Frontend & AI */}
        <ScrollSlideIn direction="up" delay={0.24} distance={40} className="h-full">
          <div 
            onClick={() => playSfx(620, "sine")}
            className="p-8 rounded-3xl bg-[#0f140c] border border-white/5 hover:border-[#ccff00]/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 shadow-xl h-full"
          >
            <div>
              {/* Minimal Line Art Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#151d10] border border-white/5 flex items-center justify-center text-[#ccff00] mb-8 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Frontend &amp; AI Engineering
              </h3>
              <p className="text-xs sm:text-sm text-[#8e9a82] leading-relaxed">
                Writing production React, Next.js, Angular, and TypeScript code. Implementing buttery smooth animations, a11y accessibility, and Gemini LLM conversational interfaces.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#8e9a82]">
              <span>Next.js • React • AI</span>
              <span className="text-[#ccff00]">✦ 03</span>
            </div>
          </div>
        </ScrollSlideIn>

      </div>
    </section>
  );
}
