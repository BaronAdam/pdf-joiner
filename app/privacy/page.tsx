import type { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy policy – PDF Joiner",
  description:
    "PDF Joiner processes your files in your browser. They are never uploaded. No cookies, no tracking.",
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
