import { GetServerSideProps } from 'next'
import { getAllPosts } from './api/posts'

interface SitemapUrl {
  url: string,
  lastmod: string
}

const createSitemap = (pages: SitemapUrl[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map(page => {
            return `
                    <url>
                        <loc>${page.url}</loc>
                        <lastmod>${page.lastmod}</lastmod>
                    </url>
                `
          })
          .join('')}
    </urlset>
    `

const EmptyComponent = () => {
  return <></>
}

export const getServerSideProps : GetServerSideProps = async ({ res }) => {
  const baseSiteUrl = 'http://chorodasrosas.com'
  
  const urls: SitemapUrl[] = [
    { url: baseSiteUrl, lastmod: new Date().toISOString() }
  ]

  const AddUrlPath = (path: string, lastmod: string) => {
    const url = `${baseSiteUrl}/${path}`
    urls.push({url, lastmod})
  }

  let lastDate: Date

  // ADD POTS
  const posts = await getAllPosts();
  posts.forEach(post => {
    const date = new Date(post.date)
    if (!lastDate || date > lastDate) {
      lastDate = date
    }
    AddUrlPath(post.slug, date.toISOString())
  })

  console.log(lastDate)
  if (lastDate) {
    urls[0].lastmod = lastDate.toISOString()
  }

  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap(urls))
  res.end()

  return {
    props: {}
  }
}

export default EmptyComponent
