/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.ignoreWarnings = [{ module: /node_modules\/@tableland\/sqlparser/ }]; // Silence warnings from `@tableland/sqlparser` and `Critical dependency: require function...`
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
