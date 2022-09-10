/** @type {import('next').NextConfig} */
const { CALENDLY_LINK } = require('./links');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/meet',
        destination: CALENDLY_LINK,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
