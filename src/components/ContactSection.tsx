"use client";

import { useState } from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, FigmaIcon } from "./SocialIcons";
import { Mail, Phone, Copy, Check, Send, MapPin, FileText } from "lucide-react";
import ScrollSlideIn from "./ScrollSlideIn";

interface ContactSectionProps {
  playSfx: (freq?: number, type?: OscillatorType) => void;
}

export default function ContactSection({ playSfx }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleCopyEmail = () => {
    playSfx(840, "sine");
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    playSfx(600, "triangle");
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Visitor"}`);
    const body = encodeURIComponent(`Hi Aadil,\n\n${msg}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto relative">
      
      {/* Signature Minimal Work Together Banner matching reference */}
      <ScrollSlideIn direction="up" distance={30}>
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#10140c] border border-[#ccff00]/25 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s work together on <br className="hidden sm:inline" />
              your next project
            </h2>
            <p className="text-xs sm:text-sm text-[#8e9a82] font-mono mt-3">
              Open for full-time product roles, UX internships &amp; high-impact contracts.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-8 py-4 rounded-2xl font-bold text-sm text-black bg-[#ccff00] hover:bg-[#b8e600] transition-all duration-200 tracking-wider hover:-translate-y-0.5 shadow-xl glow-lime-sm uppercase"
            >
              {copied ? "EMAIL COPIED! ✓" : "CONTACT"}
            </button>
          </div>
        </div>
      </ScrollSlideIn>

      {/* Detail Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 h-full">
          <ScrollSlideIn direction="left" delay={0.1} distance={40} className="h-full">
            <div className="p-7 rounded-3xl bg-[#0e120a] border border-white/5 flex flex-col justify-between h-full shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Direct Channels</h3>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono text-[#8e9a82] uppercase">Email</p>
                      <p className="text-sm font-semibold text-white font-mono">{PERSONAL_INFO.email}</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-2 rounded-xl text-[#8e9a82] hover:text-[#ccff00] transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-[#ccff00]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ccff00]/30 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-[10px] font-mono text-[#8e9a82] uppercase">Phone / WhatsApp</p>
                      <p className="text-sm font-semibold text-white font-mono">{PERSONAL_INFO.phone}</p>
                    </div>
                    <span className="text-xs text-[#ccff00] font-mono group-hover:translate-x-1 transition-transform">
                      Chat ↗
                    </span>
                  </a>

                  <a
                    href={PERSONAL_INFO.links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ccff00]/30 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-[10px] font-mono text-[#8e9a82] uppercase">Resume</p>
                      <p className="text-sm font-semibold text-white">Download PDF Document</p>
                    </div>
                    <FileText className="w-4 h-4 text-[#ccff00]" />
                  </a>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-[#8e9a82]">Profiles</span>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 text-[#8e9a82] hover:text-[#ccff00] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 text-[#8e9a82] hover:text-[#ccff00] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.links.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 text-[#8e9a82] hover:text-[#ccff00] transition-colors"
                  >
                    <FigmaIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollSlideIn>
        </div>

        {/* Right: Quick Ping Form */}
        <div className="lg:col-span-7 h-full">
          <ScrollSlideIn direction="right" delay={0.15} distance={40} className="h-full">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0e120a] border border-white/5 h-full shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-[#8e9a82] mb-6">Directly dispatch a note to Aadil&apos;s primary mailbox.</p>

              <form onSubmit={handleSend} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#14190f] border border-white/10 text-white placeholder-[#8e9a82] text-sm focus:outline-none focus:border-[#ccff00]/60 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#14190f] border border-white/10 text-white placeholder-[#8e9a82] text-sm focus:outline-none focus:border-[#ccff00]/60 transition-colors"
                  />
                </div>
                <textarea
                  rows={4}
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Tell me about your product, role, or vision..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#14190f] border border-white/10 text-white placeholder-[#8e9a82] text-sm focus:outline-none focus:border-[#ccff00]/60 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-2xl font-bold text-sm text-black bg-[#ccff00] hover:bg-[#b8e600] transition-all flex items-center gap-2 uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>
          </ScrollSlideIn>
        </div>
      </div>
    </section>
  );
}
