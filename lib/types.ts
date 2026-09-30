export type PdfItem = {
  id: string;
  file: File;
  name: string;
  size: number;
  pageCount: number;
  thumb: string;
  format: string;
};

export type PendingItem = { id: string; name: string };

export type Rejection = { id: string; message: string };
