import Link from "next/link";

export function AdSlot({
  title,
  description,
  ctaLabel,
  href,
}: {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <div
      className="rounded-3xl p-5 backdrop-blur md:p-6"
      style={{
        background: "var(--gen-card-bg)",
        border: "1px solid var(--gen-border)",
      }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-extrabold text-[color:var(--gen-fg)]">
            {title}
          </div>
          <div className="mt-1 text-sm text-[color:var(--gen-fg)]/70">
            {description}
          </div>
        </div>

        <Link
          href={href}
          className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: "var(--gen-fg)",
            color: "var(--gen-bg)",
            border: "1px solid var(--gen-border)",
          }}
        >
          {ctaLabel} <span style={{ color: "var(--gen-cta)" }}>→</span>
        </Link>
      </div>
    </div>
  );
}
