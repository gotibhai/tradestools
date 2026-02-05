/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tradestools',
  assetPrefix: '/tradestools/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
