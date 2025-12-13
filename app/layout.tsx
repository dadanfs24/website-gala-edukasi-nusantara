import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GEN — Gala Edukasi Nusantara",
  description:
    "Platform edukasi untuk membantu siswa menemukan jurusan, kampus, dan beasiswa yang tepat. Portal informasi pendidikan terpercaya.",
};

const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('gen-theme');
    var theme = saved;
    if (!theme) {
      var mql = window.matchMedia('(prefers-color-scheme: dark)');
      theme = mql.matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={plusJakarta.className}>
      <body className="gen-noise gen-dotbg">
        <SiteHeader />

        {/* ini yang bikin semua page punya dot background */}
        <main className="gen-dotbg min-h-screen">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}

