"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { EventItem } from "@/lib/types";
import { EventCard } from "@/components/cards/event-card";

type Props = {
  items: EventItem[];
  intervalMs?: number; // default 10000
};

export function EventCarousel({ items, intervalMs = 10000 }: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = items.length;

  const getStep = () => {
    const el = wrapRef.current;
    if (!el) return 0;

    const first = el.children.item(0) as HTMLElement | null;
    if (!first) return 0;

    const firstW = first.getBoundingClientRect().width;
    const gapStr = getComputedStyle(el).gap || getComputedStyle(el).columnGap || "0px";
    const gap = Number.parseFloat(gapStr) || 0;

    return firstW + gap;
  };

  const scrollToIndex = (idx: number) => {
    const el = wrapRef.current;
    if (!el) return;

    const step = getStep();
    if (!step) return;

    el.scrollTo({
      left: idx * step,
      behavior: "smooth",
    });
  };

  const clamp = (n: number) => {
    if (count <= 0) return 0;
    return (n + count) % count;
  };

  const next = () => scrollToIndex(clamp(active + 1));
  const prev = () => scrollToIndex(clamp(active - 1));

  // update active berdasarkan scroll posisi
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onScroll = () => {
      const step = getStep();
      if (!step) return;
      const idx = Math.round(el.scrollLeft / step);
      setActive(clamp(idx));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  // auto slide
  useEffect(() => {
    if (paused) return;
    if (count <= 1) return;

    const t = window.setInterval(() => {
      setActive((cur) => {
        const n = clamp(cur + 1);
        scrollToIndex(n);
        return n;
      });
    }, intervalMs);

    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, count, intervalMs]);

  const dots = useMemo(() => Array.from({ length: count }), [count]);

  if (!items.length) return null;

  return (
    <div
      className="mt-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Track */}
      <div
        ref={wrapRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((item) => (
          <div
            key={item.slug}
            style={{
              width: "min(420px, 86vw)",
              flex: "0 0 auto",
              scrollSnapAlign: "start",
            }}
          >
            <EventCard item={item} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-2xl px-4 py-2 text-sm font-semibold transition-transform active:scale-[0.98]"
            style={{
              background: "var(--gen-btn-ghost-bg)",
              color: "var(--gen-btn-ghost-fg)",
              border: "1px solid var(--gen-btn-ghost-border)",
            }}
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-2xl px-4 py-2 text-sm font-semibold transition-transform active:scale-[0.98]"
            style={{
              background: "var(--gen-btn-primary-bg)",
              color: "var(--gen-btn-primary-fg)",
              border: "1px solid var(--gen-btn-primary-border)",
            }}
          >
            →
          </button>

          <span
            className="ml-2 text-xs"
            style={{ color: "color-mix(in srgb, var(--gen-fg) 65%, transparent)" }}
          >
            Auto: {Math.round(intervalMs / 1000)}s • {paused ? "pause" : "jalan"}
          </span>
        </div>

        {/* Dots */}
        <div className="flex flex-wrap items-center justify-end gap-2">
          {dots.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className="h-2.5 w-2.5 rounded-full transition-transform active:scale-95"
              style={{
                background:
                  i === active
                    ? "var(--gen-cta)"
                    : "color-mix(in srgb, var(--gen-fg) 25%, transparent)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
