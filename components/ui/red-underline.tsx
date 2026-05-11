"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type RedUnderlineProps = {
  children: ReactNode;
  delay?: number;
  thickness?: number;
};

export function RedUnderline({ children, delay = 0.4, thickness = 4 }: RedUnderlineProps) {
  const reducedMotion = useReducedMotion();
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        viewBox="0 0 220 16"
        preserveAspectRatio="none"
        className="absolute -bottom-1 left-0 h-3 w-full sm:-bottom-2 sm:h-4"
      >
        <motion.path
          d="M2 10 C 30 4, 70 14, 110 8 S 190 4, 218 10"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={thickness}
          strokeLinecap="round"
          initial={{ pathLength: reducedMotion ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: reducedMotion ? 0 : 0.9,
            delay: reducedMotion ? 0 : delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </svg>
    </span>
  );
}

export default RedUnderline;
