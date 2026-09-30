import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Fully client-side app: build to static files in ./out for Azure Static Web Apps.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
