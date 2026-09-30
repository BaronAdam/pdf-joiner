"use client";

import { useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import type { PdfItem, PendingItem, Rejection } from "@/lib/types";
import { readPdfInfo } from "@/lib/pdfInfo";
import { downloadPdf, mergePdfs, sanitizeFilename } from "@/lib/mergePdfs";
import DropZone from "./DropZone";
import FileCard, { PendingCard } from "./FileCard";
import MergeBar from "./MergeBar";
import { LockIcon, LogoIcon } from "./icons";

export default function PdfJoiner() {
  const [items, setItems] = useState<PdfItem[]>([]);
  const [pending, setPending] = useState<PendingItem[]>([]);
  const [rejections, setRejections] = useState<Rejection[]>([]);
  const [busy, setBusy] = useState(false);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [outName, setOutName] = useState("merged.pdf");

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const reset = () => {
    setDone(false);
    setError(null);
  };

  const addFiles = (files: File[]) => {
    reset();
    for (const file of files) {
      const id = crypto.randomUUID();
      if (!/\.pdf$/i.test(file.name) && file.type !== "application/pdf") {
        setRejections((r) => [
          ...r,
          { id, message: `${file.name} isn't a PDF and was skipped.` },
        ]);
        continue;
      }
      setPending((p) => [...p, { id, name: file.name }]);
      readPdfInfo(file)
        .then((info) => setItems((prev) => [...prev, { id, file, ...info }]))
        .catch((e: Error) =>
          setRejections((r) => [...r, { id, message: `${file.name}: ${e.message}` }]),
        )
        .finally(() => setPending((p) => p.filter((x) => x.id !== id)));
    }
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;
    reset();
    setItems((prev) =>
      arrayMove(
        prev,
        prev.findIndex((i) => i.id === active.id),
        prev.findIndex((i) => i.id === over.id),
      ),
    );
  };

  const move = (index: number, dir: -1 | 1) => {
    reset();
    setItems((prev) => arrayMove(prev, index, index + dir));
  };

  const merge = async () => {
    setBusy(true);
    setDone(false);
    setError(null);
    setStep(0);
    try {
      const bytes = await mergePdfs(
        items.map((i) => i.file),
        setStep,
      );
      const name = sanitizeFilename(outName);
      setOutName(name);
      downloadPdf(bytes, name);
      setDone(true);
    } catch {
      setError("Merging failed. One of the files may be damaged.");
    } finally {
      setBusy(false);
    }
  };

  const totalPages = items.reduce((n, i) => n + i.pageCount, 0);
  const empty = items.length === 0 && pending.length === 0;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex flex-wrap items-center justify-between gap-2 px-6 pt-6 sm:px-16">
        <div className="flex items-center gap-3">
          <LogoIcon size={28} className="text-accent" strokeWidth={1.8} />
          <span className="font-display text-[26px] tracking-tight">PDF Joiner</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted">
          <LockIcon size={16} className="text-accent" />
          Files never leave your device
        </div>
      </header>

      {empty ? (
        <main className="flex flex-1 flex-col items-center justify-center gap-9 px-6 pb-12 sm:px-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-[52px]">
              Join PDFs, page for page.
            </h1>
            <p className="max-w-[560px] text-lg leading-normal text-muted">
              Add your files, put them in the order you want, and download one
              PDF. Nothing is resized or re-rendered.
            </p>
          </div>
          <DropZone variant="hero" onFiles={addFiles} />
          <ol className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-[#4a463d]">
            <li>1 · Add two or more PDFs</li>
            <li>2 · Drag to rearrange</li>
            <li>3 · Merge &amp; download</li>
          </ol>
          <Rejections list={rejections} onDismiss={setRejections} />
        </main>
      ) : (
        <main className="flex flex-1 flex-col gap-7 px-6 pb-8 pt-8 sm:px-16">
          <DropZone variant="compact" disabled={busy} onFiles={addFiles} />
          <Rejections list={rejections} onDismiss={setRejections} />

          <section className="flex flex-col gap-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h2 className="font-display text-2xl">Join order</h2>
                <span className="text-sm text-muted">
                  Drag any preview onto another to swap places, or use the
                  arrows. First card becomes the first pages.
                </span>
              </div>
              <button
                type="button"
                disabled={busy}
                onClick={() => {
                  reset();
                  setItems([]);
                }}
                className="min-h-11 px-2 text-sm font-semibold text-danger underline disabled:opacity-40"
              >
                Clear all
              </button>
            </div>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={onDragEnd}
            >
              <SortableContext
                items={items.map((i) => i.id)}
                strategy={rectSortingStrategy}
              >
                <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((item, i) => (
                    <FileCard
                      key={item.id}
                      item={item}
                      index={i}
                      count={items.length}
                      busy={busy}
                      mergeState={
                        busy ? (i === step ? "active" : i < step ? "done" : undefined) : undefined
                      }
                      onMove={(dir) => move(i, dir)}
                      onRemove={() => {
                        reset();
                        setItems((prev) => prev.filter((x) => x.id !== item.id));
                      }}
                    />
                  ))}
                  {pending.map((p) => (
                    <PendingCard key={p.id} name={p.name} />
                  ))}
                </ul>
              </SortableContext>
            </DndContext>
          </section>
        </main>
      )}

      {!empty && (
        <MergeBar
          fileCount={items.length}
          pageCount={totalPages}
          busy={busy}
          step={step}
          currentName={items[step]?.name}
          done={done}
          error={error}
          canMerge={items.length >= 2 && pending.length === 0}
          outName={outName}
          onOutName={setOutName}
          onMerge={merge}
        />
      )}
    </div>
  );
}

function Rejections({
  list,
  onDismiss,
}: {
  list: Rejection[];
  onDismiss: (l: Rejection[]) => void;
}) {
  if (!list.length) return null;
  return (
    <div
      role="alert"
      className="flex w-full max-w-[760px] items-start gap-4 rounded-xl border border-danger bg-[#fbedea] px-4 py-3 text-sm text-[#8a2414]"
    >
      <ul className="flex-1 space-y-1">
        {list.map((r) => (
          <li key={r.id}>{r.message}</li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => onDismiss([])}
        className="font-semibold underline"
      >
        Dismiss
      </button>
    </div>
  );
}
