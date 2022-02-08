module.exports = (phase) => {
  return {
    images: {
      domains: ['images.pexels.com'],
      deviceSizes: [375, 600, 1000, 1400]
    },
    webpack: function (config) {
      config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })
      return config
    },
    future: {
      webpack5: true
    }
  }
}
