import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root so Next doesn't treat the parent test_claude app as the workspace.
  turbopack: { root: path.join(__dirname) },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
