import Link from "next/link";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="rounded-xl px-3 py-2 text-sm font-semibold text-[color:var(--gen-soft-gray)] hover:bg-white/[0.06] hover:text-white"
  >
    {label}
  </Link>
);

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[color:var(--gen-bg)]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.06] ring-1 ring-white/10">
            <span className="text-[color:var(--gen-cta)] font-black">G</span>
          </span>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight">GEN</div>
            <div className="text-xs text-[color:var(--gen-soft-gray)]">Gala Edukasi Nusantara</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink href="/" label="Home" />
          <NavLink href="/beasiswa" label="Beasiswa" />
          <NavLink href="/artikel" label="Artikel" />
          <NavLink href="/event" label="Event" />
          {/* <NavLink href="/dashboard/kampus" label="Dashboard Kampus" /> */}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/upcoming"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-white hover:bg-white/[0.08]"
          >
            Gabung Yuk
          </Link>
        </div>
      </div>

      <div className="md:hidden">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3 sm:px-6">
          <NavLink href="/" label="Home" />
          <NavLink href="/beasiswa" label="Beasiswa" />
          <NavLink href="/artikel" label="Artikel" />
          <NavLink href="/event" label="Event" />
          <NavLink href="/dashboard/kampus" label="Dashboard" />
        </div>
      </div>
    </header>
  );
}
