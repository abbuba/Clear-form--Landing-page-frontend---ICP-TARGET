"use client";

import Link from "next/link";
import Image from "next/image";
import { useSmoothAnchor } from "@/lib/hooks/use-smooth-anchor";
import { useScrolled } from "@/lib/hooks/use-scrolled";

export default function Header() {
  const scrolled = useScrolled(8);
  const handleAnchor = useSmoothAnchor();

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-gray-200/70 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-red-500/40 focus-visible:ring-offset-2"
          aria-label="Clearform — Home"
        >
          <Image
            src="/images/logowname.png"
            alt="Clearform"
            width={132}
            height={32}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <Link
          href="/#pricing"
          onClick={(e) => handleAnchor("/#pricing", e)}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[color:var(--color-brand)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_var(--color-brand-glow)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--color-brand-600)] hover:shadow-[0_12px_32px_-12px_var(--color-brand-glow)] active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2"
        >
          <span className="relative z-10">Start Pilot</span>
          <svg
            className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        </Link>
      </div>
    </header>
  );
}
