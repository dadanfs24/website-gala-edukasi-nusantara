import Link from "next/link";
import { Scholarship } from "@/lib/types";
import { StatusBadge } from "@/components/ui/badge";

export function ScholarshipCard({ item }: { item: Scholarship }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-extrabold tracking-tight">{item.name}</h3>
            {item.isSponsored ? (
              <span className="rounded-full border border-white/15 bg-white/[0.06] px-2 py-0.5 text-[11px] font-semibold text-[color:var(--gen-soft-gray)]">
                Sponsored
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">{item.organizer}</p>
        </div>
        <StatusBadge status={item.status} />
      </div>

      <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">
          Jenjang: {item.level.join(", ")}
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">
          Deadline: {item.deadlineISO}
        </span>
      </div>

      <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--gen-soft-gray)]/90">
        {item.benefits.slice(0, 3).map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="mt-4">
        <Link
          href={`/beasiswa/${item.slug}`}
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[color:var(--gen-bg)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Lihat Detail <span className="text-[color:var(--gen-cta)]">→</span>
        </Link>
      </div>
    </div>
  );
}
