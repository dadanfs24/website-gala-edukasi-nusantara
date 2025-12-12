import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="text-lg font-extrabold tracking-tight">GEN</div>
          <p className="mt-2 text-sm text-[color:var(--gen-soft-gray)]/90">
            Gala Edukasi Nusantara — platform edukasi untuk membantu siswa menemukan jurusan, kampus, dan beasiswa yang tepat.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:col-span-2">
          <div>
            <div className="text-sm font-semibold text-white">Menu</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[color:var(--gen-soft-gray)]">
              <Link className="hover:text-white" href="/beasiswa">Beasiswa</Link>
              <Link className="hover:text-white" href="/artikel">Artikel</Link>
              <Link className="hover:text-white" href="/event">Event</Link>
              <Link className="hover:text-white" href="/dashboard/kampus">Dashboard Kampus</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Kerja Sama</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[color:var(--gen-soft-gray)]">
              <Link className="hover:text-white" href="mailto:partnership@gen.id">Partnership</Link>
              <Link className="hover:text-white" href="mailto:editorial@gen.id">Editorial</Link>
              <Link className="hover:text-white" href="mailto:support@gen.id">Support</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-8 text-xs text-[color:var(--gen-soft-gray)]/80 sm:px-6">
        © {new Date().getFullYear()} GEN — Gala Edukasi Nusantara. All rights reserved.
      </div>
    </footer>
  );
}
