"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import DevProjectsSection from "@/components/DevProjectsSection";
import HackathonTrophies from "@/components/HackathonTrophies";
import FunkyDevTerminal from "@/components/FunkyDevTerminal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Synthesized web audio feedback
  const playSfx = useCallback((freq = 560, type: OscillatorType = "sine") => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch {
      // Catch restricted audio context
    }
  }, [soundEnabled]);

  return (
    <main className="min-h-screen bg-[#080a06] text-[#f3f5ed] relative">
      {/* Minimal Top Floating Navbar with (A) Monogram & Active Neon Pill */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playSfx={playSfx}
      />

      {/* Minimal Hero Section with Portrait Cutout, Glow Halo & Stats Banner */}
      <HeroSection playSfx={playSfx} />

      {/* Services Section with Signature Tilted Neon Lime Card */}
      <ServicesSection playSfx={playSfx} />

      {/* Featured Projects (2x2 Grid with Case Study Deep Dives) */}
      <CaseStudiesSection playSfx={playSfx} />

      {/* Work Experience & Education Track Record */}
      <ExperienceTimeline playSfx={playSfx} />

      {/* Developer Lab & Real-Time Fullstack Systems */}
      <DevProjectsSection playSfx={playSfx} />

      {/* Hackathon Awards & Podium Finishes */}
      <HackathonTrophies playSfx={playSfx} />

      {/* Minimal Interactive Dev Terminal */}
      <FunkyDevTerminal playSfx={playSfx} />

      {/* 'Let's Work Together' Signature Banner & Contact Form */}
      <ContactSection playSfx={playSfx} />

      {/* Minimal Footer with (A) Monogram & Local Clock */}
      <Footer playSfx={playSfx} />
    </main>
  );
}
