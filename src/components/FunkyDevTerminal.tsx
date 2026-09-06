"use client";

import { useState, useRef, useEffect } from "react";
import { TERMINAL_COMMANDS } from "@/data/portfolioData";
import confetti from "canvas-confetti";
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from "lucide-react";

interface FunkyDevTerminalProps {
  playSfx: (freq?: number, type?: OscillatorType) => void;
}

interface LogEntry {
  type: "input" | "output" | "error" | "system";
  text: string;
}

export default function FunkyDevTerminal({ playSfx }: FunkyDevTerminalProps) {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: "system", text: "Aadil Shaikh CLI [minimal v2.5]" },
    { type: "system", text: "Type 'help' or click quick pills to inspect parameters." },
  ]);

  const logsContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const executeCommand = (cmdStr: string) => {
    const raw = cmdStr.trim().toLowerCase();
    if (!raw) return;

    playSfx(480, "sawtooth");

    const newLogs: LogEntry[] = [...logs, { type: "input", text: `$ ${cmdStr}` }];

    if (raw === "clear") {
      setLogs([{ type: "system", text: "Console cleared. Type 'help' for commands." }]);
      setInputVal("");
      return;
    }

    if (raw === "hire" || raw === "why-hire") {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#ccff00", "#ffffff"],
      });
    }

    if (raw === "sudo rm -rf /" || raw === "rm -rf /") {
      newLogs.push({
        type: "error",
        text: "Nice try! Aadil's portfolio is immutable.",
      });
    } else if (raw === "hire") {
      newLogs.push({
        type: "output",
        text: "🎉 Reach out at adimohd76@gmail.com or WhatsApp +91 9137513093.",
      });
    } else if (TERMINAL_COMMANDS[raw]) {
      const resp = TERMINAL_COMMANDS[raw];
      if (Array.isArray(resp)) {
        resp.forEach((line) => newLogs.push({ type: "output", text: line }));
      } else {
        newLogs.push({ type: "output", text: resp });
      }
    } else {
      newLogs.push({
        type: "error",
        text: `Command not found: '${raw}'. Type 'help' for command list.`,
      });
    }

    setLogs(newLogs);
    setInputVal("");
  };

  const quickPills = ["help", "aadil", "stack", "why-hire", "hackathons", "coffee", "quote", "contact"];

  return (
    <section id="terminal" className="py-24 px-4 sm:px-8 max-w-5xl mx-auto relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Interactive Terminal
        </h2>
        <p className="text-xs sm:text-sm text-[#8e9a82] font-mono mt-2 uppercase tracking-widest">
          Query Aadil&apos;s Developer Profile in Real-Time
        </p>
      </div>

      <div className="rounded-3xl bg-[#090c07] border border-[#ccff00]/20 shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="px-5 py-3.5 bg-[#0e130a] border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00]" />
            <span className="text-xs font-mono text-[#8e9a82]">aadil@shell:~ (zsh)</span>
          </div>
          <button
            type="button"
            onClick={() => {
              playSfx(380, "sine");
              setLogs([{ type: "system", text: "Console cleared." }]);
            }}
            className="text-xs text-[#8e9a82] hover:text-white p-1 rounded font-mono flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>clear</span>
          </button>
        </div>

        {/* Logs */}
        <div 
          ref={logsContainerRef}
          onClick={() => inputRef.current?.focus()}
          className="p-6 font-mono text-xs sm:text-sm min-h-[260px] max-h-[380px] overflow-y-auto space-y-2 bg-[#090c07] cursor-text"
        >
          {logs.map((log, idx) => (
            <div key={idx} className="leading-relaxed">
              {log.type === "input" && <span className="text-[#ccff00] font-semibold">{log.text}</span>}
              {log.type === "system" && <span className="text-[#8e9a82] italic">{log.text}</span>}
              {log.type === "output" && <span className="text-[#f3f5ed]">{log.text}</span>}
              {log.type === "error" && <span className="text-rose-400">{log.text}</span>}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="px-5 py-3.5 bg-[#0e130a] border-t border-white/5 flex items-center gap-2">
          <span className="text-[#ccff00] font-mono font-bold text-sm">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && executeCommand(inputVal)}
            placeholder="Type command (e.g. why-hire, stack, coffee)..."
            className="w-full bg-transparent border-none text-xs sm:text-sm font-mono text-white placeholder-[#8e9a82] focus:outline-none"
          />
          <button
            type="button"
            onClick={() => executeCommand(inputVal)}
            className="p-1.5 rounded-lg bg-[#ccff00]/15 text-[#ccff00] hover:bg-[#ccff00]/25 transition-colors"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Pills */}
        <div className="px-5 py-3 bg-[#080b06] border-t border-white/5 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono text-[#8e9a82]">RUN:</span>
          {quickPills.map((pill) => (
            <button
              key={pill}
              type="button"
              onClick={() => executeCommand(pill)}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-[#8e9a82] hover:text-[#ccff00] hover:bg-[#ccff00]/10 border border-white/5 transition-colors"
            >
              {pill}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
