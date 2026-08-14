import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits a self-contained server bundle for the Docker image.
  // Does not affect `next dev` / `next start` or platform deploys.
  output: "standalone",
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
  // Lets phones/other devices on the same WiFi load dev assets when testing
  // against this Mac's LAN IP (otherwise Next.js blocks the cross-origin
  // requests and the page loads with no interactive body).
  allowedDevOrigins: ["192.168.1.189"],
};

export default nextConfig;
