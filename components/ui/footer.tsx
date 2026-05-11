"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { useSmoothAnchor } from "@/lib/hooks/use-smooth-anchor";

type FooterLink = { label: string; href: string };

const productLinks: FooterLink[] = [
  { label: "How it works", href: "/#process" },
  { label: "Outcomes", href: "/#outcomes" },
  { label: "What's included", href: "/#whats-included" },
  { label: "Pricing", href: "/#pricing" },
];

const resourceLinks: FooterLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Help / FAQ", href: "/faq" },
];

const companyLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "DPA", href: "/dpa" },
];

export default function Footer({ border = false }: { border?: boolean }) {
  const handleAnchor = useSmoothAnchor();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderLink = (link: FooterLink) => (
    <li key={link.href}>
      <Link
        href={link.href}
        onClick={(e) => {
          if (link.href.includes("#")) handleAnchor(link.href, e);
        }}
        className="group relative inline-flex text-sm text-gray-600 transition-colors hover:text-gray-900"
      >
        {link.label}
        <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
      </Link>
    </li>
  );

  return (
    <footer className="relative">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8 opacity-60" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "[border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          <div className="space-y-3 sm:col-span-12 lg:col-span-4">
            <button
              onClick={scrollToTop}
              className="-ml-0.5 cursor-pointer rounded-md outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-red-500/40 focus-visible:ring-offset-2"
              aria-label="Scroll to top"
            >
              <Image
                src="/images/logowname.png"
                width={140}
                height={32}
                alt="Clearform"
                className="h-8 w-auto"
              />
            </button>
            <p className="max-w-xs text-sm leading-relaxed text-gray-600">
              Clearform helps teams collect structured, high-quality responses and turn them into clear decisions.
            </p>
            <div className="text-sm text-gray-500">© 2026 Clearform. All rights reserved.</div>
          </div>

          <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="space-y-2.5">{productLinks.map(renderLink)}</ul>
          </div>

          <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-2.5">{resourceLinks.map(renderLink)}</ul>
          </div>

          <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2.5">{companyLinks.map(renderLink)}</ul>
          </div>

          <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2.5">{legalLinks.map(renderLink)}</ul>
          </div>

          <div className="space-y-3 sm:col-span-12 lg:col-span-12">
            <h3 className="text-sm font-semibold text-gray-900">Connect</h3>
            <ul className="flex gap-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/clearforms/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Clearform on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big wordmark */}
      <div className="relative -mt-12 h-16 w-full overflow-hidden md:h-48" aria-hidden="true">
        <div
          className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center font-bold leading-none before:bg-linear-to-b before:from-gray-900 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Clearform'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Clearform'] after:[text-shadow:0_1px_0_white]"
          style={{ fontSize: "clamp(80px, 26vw, 348px)" }}
        ></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3" aria-hidden>
          <div className="h-56 w-56 rounded-full border-[20px] border-[#F94136] blur-[80px]" />
        </div>
      </div>
    </footer>
  );
}
