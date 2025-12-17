"use client";

import { useEffect, useRef, useState } from "react";
import type { Article } from "@/lib/types";
import { ArticleCard } from "@/components/cards/article-card";

export function ArticleCarousel({
  items,
  intervalMs = 10000,
}: {
  items: Article[];
  intervalMs?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = items.length;

  const scrollToIndex = (idx: number, behavior: ScrollBehavior = "smooth") => {
    const el = scrollerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const target = children[idx];
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft, behavior });
    setActive(idx);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(el.children) as HTMLElement[];
        if (!children.length) return;

        const left = el.scrollLeft;
        let bestIdx = 0;
        let bestDist = Number.POSITIVE_INFINITY;

        for (let i = 0; i < children.length; i++) {
          const dist = Math.abs(children[i].offsetLeft - left);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = i;
          }
        }
        setActive(bestIdx);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!count || paused) return;

    const id = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      const next = (active + 1) % count;
      scrollToIndex(next, "smooth");
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [active, count, intervalMs, paused]);

  if (!count) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* arrows */}
      <button
        type="button"
        onClick={() => scrollToIndex((active - 1 + count) % count)}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-2xl px-3 py-2 text-sm font-semibold backdrop-blur"
        style={{
          background: "color-mix(in srgb, var(--gen-card-bg) 75%, transparent)",
          border: "1px solid var(--gen-border)",
          color: "var(--gen-fg)",
        }}
        aria-label="Sebelumnya"
      >
        ←
      </button>

      <button
        type="button"
        onClick={() => scrollToIndex((active + 1) % count)}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-2xl px-3 py-2 text-sm font-semibold backdrop-blur"
        style={{
          background: "color-mix(in srgb, var(--gen-card-bg) 75%, transparent)",
          border: "1px solid var(--gen-border)",
          color: "var(--gen-fg)",
        }}
        aria-label="Berikutnya"
      >
        →
      </button>

      {/* scroller */}
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-10 pb-2"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {items.map((item) => (
          <div
            key={item.slug}
            className="snap-start"
            style={{ width: "min(420px, 86vw)", flex: "0 0 auto" }}
          >
            <ArticleCard item={item} />
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            className="h-2.5 w-2.5 rounded-full transition-transform"
            style={{
              background:
                i === active
                  ? "var(--gen-cta)"
                  : "color-mix(in srgb, var(--gen-fg) 25%, transparent)",
              transform: i === active ? "scale(1.15)" : "scale(1)",
            }}
            aria-label={`Buka artikel ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
