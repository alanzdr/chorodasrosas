module.exports = (phase) => {
  return {
    images: {
      domains: ['images.pexels.com'],
      deviceSizes: [480, 640, 1024, 1280, 1400]
    },
    webpack: function (config) {
      config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })
      return config
    }
  }
}
