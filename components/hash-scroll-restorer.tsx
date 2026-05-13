"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { HEADER_ANCHOR_OFFSET_PX } from "@/lib/hooks/use-smooth-anchor";

/** After navigating to `/` with a hash (e.g. from another route), scroll to the target once it exists in the DOM. */
export function HashScrollRestorer() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const raw = window.location.hash.slice(1);
    if (!raw) return;
    const id = decodeURIComponent(raw);

    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 40;

    const tick = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - HEADER_ANCHOR_OFFSET_PX;
        window.scrollTo({ top, behavior: "smooth" });
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) {
        requestAnimationFrame(tick);
      }
    };

    const timeoutId = window.setTimeout(() => {
      requestAnimationFrame(tick);
    }, 50);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
