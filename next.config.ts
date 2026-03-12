import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.gamemonetize.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "html5.gamemonetize.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
