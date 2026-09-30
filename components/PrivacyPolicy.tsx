"use client";

import { useEffect } from "react";
import Link from "next/link";
import { POLICIES } from "@/lib/policy";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/useSettings";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ChevronLeft, LockIcon } from "./icons";

/** Renders `code` spans written with backticks. */
function inline(text: string) {
  return text.split("`").map((part, i) =>
    i % 2 ? (
      <code key={i} className="rounded bg-well px-1.5 py-0.5 font-mono text-[0.9em]">
        {part}
      </code>
    ) : (
      part
    ),
  );
}

export default function PrivacyPolicy() {
  const { locale } = useI18n();
  const p = POLICIES[locale];
  const date = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(SITE.policyUpdated));

  useEffect(() => {
    document.title = `${p.title} – PDF Joiner`;
  }, [p.title]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main data-fade className="flex-1 px-6 pb-16 pt-10 sm:px-16">
        <article className="mx-auto flex max-w-[720px] flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-1 self-start text-sm font-semibold text-accent"
            >
              <ChevronLeft size={16} />
              {p.back}
            </Link>
            <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {p.title}
            </h1>
            <p className="text-sm text-muted">{p.updated(date)}</p>
          </div>

          <section className="rounded-2xl border border-accent/40 bg-accent-soft p-6">
            <h2 className="mb-3 flex items-center gap-2 font-display text-xl">
              <LockIcon size={20} className="text-accent" />
              {p.summaryTitle}
            </h2>
            <ul className="flex list-disc flex-col gap-2 pl-5 leading-relaxed marker:text-accent">
              {p.summary.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          {p.sections.map((s) => (
            <section key={s.heading} className="flex flex-col gap-3">
              <h2 className="font-display text-2xl">{s.heading}</h2>
              {s.body.map((para) => (
                <p key={para} className="leading-relaxed">
                  {inline(para)}
                </p>
              ))}
              {s.list && (
                <ul className="flex list-disc flex-col gap-1.5 pl-5 leading-relaxed">
                  {s.list.map((li) => (
                    <li key={li}>{inline(li)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="flex flex-col gap-3">
            <h2 className="font-display text-2xl">{p.contact.heading}</h2>
            <p className="leading-relaxed">
              {p.contact.body}{" "}
              <a
                href={SITE.ownerUrl}
                rel="noopener noreferrer"
                className="font-semibold text-accent underline underline-offset-4"
              >
                {p.contact.linkText}
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
