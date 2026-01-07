"use client";

import Link from "next/link";
import Image from "next/image"
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="rounded-xl px-3 py-2 text-sm font-semibold transition-colors"
    style={{ color: "var(--gen-soft-gray)" }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.background =
        "color-mix(in srgb, var(--gen-card-bg) 70%, transparent)";
      (e.currentTarget as HTMLAnchorElement).style.color = "var(--gen-fg)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
      (e.currentTarget as HTMLAnchorElement).style.color = "var(--gen-soft-gray)";
    }}
  >
    {label}
  </Link>
);

function MobileItem({
  href,
  label,
  onDone,
}: {
  href: string;
  label: string;
  onDone: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onDone}
      className="w-full rounded-2xl px-4 py-3 text-sm font-semibold"
      style={{
        background: "var(--gen-card-bg)",
        border: "1px solid var(--gen-border)",
        color: "var(--gen-fg)",
      }}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // lock scroll saat menu terbuka (bagus untuk iOS)
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-[9999] backdrop-blur pointer-events-auto"
        style={{
          borderBottom: "1px solid var(--gen-border)",
          background: "color-mix(in srgb, var(--gen-bg) 82%, transparent)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
  <span
    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl overflow-hidden"
    style={{
      background: "var(--gen-card-bg)",
      border: "1px solid var(--gen-border)",
    }}
  >
    <Image
      src="/images/gen-logo.png"
      alt="GEN Logo"
      width={40}
      height={40}
      className="h-10 w-10 object-contain"
      priority
    />
  </span>

  <div className="leading-tight">
    <div
      className="text-sm font-extrabold tracking-tight"
      style={{ color: "var(--gen-fg)" }}
    >
      GEN
    </div>
    <div className="text-xs" style={{ color: "var(--gen-soft-gray)" }}>
      Gala Edukasi Nusantara
    </div>
  </div>
</Link>


          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink href="/" label="Home" />
            <NavLink href="/beasiswa" label="Beasiswa" />
            <NavLink href="/artikel" label="Artikel" />
            <NavLink href="/event" label="Event" />
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* CTA: Beasiswa (desktop) */}
            <Link
              href="/beasiswa"
              className="hidden sm:inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "var(--gen-fg)",
                color: "var(--gen-bg)",
                boxShadow:
                  "0 0 0 1px color-mix(in srgb, var(--gen-border) 50%, transparent)",
              }}
            >
              Cari Beasiswa <span style={{ color: "var(--gen-cta)" }}>→</span>
            </Link>

            {/* Gabung (desktop) */}
            {/* <Link
              href="/upcoming"
              className="hidden sm:inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold transition-colors"
              style={{
                border: "1px solid var(--gen-border)",
                background: "var(--gen-card-bg)",
                color: "var(--gen-fg)",
              }}
            >
              Gabung Yuk
            </Link> */}

            {/* Hamburger (mobile) */}
            <button
              type="button"
              aria-label="Open menu"
              className="relative z-[10000] inline-flex h-10 w-10 items-center justify-center rounded-2xl md:hidden"
              style={{
                background: "var(--gen-card-bg)",
                border: "1px solid var(--gen-border)",
                color: "var(--gen-fg)",
              }}
              onClick={() => setOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ===== Mobile Fullscreen Menu (anti nabrak) ===== */}
      {open ? (
        <div className="fixed inset-0 z-[20000] md:hidden" role="dialog" aria-modal="true">
          {/* backdrop (klik untuk close) */}
          <button
            aria-label="Close menu backdrop"
            className="absolute inset-0"
            onClick={() => setOpen(false)}
            style={{ background: "rgba(0,0,0,.45)" }}
          />

          {/* sheet */}
          <div
            className="absolute inset-x-0 top-0"
            style={{
              paddingTop: "env(safe-area-inset-top)",
            }}
          >
            <div
              className="mx-auto w-full max-w-md"
              style={{
                height: "calc(100dvh - env(safe-area-inset-top))",
              }}
            >
              <div
                className="h-full overflow-hidden rounded-b-3xl"
                style={{
                  background: "var(--gen-bg)",
                  borderBottom: "1px solid var(--gen-border)",
                }}
              >
                {/* top bar */}
                <div
                  className="flex items-center justify-between px-4 py-4"
                  style={{
                    borderBottom: "1px solid var(--gen-border)",
                    background: "color-mix(in srgb, var(--gen-bg) 88%, transparent)",
                  }}
                >
                  <div className="text-sm font-extrabold" style={{ color: "var(--gen-fg)" }}>
                    Menu
                  </div>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl"
                    style={{
                      background: "var(--gen-card-bg)",
                      border: "1px solid var(--gen-border)",
                      color: "var(--gen-fg)",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    ✕
                  </button>
                </div>

                {/* content */}
                <div className="h-full overflow-y-auto px-4 pb-6 pt-4">
                  <div className="grid gap-2">
                    <MobileItem href="/" label="Home" onDone={() => setOpen(false)} />
                    <MobileItem href="/beasiswa" label="Beasiswa" onDone={() => setOpen(false)} />
                    <MobileItem href="/artikel" label="Artikel" onDone={() => setOpen(false)} />
                    <MobileItem href="/event" label="Event" onDone={() => setOpen(false)} />
                  </div>

                  <div className="mt-4 grid gap-2">
                    <Link
                      href="/beasiswa"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold"
                      style={{
                        background: "var(--gen-btn-primary-bg)",
                        color: "var(--gen-btn-primary-fg)",
                        border: "1px solid var(--gen-btn-primary-border)",
                      }}
                    >
                      Cari Beasiswa <span style={{ color: "var(--gen-cta)" }}>→</span>
                    </Link>

                    {/* <Link
                      href="/upcoming"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold"
                      style={{
                        background: "var(--gen-btn-ghost-bg)",
                        color: "var(--gen-btn-ghost-fg)",
                        border: "1px solid var(--gen-btn-ghost-border)",
                      }}
                    >
                      Gabung Yuk
                    </Link> */}
                  </div>

                  <div className="mt-6 text-xs" style={{ color: "var(--gen-soft-gray)" }}>
                    Tip: tap area gelap untuk menutup menu.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
