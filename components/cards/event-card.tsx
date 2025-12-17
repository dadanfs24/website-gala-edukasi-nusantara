import Link from "next/link";
import Image from "next/image";
import type { EventItem } from "@/lib/types";
import { StatusBadge } from "@/components/ui/badge";

export function EventCard({ item }: { item: EventItem }) {
  const showOnlyDaftar = item.ctaLabel === "Daftar";

  const chipStyle = {
    border: "1px solid var(--gen-border)",
    background: "rgba(255,255,255,.06)",
  } as const;

  const btnPrimary = {
    background: "var(--gen-btn-primary-bg)",
    color: "var(--gen-btn-primary-fg)",
    border: "1px solid var(--gen-btn-primary-border)",
  } as const;

  const btnGhost = {
    background: "var(--gen-btn-ghost-bg)",
    color: "var(--gen-btn-ghost-fg)",
    border: "1px solid var(--gen-btn-ghost-border)",
  } as const;

  const clamp2 = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical" as const,
    overflow: "hidden",
  };

  const clamp3 = {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical" as const,
    overflow: "hidden",
  };

  return (
    <div
      className="group flex h-full min-h-[540px] flex-col overflow-hidden rounded-3xl backdrop-blur transition-colors"
      style={{
        background: "var(--gen-card-bg)",
        border: "1px solid var(--gen-border)",
      }}
    >
      {/* COVER */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={item.cover}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
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

      {/* BODY */}
      <div className="flex flex-1 flex-col p-5">
        <div
          className="text-base font-extrabold tracking-tight text-[color:var(--gen-fg)]"
          style={clamp2}
          title={item.title}
        >
          {item.title}
        </div>

        <div
          className="mt-1 text-sm text-[color:var(--gen-fg)]/70"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          title={item.organizer}
        >
          {item.organizer}
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-fg)]/60">
          <span className="rounded-full px-2 py-1" style={chipStyle}>
            Tanggal: {item.startISO}
          </span>
          <span className="rounded-full px-2 py-1" style={chipStyle}>
            Lokasi: {item.location}
          </span>
          <span className="rounded-full px-2 py-1" style={chipStyle}>
            Harga: {item.priceLabel}
          </span>
        </div>

        <p
          className="mt-3 text-sm leading-relaxed text-[color:var(--gen-fg)]/70"
          style={clamp3}
        >
          {item.description}
        </p>

        {/* CTA (dipaku bawah biar tinggi card rata) */}
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-3">
            {/* CASE: hanya tampilkan "Daftar" */}
            {showOnlyDaftar ? (
              item.link ? (
                <Link
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  style={btnPrimary}
                >
                  Daftar <span style={{ color: "var(--gen-cta)" }}>→</span>
                </Link>
              ) : null
            ) : (
              <>
                <Link
                  href={`/event/${item.slug}`}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  style={btnGhost}
                >
                  Lihat detail <span style={{ color: "var(--gen-cta)" }}>→</span>
                </Link>

                {item.link ? (
                  <Link
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    style={btnPrimary}
                  >
                    Detail Resmi <span style={{ color: "var(--gen-cta)" }}>→</span>
                  </Link>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
