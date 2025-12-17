import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/types";

export function ArticleCard({ item }: { item: Article }) {
  return (
    <Link
      href={`/artikel/${item.slug}`}
      className="group overflow-hidden rounded-3xl backdrop-blur transition-colors"
      style={{
        background: "var(--gen-card-bg)",
        border: "1px solid var(--gen-border)",
      }}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span
            className="rounded-full px-2 py-1 text-xs font-semibold"
            style={{
              background: "rgba(255,255,255,.10)",
              border: "1px solid rgba(255,255,255,.18)",
              color: "rgba(255,255,255,.92)",
            }}
          >
            {item.category}
          </span>

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

        <p className="mt-2 text-sm leading-relaxed text-[color:var(--gen-fg)]/70">
          {item.excerpt}
        </p>

        <div className="mt-4 text-xs text-[color:var(--gen-fg)]/55">
          {item.author} • {item.publishedISO}
        </div>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--gen-fg)]/75 group-hover:text-[color:var(--gen-cta)]">
          Selengkapnya{" "}
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
