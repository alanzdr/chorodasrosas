const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ],
    deviceSizes: [400, 768, 1024, 1280, 1400]
  },
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })
    return config
  }
}

export default config
