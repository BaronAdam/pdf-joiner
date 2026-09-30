"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { PdfItem } from "@/lib/types";
import { formatBytes } from "@/lib/pdfInfo";
import { formatLabel } from "@/lib/i18n";
import { useI18n } from "@/lib/useSettings";
import {
  ChevronLeft,
  ChevronRight,
  CheckIcon,
  CloseIcon,
  GripIcon,
  SpinnerIcon,
} from "./icons";

type Props = {
  item: PdfItem;
  index: number;
  count: number;
  busy: boolean;
  /** "active" while its pages are being added, "done" once added. */
  mergeState?: "active" | "done";
  onMove: (dir: -1 | 1) => void;
  onRemove: () => void;
};

const arrowBtn =
  "flex size-11 items-center justify-center rounded-[10px] border border-line bg-surface2 disabled:opacity-35";

export default function FileCard({
  item,
  index,
  count,
  busy,
  mergeState,
  onMove,
  onRemove,
}: Props) {
  const { t, count: fmtCount } = useI18n();
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id, disabled: busy });

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`flex flex-col overflow-hidden rounded-[14px] border border-line bg-surface ${
        isDragging ? "z-10 opacity-60 shadow-xl ring-[3px] ring-accent" : ""
      }`}
    >
      {/* The whole preview is the drag surface. */}
      <div
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
        aria-label={t.dragLabel(item.name, index + 1, count)}
        className={`relative flex h-[196px] touch-none items-center justify-center bg-well ${
          busy ? "cursor-default" : "cursor-grab active:cursor-grabbing"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.thumb}
          alt=""
          draggable={false}
          className="max-h-[150px] max-w-[85%] border border-[#cfc8b6] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
        />
        <span className="absolute left-2.5 top-2.5 flex size-7 items-center justify-center rounded-full bg-btn text-sm font-semibold text-btn-fg">
          {index + 1}
        </span>
        <span className="absolute right-2.5 top-2.5 text-muted">
          <GripIcon />
        </span>
        {mergeState === "active" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-paper/70">
            <SpinnerIcon size={34} className="text-accent" />
            <span className="text-[13px] font-semibold text-accent">
              {t.adding}
            </span>
          </div>
        )}
        {mergeState === "done" && (
          <div className="absolute inset-0 flex items-center justify-center bg-paper/70">
            <span className="pj-pop flex size-12 items-center justify-center rounded-full bg-btn text-btn-fg">
              <CheckIcon size={26} />
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-0.5 px-4 pb-3 pt-3.5">
        <div className="truncate text-[15px] font-semibold" title={item.name}>
          {item.name}
        </div>
        <div className="truncate text-[13px] text-muted">
          {fmtCount(item.pageCount, "page")} · {formatLabel(t, item.format)} ·{" "}
          {formatBytes(item.size)}
        </div>
      </div>

      <div className="flex items-center gap-1 px-2.5 pb-2.5">
        <button
          type="button"
          className={arrowBtn}
          disabled={busy || index === 0}
          onClick={() => onMove(-1)}
          aria-label={t.earlier(item.name)}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          className={arrowBtn}
          disabled={busy || index === count - 1}
          onClick={() => onMove(1)}
          aria-label={t.later(item.name)}
        >
          <ChevronRight size={18} />
        </button>
        <div className="flex-1" />
        <button
          type="button"
          disabled={busy}
          onClick={onRemove}
          aria-label={t.remove(item.name)}
          className="flex size-11 items-center justify-center rounded-[10px] text-danger disabled:opacity-35"
        >
          <CloseIcon size={18} />
        </button>
      </div>
    </li>
  );
}

export function PendingCard({ name }: { name: string }) {
  const { t } = useI18n();
  return (
    <li
      aria-busy="true"
      className="flex flex-col overflow-hidden rounded-[14px] border border-line bg-surface"
    >
      <div className="pj-shim flex h-[196px] flex-col items-center justify-center gap-2.5">
        <SpinnerIcon size={30} className="text-accent" />
        <span className="text-[13px] font-semibold">{t.reading}</span>
      </div>
      <div className="flex flex-col gap-2 px-4 pb-3 pt-3.5">
        <div className="truncate text-[15px] font-semibold">{name}</div>
        <div className="h-1.5 overflow-hidden rounded-[3px] bg-skel">
          <div className="pj-bar h-full w-2/5 rounded-[3px] bg-accent" />
        </div>
      </div>
      <div className="h-[54px]" />
    </li>
  );
}
