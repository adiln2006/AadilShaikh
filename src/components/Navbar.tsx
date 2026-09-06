"use client";

import { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Volume2, VolumeX, Menu, X, FileText } from "lucide-react";

interface NavbarProps {
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean | ((prev: boolean) => boolean)) => void;
  playSfx: (freq?: number, type?: OscillatorType) => void;
}

export default function Navbar({ soundEnabled, setSoundEnabled, playSfx }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "services", "projects", "experience", "dev-lab", "trophies", "contact"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    playSfx(540, "sine");
    setActiveSection(id);
    setMobileOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "SERVICES", href: "#services", id: "services" },
    { label: "PROJECTS", href: "#projects", id: "projects" },
    { label: "EXPERIENCE", href: "#experience", id: "experience" },
    { label: "DEV LAB", href: "#dev-lab", id: "dev-lab" },
    { label: "AWARDS", href: "#trophies", id: "trophies" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 py-5 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-6 py-3.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0c0f08]/90 backdrop-blur-xl border border-[#ccff00]/15 shadow-2xl shadow-black/80"
            : "bg-transparent"
        }`}
      >
        {/* Minimal Circle Monogram Logo (A) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full border border-[#ccff00]/40 flex items-center justify-center font-bold text-white text-base group-hover:border-[#ccff00] group-hover:bg-[#ccff00]/10 transition-all duration-300">
            <span className="group-hover:text-[#ccff00] transition-colors">A</span>
          </div>
          <span className="hidden sm:inline text-xs font-mono tracking-widest text-[#8e9a82] uppercase">
            Aadil Shaikh
          </span>
        </a>

        {/* Center Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1.5 bg-[#12160d]/80 px-2 py-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-[#ccff00] text-black shadow-sm glow-lime-sm"
                    : "text-[#8e9a82] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            type="button"
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              if (next) playSfx(720, "sine");
            }}
            title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
            className="p-2 rounded-full text-[#8e9a82] hover:text-white hover:bg-white/5 border border-white/5 transition-colors"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#ccff00]" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Minimal Resume Button */}
          <a
            href={PERSONAL_INFO.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSfx(880, "triangle")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-black bg-[#ccff00] hover:bg-[#b8e600] transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            RESUME
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full text-white hover:bg-white/5 border border-white/5"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-[#0d1109]/95 backdrop-blur-2xl border border-[#ccff00]/20 rounded-3xl p-5 shadow-2xl flex flex-col gap-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wider flex items-center justify-between ${
                activeSection === link.id
                  ? "bg-[#ccff00] text-black"
                  : "text-[#8e9a82] hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{link.label}</span>
              {activeSection === link.id && <span className="w-2 h-2 rounded-full bg-black" />}
            </a>
          ))}
          <div className="pt-3 mt-1 border-t border-white/10 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#ccff00] py-1"
            >
              DOWNLOAD CV (PDF) ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
