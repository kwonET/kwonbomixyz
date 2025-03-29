const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ["react-p5"],
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...config.externals, "p5"];
    }
    return config;
  },
};
module.exports = withContentlayer(nextConfig);
