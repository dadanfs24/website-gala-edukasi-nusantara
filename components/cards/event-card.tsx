import Link from "next/link";
import Image from "next/image";
import type { EventItem } from "@/lib/types";
import { StatusBadge } from "@/components/ui/badge";

export function EventCard({ item }: { item: EventItem }) {
  const showOnlyDaftar = item.ctaLabel === "Daftar";

  return (
    <div
      className="overflow-hidden rounded-3xl backdrop-blur transition-colors"
      style={{
        background: "var(--gen-card-bg)",
        border: "1px solid var(--gen-border)",
      }}
    >
      <div className="relative aspect-[16/9] w-full">
        <Image src={item.cover} alt={item.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <StatusBadge status={item.status} />
          {item.isSponsored ? (
            <span
              className="rounded-full px-2 py-1 text-xs font-semibold"
              style={{
                background: "rgba(255,255,255,.10)",
                border: "1px solid rgba(255,255,255,.18)",
                color: "var(--gen-blueprint)",
              }}
            >
              Sponsored
            </span>
          ) : null}
        </div>
      </div>

      <div className="p-5">
        <div className="text-base font-extrabold tracking-tight text-[color:var(--gen-fg)]">
          {item.title}
        </div>

        <div className="mt-1 text-sm text-[color:var(--gen-fg)]/70">
          {item.organizer}
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-fg)]/60">
          <span
            className="rounded-full px-2 py-1"
            style={{
              border: "1px solid var(--gen-border)",
              background: "rgba(255,255,255,.06)",
            }}
          >
            Tanggal: {item.startISO}
          </span>
          <span
            className="rounded-full px-2 py-1"
            style={{
              border: "1px solid var(--gen-border)",
              background: "rgba(255,255,255,.06)",
            }}
          >
            Lokasi: {item.location}
          </span>
          <span
            className="rounded-full px-2 py-1"
            style={{
              border: "1px solid var(--gen-border)",
              background: "rgba(255,255,255,.06)",
            }}
          >
            Harga: {item.priceLabel}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[color:var(--gen-fg)]/70">
          {item.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {/* CASE: hanya tampilkan "Daftar" */}
          {showOnlyDaftar ? (
            item.link ? (
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "var(--gen-ink)",
                  color: "var(--gen-bg)",
                  border: "1px solid var(--gen-border)",
                }}
              >
                Daftar <span style={{ color: "var(--gen-cta)" }}>→</span>
              </Link>
            ) : null
          ) : (
            <>
              {/* Default: Lihat detail */}
              <Link
                href={`/event/${item.slug}`}
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-colors"
                style={{
                  border: "1px solid var(--gen-border)",
                  background: "transparent",
                  color: "var(--gen-fg)",
                }}
              >
                Lihat detail <span style={{ color: "var(--gen-cta)" }}>→</span>
              </Link>

              {/* Kalau ada link resmi, tampilkan tombol resmi */}
              {item.link ? (
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "var(--gen-ink)",
                    color: "var(--gen-bg)",
                    border: "1px solid var(--gen-border)",
                  }}
                >
                  Detail Resmi{" "}
                  <span style={{ color: "var(--gen-cta)" }}>→</span>
                </Link>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
