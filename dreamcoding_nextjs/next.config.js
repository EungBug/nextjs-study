/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever', // 어느 경로로 들어온 경우
        destination: '/products', // 이 경로로 리다이렉트 하겠다.
        permanent: true // 308 code와 함께 캐시하도록 설정
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false 
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/me',
        destination: '/about/me'
      }
    ]
  }
}

module.exports = nextConfig
