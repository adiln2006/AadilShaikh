"use client";

import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Sparkles, FileText, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, FigmaIcon } from "./SocialIcons";

interface HeroSectionProps {
  playSfx: (freq?: number, type?: OscillatorType) => void;
}

export default function HeroSection({ playSfx }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-16 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      {/* Background ambient radial glow like reference */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] lime-radial-glow rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Aadil's Portrait with glowing olive halo */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start relative">
          <div className="relative w-full max-w-[380px] sm:max-w-[430px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-[#182011] to-[#0d1009] border border-[#ccff00]/20 shadow-2xl p-3 group">
            
            {/* Ambient inner halo behind portrait */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ccff00]/15 via-transparent to-emerald-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#0a0d07]">
              <Image
                src={PERSONAL_INFO.photos.casual}
                alt="Aadil Shaikh"
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d07] via-transparent to-transparent opacity-80" />

              {/* Status pill on photo */}
              <div className="absolute bottom-5 left-5 right-5 p-3 rounded-2xl bg-[#0e120a]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] -ml-4" />
                  <span className="text-xs font-semibold text-white">Aadil Shaikh</span>
                </div>
                <span className="text-[10px] font-mono text-[#ccff00] uppercase tracking-wider">
                  Navi Mumbai, IN
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Typography, Bio & Action Button */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Small lime intro text */}
          <div className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#ccff00] tracking-wide mb-3 font-mono">
            <span>Hello I&apos;m Aadil</span>
          </div>

          {/* Big clean bold title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
            UX/UI Designer
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-bold text-[#8e9a82] mt-2">
              &amp; Product Engineer
            </span>
          </h1>

          {/* Minimal description */}
          <p className="text-sm sm:text-base text-[#8e9a82] leading-relaxed max-w-lg mb-8">
            UI/UX Designer and frontend-focused product developer. Translating complex AI systems, fintech journeys, and SaaS workflows into elegant, pixel-tight interfaces with React, Angular, and Next.js.
          </p>

          {/* Action buttons matching the reference aesthetic */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                playSfx(640, "sine");
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-xl font-bold text-sm text-black bg-[#ccff00] hover:bg-[#b8e600] tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-lg glow-lime-sm uppercase"
            >
              ABOUT ME
            </a>

            <a
              href={PERSONAL_INFO.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSfx(700, "triangle")}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#ccff00]/40 transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#ccff00]" />
              DOWNLOAD CV
            </a>
          </div>

          {/* Social Icons Dock */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#8e9a82] mr-2">CONNECT:</span>
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#12160d] hover:bg-[#1a2113] border border-white/5 text-[#8e9a82] hover:text-[#ccff00] transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#12160d] hover:bg-[#1a2113] border border-white/5 text-[#8e9a82] hover:text-[#ccff00] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.links.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#12160d] hover:bg-[#1a2113] border border-white/5 text-[#8e9a82] hover:text-[#ccff00] transition-colors"
              title="Figma"
            >
              <FigmaIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

      {/* Floating Stats Bar spanning full width */}
      <div className="mt-20 w-full p-6 sm:p-8 rounded-3xl bg-[#0f140c]/90 border border-[#ccff00]/15 backdrop-blur-xl shadow-2xl relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <div>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">5+</p>
          <p className="text-xs sm:text-sm text-[#8e9a82] mt-1">Hackathon awards &amp; podiums</p>
        </div>
        <div className="border-l border-white/10 pl-6 sm:pl-8">
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">4</p>
          <p className="text-xs sm:text-sm text-[#8e9a82] mt-1">Featured UX case studies</p>
        </div>
        <div className="border-l border-white/10 pl-6 sm:pl-8">
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">3+</p>
          <p className="text-xs sm:text-sm text-[#8e9a82] mt-1">Full-stack &amp; AI platforms</p>
        </div>
        <div className="border-l border-white/10 pl-6 sm:pl-8">
          <p className="text-3xl sm:text-4xl font-extrabold text-[#ccff00] tracking-tight">7.8</p>
          <p className="text-xs sm:text-sm text-[#8e9a82] mt-1">CGPA Computer Engineering</p>
        </div>
      </div>
    </section>
  );
}
