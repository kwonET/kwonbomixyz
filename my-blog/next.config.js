const { withContentlayer } = require("next-contentlayer");
const options = {
  reactStrictMode: true,
  swcMinify: false,
};
module.exports = withContentlayer(options);
