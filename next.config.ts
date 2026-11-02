import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (output goes to the `out/` folder)
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Only needed if the repo is NOT named <username>.github.io, e.g. "/portfolio"
  // basePath: "/portfolio",
};

export default nextConfig;
