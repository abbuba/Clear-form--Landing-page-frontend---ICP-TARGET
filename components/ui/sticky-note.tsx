"use client";

import { motion, useReducedMotion } from "framer-motion";

type StickyNoteProps = {
  text: string;
  rot: number;
  index: number;
};

export function StickyNote({ text, rot, index }: StickyNoteProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.li
      style={{ rotate: rot }}
      whileHover={{ rotate: 0, y: -3, scale: 1.03 }}
      animate={
        reducedMotion
          ? undefined
          : {
              y: [0, -2, 0, 2, 0],
            }
      }
      transition={
        reducedMotion
          ? undefined
          : {
              duration: 6 + (index % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }
      }
      className="inline-flex select-none items-center rounded-[6px] border border-amber-200/70 bg-[#FFFBEA] px-4 py-2.5 text-base font-medium text-gray-700 shadow-[2px_4px_10px_-4px_rgba(15,23,42,0.18)] hover:shadow-[3px_6px_14px_-4px_rgba(15,23,42,0.25)]"
    >
      {text}
    </motion.li>
  );
}

export default StickyNote;
