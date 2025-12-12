import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/lib/data/articles";
import { AdSlot } from "@/components/ui/ad-slot";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ArtikelDetailPage({ params }: Props) {
  const { slug } = await params;

  const item = articles.find((a) => a.slug === slug);
  if (!item) return notFound();

  const related = articles.filter((a) => a.slug !== item.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/artikel"
        className="text-sm font-semibold text-white hover:text-[color:var(--gen-cta)]"
      >
        ← Kembali ke Artikel
      </Link>

      <div className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className="rounded-full border border-white/15 bg-white/[0.08] px-2 py-1 text-xs font-semibold text-white">
              {item.category}
            </span>

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

          <div className="mt-2 text-xs text-[color:var(--gen-cool-gray)]">
            {item.author} • {item.publishedISO}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[color:var(--gen-soft-gray)]/90">
            {item.content}
          </p>

          <div className="mt-6">
            <AdSlot
              title="Affiliate • Produk yang Relevan"
              description="Slot untuk affiliate: buku, kursus, aplikasi belajar, dan perlengkapan sekolah."
              ctaLabel="Pasang Affiliate"
              href="mailto:partnership@gen.id?subject=Affiliate%20di%20GEN"
            />
          </div>

          <div className="mt-8">
            <div className="text-sm font-extrabold">Artikel terkait</div>
            <div className="mt-3 grid gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/artikel/${r.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06]"
                >
                  <div className="text-sm font-bold">{r.title}</div>
                  <div className="mt-1 text-xs text-[color:var(--gen-soft-gray)]/90">
                    {r.excerpt}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
