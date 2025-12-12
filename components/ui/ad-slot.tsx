import Link from "next/link";

export function AdSlot({
  title = "Monetisasi",
  description = "Slot untuk banner kampus / artikel promosi / affiliate yang relevan.",
  ctaLabel = "Hubungi Kami",
  href = "mailto:partnership@gen.id?subject=Kerja%20Sama%20GEN",
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  href?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[color:var(--gen-soft-gray)]">{title}</p>
          <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">{description}</p>
        </div>
        <Link
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[color:var(--gen-bg)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          href={href}
        >
          {ctaLabel}
          <span className="text-[color:var(--gen-cta)]">→</span>
        </Link>
      </div>
    </div>
  );
}
