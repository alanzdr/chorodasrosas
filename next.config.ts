import fs from 'node:fs/promises'

import type { NextConfig } from 'next'

const config: NextConfig = {
  experimental: {
    inlineCss: true,
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
    deviceSizes: [400, 768, 1024, 1280, 1400],
    dangerouslyAllowLocalIP: true,
  },
  turbopack: {
    rules: {
      '*.md': {
        loaders: ['raw-loader'],
        as: '*.js', // Tells Turbopack to treat the output as JS
      },
    },
  },
  async redirects() {
    const redirects: Array<{
      source: string
      destination: string
      permanent: boolean
    }> = []

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
