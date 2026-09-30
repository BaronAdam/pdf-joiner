import type { PageFormat } from "./i18n";
import type { PdfItem } from "./types";

const PAPER: [string, number, number][] = [
  ["A4", 595, 842],
  ["A3", 842, 1191],
  ["A5", 420, 595],
  ["Letter", 612, 792],
  ["Legal", 612, 1008],
];

export function describeFormat(w: number, h: number): PageFormat {
  const [short, long] = w <= h ? [w, h] : [h, w];
  const hit = PAPER.find(
    ([, pw, ph]) => Math.abs(pw - short) <= 6 && Math.abs(ph - long) <= 6,
  );
  return { paper: hit ? hit[0] : null, w, h, landscape: w > h };
}

export class PdfReadError extends Error {
  constructor(public code: "password" | "unreadable") {
    super(code);
  }
}

/** Reads page count, first-page size and a thumbnail. Preview only, never used for output. */
export async function readPdfInfo(
  file: File,
): Promise<Omit<PdfItem, "id" | "file">> {
  const pdfjs = await import("pdfjs-dist");
  if (!pdfjs.GlobalWorkerOptions.workerSrc) {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url,
    ).toString();
  }

  const data = new Uint8Array(await file.arrayBuffer());
  const task = pdfjs.getDocument({ data });
  try {
    const doc = await task.promise;
    const page = await doc.getPage(1);
    const base = page.getViewport({ scale: 1 });
    const scale = Math.min(2, 400 / Math.max(base.width, base.height));
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    await page.render({ canvas, viewport }).promise;
    return {
      name: file.name,
      size: file.size,
      pageCount: doc.numPages,
      thumb: canvas.toDataURL("image/jpeg", 0.8),
      format: describeFormat(base.width, base.height),
    };
  } catch (err) {
    const name = (err as { name?: string })?.name;
    throw new PdfReadError(
      name === "PasswordException" ? "password" : "unreadable",
    );
  } finally {
    void task.destroy();
  }
}

export function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${Math.round(n / 1024)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}
