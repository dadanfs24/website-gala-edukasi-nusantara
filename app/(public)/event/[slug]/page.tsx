import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { events } from "@/lib/data/events";
import { StatusBadge } from "@/components/ui/badge";
import { AdSlot } from "@/components/ui/ad-slot";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;

  const item = events.find((e) => e.slug === slug);
  if (!item) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/event"
        className="text-sm font-semibold text-white hover:text-[color:var(--gen-cta)]"
      >
        ← Kembali ke Event
      </Link>

      <div className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute left-5 top-5 flex items-center gap-2">
            <StatusBadge status={item.status} />
            {item.isSponsored ? (
              <span className="rounded-full border border-white/15 bg-white/[0.08] px-2 py-1 text-xs font-semibold text-[color:var(--gen-blueprint)]">
                Sponsored
              </span>
            ) : null}
          </div>
        </div>

        <div className="p-6 md:p-8">
          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            {item.title}
          </h1>

          <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">
            {item.organizer}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">
              Tanggal: {item.startISO}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">
              Lokasi: {item.location}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">
              Harga: {item.priceLabel}
            </span>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-[color:var(--gen-soft-gray)]/90">
            {item.description}
          </p>

          {item.link ? (
            <div className="mt-6">
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-[color:var(--gen-bg)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Daftar / Detail Resmi{" "}
                <span className="text-[color:var(--gen-cta)]">→</span>
              </Link>
            </div>
          ) : null}

          <div className="mt-8">
            <AdSlot
              title="Monetisasi • Webinar Kampus"
              description="Kampus bisa kolaborasi webinar + lead capture + spotlight di GEN."
              ctaLabel="Ajukan Webinar"
              href="mailto:partnership@gen.id?subject=Webinar%20Kampus%20dengan%20GEN"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
