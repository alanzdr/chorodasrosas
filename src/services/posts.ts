import matter from 'gray-matter'
import { marked } from 'marked'
import { IPost } from 'types/posts'

export async function getAllPosts () : Promise<IPost[]> {
  const context = require.context('../data', false, /\.md$/)
  const posts : IPost[] = []

  for (const key of context.keys()) {
    // console.log(key.slice(0, 4))
    if (key.slice(0, 4) !== 'data') {
      const post = key.slice(2)
      const content = await import(`../data/${post}`)
      const meta = matter(content.default)
      const tags = (meta.data.tags?.split(',') || [] as string[])
        .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase())

      const thumb = meta.data.thumb

      posts.push({
        slug: post.replace('.md', ''),
        title: meta.data.title,
        thumb,
        tags,
        date: meta.data.date
      } as IPost)
    }
  }

  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    }
    if (a.date > b.date) {
      return -1
    }
    return 0
  })
}

export async function getPostsSlugs () : Promise<string[]> {
  const context = require.context('../data', false, /\.md$/)
  const slugs : string[] = []

  for (const key of context.keys()) {
    // console.log(key.slice(0, 4))
    if (key.slice(0, 4) !== 'data') {
      const post = key.slice(2)
      slugs.push(post.replace('.md', ''))
    }
  }

  return slugs
}

export async function getPostBySlug (slug: string) : Promise<IPost> {
  const fileContent = await import(`../data/${slug}.md`)

  const meta = matter(fileContent.default)
  const content = marked.parse(meta.content)
  const tags = (meta.data.tags?.split(',') || [] as string[])
    .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase())

  const thumb = meta.data.thumb

  return {
    title: meta.data.title,
    thumb,
    date: meta.data.date,
    tags,
    content,
    slug
  }
}

export async function getRelatedsPosts (relatedToPost: IPost) : Promise<IPost[]> {
  const { slug, tags } = relatedToPost

  const posts = await getAllPosts()

  const shufflePosts = posts
    .filter(post => post.slug !== slug)
    .sort(() => Math.random() - 0.5)

  const relateds: IPost[] = shufflePosts.filter((post) => post.tags[0] === tags[0])
  const notRelateds: IPost[] = []

  shufflePosts.forEach((post) => {
    if (relateds.includes(post)) {
      return
    }
    const relatedsTags = post.tags.filter((tag) => tags.includes(tag))
    if (relatedsTags.length > 0) {
      relateds.push(post)
    } else {
      notRelateds.push(post)
    }
  })

  return [...relateds.slice(0, 3), ...notRelateds].slice(0, 6)
}
