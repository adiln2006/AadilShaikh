"use client";

import { motion } from "framer-motion";
import React from "react";

interface ScrollSlideInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  className?: string;
  onClick?: () => void;
}

export default function ScrollSlideIn({
  children,
  delay = 0,
  direction = "up",
  distance = 36,
  duration = 0.65,
  className = "",
  onClick,
}: ScrollSlideInProps) {
  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
      default:
        return { y: distance, x: 0 };
    }
  };

  const offset = getInitialOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom snappy cubic bezier
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
