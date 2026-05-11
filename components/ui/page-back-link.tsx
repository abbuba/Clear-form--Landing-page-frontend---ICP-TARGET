import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function PageBackLink({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Back to home" className={className}>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-gray-600 outline-none transition-colors hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-red-500/40"
      >
        <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
        Back to home
      </Link>
    </nav>
  );
}
