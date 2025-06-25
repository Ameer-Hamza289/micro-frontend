/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['shared'],
  images: {
    domains: ['api.placeholder.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig 