"use client";

import { DownloadIcon, SpinnerIcon } from "./icons";

type Props = {
  fileCount: number;
  pageCount: number;
  busy: boolean;
  step: number;
  currentName?: string;
  done: boolean;
  error: string | null;
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
  error,
  canMerge,
  outName,
  onOutName,
  onMerge,
}: Props) {
  const pct = busy ? Math.round(((step + 0.5) / fileCount) * 100) : 0;

  return (
    <footer className="sticky bottom-0 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line bg-surface px-6 py-[18px] sm:px-16">
      <div className="flex w-full flex-col gap-1.5 sm:w-[380px]" aria-live="polite">
        <span className="text-base font-semibold">
          {fileCount} {fileCount === 1 ? "file" : "files"} · {pageCount} pages
        </span>
        {busy ? (
          <>
            <div
              role="progressbar"
              aria-label="Merge progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={pct}
              className="h-2 overflow-hidden rounded bg-[#e4dfd1]"
            >
              <div
                className="h-full rounded bg-accent transition-[width] duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="truncate text-[13px] font-semibold text-accent">
              Adding file {Math.min(step + 1, fileCount)} of {fileCount}
              {currentName ? ` — ${currentName}` : ""}
            </span>
          </>
        ) : error ? (
          <span className="text-[13px] font-semibold text-danger">{error}</span>
        ) : done ? (
          <span className="text-[13px] font-semibold text-accent">
            Done — {outName} downloaded.
          </span>
        ) : (
          <span className="text-[13px] text-muted">
            Merged in your browser, nothing uploaded.
          </span>
        )}
      </div>

      <div className="hidden flex-1 sm:block" />

      <label htmlFor="outname" className="text-sm text-muted">
        File name
      </label>
      <input
        id="outname"
        type="text"
        value={outName}
        disabled={busy}
        onChange={(e) => onOutName(e.target.value)}
        className="h-11 w-[200px] rounded-[10px] border-[1.5px] border-[#b9b2a0] bg-[#fbf9f4] px-3.5 text-[15px]"
      />
      <button
        type="button"
        onClick={onMerge}
        disabled={!canMerge || busy}
        className={`flex h-12 items-center gap-2.5 rounded-xl px-6 text-base font-semibold text-white ${
          !canMerge ? "bg-[#8a8677]" : busy ? "bg-[#3f7f7c]" : "bg-accent"
        }`}
      >
        {busy ? <SpinnerIcon /> : <DownloadIcon />}
        {busy ? "Merging…" : "Merge & download"}
      </button>
    </footer>
  );
}
