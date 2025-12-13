import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/data/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ArtikelDetailPage({ params }: Props) {
  const { slug } = await params;

  const item = articles.find((a) => a.slug === slug);
  if (!item) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/artikel"
        className="text-sm font-semibold hover:opacity-80"
        style={{ color: "var(--gen-fg)" }}
      >
        ← Kembali ke Artikel
      </Link>

      {/* ...lanjutkan layout detail artikel kamu... */}
      <h1 className="mt-4 text-2xl font-extrabold tracking-tight" style={{ color: "var(--gen-fg)" }}>
        {item.title}
      </h1>
    </div>
  );
}
