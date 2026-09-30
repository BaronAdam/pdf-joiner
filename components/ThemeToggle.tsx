"use client";

import { useI18n, useTheme } from "@/lib/useSettings";
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useI18n();
  const label = theme === "dark" ? t.toLight : t.toDark;
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex size-11 items-center justify-center rounded-[10px] border border-line bg-surface"
    >
      {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </button>
  );
}
