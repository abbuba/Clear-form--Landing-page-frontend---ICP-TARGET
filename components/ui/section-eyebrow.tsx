"use client";

type SectionEyebrowProps = {
  children: string;
  className?: string;
  centered?: boolean;
};

export function SectionEyebrow({ children, className, centered = false }: SectionEyebrowProps) {
  return (
    <p
      className={[
        "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--section-eyebrow)]",
        centered ? "mx-auto justify-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="h-px w-6 bg-[color:var(--color-brand-500)]" />
      {children}
    </p>
  );
}

export default SectionEyebrow;
