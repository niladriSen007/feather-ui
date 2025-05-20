import type { NextConfig } from "next";
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["randomuser.me",'images.unsplash.com'],
  }
};

export default withMDX(nextConfig);
