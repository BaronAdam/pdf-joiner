"use client";

import { useRef, useState } from "react";
import { useI18n } from "@/lib/useSettings";
import { UploadIcon } from "./icons";

type Props = {
  variant: "hero" | "compact";
  disabled?: boolean;
  onFiles: (files: File[]) => void;
};

export default function DropZone({ variant, disabled, onFiles }: Props) {
  const { t } = useI18n();
  const input = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);

  const take = (list: FileList | null) => {
    if (list && list.length) onFiles(Array.from(list));
  };

  const handlers = {
    onDragOver: (e: React.DragEvent) => {
      if (disabled || !e.dataTransfer.types.includes("Files")) return;
      e.preventDefault();
      setOver(true);
    },
    onDragLeave: () => setOver(false),
    onDrop: (e: React.DragEvent) => {
      if (disabled) return;
      e.preventDefault();
      setOver(false);
      take(e.dataTransfer.files);
    },
  };

  const hidden = (
    <input
      ref={input}
      type="file"
      accept="application/pdf,.pdf"
      multiple
      className="sr-only"
      tabIndex={-1}
      aria-hidden
      onChange={(e) => {
        take(e.target.files);
        e.target.value = "";
      }}
    />
  );

  if (variant === "hero") {
    return (
      <div
        {...handlers}
        className={`flex w-full max-w-[760px] flex-col items-center gap-5 rounded-[20px] border-2 border-dashed border-accent bg-accent-soft px-10 py-14 transition-shadow ${
          over ? "ring-4 ring-accent/30" : ""
        }`}
      >
        <UploadIcon size={56} className="text-accent" strokeWidth={1.5} />
        <div className="text-xl font-semibold">{t.dropHero}</div>
        <div className="text-[15px] text-muted">{t.or}</div>
        <button
          type="button"
          onClick={() => input.current?.click()}
          className="h-[52px] rounded-xl bg-btn px-8 text-base font-semibold text-btn-fg"
        >
          {t.browse}
        </button>
        {hidden}
      </div>
    );
  }

  return (
    <div
      {...handlers}
      className={`flex flex-wrap items-center gap-5 rounded-[14px] border-2 border-dashed px-6 py-[18px] transition-colors ${
        over ? "border-accent bg-accent-soft" : "border-dash bg-surface2"
      }`}
    >
      <UploadIcon size={32} className="text-accent" strokeWidth={1.6} />
      <div className="min-w-[240px] flex-1">
        <div className="text-base font-semibold">{t.dropTitle}</div>
        <div className="mt-0.5 text-sm text-muted">{t.dropSub}</div>
      </div>
      <button
        type="button"
        disabled={disabled}
        onClick={() => input.current?.click()}
        className="min-h-11 rounded-[10px] border-[1.5px] border-ink px-5 text-[15px] font-semibold disabled:opacity-40"
      >
        {t.browse}
      </button>
      {hidden}
    </div>
  );
}
