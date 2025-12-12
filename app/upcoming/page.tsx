import Link from "next/link";

export default function UpcomingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-10">
        {/* glow accents */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--gen-cta)]/14 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[color:var(--gen-feature)]/12 blur-3xl" />

        {/* header */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-[color:var(--gen-soft-gray)]">
          <span className="h-2 w-2 rounded-full bg-[color:var(--gen-blueprint)]" />
          Advanced Feature • Upcoming
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
          Bangun fitur premium bareng{" "}
          <span className="text-[color:var(--gen-cta)]">GEN</span>
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--gen-soft-gray)]/90">
          GEN sedang menyiapkan fitur advanced untuk membantu siswa mengambil keputusan pendidikan dengan lebih yakin.
          Kami membuka peluang <span className="text-white font-semibold">kerja sama kampus, sponsor, dan mitra konten</span>{" "}
          untuk ikut membangun ekosistem ini.
        </p>

        {/* 3 cards */}
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-extrabold">Untuk Kampus</div>
            <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">
              Spotlight kampus, halaman dynamic, leads calon mahasiswa, dan webinar PMB.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">Spotlight</span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">Form Leads</span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">Webinar PMB</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-extrabold">Untuk Brand / Sponsor</div>
            <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">
              Banner kampanye, event sponsor, dan konten edukasi yang relevan untuk Gen-Z.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">Banner</span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">Affiliate</span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">Co-brand</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-extrabold">Untuk Partner Edukasi</div>
            <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">
              Kurasi beasiswa, tryout, bank soal, mentoring, dan program komunitas.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">Tryout</span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">Mentoring</span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">Komunitas</span>
            </div>
          </div>
        </div>

        {/* roadmap */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-extrabold">Roadmap Fitur Advanced</div>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-[color:var(--gen-soft-gray)]">
              <span className="text-[color:var(--gen-cta)]">●</span> Upcoming
            </span>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-sm font-extrabold">
                <span className="text-[color:var(--gen-blueprint)]">1.</span> Tes Minat Bakat
              </div>
              <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">
                Hasil ringkas + rekomendasi jurusan + insight gaya belajar.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-sm font-extrabold">
                <span className="text-[color:var(--gen-feature)]">2.</span> Tryout Adaptif
              </div>
              <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">
                Bank soal + pembahasan + evaluasi kelemahan.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-sm font-extrabold">
                <span className="text-[color:var(--gen-cta)]">3.</span> Dashboard Progress
              </div>
              <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">
                Tracking target belajar dan rekomendasi materi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-sm font-extrabold">
                <span className="text-[color:var(--gen-blueprint)]">4.</span> Rekomendasi Kampus/Jurusan
              </div>
              <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">
                Berdasarkan data minat, biaya, lokasi, dan peluang karier.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="mailto:partnership@gen.id?subject=Kerja%20Sama%20GEN%20(Advanced%20Feature)"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-[color:var(--gen-bg)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Ajukan Kerja Sama <span className="text-[color:var(--gen-cta)]">→</span>
            </Link>

            <Link
              href="mailto:partnership@gen.id?subject=Sponsor%20%2F%20Media%20Kit%20GEN"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 font-semibold text-white hover:bg-white/[0.08]"
            >
              Minta Media Kit
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.02] px-5 py-3 font-semibold text-white hover:bg-white/[0.06]"
            >
              Kembali ke Home
            </Link>
          </div>

          <div className="mt-4 text-xs text-[color:var(--gen-soft-gray)]/80">
            Email partnership: <span className="text-white font-semibold">partnership@gen.id</span> • Subjek: Kerja Sama GEN
          </div>
        </div>
      </div>
    </div>
  );
}
