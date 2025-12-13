"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(current);
  }, []);

  function apply(next: Theme) {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("gen-theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={() => apply(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-semibold"
      style={{
        borderColor: "var(--gen-border)",
        background: "var(--gen-card)",
        color: "var(--gen-fg)",
      }}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span style={{ color: "var(--gen-cta)" }}>{theme === "dark" ? "🌙" : "☀️"}</span>
      <span>{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
