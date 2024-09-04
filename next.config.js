/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = nextConfig

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});