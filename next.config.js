/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
