"use client";

import Link from "next/link";
import { POLICIES } from "@/lib/policy";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/useSettings";

export default function SiteFooter() {
  const { locale } = useI18n();
  return (
    <footer
      data-fade
      className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-line px-6 py-4 text-sm text-muted sm:px-16"
    >
      <span>
        © {SITE.copyrightYear} {SITE.owner}
      </span>
      <Link href="/privacy/" className="min-h-6 underline underline-offset-4 hover:text-ink">
        {POLICIES[locale].footerPrivacy}
      </Link>
    </footer>
  );
}
