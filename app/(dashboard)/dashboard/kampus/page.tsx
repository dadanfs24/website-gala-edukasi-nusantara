import Link from "next/link";
import { campuses } from "@/lib/data/campuses";
import { AdSlot } from "@/components/ui/ad-slot";

export default function DashboardKampusPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Dashboard Kampus</h1>
          <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">
            Free & Premium — platform pemasaran dan akuisisi mahasiswa (feeder) untuk kampus/instansi.
          </p>
        </div>
        <Link href="mailto:partnership@gen.id?subject=Paket%20Dashboard%20Kampus%20GEN" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-[color:var(--gen-bg)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
          Upgrade ke Premium <span className="text-[color:var(--gen-cta)]">→</span>
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
          <div className="text-lg font-extrabold">Free</div>
          <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--gen-soft-gray)]/90">
            <li>Informasi umum</li>
            <li>Info beasiswa</li>
            <li>Lokasi</li>
            <li>Gambar & video</li>
          </ul>
          <p className="mt-4 text-xs text-[color:var(--gen-cool-gray)]">Cocok untuk mulai hadir di GEN.</p>
        </div>

        <div className="rounded-3xl border border-[color:var(--gen-blueprint)]/25 bg-[color:var(--gen-blueprint)]/10 p-6 backdrop-blur">
          <div className="text-lg font-extrabold">Premium</div>
          <ul className="mt-3 list-disc pl-5 text-sm text-[color:var(--gen-soft-gray)]/95">
            <li>Spotlight</li>
            <li>Form Leads</li>
            <li>Insight Audience</li>
            <li>Dynamic Page</li>
          </ul>
          <p className="mt-4 text-xs text-[color:var(--gen-soft-gray)]/90">Cocok untuk kampus yang ingin funnel pendaftaran.</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">Contoh Halaman Kampus</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {campuses.map((c) => (
            <div key={c.slug} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className="text-base font-extrabold">{c.name}</div>
              <div className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">{c.city}, {c.province}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[color:var(--gen-bg)] transition-transform hover:scale-[1.02] active:scale-[0.98]" href={`/dashboard/kampus/free/${c.slug}`}>
                  Lihat Free →
                </Link>
                <Link className="rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white hover:bg-white/[0.08]" href={`/dashboard/kampus/premium/${c.slug}`}>
                  Lihat Premium
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <AdSlot
          title="Monetisasi • Paket Kampus"
          description="Paket: banner, artikel promosi, info PMB, pendaftaran webinar, dan leads form."
          ctaLabel="Minta Proposal"
          href="mailto:partnership@gen.id?subject=Minta%20Proposal%20Paket%20Kampus%20GEN"
        />
      </div>
    </div>
  );
}
