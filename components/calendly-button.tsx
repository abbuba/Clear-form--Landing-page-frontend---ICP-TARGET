'use client';

interface CalendlyButtonProps {
  className?: string;
  children?: React.ReactNode;
  redirectTo?: string;
}

const CAL_URL = 'https://cal.com/abbubakar-mohammed-clearform/30min';

export default function CalendlyButton({
  className,
  children,
}: CalendlyButtonProps) {
  const openCal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(CAL_URL, '_blank');
  };

  return (
    <button onClick={openCal} className={className}>
      {children ?? 'Book a demo'}
    </button>
  );
}
