"use client";

import { useI18n } from "@/lib/useSettings";
import { DownloadIcon, SpinnerIcon } from "./icons";

type Props = {
  fileCount: number;
  pageCount: number;
  busy: boolean;
  step: number;
  currentName?: string;
  done: boolean;
  failed: boolean;
  canMerge: boolean;
  outName: string;
  onOutName: (v: string) => void;
  onMerge: () => void;
};

export default function MergeBar({
  fileCount,
  pageCount,
  busy,
  step,
  currentName,
  done,
  failed,
  canMerge,
  outName,
  onOutName,
  onMerge,
}: Props) {
  const { t, count } = useI18n();
  const pct = busy ? Math.round(((step + 0.5) / fileCount) * 100) : 0;

  return (
    <footer className="sticky bottom-0 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line bg-surface px-6 py-[18px] sm:px-16">
      <div className="flex w-full flex-col gap-1.5 sm:w-[400px]" aria-live="polite">
        <span className="text-base font-semibold">
          {count(fileCount, "file")} · {count(pageCount, "page")}
        </span>
        {busy ? (
          <>
            <div
              role="progressbar"
              aria-label={t.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={pct}
              className="h-2 overflow-hidden rounded bg-skel"
            >
              <div
                className="h-full rounded bg-accent transition-[width] duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="truncate text-[13px] font-semibold text-accent">
              {t.stepText(Math.min(step + 1, fileCount), fileCount, currentName ?? "")}
            </span>
          </>
        ) : failed ? (
          <span className="text-[13px] font-semibold text-danger">
            {t.mergeFailed}
          </span>
        ) : done ? (
          <span className="text-[13px] font-semibold text-accent">
            {t.done(outName)}
          </span>
        ) : (
          <span className="text-[13px] text-muted">{t.idle}</span>
        )}
      </div>

      <div className="hidden flex-1 sm:block" />

      <label htmlFor="outname" className="text-sm text-muted">
        {t.fileName}
      </label>
      <input
        id="outname"
        type="text"
        value={outName}
        disabled={busy}
        onChange={(e) => onOutName(e.target.value)}
        className="h-11 w-[200px] rounded-[10px] border-[1.5px] border-dash bg-surface2 px-3.5 text-[15px] text-ink"
      />
      <button
        type="button"
        onClick={onMerge}
        disabled={!canMerge || busy}
        className={`flex h-12 items-center gap-2.5 rounded-xl px-6 text-base font-semibold ${
          !canMerge
            ? "bg-btn-off text-btn-off-fg"
            : busy
              ? "bg-btn-busy text-btn-fg"
              : "bg-btn text-btn-fg"
        }`}
      >
        {busy ? <SpinnerIcon /> : <DownloadIcon />}
        {busy ? t.merging : t.merge}
      </button>
    </footer>
  );
}
