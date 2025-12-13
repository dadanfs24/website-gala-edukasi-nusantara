import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { events } from "@/lib/data/events";
import { StatusBadge } from "@/components/ui/badge";
import { AdSlot } from "@/components/ui/ad-slot";
import type { EventItem } from "@/lib/types";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;

  const item = events.find((e: EventItem) => e.slug === slug);
  if (!item) return notFound();

  return (
    <div className="gen-dotbg">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {/* Back */}
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

        <article
          className="overflow-hidden rounded-3xl backdrop-blur transition-colors"
          style={{
            background: "var(--gen-card-bg)",
            border: "1px solid var(--gen-border)",
          }}
        >
          {/* Cover */}
          <div className="relative aspect-[16/9] w-full">
            <Image src={item.cover} alt={item.title} fill className="object-cover" priority />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.12), transparent)",
              }}
            />

            <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
              <StatusBadge status={item.status} />
              {item.isSponsored ? (
                <span
                  className="rounded-full px-2 py-1 text-xs font-semibold"
                  style={{
                    background: "rgba(0,0,0,.35)",
                    border: "1px solid rgba(255,255,255,.18)",
                    color: "var(--gen-blueprint)",
                  }}
                >
                  Sponsored
                </span>
              ) : null}
            </div>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8">
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: "var(--gen-fg)" }}>
              {item.title}
            </h1>

            <div className="mt-2 text-sm" style={{ color: "color-mix(in srgb, var(--gen-fg) 70%, transparent)" }}>
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
                    background: "color-mix(in srgb, var(--gen-card-bg) 75%, transparent)",
                    color: "color-mix(in srgb, var(--gen-fg) 72%, transparent)",
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
              {item.link && item.ctaLabel === "Daftar" ? (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "var(--gen-btn-primary-bg)",
                    color: "var(--gen-btn-primary-fg)",
                    border: "1px solid var(--gen-btn-primary-border)",
                  }}
                >
                  Daftar <span style={{ color: "var(--gen-cta)" }}>→</span>
                </Link>
              ) : null}

              {/* selain itu: Lihat Detail ke halaman ini (biasanya event tanpa link) */}
              {item.ctaLabel === "Lihat Detail" ? (
                <div
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold"
                  style={{
                    border: "1px solid var(--gen-border)",
                    background: "transparent",
                    color: "var(--gen-fg)",
                  }}
                >
                  Lihat Detail <span style={{ color: "var(--gen-cta)" }}>→</span>
                </div>
              ) : null}
            </div>
          </div>
        </article>

        <div className="mt-6">
          <AdSlot
            title="Monetisasi • Promosi Event"
            description="Promosikan tryout/webinar kampus kamu di GEN (banner + listing + CTA daftar)."
            ctaLabel="Promosikan Event"
            href="mailto:partnership@gen.id?subject=Promosi%20Event%20di%20GEN"
          />
        </div>
      </div>
    </div>
  );
}
