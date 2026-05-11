"use client";

import { type ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
  centered?: boolean;
  id?: string;
};

export function SectionHeading({ children, className, centered = false, id }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={[
        "mb-6 text-3xl font-extrabold leading-tight tracking-tight text-[color:var(--section-title)] sm:text-4xl md:text-5xl",
        centered ? "mx-auto text-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
