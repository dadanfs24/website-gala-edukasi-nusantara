import Link from "next/link";

export function SiteFooter() {
  const linkBase = "transition-colors hover:text-[color:var(--gen-fg)]";

  return (
    <footer style={{ borderTop: "1px solid var(--gen-border)" }} className="mt-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="text-lg font-extrabold tracking-tight text-[color:var(--gen-fg)]">
            GEN
          </div>
          <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">
            Gala Edukasi Nusantara — platform edukasi untuk membantu siswa menemukan jurusan,
            kampus, dan beasiswa yang tepat.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:col-span-2">
          <div>
            <div className="text-sm font-semibold text-[color:var(--gen-fg)]">Menu</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[color:var(--gen-soft-gray)]">
              <Link className={linkBase} href="/beasiswa">Beasiswa</Link>
              <Link className={linkBase} href="/artikel">Artikel</Link>
              <Link className={linkBase} href="/event">Event</Link>
              <Link className={linkBase} href="/dashboard/kampus">Dashboard Kampus</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-[color:var(--gen-fg)]">Kerja Sama</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[color:var(--gen-soft-gray)]">
              <Link className={linkBase} href="mailto:partnership@gen.id">Partnership</Link>
              <Link className={linkBase} href="mailto:editorial@gen.id">Editorial</Link>
              <Link className={linkBase} href="mailto:support@gen.id">Support</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="text-xs text-[color:var(--gen-soft-gray)]/80">
          © {new Date().getFullYear()} GEN — Gala Edukasi Nusantara. All rights reserved.
        </div>

        {/* tambahan lucu + credit */}
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[color:var(--gen-soft-gray)]/80">
          <span>Built with ✨ </span>
          <span className="opacity-60">•</span>
          <span>
            Design by <span className="font-semibold text-[color:var(--gen-fg)]">Tim Gala Edukasi Nusantara</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
