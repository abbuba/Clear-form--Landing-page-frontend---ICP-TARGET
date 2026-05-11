"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

/** Matches sticky header height allowance for in-page anchor scroll. */
export const HEADER_ANCHOR_OFFSET_PX = 72;

export function useSmoothAnchor() {
  const pathname = usePathname();
  const router = useRouter();

  return useCallback(
    (href: string, e?: React.MouseEvent) => {
      // Only intercept hash links pointing at the current page
      if (!href.includes("#")) return;

      const [path, hash] = href.split("#");
      const targetPath = path || "/";

      if (targetPath !== pathname) {
        // Different route: let Next handle navigation, then scroll on load
        if (e) e.preventDefault();
        router.push(`${targetPath}#${hash}`);
        return;
      }

      const el = document.getElementById(hash);
      if (!el) return;

      if (e) e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_ANCHOR_OFFSET_PX;
      window.scrollTo({ top, behavior: "smooth" });
      // Update the URL without jumping
      window.history.replaceState(null, "", `#${hash}`);
    },
    [pathname, router]
  );
}
