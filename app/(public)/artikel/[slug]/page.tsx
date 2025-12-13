import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/lib/data/articles";
import { AdSlot } from "@/components/ui/ad-slot";

export default function ArtikelDetailPage({ params }: { params: { slug: string } }) {
  const item = articles.find((a) => a.slug === params.slug);
  if (!item) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      {/* BACK LINK: dibuat jadi pill biar kebaca di light */}
      <div className="mb-4">
        <Link
          href="/artikel"
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold transition-colors"
          style={{
            background: "var(--gen-card-bg)",
            border: "1px solid var(--gen-border)",
            color: "var(--gen-fg)",
          }}
        >
          ← Kembali ke Artikel
        </Link>
      </div>

      <article
        className="overflow-hidden rounded-3xl backdrop-blur transition-colors"
        style={{
          background: "var(--gen-card-bg)",
          border: "1px solid var(--gen-border)",
        }}
      >
        {/* COVER */}
        <div className="relative aspect-[16/9] w-full">
          <Image src={item.thumbnail} alt={item.title} fill className="object-cover" priority />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.12), transparent)",
            }}
          />

          <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
            <span
              className="rounded-full px-2 py-1 text-xs font-semibold"
              style={{
                background: "rgba(0,0,0,.35)",
                border: "1px solid rgba(255,255,255,.18)",
                color: "white",
              }}
            >
              {item.category}
            </span>

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

        {/* BODY */}
        <div className="p-6 md:p-8">
          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: "var(--gen-fg)" }}>
            {item.title}
          </h1>

          <div className="mt-2 text-sm" style={{ color: "color-mix(in srgb, var(--gen-fg) 70%, transparent)" }}>
            {item.author} • {item.publishedISO}
          </div>

          <p className="mt-4 text-sm leading-relaxed" style={{ color: "color-mix(in srgb, var(--gen-fg) 78%, transparent)" }}>
            {item.excerpt}
          </p>

          <div className="mt-6 whitespace-pre-line text-sm leading-relaxed" style={{ color: "color-mix(in srgb, var(--gen-fg) 82%, transparent)" }}>
            {item.content}
          </div>
        </div>
      </article>

      <div className="mt-6">
        <AdSlot
          title="Monetisasi • Artikel Promosi Berbayar"
          description="Kampus/instansi bisa pasang artikel promosi + banner + link affiliate yang relate."
          ctaLabel="Hubungi Editorial"
          href="mailto:editorial@gen.id?subject=Artikel%20Promosi%20di%20GEN"
        />
      </div>
    </div>
  );
}
