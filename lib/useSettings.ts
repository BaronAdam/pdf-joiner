"use client";

import { useCallback, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import {
  DICTS,
  detectLocale,
  formatCount,
  isLocale,
  type Dict,
  type Locale,
} from "./i18n";

export type Theme = "light" | "dark";

const LOCALE_KEY = "pj-locale";
const THEME_KEY = "pj-theme";

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode etc. — the choice just won't persist */
  }
}

let langTimer: ReturnType<typeof setTimeout> | undefined;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const systemTheme =(): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

function subscribe(cb: () => void) {
  listeners.add(cb);
  // Follow the OS theme while the user hasn't picked one explicitly.
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystem = () => {
    if (!read(THEME_KEY)) {
      document.documentElement.dataset.theme = systemTheme();
      emit();
    }
  };
  mq.addEventListener("change", onSystem);
  return () => {
    listeners.delete(cb);
    mq.removeEventListener("change", onSystem);
  };
}

const getLocale = (): Locale => {
  const stored = read(LOCALE_KEY);
  return isLocale(stored) ? stored : detectLocale(navigator.languages ?? []);
};
const getTheme = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

export function useI18n(): {
  locale: Locale;
  t: Dict;
  setLocale: (l: Locale) => void;
  count: (n: number, kind: "page" | "file") => string;
} {
  const locale = useSyncExternalStore(subscribe, getLocale, () => "en" as Locale);
  const setLocale = useCallback((l: Locale) => {
    if (l === getLocale()) return;
    const apply = () => {
      write(LOCALE_KEY, l);
      emit();
    };
    if (prefersReducedMotion()) return apply();
    const root = document.documentElement;
    clearTimeout(langTimer);
    root.classList.add("lang-fading");
    langTimer = setTimeout(() => {
      apply();
      // Two frames so the new text is laid out before fading back in.
      requestAnimationFrame(() =>
        requestAnimationFrame(() => root.classList.remove("lang-fading")),
      );
    }, 170);
  }, []);
  const t = DICTS[locale];
  return {
    locale,
    t,
    setLocale,
    count: (n, kind) => formatCount(locale, n, t[kind]),
  };
}

type Origin = { x: number; y: number };

export function useTheme(): {
  theme: Theme;
  toggle: (origin?: Origin) => void;
} {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as Theme);
  const toggle = useCallback((origin?: Origin) => {
    const next: Theme = getTheme() === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const apply = () => {
      root.dataset.theme = next;
      write(THEME_KEY, next);
      emit();
    };
    if (prefersReducedMotion()) return apply();

    const doc = document as unknown as {
      startViewTransition?: (cb: () => void) => unknown;
    };
    if (doc.startViewTransition && origin) {
      // Circular reveal growing from the toggle to the farthest corner.
      const r = Math.hypot(
        Math.max(origin.x, innerWidth - origin.x),
        Math.max(origin.y, innerHeight - origin.y),
      );
      root.style.setProperty("--vt-x", `${origin.x}px`);
      root.style.setProperty("--vt-y", `${origin.y}px`);
      root.style.setProperty("--vt-r", `${r}px`);
      doc.startViewTransition(() => flushSync(apply));
    } else {
      root.classList.add("theme-anim");
      apply();
      setTimeout(() => root.classList.remove("theme-anim"), 450);
    }
  }, []);
  return { theme, toggle };
}
