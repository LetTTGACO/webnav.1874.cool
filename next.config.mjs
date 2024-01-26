/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cos.codefe.top', 'image.1874.cool'],
  }
}

export default nextConfig
