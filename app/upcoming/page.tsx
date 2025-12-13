import Link from "next/link";

export default function UpcomingPage() {
  const cardStyle = {
    background: "var(--gen-card-bg)",
    border: "1px solid var(--gen-border)",
  } as const;

  const pillStyle = {
    background: "rgba(255,255,255,.06)",
    border: "1px solid var(--gen-border)",
  } as const;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div
        className="relative overflow-hidden rounded-3xl p-8 backdrop-blur md:p-10"
        style={cardStyle}
      >
        {/* glow accents */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--gen-cta)]/14 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[color:var(--gen-feature)]/12 blur-3xl" />

        {/* header pill */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
          style={{
            ...pillStyle,
            color: "var(--gen-soft-gray)",
          }}
        >
          <span className="h-2 w-2 rounded-full bg-[color:var(--gen-blueprint)]" />
          Advanced Feature • Upcoming
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[color:var(--gen-fg)] md:text-4xl">
          Bangun fitur premium bareng{" "}
          <span className="text-[color:var(--gen-cta)]">GEN</span>
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--gen-soft-gray)]">
          GEN sedang menyiapkan fitur advanced untuk membantu siswa mengambil keputusan pendidikan dengan lebih yakin.
          Kami membuka peluang{" "}
          <span className="font-semibold text-[color:var(--gen-fg)]">
            kerja sama kampus, sponsor, dan mitra konten
          </span>{" "}
          untuk ikut membangun ekosistem ini.
        </p>

        {/* 3 cards */}
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <div className="rounded-3xl p-5" style={cardStyle}>
            <div className="text-sm font-extrabold text-[color:var(--gen-fg)]">Untuk Kampus</div>
            <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]">
              Spotlight kampus, halaman dynamic, leads calon mahasiswa, dan webinar PMB.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
              {["Spotlight", "Form Leads", "Webinar PMB"].map((t) => (
                <span key={t} className="rounded-full px-2 py-1" style={pillStyle}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-5" style={cardStyle}>
            <div className="text-sm font-extrabold text-[color:var(--gen-fg)]">Untuk Brand / Sponsor</div>
            <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]">
              Banner kampanye, event sponsor, dan konten edukasi yang relevan untuk Gen-Z.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
              {["Banner", "Affiliate", "Co-brand"].map((t) => (
                <span key={t} className="rounded-full px-2 py-1" style={pillStyle}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-5" style={cardStyle}>
            <div className="text-sm font-extrabold text-[color:var(--gen-fg)]">Untuk Partner Edukasi</div>
            <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]">
              Kurasi beasiswa, tryout, bank soal, mentoring, dan program komunitas.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
              {["Tryout", "Mentoring", "Komunitas"].map((t) => (
                <span key={t} className="rounded-full px-2 py-1" style={pillStyle}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* roadmap */}
        <div className="mt-8 rounded-3xl p-6" style={cardStyle}>
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-extrabold text-[color:var(--gen-fg)]">
              Roadmap Fitur Advanced
            </div>
            <span
              className="rounded-full px-3 py-1 text-xs"
              style={{
                ...pillStyle,
                color: "var(--gen-soft-gray)",
              }}
            >
              <span className="text-[color:var(--gen-cta)]">●</span> Upcoming
            </span>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              { n: "1.", nColor: "var(--gen-blueprint)", title: "Tes Minat Bakat", desc: "Hasil ringkas + rekomendasi jurusan + insight gaya belajar." },
              { n: "2.", nColor: "var(--gen-feature)", title: "Tryout Adaptif", desc: "Bank soal + pembahasan + evaluasi kelemahan." },
              { n: "3.", nColor: "var(--gen-cta)", title: "Dashboard Progress", desc: "Tracking target belajar dan rekomendasi materi." },
              { n: "4.", nColor: "var(--gen-blueprint)", title: "Rekomendasi Kampus/Jurusan", desc: "Berdasarkan data minat, biaya, lokasi, dan peluang karier." },
            ].map((x) => (
              <div key={x.n} className="rounded-2xl p-4" style={cardStyle}>
                <div className="text-sm font-extrabold text-[color:var(--gen-fg)]">
                  <span style={{ color: x.nColor }}>{x.n}</span> {x.title}
                </div>
                <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]">{x.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {/* Primary */}
            <Link
              href="mailto:partnership@gen.id?subject=Kerja%20Sama%20GEN%20(Advanced%20Feature)"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "var(--gen-ink)",
                color: "var(--gen-bg)",
                border: "1px solid var(--gen-border)",
              }}
            >
              Ajukan Kerja Sama <span className="text-[color:var(--gen-cta)]">→</span>
            </Link>

            {/* Secondary */}
            <Link
              href="mailto:partnership@gen.id?subject=Sponsor%20%2F%20Media%20Kit%20GEN"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-colors"
              style={{
                ...pillStyle,
                color: "var(--gen-fg)",
              }}
            >
              Minta Media Kit
            </Link>

            {/* Ghost */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-colors"
              style={{
                border: "1px solid var(--gen-border)",
                background: "transparent",
                color: "var(--gen-fg)",
              }}
            >
              Kembali ke Home
            </Link>
          </div>

          <div className="mt-4 text-xs text-[color:var(--gen-soft-gray)]">
            Email partnership:{" "}
            <span className="font-semibold text-[color:var(--gen-fg)]">
              partnership@gen.id
            </span>{" "}
            • Subjek: Kerja Sama GEN
          </div>
        </div>
      </div>
    </div>
  );
}
