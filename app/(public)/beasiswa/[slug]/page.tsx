import Link from "next/link";
import { notFound } from "next/navigation";
import { scholarships } from "@/lib/data/scholarships";
import { StatusBadge } from "@/components/ui/badge";
import { AdSlot } from "@/components/ui/ad-slot";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BeasiswaDetailPage({ params }: Props) {
  const { slug } = await params;

  const item = scholarships.find((s) => s.slug === slug);
  if (!item) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      {/* Back link (fix light mode) */}
      <Link
        href="/beasiswa"
        className="text-sm font-semibold text-[color:var(--gen-fg)]/80 hover:text-[color:var(--gen-cta)]"
      >
        ← Kembali ke Beasiswa
      </Link>

      {/* Card wrapper (theme-aware) */}
      <div
        className="mt-4 rounded-3xl backdrop-blur"
        style={{
          background: "var(--gen-card-bg)",
          border: "1px solid var(--gen-border)",
        }}
      >
        <div className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-[color:var(--gen-fg)] md:text-3xl">
                {item.name}
              </h1>

              <p className="mt-1 text-sm text-[color:var(--gen-fg)]/70">
                {item.organizer}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-fg)]/70">
                <span
                  className="rounded-full px-2 py-1"
                  style={{
                    border: "1px solid var(--gen-border)",
                    background: "rgba(255,255,255,.06)",
                  }}
                >
                  Jenjang: {item.level.join(", ")}
                </span>

                <span
                  className="rounded-full px-2 py-1"
                  style={{
                    border: "1px solid var(--gen-border)",
                    background: "rgba(255,255,255,.06)",
                  }}
                >
                  Deadline: {item.deadlineISO}
                </span>
              </div>
            </div>

            <StatusBadge status={item.status} />
          </div>

          <p className="mt-5 text-sm leading-relaxed text-[color:var(--gen-fg)]/70">
            {item.description}
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div
              className="rounded-2xl p-4"
              style={{
                border: "1px solid var(--gen-border)",
                background: "rgba(255,255,255,.04)",
              }}
            >
              <div className="text-sm font-extrabold text-[color:var(--gen-fg)]">
                Benefit
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm text-[color:var(--gen-fg)]/70">
                {item.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-4"
              style={{
                border: "1px solid var(--gen-border)",
                background: "rgba(255,255,255,.04)",
              }}
            >
              <div className="text-sm font-extrabold text-[color:var(--gen-fg)]">
                Syarat Utama
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm text-[color:var(--gen-fg)]/70">
                {item.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA (theme-aware) */}
          {item.link ? (
            <div className="mt-6">
              <Link
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "var(--gen-btn-primary-bg)",
                  color: "var(--gen-btn-primary-fg)",
                  border: "1px solid var(--gen-btn-primary-border)",
                }}
              >
                Kunjungi Link Resmi{" "}
                <span style={{ color: "var(--gen-cta)" }}>→</span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-6">
        <AdSlot
          title="Monetisasi • Slot Sponsor Beasiswa"
          description="Beasiswa sponsor bisa tampil lebih atas + badge sponsored + CTA khusus."
          ctaLabel="Ajukan Sponsor"
          href="mailto:partnership@gen.id?subject=Sponsor%20Beasiswa%20GEN"
        />
      </div>
    </div>
  );
}
