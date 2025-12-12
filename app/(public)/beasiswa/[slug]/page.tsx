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
      <Link
        href="/beasiswa"
        className="text-sm font-semibold text-white hover:text-[color:var(--gen-cta)]"
      >
        ← Kembali ke Beasiswa
      </Link>

      <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              {item.name}
            </h1>
            <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">
              {item.organizer}
            </p>

            <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">
                Jenjang: {item.level.join(", ")}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">
                Deadline: {item.deadlineISO}
              </span>
            </div>
          </div>

          <StatusBadge status={item.status} />
        </div>

        <p className="mt-5 text-sm leading-relaxed text-[color:var(--gen-soft-gray)]/90">
          {item.description}
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-extrabold">Benefit</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-[color:var(--gen-soft-gray)]/90">
              {item.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-extrabold">Syarat Utama</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-[color:var(--gen-soft-gray)]/90">
              {item.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        {item.link ? (
          <div className="mt-6">
            <Link
              href={item.link}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-[color:var(--gen-bg)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Kunjungi Link Resmi{" "}
              <span className="text-[color:var(--gen-cta)]">→</span>
            </Link>
          </div>
        ) : null}
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
