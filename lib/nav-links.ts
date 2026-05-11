export type NavLink = {
  href: string;
  label: string;
  /** Section id this link maps to, used for scrollspy on the home route. */
  sectionId?: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/#process", label: "How it works", sectionId: "process" },
  { href: "/#pricing", label: "Pricing", sectionId: "pricing" },
  { href: "/#whats-included", label: "What's included", sectionId: "whats-included" },
  { href: "/about", label: "About" },
];
