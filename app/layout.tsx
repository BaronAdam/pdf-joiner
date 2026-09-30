import type { Metadata } from "next";
import { Young_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Young_Serif({
  variable: "--font-display-face",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "PDF Joiner",
  description:
    "Join PDFs page for page, right in your browser. Files never leave your device.",
};

// Runs before first paint so the saved (or OS) theme never flashes.
const themeScript = `try{var t=localStorage.getItem('pj-theme');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${instrument.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
