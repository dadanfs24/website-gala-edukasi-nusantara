import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { events } from "@/lib/data/events";
import { StatusBadge } from "@/components/ui/badge";

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const item = events.find((e) => e.slug === params.slug);
  if (!item) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      {/* BACK LINK: biar kebaca di light */}
      <div className="mb-4">
        <Link
          href="/event"
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold transition-colors"
          style={{
            background: "var(--gen-card-bg)",
            border: "1px solid var(--gen-border)",
            color: "var(--gen-fg)",
          }}
        >
          ← Kembali ke Event
        </Link>
      </div>

      <section
        className="overflow-hidden rounded-3xl backdrop-blur transition-colors"
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
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.12), transparent)",
            }}
          />

          {/* badges */}
          <div className="absolute left-5 top-5 flex items-center gap-2">
            <StatusBadge status={item.status} />
            {item.isSponsored ? (
              <span
                className="rounded-full px-2 py-1 text-xs font-semibold"
                style={{
                  background: "rgba(0,0,0,.30)",
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
        <div className="p-6 md:p-8">
          <h1
            className="text-2xl font-extrabold tracking-tight md:text-3xl"
            style={{ color: "var(--gen-fg)" }}
          >
            {item.title}
          </h1>

          <div
            className="mt-2 text-sm"
            style={{ color: "color-mix(in srgb, var(--gen-fg) 70%, transparent)" }}
          >
            {item.organizer}
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {[
              `Tanggal: ${item.startISO}`,
              `Lokasi: ${item.location}`,
              `Harga: ${item.priceLabel}`,
            ].map((t) => (
              <span
                key={t}
                className="rounded-full px-2 py-1"
                style={{
                  border: "1px solid var(--gen-border)",
                  background: "rgba(255,255,255,.06)",
                  color: "color-mix(in srgb, var(--gen-fg) 70%, transparent)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <p
            className="mt-4 text-sm leading-relaxed"
            style={{ color: "color-mix(in srgb, var(--gen-fg) 78%, transparent)" }}
          >
            {item.description}
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap gap-3">
            {/* kalau ctaLabel = "Daftar" dan ada link -> tampilkan tombol daftar */}
            {item.link ? (
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "var(--gen-fg)",
                  color: "var(--gen-bg)",
                  border: "1px solid var(--gen-border)",
                }}
              >
                Daftar <span style={{ color: "var(--gen-cta)" }}>→</span>
              </Link>
            ) : null}

            {/* tombol detail (internal) */}
            <Link
              href="/event"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-colors"
              style={{
                border: "1px solid var(--gen-border)",
                background: "transparent",
                color: "var(--gen-fg)",
              }}
            >
              Lihat event lain <span style={{ color: "var(--gen-cta)" }}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
