"use client";

import { useEffect, useState } from "react";

type ThemePreference = "light" | "dark" | "system";

const options: ThemePreference[] = ["light", "dark", "system"];
const storageKey = "alanliu-theme";

function applyTheme(theme: ThemePreference) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = theme === "dark" || (theme === "system" && prefersDark);

  document.documentElement.classList.toggle("dark", shouldUseDark);
  document.documentElement.dataset.theme = theme;
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemePreference>("system");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const initialTheme = options.includes(storedTheme as ThemePreference)
      ? (storedTheme as ThemePreference)
      : "system";

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => applyTheme("system");

    mediaQuery.addEventListener("change", updateSystemTheme);
    return () => mediaQuery.removeEventListener("change", updateSystemTheme);
  }, [theme]);

  function updateTheme(nextTheme: ThemePreference) {
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <div
      className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-700 dark:bg-slate-900"
      aria-label="Theme preference"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => updateTheme(option)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition ${
            theme === option
              ? "bg-blue-600 text-white"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          }`}
          aria-pressed={theme === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
