import { articles } from "@/lib/data/articles";
import { ArticleCard } from "@/components/cards/article-card";
import { AdSlot } from "@/components/ui/ad-slot";

export default function ArtikelPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Artikel</h1>
        <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">
          Card preview: judul, thumbnail, excerpt, penulis, dan CTA. Termasuk kategori & artikel terkait.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((item) => (
          <ArticleCard key={item.slug} item={item} />
        ))}
      </div>

      <div className="mt-8">
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
