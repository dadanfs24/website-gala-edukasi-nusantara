"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const NavLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={[
      "rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
      "text-[color:var(--gen-soft-gray)]",
      "hover:text-[color:var(--gen-fg)] hover:bg-[color:var(--gen-card)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gen-cta)]",
      "active:scale-[0.99]",
      "whitespace-nowrap",
    ].join(" ")}
  >
    {label}
  </Link>
);

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // prevent body scroll ketika menu mobile terbuka
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur"
      style={{
        borderBottom: "1px solid var(--gen-border)",
        background: "color-mix(in srgb, var(--gen-bg) 70%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <span
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
            style={{
              background: "var(--gen-card)",
              border: "1px solid var(--gen-border)",
            }}
          >
            <span className="font-black" style={{ color: "var(--gen-cta)" }}>
              G
            </span>
          </span>

          <div className="min-w-0 leading-tight">
            <div
              className="text-sm font-extrabold tracking-tight truncate"
              style={{ color: "var(--gen-fg)" }}
            >
              GEN
            </div>
            <div
              className="text-xs truncate"
              style={{ color: "var(--gen-soft-gray)" }}
            >
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

          {/* CTA: Gabung */}
          <Link
            href="/upcoming"
            className="hidden xs:inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold transition-colors"
            style={{
              border: "1px solid var(--gen-border)",
              background: "var(--gen-card)",
              color: "var(--gen-fg)",
            }}
          >
            Gabung Yuk
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex md:hidden items-center justify-center rounded-2xl p-2 transition-colors"
            style={{
              border: "1px solid var(--gen-border)",
              background: "var(--gen-card)",
              color: "var(--gen-fg)",
            }}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile quick nav row (optional, tetap enak buat tap cepat) */}
      <div className="md:hidden">
        <div
          className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3 sm:px-6"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <NavLink href="/" label="Home" />
          <NavLink href="/beasiswa" label="Beasiswa" />
          <NavLink href="/artikel" label="Artikel" />
          <NavLink href="/event" label="Event" />
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {open ? (
        <div className="md:hidden">
          {/* overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            style={{ background: "rgba(0,0,0,.35)" }}
          />

          {/* panel */}
          <div
            className="fixed left-0 right-0 top-[64px] z-50 mx-auto max-w-6xl px-4 sm:px-6"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="rounded-3xl p-3 shadow-xl"
              style={{
                background: "var(--gen-bg)",
                border: "1px solid var(--gen-border)",
              }}
            >
              <div className="grid gap-1 p-2">
                <NavLink href="/" label="Home" onClick={() => setOpen(false)} />
                <NavLink
                  href="/beasiswa"
                  label="Beasiswa"
                  onClick={() => setOpen(false)}
                />
                <NavLink
                  href="/artikel"
                  label="Artikel"
                  onClick={() => setOpen(false)}
                />
                <NavLink
                  href="/event"
                  label="Event"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div
                className="mt-2 grid gap-2 rounded-2xl p-3"
                style={{
                  background: "var(--gen-card)",
                  border: "1px solid var(--gen-border)",
                }}
              >
                <Link
                  href="/beasiswa"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-transform hover:scale-[1.01] active:scale-[0.98]"
                  style={{
                    background: "var(--gen-fg)",
                    color: "var(--gen-bg)",
                    border: "1px solid var(--gen-border)",
                  }}
                >
                  Cari Beasiswa <span style={{ color: "var(--gen-cta)" }}>→</span>
                </Link>

                <Link
                  href="/upcoming"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors"
                  style={{
                    border: "1px solid var(--gen-border)",
                    background: "transparent",
                    color: "var(--gen-fg)",
                  }}
                >
                  Gabung Yuk
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
