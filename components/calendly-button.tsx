'use client';

import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

interface CalendlyButtonProps {
  className?: string;
  children?: React.ReactNode;
  redirectTo?: string;
}

const CALENDLY_URL = 'https://calendly.com/rahulpandey187/enterprise-mcp-setup-call-free-30-min';

export default function CalendlyButton({
  className,
  children,
  redirectTo = '/call-scheduled',
}: CalendlyButtonProps) {
  const router = useRouter();

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_scheduled') {
        router.push(redirectTo);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [router, redirectTo]);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <button onClick={openCalendly} className={className}>
        {children ?? 'Book a demo'}
      </button>
    </>
  );
}
