import Link from "next/link";
import Image from "next/image";
import { EventItem } from "@/lib/types";
import { StatusBadge } from "@/components/ui/badge";

export function EventCard({ item }: { item: EventItem }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur">
      <div className="relative aspect-[16/9] w-full">
        <Image src={item.cover} alt={item.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <StatusBadge status={item.status} />
          {item.isSponsored ? (
            <span className="rounded-full border border-white/15 bg-white/[0.08] px-2 py-1 text-xs font-semibold text-[color:var(--gen-blueprint)]">
              Sponsored
            </span>
          ) : null}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-extrabold tracking-tight">{item.title}</h3>
        <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">{item.organizer}</p>

        <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">Tanggal: {item.startISO}</span>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">Lokasi: {item.location}</span>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">Harga: {item.priceLabel}</span>
        </div>

        <div className="mt-4">
          <Link
            href={`/event/${item.slug}`}
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[color:var(--gen-bg)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {item.ctaLabel} <span className="text-[color:var(--gen-cta)]">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
