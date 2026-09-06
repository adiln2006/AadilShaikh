"use client";

import { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Clock } from "lucide-react";

interface FooterProps {
  playSfx: (freq?: number, type?: OscillatorType) => void;
}

export default function Footer({ playSfx }: FooterProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", opts).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playSfx(750, "sine");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#060805] py-16 px-4 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-6">
        
        {/* Monogram Logo (A) */}
        <div 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-[#ccff00]/40 flex items-center justify-center font-bold text-white text-lg cursor-pointer hover:border-[#ccff00] hover:bg-[#ccff00]/10 transition-all"
        >
          <span className="text-[#ccff00]">A</span>
        </div>

        {/* Minimal Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono tracking-widest text-[#8e9a82] uppercase">
          {[
            { label: "HOME", id: "home" },
            { label: "SERVICES", id: "services" },
            { label: "PROJECTS", id: "projects" },
            { label: "DEV LAB", id: "dev-lab" },
            { label: "AWARDS", id: "trophies" },
            { label: "CONTACT", id: "contact" },
          ].map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => {
                playSfx(540, "sine");
                if (link.id === "home") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  const el = document.getElementById(link.id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Clock & Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#8e9a82] pt-4 border-t border-white/5 w-full max-w-lg">
          <div className="flex items-center gap-1.5 text-[#ccff00]">
            <Clock className="w-3.5 h-3.5" />
            <span>Navi Mumbai: {time || "IST"}</span>
          </div>
          <span>•</span>
          <span>Aadil Shaikh &copy; 2025/2026</span>
        </div>

      </div>
    </footer>
  );
}
