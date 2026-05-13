"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import { NAV_LINKS } from "@/lib/nav-links";
import { useSmoothAnchor } from "@/lib/hooks/use-smooth-anchor";
import { useScrollspy } from "@/lib/hooks/use-scrollspy";
import { useScrolled } from "@/lib/hooks/use-scrolled";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const scrolled = useScrolled(8);
  const handleAnchor = useSmoothAnchor();

  const sectionIds = useMemo(
    () => NAV_LINKS.map((l) => l.sectionId).filter((id): id is string => Boolean(id)),
    []
  );
  const activeSection = useScrollspy(pathname === "/" ? sectionIds : []);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  // Body scroll lock + ESC handler when mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const isActive = (link: (typeof NAV_LINKS)[number]) => {
    if (link.href.startsWith("/#")) {
      return pathname === "/" && activeSection === link.sectionId;
    }
    if (link.href === "/about") return pathname === "/about";
    return pathname === link.href;
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-gray-200/70 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-red-500/40 focus-visible:ring-offset-2"
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

        <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary">
          <LayoutGroup id="header-primary-nav">
            {NAV_LINKS.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.includes("#")) handleAnchor(link.href, e);
                  }}
                  aria-current={active ? "page" : undefined}
                  className={`relative isolate px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-red-500/40 ${
                    active ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      aria-hidden
                      className="pointer-events-none absolute inset-0 z-0 rounded-lg bg-gray-100"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </LayoutGroup>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#pricing"
            onClick={(e) => handleAnchor("/#pricing", e)}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[color:var(--color-brand)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_var(--color-brand-glow)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--color-brand-600)] hover:shadow-[0_12px_32px_-12px_var(--color-brand-glow)] active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2"
          >
            <span className="relative z-10">Start Pilot</span>
            <svg
              className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
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

        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-red-500/40"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`absolute w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute w-5 h-0.5 bg-gray-900 transition-all duration-200 ${
              isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
          />
          <span
            className={`absolute w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="md:hidden fixed inset-0 top-16 z-30 bg-gray-900/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              className="md:hidden absolute left-0 right-0 top-16 z-40 origin-top overflow-hidden border-b border-gray-200 bg-white/95 backdrop-blur-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="px-4 py-4" aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => {
                    const active = isActive(link);
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.04 }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => {
                            if (link.href.includes("#")) handleAnchor(link.href, e);
                            setIsMenuOpen(false);
                          }}
                          aria-current={active ? "page" : undefined}
                          className={`flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          {link.label}
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.li>
                    );
                  })}
                  <motion.li
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + NAV_LINKS.length * 0.04 }}
                    className="mt-2"
                  >
                    <Link
                      href="/#pricing"
                      onClick={(e) => {
                        handleAnchor("/#pricing", e);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full rounded-lg bg-[color:var(--color-brand)] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_8px_24px_-12px_var(--color-brand-glow)] hover:bg-[color:var(--color-brand-600)] transition-colors"
                    >
                      Start pilot
                    </Link>
                  </motion.li>
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
