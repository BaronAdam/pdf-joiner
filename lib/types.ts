import type { PageFormat } from "./i18n";

export type PdfItem = {
  id: string;
  file: File;
  name: string;
  size: number;
  pageCount: number;
  thumb: string;
  format: PageFormat;
};

export type PendingItem = { id: string; name: string };

export type RejectionCode = "notPdf" | "password" | "unreadable";

export type Rejection = { id: string; name: string; code: RejectionCode };
