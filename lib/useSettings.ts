"use client";

import { useCallback, useSyncExternalStore } from "react";
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

const systemTheme = (): Theme =>
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
    write(LOCALE_KEY, l);
    emit();
  }, []);
  const t = DICTS[locale];
  return {
    locale,
    t,
    setLocale,
    count: (n, kind) => formatCount(locale, n, t[kind]),
  };
}

export function useTheme(): { theme: Theme; toggle: () => void } {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as Theme);
  const toggle = useCallback(() => {
    const next: Theme = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    write(THEME_KEY, next);
    emit();
  }, []);
  return { theme, toggle };
}
