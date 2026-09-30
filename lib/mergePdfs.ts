import { PDFDocument } from "pdf-lib";

const tick = () => new Promise<void>((r) => setTimeout(r, 0));

/**
 * Appends every page of each file, in order. Pages are copied as-is
 * (copyPages), so size, rotation and vector content are untouched.
 * onStep(i) fires as file i starts; onStep(files.length) when saving.
 */
export async function mergePdfs(
  files: File[],
  onStep?: (index: number) => void,
): Promise<Uint8Array> {
  const out = await PDFDocument.create();
  for (let i = 0; i < files.length; i++) {
    onStep?.(i);
    await tick();
    const src = await PDFDocument.load(await files[i].arrayBuffer(), {
      updateMetadata: false,
    });
    const pages = await out.copyPages(src, src.getPageIndices());
    pages.forEach((p) => out.addPage(p));
  }
  onStep?.(files.length);
  await tick();
  return out.save();
}

export function downloadPdf(bytes: Uint8Array, filename: string) {
  const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

export function sanitizeFilename(raw: string): string {
  const base = raw.trim().replace(/[\\/:*?"<>|]+/g, "-") || "merged";
  return /\.pdf$/i.test(base) ? base : `${base}.pdf`;
}
