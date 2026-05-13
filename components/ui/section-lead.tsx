"use client";

import { type ReactNode } from "react";

type SectionLeadProps = {
  children: ReactNode;
  className?: string;
  centered?: boolean;
};

export function SectionLead({ children, className, centered = false }: SectionLeadProps) {
  return (
    <p
      className={[
        "mb-12 text-lg leading-relaxed text-[color:var(--section-muted)]",
        centered ? "mx-auto text-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}

export default SectionLead;
