export function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-saffron">
      <span className="font-display text-2xl leading-none">{number}</span>
      <span className="h-px w-10 bg-saffron/60" />
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em]">{children}</span>
    </div>
  );
}