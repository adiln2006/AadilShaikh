"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable browser automatic scroll restoration so refresh always opens at hero section
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // If page has a leftover hash in URL, clear it so refresh never jumps back down
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }

      window.scrollTo(0, 0);
    }

    // Initialize Lenis smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      prevent: (node) => {
        if (!node || !(node instanceof Element)) return false;
        return Boolean(node.closest("[data-lenis-prevent]"));
      },
    });

    lenis.scrollTo(0, { immediate: true });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
