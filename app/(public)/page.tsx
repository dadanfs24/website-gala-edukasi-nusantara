import Link from "next/link";
import Image from "next/image"

import {
  Target,
  GraduationCap,
  Wallet,
  Megaphone,
  Rocket,
  Brain,
  BarChart3,
  CalendarDays,
  Lightbulb,
  Sparkles,
  Puzzle,
  ReceiptText,
  Search,
  Compass,
  Handshake,
  Briefcase,
  MessageCircle,
  Gift,
  Users,
  BookOpen,
  Mic,
  CheckCircle2,
  Heart,
  BadgeCheck,
  Newspaper,
  ArrowRight,
} from "lucide-react";

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
  <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-14">
    {/* LEFT */}
    <div className="min-w-0">
    <div className="inline-flex flex-wrap items-center gap-3">
    <span
  className="gen-card gen-shadow rounded-2xl p-3 inline-flex items-center justify-center"
  aria-hidden="true"
  style={{
    background: "var(--gen-card-bg)",
    border: "1px solid var(--gen-border)",
  }}
>
  <Image
    src="/images/gen-logo.png"
    alt="GEN Logo"
    width={44}
    height={44}
    className="h-11 w-11 object-contain"
    priority
  />
</span>

  <div className="gen-pill rounded-full px-3 py-1 text-xs font-semibold text-[color:var(--gen-soft-gray)]">
    GEN • Gala Edukasi Nusantara{" "}
    <span className="text-[color:var(--gen-blueprint)]">●</span>
  </div>
</div>


      <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
        Teman Pintar{" "}
        <span className="text-[color:var(--gen-blueprint)]">Gen-Z</span>{" "}
        <span> dan </span>
        <span className="text-[color:var(--gen-feature)]">Gen-Alpha</span>{" "}
        Dalam Menyiapkan{" "}
        <span className="text-[color:var(--gen-cta)]">Masa Depan Pendidikan</span>
      </h1>

      <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--gen-soft-gray)]/90">
        Banyak siswa merasa bingung saat harus menentukan jurusan, kampus, atau masa depan setelah
        lulus sekolah. Informasi terasa menumpuk, standar keberhasilan terlihat sama untuk semua
        orang, dan tekanan untuk "harus sukses" sering datang dari berbagai arah. Gala Edukasi
        Nusantara (GEN) hadir untuk menemani kamu, bukan menghakimi, bukan memaksa, tapi membantu
        kamu menemukan jalan pendidikan yang paling masuk akal dan sesuai dengan dirimu.
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
          Cari Beasiswa <span className="text-[color:var(--gen-cta)]">→</span>
        </Link>
      </div>
    </div>

{/* RIGHT (RAPIH + CENTER + NO WHITE BOX LIGHT) */}
<div className="relative flex justify-center md:justify-end">
  {/* glow blobs */}
  <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[color:var(--gen-cta)]/12 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-[color:var(--gen-feature)]/12 blur-3xl" />

  {/* stage */}
  <div className="relative isolate w-full max-w-[560px] sm:max-w-[640px] md:max-w-[680px] lg:max-w-[740px]">
    <div className="relative h-[420px] sm:h-[480px] md:h-[520px] lg:h-[620px]">
      {/* IMAGE (SELALU CENTER, nggak geser kanan) */}
      <img
        src="/images/images-1.png"
        alt="GEN student group"
        loading="lazy"
        className="
          absolute bottom-[-10px] left-1/2 -translate-x-1/2
          h-full w-full object-contain origin-bottom
          scale-[1.30] sm:scale-[1.18] md:scale-[1.12] lg:scale-[1.16]
          mix-blend-multiply dark:mix-blend-normal
        "
        style={{
  WebkitMaskImage: `
    linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%),
    linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)
  `,
  maskImage: `
    linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%),
    linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)
  `,
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
}}

      />

      {/* GEN Guide (dekat ke subjek) */}
      <div
        className="absolute right-10 rotate-[6deg] rounded-2xl px-4 py-2 text-sm font-extrabold md:right-14 md:top-16"
        style={{ background: "var(--gen-blueprint)", color: "var(--gen-bg)" }}
      >
        GEN Guide
      </div>

      {/* No Overthinking (dekat & aman) */}
      <div
        className="absolute left-10 bottom-18 -rotate-[6deg] rounded-2xl px-4 py-2 text-sm font-extrabold text-white md:left-14 md:bottom-25"
        style={{ background: "var(--gen-feature)" }}
      >
        No Overthinking
      </div>
    </div>
  </div>
</div>


  </div>
</section>


      {/* QUICK MENU */}
      {/* <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
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
      </section> */}

      {/* ABOUT (Gen-Z, no image) */}
      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div
          className="relative overflow-hidden rounded-[28px]"
          style={{
            background: "var(--gen-card-bg)",
            border: "1px solid var(--gen-border)",
            boxShadow: "var(--gen-shadow)",
          }}
        >
          {/* glow */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              background: "color-mix(in srgb, var(--gen-cta) 18%, transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              background:
                "color-mix(in srgb, var(--gen-feature) 18%, transparent)",
            }}
          />

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background:
                    "color-mix(in srgb, var(--gen-blueprint) 14%, transparent)",
                  border:
                    "1px solid color-mix(in srgb, var(--gen-blueprint) 28%, transparent)",
                  color: "var(--gen-fg)",
                }}
              >
                <Lightbulb className="h-4 w-4 shrink-0" />
                <span>Apa Itu GEN?</span>
              </span>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background:
                    "color-mix(in srgb, var(--gen-cta) 12%, transparent)",
                  border:
                    "1px solid color-mix(in srgb, var(--gen-cta) 24%, transparent)",
                  color: "var(--gen-fg)",
                }}
              >
                #GenZFriendly
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
              Apa Itu{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, var(--gen-cta), var(--gen-blueprint), var(--gen-feature))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Gala Edukasi Nusantara
              </span>
              ?
            </h2>

            <div className="mt-4 grid gap-6 md:grid-cols-2 md:items-start">
              {/* Copy */}
              <div>
                <p
                  className="text-sm leading-relaxed md:text-base"
                  style={{ color: "var(--gen-soft-gray)" }}
                >
                  Gala Edukasi Nusantara adalah platform edukasi mandiri yang
                  dirancang khusus untuk siswa dan generasi muda Indonesia yang
                  ingin melangkah ke pendidikan tinggi dengan lebih siap, sadar,
                  dan percaya diri.
                </p>

                <p
                  className="mt-3 text-sm leading-relaxed md:text-base"
                  style={{ color: "var(--gen-soft-gray)" }}
                >
                  GEN bukan sekadar website informasi. Kami adalah ruang
                  belajar, ruang diskusi, dan ruang tumbuh untuk kamu yang ingin
                  memahami pilihan, bukan asal ikut tren.
                </p>

                <div
                  className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-xs sm:text-sm"
                  style={{
                    background:
                      "color-mix(in srgb, var(--gen-card-bg) 72%, transparent)",
                    border: "1px solid var(--gen-border)",
                    color: "color-mix(in srgb, var(--gen-fg) 70%, transparent)",
                  }}
                >
                  <Rocket className="h-4 w-4 shrink-0" />
                  <span>Biar kamu punya arah, bukan cuma ikut arus.</span>
                </div>
              </div>

              {/* Points */}
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                {[
                  {
                    Icon: GraduationCap,
                    t: "Informasi beasiswa yang jelas dan update",
                  },
                  {
                    Icon: Brain,
                    t: "Artikel ringan tapi berbobot tentang jurusan, kampus, dan dunia kerja",
                  },
                  {
                    Icon: BarChart3,
                    t: "Tryout dan simulasi untuk mengukur kesiapan diri",
                  },
                  {
                    Icon: CalendarDays,
                    t: "Event edukasi yang relevan dengan tantangan anak muda hari ini",
                  },
                ].map(({ Icon, t }) => (
                  <div
                    key={t}
                    className="flex gap-3 rounded-2xl p-4"
                    style={{
                      background:
                        "color-mix(in srgb, var(--gen-card-bg) 70%, transparent)",
                      border: "1px solid var(--gen-border)",
                    }}
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0" />
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        color:
                          "color-mix(in srgb, var(--gen-fg) 78%, transparent)",
                      }}
                    >
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Visi & Misi GEN (Gen-Z Style) */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] p-6 sm:p-10">
          {/* glow bg */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              background: "color-mix(in srgb, var(--gen-cta) 22%, transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              background:
                "color-mix(in srgb, var(--gen-feature) 22%, transparent)",
            }}
          />

          <div
            className="relative rounded-[24px] p-5 sm:p-8"
            style={{
              background: "var(--gen-card-bg)",
              border: "1px solid var(--gen-border)",
              boxShadow: "var(--gen-shadow)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* header */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    background:
                      "color-mix(in srgb, var(--gen-blueprint) 16%, transparent)",
                    border:
                      "1px solid color-mix(in srgb, var(--gen-blueprint) 30%, transparent)",
                    color: "var(--gen-fg)",
                  }}
                >
                  <Sparkles className="h-4 w-4 shrink-0" />
                  <span>GEN Direction</span>
                </span>

                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    background:
                      "color-mix(in srgb, var(--gen-cta) 14%, transparent)",
                    border:
                      "1px solid color-mix(in srgb, var(--gen-cta) 28%, transparent)",
                    color: "var(--gen-fg)",
                  }}
                >
                  <Brain className="h-4 w-4 shrink-0" />
                  <span>No Overthinking</span>
                </span>
              </div>

              <span
                className="text-xs"
                style={{ color: "var(--gen-soft-gray)" }}
              >
                Visi • Misi • Values
              </span>
            </div>

            <h2
              className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl"
              style={{ color: "var(--gen-fg)" }}
            >
              Visi & Misi{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, var(--gen-cta), var(--gen-blueprint), var(--gen-feature))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                GEN
              </span>
            </h2>

            <p
              className="mt-3 max-w-2xl text-sm leading-relaxed sm:text-base"
              style={{
                color: "color-mix(in srgb, var(--gen-fg) 78%, transparent)",
              }}
            >
              Biar kamu nggak cuma “ikut tren”, tapi beneran paham pilihan dan
              punya arah.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {/* Visi card */}
              <div
                className="group rounded-[22px] p-5 sm:p-6 transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  background:
                    "color-mix(in srgb, var(--gen-card-bg) 82%, transparent)",
                  border: "1px solid var(--gen-border)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-lg"
                    style={{
                      background:
                        "color-mix(in srgb, var(--gen-blueprint) 18%, transparent)",
                      border:
                        "1px solid color-mix(in srgb, var(--gen-blueprint) 32%, transparent)",
                    }}
                  >
                    <Target className="h-5 w-5" />
                  </span>
                  <div>
                    <div
                      className="text-sm font-extrabold"
                      style={{ color: "var(--gen-fg)" }}
                    >
                      Visi
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--gen-soft-gray)" }}
                    >
                      Big picture GEN
                    </div>
                  </div>
                </div>

                <p
                  className="mt-4 text-sm leading-relaxed sm:text-base"
                  style={{
                    color: "color-mix(in srgb, var(--gen-fg) 82%, transparent)",
                  }}
                >
                  Membantu generasi muda Indonesia menemukan arah pendidikan
                  yang tepat, tanpa harus kehilangan jati diri.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Arah jelas",
                    "Tetap jadi diri sendiri",
                    "Langkah realistis",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background:
                          "color-mix(in srgb, var(--gen-card-bg) 70%, transparent)",
                        border: "1px solid var(--gen-border)",
                        color: "var(--gen-fg)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Misi card */}
              <div
                className="rounded-[22px] p-5 sm:p-6"
                style={{
                  background:
                    "color-mix(in srgb, var(--gen-card-bg) 82%, transparent)",
                  border: "1px solid var(--gen-border)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-lg"
                    style={{
                      background:
                        "color-mix(in srgb, var(--gen-cta) 18%, transparent)",
                      border:
                        "1px solid color-mix(in srgb, var(--gen-cta) 32%, transparent)",
                    }}
                  >
                    <Puzzle className="h-5 w-5" />
                  </span>
                  <div>
                    <div
                      className="text-sm font-extrabold"
                      style={{ color: "var(--gen-fg)" }}
                    >
                      Misi
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--gen-soft-gray)" }}
                    >
                      Yang GEN lakukan tiap hari
                    </div>
                  </div>
                </div>

                <ul className="mt-4 grid gap-3">
                  {[
                    {
                      Icon: ReceiptText,
                      t: "Menyajikan informasi pendidikan yang jujur, relevan, dan mudah dipahami",
                    },
                    {
                      Icon: Search,
                      t: "Membantu siswa mengenal potensi, minat, dan pilihan masa depan",
                    },
                    {
                      Icon: Compass,
                      t: "Mendampingi proses persiapan masuk perguruan tinggi",
                    },
                    {
                      Icon: Handshake,
                      t: "Mengajak orang tua menjadi support system, bukan sumber tekanan",
                    },
                    {
                      Icon: Briefcase,
                      t: "Menghubungkan pendidikan dengan realita dunia kerja",
                    },
                  ].map(({ Icon, t }) => (
                    <li
                      key={t}
                      className="flex gap-3 rounded-2xl p-4"
                      style={{
                        background:
                          "color-mix(in srgb, var(--gen-card-bg) 70%, transparent)",
                        border: "1px solid var(--gen-border)",
                      }}
                    >
                      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
                      <span
                        className="text-sm leading-relaxed sm:text-base"
                        style={{
                          color:
                            "color-mix(in srgb, var(--gen-fg) 82%, transparent)",
                        }}
                      >
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* little fun line */}
            <div
              className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3 text-xs sm:text-sm"
              style={{
                background:
                  "color-mix(in srgb, var(--gen-card-bg) 72%, transparent)",
                border: "1px solid var(--gen-border)",
                color: "color-mix(in srgb, var(--gen-fg) 70%, transparent)",
              }}
            >
              <span className="inline-flex items-center gap-2">
                <Lightbulb className="h-4 w-4 shrink-0" />
                <span>GEN = “pilih pakai data, bukan pakai panik.”</span>
              </span>
              <span style={{ color: "var(--gen-soft-gray)" }}>
                #GenZFriendly
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY GEN-Z */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="relative overflow-hidden gen-card rounded-[28px] p-6 md:p-10">
          {/* glow */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              background: "color-mix(in srgb, var(--gen-cta) 16%, transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              background:
                "color-mix(in srgb, var(--gen-feature) 14%, transparent)",
            }}
          />

          {/* header */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="gen-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ color: "var(--gen-soft-gray)" }}
                >
                  <Brain className="h-4 w-4 shrink-0" />
                  <span>Gen-Z & Gen-Alpha Friendly</span>
                </span>

                <span
                  className="gen-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ color: "var(--gen-soft-gray)" }}
                >
                  <Sparkles className="h-4 w-4 shrink-0" />
                  <span>Relatable • Clear • Safe</span>
                </span>
              </div>

              <h3 className="mt-3 text-xl font-extrabold tracking-tight md:text-2xl">
                Kenapa{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, var(--gen-cta), var(--gen-blueprint), var(--gen-feature))",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  GEN
                </span>{" "}
                Cocok untuk Gen Z & Gen Alpha?
              </h3>

              <p
                className="mt-2 text-sm"
                style={{ color: "var(--gen-soft-gray)" }}
              >
                Biar kamu nggak cuma ikut tren—tapi paham pilihan dan percaya
                diri jalaninnya.
              </p>
            </div>

            <span
              className="gen-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ color: "var(--gen-soft-gray)" }}
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              <span>Study buddy vibes</span>
            </span>
          </div>

          {/* cards */}
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {/* 1 */}
            <div className="group gen-card-2 rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <span
                  className="gen-pill rounded-2xl px-3 py-2 text-sm font-extrabold"
                  style={{ color: "var(--gen-cta)" }}
                >
                  1
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold">
                    Bahasanya Ngobrol, Bukan Menggurui
                  </div>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    GEN pakai bahasa yang dekat sama keseharian Gen Z: serius,
                    tapi tetap santai dan relatable.
                  </p>
                  <div
                    className="mt-3 flex flex-wrap gap-2 text-xs"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    <span className="gen-pill rounded-full px-2 py-1">
                      Relatable
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Simple
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      No ribet
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="group gen-card-2 rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <span
                  className="gen-pill rounded-2xl px-3 py-2 text-sm font-extrabold"
                  style={{ color: "var(--gen-blueprint)" }}
                >
                  2
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold">
                    Fokus ke Proses, Bukan Cuma Hasil
                  </div>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    Masuk kampus favorit itu penting. Tapi lebih penting: kamu
                    tahu alasan memilihnya dan siap menjalaninya.
                  </p>
                  <div
                    className="mt-3 flex flex-wrap gap-2 text-xs"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    <span className="gen-pill rounded-full px-2 py-1">
                      Mindset
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Plan
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Consistency
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="group gen-card-2 rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <span
                  className="gen-pill rounded-2xl px-3 py-2 text-sm font-extrabold"
                  style={{ color: "var(--gen-feature)" }}
                >
                  3
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold">
                    Aman dari Informasi Palsu
                  </div>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    Info di GEN diseleksi dan dirangkum biar kamu nggak salah
                    langkah dan nggak buang waktu.
                  </p>
                  <div
                    className="mt-3 flex flex-wrap gap-2 text-xs"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    <span className="gen-pill rounded-full px-2 py-1">
                      Terverifikasi
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Ringkas
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Update
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="group gen-card-2 rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <span
                  className="gen-pill rounded-2xl px-3 py-2 text-sm font-extrabold"
                  style={{ color: "var(--gen-cta)" }}
                >
                  4
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold">
                    Kamu Nggak Sendirian
                  </div>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    GEN hadir sebagai teman belajar—bukan kompetitor, bukan
                    penilai. Kamu ditemenin, bukan dibandingin.
                  </p>
                  <div
                    className="mt-3 flex flex-wrap gap-2 text-xs"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    <span className="gen-pill rounded-full px-2 py-1">
                      Supportive
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Safe space
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Grow bareng
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET + WHO IT'S FOR */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="relative overflow-hidden gen-card rounded-[28px] p-6 md:p-10">
          {/* glows */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              background:
                "color-mix(in srgb, var(--gen-blueprint) 14%, transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              background: "color-mix(in srgb, var(--gen-cta) 14%, transparent)",
            }}
          />

          {/* header */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="gen-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ color: "var(--gen-soft-gray)" }}
                >
                  <Gift className="h-4 w-4 shrink-0" />
                  <span>Benefit GEN</span>
                </span>

                <span
                  className="gen-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ color: "var(--gen-soft-gray)" }}
                >
                  <Users className="h-4 w-4 shrink-0" />
                  <span>Buat siapa?</span>
                </span>
              </div>

              <h3 className="mt-3 text-xl font-extrabold tracking-tight md:text-2xl">
                Apa Saja yang Bisa Kamu Dapatkan di{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, var(--gen-cta), var(--gen-blueprint), var(--gen-feature))",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  GEN
                </span>
                ?
              </h3>

              <p
                className="mt-2 text-sm"
                style={{ color: "var(--gen-soft-gray)" }}
              >
                Semua dibuat biar kamu paham langkahnya—tanpa overthinking
                berlebihan.
              </p>
            </div>

            <span
              className="gen-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ color: "var(--gen-soft-gray)" }}
            >
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>Clear • Relatable • Useful</span>
            </span>
          </div>

          {/* 4 feature cards */}
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="group gen-card-2 rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <span className="gen-pill inline-flex items-center justify-center rounded-2xl px-3 py-2">
                  <GraduationCap className="h-5 w-5" />
                </span>

                <div className="min-w-0">
                  <div className="text-sm font-extrabold">
                    Informasi Beasiswa
                  </div>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    Update beasiswa lokal & internasional lengkap dengan syarat,
                    jadwal, dan tips lolos.
                  </p>
                  <div
                    className="mt-3 flex flex-wrap gap-2 text-xs"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    <span className="gen-pill rounded-full px-2 py-1">
                      Syarat
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Deadline
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Tips lolos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group gen-card-2 rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <span className="gen-pill inline-flex items-center justify-center rounded-2xl px-3 py-2">
                  <BookOpen className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold">Artikel Edukasi</div>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    Dari cara milih jurusan, tips UTBK, sampai insight dunia
                    kerja masa depan.
                  </p>
                  <div
                    className="mt-3 flex flex-wrap gap-2 text-xs"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    <span className="gen-pill rounded-full px-2 py-1">
                      Jurusan
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      UTBK
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Career
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group gen-card-2 rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <span className="gen-pill inline-flex items-center justify-center rounded-2xl px-3 py-2">
                  <Brain className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold">
                    Tryout & Simulasi
                  </div>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    Buat kamu yang pengin tahu posisi kemampuanmu sekarang,
                    tanpa drama.
                  </p>
                  <div
                    className="mt-3 flex flex-wrap gap-2 text-xs"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    <span className="gen-pill rounded-full px-2 py-1">
                      Progress
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Evaluasi
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Pembahasan
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group gen-card-2 rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <span className="gen-pill inline-flex items-center justify-center rounded-2xl px-3 py-2">
                  <Mic className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold">Event & Webinar</div>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    Belajar langsung dari mentor, praktisi, dan orang-orang yang
                    sudah lebih dulu lewat jalan ini.
                  </p>
                  <div
                    className="mt-3 flex flex-wrap gap-2 text-xs"
                    style={{ color: "var(--gen-soft-gray)" }}
                  >
                    <span className="gen-pill rounded-full px-2 py-1">
                      Mentor
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Praktisi
                    </span>
                    <span className="gen-pill rounded-full px-2 py-1">
                      Live
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* who it's for */}
          <div className="mt-6 gen-card-2 rounded-2xl p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm font-extrabold">
                Siapa yang Paling Cocok Gabung di GEN?
              </div>
              <span
                className="gen-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ color: "var(--gen-soft-gray)" }}
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>You belong here</span>
              </span>
            </div>

            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {[
                "Siswa SMA/SMK yang lagi mikir masa depan",
                "Pejuang UTBK dan seleksi kampus",
                "Anak muda yang pengin kuliah dengan tujuan jelas",
                "Orang tua yang ingin jadi partner putra/putrinya, bukan pemberi pressure",
              ].map((t) => (
                <div
                  key={t}
                  className="gen-pill rounded-2xl px-4 py-3 text-sm"
                  style={{ color: "var(--gen-soft-gray)" }}
                >
                  <span className="mr-2" style={{ color: "var(--gen-cta)" }}>
                    ●
                  </span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT + CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="relative overflow-hidden gen-card rounded-[28px] p-6 md:p-10">
          {/* glows */}
          <div
            className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full blur-3xl"
            style={{
              background:
                "color-mix(in srgb, var(--gen-feature) 14%, transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute -right-28 -bottom-28 h-80 w-80 rounded-full blur-3xl"
            style={{
              background: "color-mix(in srgb, var(--gen-cta) 14%, transparent)",
            }}
          />

          {/* header */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <span
                className="gen-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ color: "var(--gen-soft-gray)" }}
              >
                <BadgeCheck className="h-4 w-4 shrink-0" />
                <span>Komitmen GEN</span>
              </span>

              <h3 className="mt-3 text-xl font-extrabold tracking-tight md:text-2xl">
                Komitmen{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, var(--gen-cta), var(--gen-blueprint), var(--gen-feature))",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  GEN
                </span>{" "}
                untuk Kamu
              </h3>

              <p
                className="mt-2 max-w-3xl text-sm"
                style={{ color: "var(--gen-soft-gray)" }}
              >
                GEN percaya: setiap orang punya jalan suksesnya sendiri. Kami
                nggak menjanjikan jalan instan, tapi kami siap nemenin prosesmu
                supaya lebih terarah, realistis, dan sesuai dengan dirimu.
              </p>
            </div>

            <span
              className="gen-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ color: "var(--gen-soft-gray)" }}
            >
              <Sparkles className="h-4 w-4 shrink-0" />
              <span>Real talk, real help</span>
            </span>
          </div>

          {/* fun highlight */}
          <div className="mt-6 gen-card-2 rounded-2xl p-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="gen-pill inline-flex items-center justify-center rounded-2xl px-3 py-2">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-sm font-extrabold">Saatnya Kamu Mulai</div>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--gen-soft-gray)" }}
                >
                  Nggak harus sempurna untuk mulai. Yang penting berani cari
                  tahu.
                </p>
              </div>
            </div>

            {/* explore chips */}
            <div className="mt-4 grid gap-2 md:grid-cols-3">
              <div
                className="gen-pill inline-flex items-center rounded-2xl px-4 py-3 text-sm"
                style={{ color: "var(--gen-soft-gray)" }}
              >
                <Newspaper className="mr-2 h-4 w-4 shrink-0" />
                <span>Artikel edukasi yang relate sama kondisi kamu</span>
              </div>
              <div
                className="gen-pill inline-flex items-center rounded-2xl px-4 py-3 text-sm"
                style={{ color: "var(--gen-soft-gray)" }}
              >
                <GraduationCap className="mr-2 h-4 w-4 shrink-0" />
                <span>Info beasiswa yang mungkin cocok buatmu</span>
              </div>
              <div
                className="gen-pill inline-flex items-center rounded-2xl px-4 py-3 text-sm"
                style={{ color: "var(--gen-soft-gray)" }}
              >
                <Mic className="mr-2 h-4 w-4 shrink-0" />
                <span>Event & tryout biar kamu lebih siap</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/artikel"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "var(--gen-btn-primary-bg)",
                  color: "var(--gen-btn-primary-fg)",
                  border: "1px solid var(--gen-btn-primary-border)",
                }}
              >
                Jelajahi Artikel{" "}
                <span style={{ color: "var(--gen-cta)" }}>→</span>
              </Link>

              <Link
                href="/beasiswa"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold"
                style={{
                  background: "var(--gen-btn-ghost-bg)",
                  color: "var(--gen-btn-ghost-fg)",
                  border: "1px solid var(--gen-btn-ghost-border)",
                }}
              >
                Cek Beasiswa
              </Link>

              <Link
                href="/event"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold"
                style={{
                  background: "var(--gen-btn-ghost-bg)",
                  color: "var(--gen-btn-ghost-fg)",
                  border: "1px solid var(--gen-btn-ghost-border)",
                }}
              >
                Lihat Event
              </Link>
            </div>

            <p
              className="mt-4 inline-flex items-start gap-2 text-xs"
              style={{
                color:
                  "color-mix(in srgb, var(--gen-soft-gray) 88%, transparent)",
              }}
            >
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Jelajahi menu Artikel, Beasiswa, dan Event di Gala Edukasi
                Nusantara. Karena masa depanmu terlalu berharga untuk ditentukan
                asal-asalan.
              </span>
            </p>
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
      {/* <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
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
      </section> */}
    </div>
  );
}
