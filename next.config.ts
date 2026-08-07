import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits a self-contained server bundle for the Docker image.
  // Does not affect `next dev` / `next start` or platform deploys.
  output: "standalone",
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
