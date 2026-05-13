"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export type UseTypewriterOptions = {
  charsPerTick?: number;
  intervalMs?: number;
};

export function useTypewriter(
  fullText: string,
  enabled: boolean,
  { charsPerTick = 1, intervalMs = 28 }: UseTypewriterOptions = {}
) {
  const reducedMotion = useReducedMotion();
  const fullLen = fullText.length;
  const [displayedLength, setDisplayedLength] = useState(0);
  const skip = !!reducedMotion;

  useEffect(() => {
    setDisplayedLength(0);
  }, [fullText]);

  useEffect(() => {
    if (skip) {
      setDisplayedLength(enabled ? fullLen : 0);
      return;
    }
    if (!enabled) {
      setDisplayedLength(0);
      return;
    }
    if (displayedLength >= fullLen) return;

    const id = setInterval(() => {
      setDisplayedLength((n) => Math.min(n + charsPerTick, fullLen));
    }, intervalMs);

    return () => clearInterval(id);
  }, [enabled, fullLen, charsPerTick, intervalMs, skip, displayedLength]);

  const displayedText = fullText.slice(0, displayedLength);
  const isComplete = displayedLength >= fullLen;

  return { displayedText, isComplete };
}
