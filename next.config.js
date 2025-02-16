const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ["react-p5"],
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /react-p5/,
      parser: {
        amd: false,
      },
    });
    return config;
  },
  transpilePackages: ["react-p5"],
};
module.exports = nextConfig;
