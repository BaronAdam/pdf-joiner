"use client";

import { useRef } from "react";
import { useI18n, useTheme } from "@/lib/useSettings";
import { MoonIcon, SunIcon } from "./icons";

const shown = "rotate-0 scale-100 opacity-100";
const hidden = "-rotate-90 scale-50 opacity-0";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useI18n();
  const btn = useRef<HTMLButtonElement>(null);
  const dark = theme === "dark";
  const label = dark ? t.toLight : t.toDark;

  return (
    <button
      ref={btn}
      type="button"
      onClick={() => {
        const r = btn.current?.getBoundingClientRect();
        toggle(r && { x: r.left + r.width / 2, y: r.top + r.height / 2 });
      }}
      aria-label={label}
      title={label}
      className="relative flex size-11 items-center justify-center rounded-[10px] border border-line bg-surface transition-transform duration-150 active:scale-90"
    >
      {/* Both icons stay mounted so they can rotate/scale past each other. */}
      <SunIcon
        size={20}
        className={`absolute transition-all duration-500 ease-out ${dark ? shown : "rotate-90 scale-50 opacity-0"}`}
      />
      <MoonIcon
        size={20}
        className={`absolute transition-all duration-500 ease-out ${dark ? hidden : shown}`}
      />
    </button>
  );
}
