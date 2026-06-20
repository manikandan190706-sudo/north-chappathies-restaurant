export function Motif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <line x1="0" y1="12" x2="86" y2="12" />
      <line x1="134" y1="12" x2="220" y2="12" />
      {/* center: chili + leaf motif */}
      <path d="M104 12c2-5 8-7 12-2 1 4-2 7-6 8-3 1-5-2-6-6z" />
      <path d="M110 18c1 2 3 3 5 3" strokeLinecap="round" />
      <circle cx="118" cy="6" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function MotifDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center text-saffron/70 ${className}`}>
      <Motif className="h-5 w-44" />
    </div>
  );
}