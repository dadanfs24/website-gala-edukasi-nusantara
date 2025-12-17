export type Status = "Open" | "Closed" | "Coming Soon";
export type ScholarshipLevel = "S1" | "S2" | "S3" | "D3" | "Umum";

export interface Scholarship {
  slug: string;
  name: string;
  organizer: string;
  level: ScholarshipLevel[];
  benefits: string[];
  deadlineISO: string;
  status: Status;
  isSponsored?: boolean;
  description: string;
  requirements: string[];
  link?: string;
}

export type ArticleCategory =
  | "Tips Beasiswa"
  | "Tips Memilih Kampus"
  | "Panduan Kampus & Jurusan"
  | "Prospek Karier"
  | "Panduan Orang Tua"
  | "Perilaku Gen-Z"
  | "Informasi Relevan";


export interface Article {
  slug: string;
  title: string;
  thumbnail: string;
  excerpt: string;
  author: string;
  category: ArticleCategory;
  publishedISO: string;
  isSponsored?: boolean;
  content: string;
}

export interface EventItem {
  slug: string;
  title: string;
  cover: string;
  organizer: string;
  startISO: string;
  location: "Online" | "Offline" | "Hybrid";
  priceLabel: "Gratis" | "Berbayar";
  status: Status;
  ctaLabel: "Lihat Detail" | "Daftar";
  isSponsored?: boolean;
  description: string;
  link?: string;
}

export interface Campus {
  slug: string;
  name: string;
  city: string;
  province: string;
  highlight: string;
  isSpotlight?: boolean;
  programs: string[];
  scholarshipInfo: string[];
  media: { type: "image" | "video"; title: string; url: string }[];
}
