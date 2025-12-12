import { EventItem } from "@/lib/types";

export const events: EventItem[] = [
  {
    slug: "tryout-utbk-gen-1",
    title: "Tryout UTBK GEN #1 (Online)",
    cover:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=60",
    organizer: "GEN (Gala Edukasi Nusantara)",
    startISO: "2026-01-12T19:30",
    location: "Online",
    priceLabel: "Gratis",
    status: "Open",
    ctaLabel: "Daftar",
    description:
      "Tryout online + pembahasan ringkas. Cocok buat kamu yang mau ukur kemampuan dan bikin strategi belajar.",
    link: "https://example.com",
  },
  {
    slug: "webinar-biaya-kuliah-untuk-ortu",
    title: "Webinar Orang Tua: Biaya Kuliah, UKT, dan Strategi Finansial",
    cover:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=60",
    organizer: "GEN Education",
    startISO: "2026-01-20T20:00",
    location: "Online",
    priceLabel: "Berbayar",
    status: "Coming Soon",
    ctaLabel: "Lihat Detail",
    description:
      "Edukasi orang tua: estimasi biaya, prospek karier, dan cara berdiskusi dengan anak memakai data.",
    isSponsored: true,
  },
  {
    slug: "pameran-kampus-mini",
    title: "Mini Campus Expo (Offline - Bandung)",
    cover:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=60",
    organizer: "Mitra Kampus",
    startISO: "2026-02-02T10:00",
    location: "Offline",
    priceLabel: "Gratis",
    status: "Closed",
    ctaLabel: "Lihat Detail",
    description:
      "Pameran kampus mini untuk konsultasi jurusan dan jalur masuk. Slot promosi event untuk mitra.",
  },
];
