const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ["react-p5"],
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  webpack: (config) => {
    return config;
  },
};
module.exports = withContentlayer(nextConfig);
