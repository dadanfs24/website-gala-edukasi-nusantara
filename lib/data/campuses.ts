import { Campus } from "@/lib/types";

export const campuses: Campus[] = [
  {
    slug: "kampus-nusantara-tech",
    name: "Kampus Nusantara Tech",
    city: "Bandung",
    province: "Jawa Barat",
    highlight: "Spotlight: Informatika + Data Science dengan ekosistem industri.",
    isSpotlight: true,
    programs: ["Informatika", "Sistem Informasi", "Data Science", "DKV"],
    scholarshipInfo: ["Beasiswa prestasi", "Beasiswa UKT", "Program mitra industri"],
    media: [
      {
        type: "image",
        title: "Kegiatan Mahasiswa",
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60",
      },
      { type: "video", title: "Profil Kampus (placeholder)", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    slug: "universitas-gala-harmoni",
    name: "Universitas Gala Harmoni",
    city: "Yogyakarta",
    province: "DI Yogyakarta",
    highlight: "Rekomendasi: Psikologi + Pendidikan untuk calon pendidik Gen-Z.",
    programs: ["Psikologi", "Pendidikan Bahasa", "Manajemen", "Akuntansi"],
    scholarshipInfo: ["Beasiswa akademik", "Beasiswa organisasi", "Beasiswa keluarga"],
    media: [
      {
        type: "image",
        title: "Suasana Kelas",
        url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=60",
      },
    ],
  },
];
