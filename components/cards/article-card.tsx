import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/types";

export function ArticleCard({ item }: { item: Article }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur">
      <div className="relative aspect-[16/9] w-full">
        <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
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

      <div className="p-5">
        <h3 className="text-base font-extrabold tracking-tight">{item.title}</h3>
        <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">{item.excerpt}</p>
        <div className="mt-3 text-xs text-[color:var(--gen-cool-gray)]">
          {item.author} • {item.publishedISO}
        </div>

        <div className="mt-4">
          <Link href={`/artikel/${item.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[color:var(--gen-cta)]">
            Selengkapnya <span className="text-[color:var(--gen-cta)]">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
