import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.102"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.magnific.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;