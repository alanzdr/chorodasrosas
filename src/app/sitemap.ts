import { type MetadataRoute } from 'next'
import { getAllPosts } from 'services/posts'

async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseSiteUrl = process.env.SITE_URL as string

  const urls: MetadataRoute.Sitemap = [
    { url: baseSiteUrl, lastModified: new Date() },
  ]

  const AddUrlPath = (path: string, lastModified: Date) => {
    const url = `${baseSiteUrl}${path}`
    urls.push({ url, lastModified })
  }

  // ADD POTS
  const posts = await getAllPosts()
  let lastDate: Date = new Date(posts[0].date)

  posts.forEach((post) => {
    const date = new Date(post.date)
    if (!lastDate || date > lastDate) {
      lastDate = date
    }
    AddUrlPath(`/poemas/${post.slug}`, date)
  })

  // Update Home date
  urls[0].lastModified = lastDate

  //
  return urls
}

export default sitemap
