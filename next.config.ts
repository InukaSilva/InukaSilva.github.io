import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    devIndicators: false,
    images: {
    unoptimized: true,  // disables Image Optimization API for static export
  },
    output: "export",
};

export default nextConfig;
