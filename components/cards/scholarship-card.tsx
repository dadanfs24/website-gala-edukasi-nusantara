import Link from "next/link";
import type { Scholarship } from "@/lib/types";
import { StatusBadge } from "@/components/ui/badge";

export function ScholarshipCard({ item }: { item: Scholarship }) {
  return (
    <div
      className="rounded-3xl p-6 backdrop-blur transition-colors"
      style={{
        background: "var(--gen-card-bg)",
        border: "1px solid var(--gen-border)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-base font-extrabold tracking-tight text-[color:var(--gen-fg)]">
            {item.name}
          </div>
          <div className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">
            {item.organizer}
          </div>
        </div>

        <StatusBadge status={item.status} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
        <span
          className="rounded-full px-2.5 py-1"
          style={{
            background: "var(--gen-pill-bg)",
            border: "1px solid var(--gen-pill-border)",
          }}
        >
          Jenjang: {item.level.join(", ")}
        </span>

        <span
          className="rounded-full px-2.5 py-1"
          style={{
            background: "var(--gen-pill-bg)",
            border: "1px solid var(--gen-pill-border)",
          }}
        >
          Deadline: {item.deadlineISO}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[color:var(--gen-soft-gray)]/90">
        {item.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3">
      <Link
  href={`/beasiswa/${item.slug}`}
  className="text-sm font-semibold text-[color:var(--gen-link-fg)] hover:text-[color:var(--gen-cta)]"
>
  Lihat Detail →
</Link>


        <Link
          href={`/beasiswa/${item.slug}`}
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: "var(--gen-btn-primary-bg)",
            color: "var(--gen-btn-primary-fg)",
            border: "1px solid var(--gen-ad-btn-border)",
          }}
        >
          Detail <span style={{ color: "var(--gen-cta)" }}>→</span>
        </Link>
      </div>
    </div>
  );
}
