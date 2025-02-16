const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ["react-p5"],
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
  transpilePackages: ["react-p5"],
};

module.exports = withContentlayer(nextConfig);
