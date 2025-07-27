const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? '.' : '',
  output: 'export',
};

module.exports = nextConfig;
