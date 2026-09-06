"use client";

import { HACKATHONS } from "@/data/portfolioData";
import confetti from "canvas-confetti";
import { Trophy, Award, Sparkles, PartyPopper, ExternalLink } from "lucide-react";
import { LinkedinIcon } from "./SocialIcons";
import ScrollSlideIn from "./ScrollSlideIn";

interface HackathonTrophiesProps {
  playSfx: (freq?: number, type?: OscillatorType) => void;
}

export default function HackathonTrophies({ playSfx }: HackathonTrophiesProps) {
  const triggerConfetti = (e: React.MouseEvent) => {
    playSfx(920, "triangle");
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ["#ccff00", "#ffffff", "#8e9a82", "#182011"],
    });
  };

  return (
    <section id="trophies" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <ScrollSlideIn direction="up" distance={30}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Awards &amp; Competitions
            </h2>
            <p className="text-xs sm:text-sm text-[#8e9a82] font-mono mt-2 uppercase tracking-widest">
              Hackathons, Ideathons &amp; Speed Prototyping
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00]">
            <PartyPopper className="w-4 h-4 animate-bounce" />
            <span>Click any card to fire confetti!</span>
          </div>
        </div>
      </ScrollSlideIn>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HACKATHONS.map((hack, idx) => (
          <ScrollSlideIn
            key={idx}
            direction="up"
            delay={(idx % 3) * 0.1}
            distance={40}
            className="h-full"
          >
            <div
              onClick={triggerConfetti}
              className="group relative p-7 rounded-3xl bg-[#0e120a] border border-white/5 hover:border-[#ccff00]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-xl h-full"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full font-bold bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/25">
                    {hack.badge}
                  </span>
                  <span className="text-xs font-mono text-[#8e9a82]">{hack.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#ccff00] transition-colors">
                  {hack.event}
                </h3>
                <p className="text-xs font-semibold text-[#8e9a82] mt-1 mb-3 font-mono">
                  {hack.result}
                </p>
                <p className="text-xs text-[#c5cebb] leading-relaxed">
                  {hack.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#8e9a82]">
                {hack.linkedinUrl ? (
                  <a
                    href={hack.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      playSfx(750, "triangle");
                    }}
                    className="inline-flex items-center gap-1.5 text-[#ccff00] hover:underline font-bold transition-colors group-hover:translate-x-0.5"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>VIEW POST</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="group-hover:text-[#ccff00] transition-colors">Verified Achievement</span>
                )}
                <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
              </div>
            </div>
          </ScrollSlideIn>
        ))}
      </div>
    </section>
  );
}
