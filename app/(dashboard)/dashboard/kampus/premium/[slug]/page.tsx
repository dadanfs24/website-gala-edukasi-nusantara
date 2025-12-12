import Link from "next/link";
import { notFound } from "next/navigation";
import { campuses } from "@/lib/data/campuses";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CampusPremiumPage({ params }: Props) {
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

      <div className="mt-4 rounded-3xl border border-[color:var(--gen-blueprint)]/25 bg-[color:var(--gen-blueprint)]/10 p-6 backdrop-blur md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              {campus.name}
            </h1>
            <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/95">
              {campus.city}, {campus.province}
            </p>
            <p className="mt-4 text-sm text-[color:var(--gen-soft-gray)]/95">
              Contoh layout premium: spotlight, leads form, insight audience, dan
              dynamic page.
            </p>
          </div>

          <span className="rounded-full border border-[color:var(--gen-blueprint)]/30 bg-[color:var(--gen-blueprint)]/15 px-3 py-1 text-xs font-semibold text-[color:var(--gen-blueprint)]">
            Premium
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.10] p-5">
            <div className="text-sm font-extrabold">Spotlight</div>
            <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/95">
              Tampil di highlight Home + listing kampus + badge Spotlight.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.10] p-5">
            <div className="text-sm font-extrabold">Insight Audience</div>
            <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/95">
              Statistik view, klik CTA, minat jurusan, dan performa kampanye
              (placeholder).
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.10] p-5 md:col-span-2">
            <div className="text-sm font-extrabold">
              Form Leads (Akuisisi Mahasiswa)
            </div>
            <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/95">
              Contoh form. Nanti bisa dihubungkan ke CRM/Google Sheets/Email.
            </p>

            <form className="mt-4 grid gap-3 md:grid-cols-2">
              <input
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-[color:var(--gen-cta)]/60"
                placeholder="Nama calon mahasiswa"
              />
              <input
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-[color:var(--gen-cta)]/60"
                placeholder="No. WhatsApp"
              />
              <input
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-[color:var(--gen-cta)]/60 md:col-span-2"
                placeholder="Minat jurusan"
              />

              <button
                type="button"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[color:var(--gen-bg)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Kirim Leads{" "}
                <span className="text-[color:var(--gen-cta)]">→</span>
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.10] p-5 md:col-span-2">
            <div className="text-sm font-extrabold">Dynamic Page</div>
            <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/95">
              Halaman dinamis untuk info PMB, webinar, dan kampanye pendaftaran
              (upcoming).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
