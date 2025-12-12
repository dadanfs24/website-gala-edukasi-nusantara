import Link from "next/link";
import { notFound } from "next/navigation";
import { campuses } from "@/lib/data/campuses";
import { AdSlot } from "@/components/ui/ad-slot";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CampusFreePage({ params }: Props) {
  const { slug } = await params;

  const campus = campuses.find((c) => c.slug === slug);
  if (!campus) return notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link
        href="/dashboard/kampus"
        className="text-sm font-semibold text-white hover:text-[color:var(--gen-cta)]"
      >
        ← Kembali ke Dashboard Kampus
      </Link>

      <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              {campus.name}
            </h1>
            <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">
              {campus.city}, {campus.province}
            </p>
            <p className="mt-4 text-sm text-[color:var(--gen-soft-gray)]/90">
              {campus.highlight}
            </p>
          </div>

          <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-[color:var(--gen-soft-gray)]">
            Free Profile
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-extrabold">Informasi Umum</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-[color:var(--gen-soft-gray)]/90">
              {campus.programs.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-extrabold">Info Beasiswa</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-[color:var(--gen-soft-gray)]/90">
              {campus.scholarshipInfo.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-sm font-extrabold">Gambar & Video</div>

          <div className="mt-2 grid gap-2 text-sm text-[color:var(--gen-soft-gray)]/90">
            {campus.media.map((m) => (
              <div
                key={m.title}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
              >
                <div>
                  <div className="text-sm font-semibold">{m.title}</div>
                  <div className="text-xs text-[color:var(--gen-cool-gray)]">
                    {m.type.toUpperCase()}
                  </div>
                </div>

                <Link
                  className="text-sm font-semibold text-white hover:text-[color:var(--gen-cta)]"
                  href={m.url}
                >
                  Buka →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <AdSlot
            title="Upgrade Premium • Spotlight + Leads"
            description="Dapatkan spotlight di Home + form leads + insight audience untuk akuisisi mahasiswa."
            ctaLabel="Upgrade Premium"
            href={`mailto:partnership@gen.id?subject=Upgrade%20Premium%20${encodeURIComponent(
              campus.name
            )}`}
          />
        </div>
      </div>
    </div>
  );
}
