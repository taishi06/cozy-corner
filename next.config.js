/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    images: {
        // domains: ['images.unsplash.com']
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
    }
}

module.exports = nextConfig
