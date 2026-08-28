/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    // output: 'standalone',
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**'
            }
        ]
    },
    turbopack: {
        root: path.join(__dirname)
    },
    devIndicators: false
}

module.exports = nextConfig
