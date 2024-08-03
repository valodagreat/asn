/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/**'
          }
        ]
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    }
}

module.exports = nextConfig
