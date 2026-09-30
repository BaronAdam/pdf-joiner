"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/useSettings";
import LanguageMenu from "./LanguageMenu";
import ThemeToggle from "./ThemeToggle";
import { LockIcon, LogoIcon } from "./icons";

export default function SiteHeader() {
  const { t, locale } = useI18n();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <header className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 px-6 pt-6 sm:px-16">
      <Link href="/" className="flex items-center gap-3 rounded-lg">
        <LogoIcon size={28} className="text-accent" strokeWidth={1.8} />
        <span className="font-display text-[26px] tracking-tight">PDF Joiner</span>
      </Link>
      <div className="flex items-center gap-5">
        <div data-fade className="hidden items-center gap-2 text-sm text-muted lg:flex">
          <LockIcon size={16} className="text-accent" />
          {t.privacy}
        </div>
        <LanguageMenu />
        <ThemeToggle />
      </div>
    </header>
  );
}
