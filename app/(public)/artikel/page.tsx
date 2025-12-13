import { articles } from "@/lib/data/articles";
import { ArticleCard } from "@/components/cards/article-card";
import { AdSlot } from "@/components/ui/ad-slot";

export default function ArtikelPage() {
  return (
    <div className="gen-dotbg">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gen-border)] bg-[color:var(--gen-card-bg)] px-3 py-1 text-xs font-semibold text-[color:var(--gen-fg)]/65">
            <span className="h-2 w-2 rounded-full bg-[color:var(--gen-cta)]" />
            Insight & panduan
          </div>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[color:var(--gen-fg)] md:text-4xl">
            Artikel
          </h1>

          <p className="mt-2 text-sm leading-relaxed text-[color:var(--gen-fg)]/70">
            Card preview: judul, thumbnail, excerpt, penulis, dan CTA. Termasuk kategori & artikel terkait.
          </p>
        </div>

        {/* List */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((item) => (
            <ArticleCard key={item.slug} item={item} />
          ))}
        </div>

        {/* Ad */}
        <div className="mt-8 rounded-3xl border border-[color:var(--gen-border)] bg-[color:var(--gen-card-bg)] p-4 backdrop-blur md:p-6">
          <AdSlot
            title="Monetisasi • Artikel Promosi Berbayar"
            description="Kampus/instansi bisa pasang artikel promosi + banner + link affiliate yang relate."
            ctaLabel="Hubungi Editorial"
            href="mailto:editorial@gen.id?subject=Artikel%20Promosi%20di%20GEN"
          />
        </div>
      </div>
    </div>
  );
}
