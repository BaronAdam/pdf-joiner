"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALES } from "@/lib/i18n";
import { useI18n } from "@/lib/useSettings";
import { CheckIcon, ChevronDown, GlobeIcon } from "./icons";

export default function LanguageMenu() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LOCALES.find((l) => l.code === locale)!;

  return (
    <div ref={root} className="relative">
      <button
        ref={trigger}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t.language}
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 items-center gap-2 rounded-[10px] border border-line bg-surface pl-3.5 pr-3 text-[15px] font-medium"
      >
        <GlobeIcon size={18} strokeWidth={1.8} />
        <span className="hidden sm:inline">{current.name}</span>
        <span className="sm:hidden uppercase">{current.code}</span>
        <ChevronDown size={16} />
      </button>
      {open && (
        <div
          role="menu"
          aria-label={t.language}
          className="absolute right-0 top-[52px] z-20 flex w-[212px] flex-col gap-0.5 rounded-xl border border-line bg-surface p-1.5 shadow-[0_12px_32px_var(--menu-shadow)]"
        >
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              role="menuitemradio"
              aria-checked={l.code === locale}
              lang={l.code}
              autoFocus={l.code === locale}
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
                trigger.current?.focus();
              }}
              className="flex min-h-11 items-center justify-between rounded-lg px-3 text-left text-[15px] font-medium hover:bg-well"
            >
              {l.name}
              {l.code === locale && (
                <CheckIcon size={18} className="text-accent" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
