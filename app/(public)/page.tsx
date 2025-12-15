import Link from "next/link";
import { Target, GraduationCap, Wallet, Megaphone } from "lucide-react";

import { AdSlot } from "@/components/ui/ad-slot";
import { scholarships } from "@/lib/data/scholarships";
import { events } from "@/lib/data/events";

function Shortcut({
  href,
  label,
  desc,
}: {
  href: string;
  label: string;
  desc: string;
}) {
  return (
    <Link href={href} className="group gen-card gen-card-hover rounded-2xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-extrabold tracking-tight">{label}</div>
          <div className="mt-1 text-xs text-[color:var(--gen-soft-gray)]/90">
            {desc}
          </div>
        </div>
        <span className="text-[color:var(--gen-cta)] transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 md:pb-16 md:pt-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* ICON + BRAND PILL */}
            <div className="inline-flex flex-wrap items-center gap-3">
              <span
                className="gen-card gen-shadow rounded-2xl p-3"
                aria-hidden="true"
              >
                <GraduationCap
                  className="h-7 w-7"
                  style={{ color: "var(--gen-cta)" }}
                />
              </span>

              <div className="gen-pill rounded-full px-3 py-1 text-xs font-semibold text-[color:var(--gen-soft-gray)]">
                GEN • Gala Edukasi Nusantara{" "}
                <span className="text-[color:var(--gen-blueprint)]">●</span>
              </div>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Teman Pintar{" "}
              <span className="text-[color:var(--gen-blueprint)]">Gen Z</span>{" "}
              <span> dan </span>
              <span className="text-[color:var(--gen-feature)]">
                Gen Alpha
              </span>{" "}
              Dalam Menyiapkan{" "}
              <span className="text-[color:var(--gen-cta)]">
                Masa Depan Pendidikan
              </span>
            </h1>

            <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--gen-soft-gray)]/90">
              
              <span>
                Banyak siswa merasa bingung saat harus menentukan jurusan,
                kampus, atau masa depan setelah lulus sekolah. Informasi terasa
                menumpuk, standar keberhasilan terlihat sama untuk semua orang,
                dan tekanan untuk "harus sukses" sering datang dari berbagai
                arah. Gala Edukasi Nusantara (GEN) hadir untuk menemani kamu,
                bukan menghakimi, bukan memaksa, tapi membantu kamu menemukan
                jalan pendidikan yang paling masuk akal dan sesuai dengan
                dirimu.
              </span>
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/beasiswa"
                className=" 
      inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold
      transition-transform hover:scale-[1.02] active:scale-[0.98]
      bg-[color:var(--gen-btn-primary-bg)] text-[color:var(--gen-btn-primary-fg)]
    "
              >
                Cari Beasiswa{" "}
                <span className="text-[color:var(--gen-cta)]">→</span>
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="gen-card-2 rounded-2xl p-4">
                <div className="text-sm font-extrabold">Terverifikasi</div>
                <div className="mt-1 text-xs text-[color:var(--gen-soft-gray)]/90">
                  Data jalur beasiswa & info kampus terstruktur.
                </div>
              </div>
              <div className="gen-card-2 rounded-2xl p-4">
                <div className="text-sm font-extrabold">Ramah Gen-Z</div>
                <div className="mt-1 text-xs text-[color:var(--gen-soft-gray)]/90">
                  Bahasa jelas, checklist, dan langkah praktis.
                </div>
              </div>
              <div className="gen-card-2 rounded-2xl p-4">
                <div className="text-sm font-extrabold">Feeder Kampus</div>
                <div className="mt-1 text-xs text-[color:var(--gen-soft-gray)]/90">
                  Promosi & akuisisi mahasiswa via GEN.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* glow blobs (aman buat light/dark karena cuma dekorasi) */}
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[color:var(--gen-cta)]/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-[color:var(--gen-feature)]/20 blur-3xl" />

            {/* image card */}
            <div className="gen-card rounded-3xl p-3">
              <div className="relative overflow-hidden rounded-2xl gen-border">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                  alt="GEN student group"
                  className="h-[360px] w-full object-cover sm:h-[420px] md:h-[520px]"
                  loading="lazy"
                />

                {/* theme-aware overlay */}
                <div className="pointer-events-none absolute inset-0 gen-img-overlay" />

                {/* stickers */}
                <div
                  className="absolute right-4 top-4 rotate-[6deg] rounded-2xl px-4 py-2 text-sm font-extrabold"
                  style={{
                    background: "var(--gen-blueprint)",
                    color: "var(--gen-bg)",
                  }}
                >
                  Blueprint
                </div>

                <div
                  className="absolute left-4 bottom-4 -rotate-[6deg] rounded-2xl px-4 py-2 text-sm font-extrabold text-white"
                  style={{ background: "var(--gen-feature)" }}
                >
                  Feature
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK MENU */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">
          Menu Cepat
        </h2>
        <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">
          Loncat cepat ke fitur utama GEN.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Shortcut
            href="/beasiswa"
            label="Beasiswa"
            desc="Listing terstruktur + status open/closed."
          />
          <Shortcut
            href="/artikel"
            label="Artikel"
            desc="Tips beasiswa, kampus, dan karier."
          />
          <Shortcut
            href="/event"
            label="Event"
            desc="Tryout & webinar: gratis/berbayar."
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div
          className="relative overflow-hidden rounded-3xl gen-border"
          style={{ background: "var(--gen-card-bg)" }}
        >
          <div className="p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* LEFT */}
              <div className="order-2 md:order-1">
                <div className="gen-card-2 rounded-3xl p-3">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                      alt="Gen-Z students studying"
                      className="h-[320px] w-full object-cover sm:h-[360px] md:h-[420px]"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 gen-img-overlay" />
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
                    <span className="gen-pill rounded-full px-2 py-1">
                      <span className="text-[color:var(--gen-blueprint)]">
                        ●
                      </span>{" "}
                      Blueprint
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      <span className="text-[color:var(--gen-feature)]">●</span>{" "}
                      Feature
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      <span className="text-[color:var(--gen-cta)]">●</span>{" "}
                      Growth
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="order-1 md:order-2">
                <div className="gen-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-[color:var(--gen-soft-gray)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--gen-blueprint)]" />
                  Tentang GEN
                </div>

                <h2 className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
                  About <span className="text-[color:var(--gen-cta)]">GEN</span>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gen-soft-gray)]/90">
                  GEN (Gala Edukasi Nusantara) merupakan platform edukasi yang
                  berfokus pada pendampingan siswa dalam menentukan arah
                  pendidikan tinggi. Melalui rangkaian informasi terstruktur,
                  panduan akademik, dan komunitas siswa yang aktif, GEN
                  mendukung terciptanya ekosistem pendidikan yang inklusif dan
                  mudah diakses. Kami berkomitmen untuk menghadirkan data yang
                  akurat, terkini, dan relevan bagi seluruh pengunjung.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="gen-pill rounded-full px-3 py-1 text-xs text-[color:var(--gen-soft-gray)]">
                    Beasiswa Terverifikasi
                  </span>
                  <span className="gen-pill rounded-full px-3 py-1 text-xs text-[color:var(--gen-soft-gray)]">
                    Info Kampus & Jurusan
                  </span>
                  <span className="gen-pill rounded-full px-3 py-1 text-xs text-[color:var(--gen-soft-gray)]">
                    Tryout & Webinar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* glows (theme-safe) */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--gen-cta)]/14 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[color:var(--gen-feature)]/12 blur-3xl" />
        </div>
      </section>

      {/* GOALS */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="gen-card rounded-3xl p-6 md:p-8">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">
              Tujuan <span className="text-[color:var(--gen-cta)]">GEN</span>
            </h3>

            <span className="gen-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-[color:var(--gen-soft-gray)]">
              <Target className="h-4 w-4 text-[color:var(--gen-cta)]" />
              Fokus
            </span>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="gen-card-2 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="gen-pill rounded-2xl p-2">
                  <GraduationCap className="h-5 w-5 text-[color:var(--gen-cta)]" />
                </span>
                <div>
                  <div className="text-sm font-extrabold">
                    Arah Jurusan & Kampus
                  </div>
                  <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">
                    Membantu siswa menemukan jurusan, kampus, dan beasiswa yang
                    tepat.
                  </p>
                </div>
              </div>
            </div>

            <div className="gen-card-2 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="gen-pill rounded-2xl p-2">
                  <Wallet className="h-5 w-5 text-[color:var(--gen-blueprint)]" />
                </span>
                <div>
                  <div className="text-sm font-extrabold">
                    Edukasi Orang Tua
                  </div>
                  <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">
                    Membantu orang tua memahami biaya, prospek karier, dan
                    pilihan perguruan tinggi.
                  </p>
                </div>
              </div>
            </div>

            <div className="gen-card-2 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="gen-pill rounded-2xl p-2">
                  <Megaphone className="h-5 w-5 text-[color:var(--gen-feature)]" />
                </span>
                <div>
                  <div className="text-sm font-extrabold">Feeder Kampus</div>
                  <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">
                    Menjadi platform pemasaran dan akuisisi mahasiswa bagi
                    kampus (feeder).
                  </p>
                </div>
              </div>
            </div>

            <div className="gen-card-2 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="gen-pill rounded-2xl p-2">
                  <Target className="h-5 w-5 text-[color:var(--gen-cta)]" />
                </span>
                <div>
                  <div className="text-sm font-extrabold">
                    Portal Terpercaya
                  </div>
                  <p className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">
                    Menjadi portal informasi terpercaya untuk dunia pendidikan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT CAMPUS */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">
              Highlight Kampus
            </h2>
            <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">
              Saat ini GEN berkolaborasi dengan Telkom University (Tel-U).
            </p>
          </div>

          <Link
            className="hidden text-sm font-semibold text-white hover:text-[color:var(--gen-cta)] md:inline-flex"
            href="/dashboard/kampus"
          >
            Lihat dashboard kampus →
          </Link>
        </div>

        <div className="mt-5">
          <Link
            href="/dashboard/kampus/free/telkom-university"
            className="group relative block overflow-hidden rounded-3xl gen-card gen-card-hover p-6"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[color:var(--gen-cta)]/14 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[color:var(--gen-feature)]/10 blur-3xl" />

            <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl gen-border bg-[color:var(--gen-card-bg)]">
                  <img
                    src="/images/tel-u.svg"
                    alt="Telkom University Logo"
                    className="h-10 w-10 object-contain"
                    loading="lazy"
                  />
                </div>

                <div>
                  <div className="text-base font-extrabold tracking-tight">
                    Telkom University (Tel-U)
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--gen-soft-gray)]/90">
                    Bandung, Jawa Barat
                  </div>
                  <div className="mt-3 text-sm text-[color:var(--gen-soft-gray)]/90">
                    Kampus kolaborasi resmi GEN untuk informasi jurusan, jalur
                    masuk, beasiswa, dan event PMB.
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-[color:var(--gen-soft-gray)]">
                    {[
                      "Informatika",
                      "Sistem Informasi",
                      "DKV",
                      "Manajemen",
                    ].map((p) => (
                      <span key={p} className="gen-pill rounded-full px-2 py-1">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 md:flex-col md:items-end">
                <span className="rounded-full border border-[color:var(--gen-blueprint)]/30 bg-[color:var(--gen-blueprint)]/15 px-2.5 py-1 text-xs font-semibold text-[color:var(--gen-blueprint)]">
                  Spotlight • Partner
                </span>

                <span className="mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--gen-link-fg)] md:mt-3">
                  Lihat Detail{" "}
                  <span className="text-[color:var(--gen-cta)] transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-6">
          <AdSlot
            title="Monetisasi • Banner Kampus"
            description="Kampus kamu ingin tampil di highlight/spotlight GEN? Tersedia paket banner & pendaftaran webinar."
            ctaLabel="Hubungi Tim GEN"
            href="mailto:partnership@gen.id?subject=Monetisasi%20Banner%20Kampus%20GEN"
          />
        </div>
      </section>

      {/* SCHOLARSHIP + EVENT PICK */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="gen-card rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold tracking-tight">
                Beasiswa Terbaru
              </h3>
              <Link
                href="/beasiswa"
                className="text-sm font-semibold text-[color:var(--gen-soft-gray)] hover:text-[color:var(--gen-cta)]"
              >
                Lihat semua →
              </Link>
            </div>

            <div className="mt-4 grid gap-3">
              {scholarships.slice(0, 2).map((s) => (
                <div key={s.slug} className="gen-card-2 rounded-2xl p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-extrabold">{s.name}</div>
                    <span className="text-xs text-[color:var(--gen-soft-gray)]">
                      {s.status}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-[color:var(--gen-soft-gray)]/90">
                    Deadline {s.deadlineISO} • {s.level.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gen-card rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold tracking-tight">
                Event Pilihan
              </h3>
              <Link
                href="/event"
                className="text-sm font-semibold text-[color:var(--gen-soft-gray)] hover:text-[color:var(--gen-cta)]"
              >
                Lihat semua →
              </Link>
            </div>

            <div className="mt-4 grid gap-3">
              {events.slice(0, 2).map((e) => (
                <div key={e.slug} className="gen-card-2 rounded-2xl p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-extrabold">{e.title}</div>
                    <span className="text-xs text-[color:var(--gen-soft-gray)]">
                      {e.status}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-[color:var(--gen-soft-gray)]/90">
                    {e.startISO} • {e.location} • {e.priceLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
