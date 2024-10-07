import fs from 'node:fs/promises'

const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
    deviceSizes: [400, 768, 1024, 1280, 1400],
  },
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })
    return config
  },
  async redirects() {
    const redirects = []

    // Redirect old blog posts
    const files = await fs.readdir('./src/data/poems')
    for (const file of files) {
      const slug = file.replace(/\.md$/, '')
      redirects.push({
        source: `/${slug}`,
        destination: `/poemas/${slug}`,
        permanent: true,
      })
    }

    return redirects
  },
}

export default config
