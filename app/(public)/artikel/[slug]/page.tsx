import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/lib/data/articles";
import { AdSlot } from "@/components/ui/ad-slot";

type Props = {
  params: Promise<{ slug: string }>;
};

// penting: biar slug artikel auto ke-detect waktu build
export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArtikelDetailPage({ params }: Props) {
  const { slug } = await params;

  const item = articles.find((a) => a.slug === slug);
  if (!item) return notFound();

  return (
    <div className="gen-dotbg">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {/* Back */}
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
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,.62), rgba(0,0,0,.16), transparent)",
              }}
            />

            <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 sm:left-5 sm:top-5">
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
          <div className="p-6 md:p-10">
            <h1
              className="text-2xl font-extrabold tracking-tight md:text-4xl"
              style={{ color: "var(--gen-fg)" }}
            >
              {item.title}
            </h1>

            {/* meta chips */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <MetaChip>✍️ {item.author}</MetaChip>
              <MetaChip>🗓️ {item.publishedISO}</MetaChip>

              <span
                className="rounded-full px-3 py-1 font-semibold"
                style={{
                  background: "color-mix(in srgb, var(--gen-cta) 14%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--gen-cta) 30%, transparent)",
                  color: "var(--gen-fg)",
                }}
              >
                🧭 {item.category}
              </span>

              <MetaChip>⏱️ {estimateReadingTime(item.content)}</MetaChip>
            </div>

            {/* excerpt */}
            <p
              className="mt-5 text-[15px] leading-relaxed md:text-base"
              style={{
                color: "color-mix(in srgb, var(--gen-fg) 78%, transparent)",
              }}
            >
              {item.excerpt}
            </p>

            {/* content */}
            <ArticleBody content={item.content} />
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
    </div>
  );
}

/* ========= helpers (ikut gaya file kamu) ========= */

function MetaChip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full px-3 py-1 font-semibold"
      style={{
        background: "color-mix(in srgb, var(--gen-card-bg) 70%, transparent)",
        border: "1px solid var(--gen-border)",
        color: "color-mix(in srgb, var(--gen-fg) 80%, transparent)",
      }}
    >
      {children}
    </span>
  );
}

function estimateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 180));
  return `${minutes} menit baca`;
}

/**
 * Parser ringan:
 * - support "## Judul" / "### Subjudul"
 * - support bullet "- item" atau "• item"
 * - support callout yang mulai dengan "✨" atau "👉"
 * - kalau konten lama (tanpa ##) → pakai heuristik "Langkah / Kenapa / Peran / Kesalahan / Kamu Boleh / Saatnya"
 */
function ArticleBody({ content }: { content: string }) {
  const lines = content.split("\n").map((l) => l.trim());

  type Block =
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "callout"; lines: string[] };

  const blocks: Block[] = [];
  let list: string[] = [];
  let para: string[] = [];
  let callout: string[] | null = null;

  const flushPara = () => {
    const t = para.join(" ").trim();
    if (t) blocks.push({ type: "p", text: t });
    para = [];
  };
  const flushList = () => {
    if (list.length) blocks.push({ type: "ul", items: list });
    list = [];
  };
  const flushCallout = () => {
    if (callout && callout.length) blocks.push({ type: "callout", lines: callout });
    callout = null;
  };

  const heuristicH2 = (t: string) =>
    /:$/.test(t) ||
    t.startsWith("Kenapa ") ||
    t.startsWith("Langkah ") ||
    t.startsWith("Peran ") ||
    t.startsWith("Kesalahan ") ||
    t.startsWith("Kamu Boleh ") ||
    t.startsWith("Saatnya ");

  const heuristicH3 = (t: string) =>
    t.startsWith("Beberapa pertanyaan") ||
    t.startsWith("Pertimbangkan") ||
    t.startsWith("Cek hal-hal") ||
    t.startsWith("Tanyakan pada") ||
    t.startsWith("Komunikasikan");

  for (const t of lines) {
    if (!t) {
      flushPara();
      flushList();
      flushCallout();
      continue;
    }

    // callout
    if (t.startsWith("✨") || t.startsWith("👉")) {
      flushPara();
      flushList();
      if (!callout) callout = [];
      callout.push(t);
      continue;
    }
    if (callout) {
      callout.push(t);
      continue;
    }

    // markdown headings
    if (t.startsWith("## ")) {
      flushPara();
      flushList();
      blocks.push({ type: "h2", text: t.replace(/^##\s+/, "") });
      continue;
    }
    if (t.startsWith("### ")) {
      flushPara();
      flushList();
      blocks.push({ type: "h3", text: t.replace(/^###\s+/, "") });
      continue;
    }

    // bullets
    if (t.startsWith("- ") || t.startsWith("• ")) {
      flushPara();
      list.push(t.replace(/^(-|•)\s+/, ""));
      continue;
    }

    // fallback headings (konten lama)
    if (heuristicH2(t)) {
      flushPara();
      flushList();
      blocks.push({ type: "h2", text: t.replace(/:$/, "") });
      continue;
    }
    if (heuristicH3(t)) {
      flushPara();
      flushList();
      blocks.push({ type: "h3", text: t.replace(/:$/, "") });
      continue;
    }

    // paragraph (join biar rapih)
    flushList();
    para.push(t);
  }

  flushPara();
  flushList();
  flushCallout();

  return (
    <div className="mt-8 space-y-5">
      {blocks.map((b, idx) => {
        if (b.type === "h2") {
          return (
            <div key={idx} className="pt-3">
              <h2
                className="text-lg font-extrabold tracking-tight md:text-xl"
                style={{ color: "var(--gen-fg)" }}
              >
                {b.text}
              </h2>
              <div
                className="mt-3 h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg, color-mix(in srgb, var(--gen-cta) 55%, transparent), transparent)",
                }}
              />
            </div>
          );
        }

        if (b.type === "h3") {
          return (
            <h3
              key={idx}
              className="text-[15px] font-extrabold md:text-base"
              style={{
                color: "color-mix(in srgb, var(--gen-fg) 92%, transparent)",
              }}
            >
              {b.text}
            </h3>
          );
        }

        if (b.type === "ul") {
          return (
            <ul key={idx} className="grid gap-2">
              {b.items.map((it, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-2xl px-4 py-3"
                  style={{
                    background: "color-mix(in srgb, var(--gen-card-bg) 72%, transparent)",
                    border: "1px solid var(--gen-border)",
                  }}
                >
                  <span
                    className="mt-1 inline-flex h-2 w-2 flex-none rounded-full"
                    style={{ background: "var(--gen-cta)" }}
                  />
                  <span
                    className="text-[15px] leading-relaxed md:text-base"
                    style={{
                      color: "color-mix(in srgb, var(--gen-fg) 82%, transparent)",
                    }}
                  >
                    {it}
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        if (b.type === "callout") {
          return (
            <div
              key={idx}
              className="rounded-3xl p-5 md:p-6"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--gen-cta) 14%, transparent), color-mix(in srgb, var(--gen-feature) 10%, transparent))",
                border: "1px solid var(--gen-border)",
              }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background: "color-mix(in srgb, var(--gen-card-bg) 70%, transparent)",
                  border: "1px solid var(--gen-border)",
                  color: "var(--gen-fg)",
                }}
              >
                ✨ Catatan GEN
              </div>

              <div className="mt-4 grid gap-2">
                {b.lines.map((t, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-relaxed md:text-base"
                    style={{
                      color: "color-mix(in srgb, var(--gen-fg) 84%, transparent)",
                    }}
                  >
                    {t}
                  </p>
                ))}
              </div>
            </div>
          );
        }

        return (
          <p
            key={idx}
            className="text-[15px] leading-[1.85] md:text-base"
            style={{ color: "color-mix(in srgb, var(--gen-fg) 82%, transparent)" }}
          >
            {b.text}
          </p>
        );
      })}
    </div>
  );
}
