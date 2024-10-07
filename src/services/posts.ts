import META from 'data/meta.json'
import matter from 'gray-matter'
import { marked } from 'marked'
import { IPost } from 'types/posts'

export async function getAllPosts(): Promise<IPost[]> {
  const context = require.context('../data/poems', false, /\.md$/)
  const posts: IPost[] = []

  for (const key of context.keys()) {
    if (key.slice(0, 4) !== 'data') {
      const post = key.slice(2)
      const content = await import(`../data/poems/${post}`)
      const meta = matter(content.default)
      const tags = (meta.data.tags?.split(',') || ([] as string[])).map(
        (tag) => tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
      )

      const music = meta.data.music
      const thumb = meta.data.thumb
      const thumbPosition = meta.data.thumbPosition || 'center'

      if (music) {
        tags.push(META.glossary.musicAi)
      }

      posts.push({
        slug: post.replace('.md', ''),
        title: meta.data.title,
        thumb,
        thumbPosition,
        tags,
        date: meta.data.date,
        music,
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

export async function getPostsSlugs(): Promise<string[]> {
  const context = require.context('../data/poems', false, /\.md$/)
  const slugs: string[] = []

  for (const key of context.keys()) {
    // console.log(key.slice(0, 4))
    if (key.slice(0, 4) !== 'data') {
      const post = key.slice(2)
      slugs.push(post.replace('.md', ''))
    }
  }

  return slugs
}

export async function getPostBySlug(slug: string): Promise<IPost> {
  const fileContent = await import(`../data/poems/${slug}.md`)

  const meta = matter(fileContent.default)
  const content = await marked.parse(meta.content)
  const tags = (meta.data.tags?.split(',') || ([] as string[])).map(
    (tag) => tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
  )

  const music = meta.data.music
  const thumb = meta.data.thumb
  const thumbPosition = meta.data.thumbPosition || 'center'

  return {
    title: meta.data.title,
    thumb,
    thumbPosition,
    date: meta.data.date,
    tags,
    content,
    slug,
    music,
  }
}

function relatedPostScore(post: IPost, relatedToPost: IPost): number {
  const { tags } = relatedToPost

  let score = 0

  if (post.tags[0] === tags[0]) {
    score += 1
  }

  if (post.music && relatedToPost.music && post.music !== relatedToPost.music) {
    score += 1
  }

  score += tags.reduce((acc, tag) => {
    if (post.tags.includes(tag)) {
      return acc + 1
    }
    return acc
  }, 0)

  return score
}

export async function getRelatedsPosts(relatedToPost: IPost): Promise<IPost[]> {
  const { slug } = relatedToPost

  const posts = await getAllPosts()

  const shufflePosts = posts
    .filter((post) => post.slug !== slug)
    .sort(() => Math.random() - 0.5)

  const relatedsPosts = shufflePosts.sort((a, b) => {
    return (
      relatedPostScore(b, relatedToPost) - relatedPostScore(a, relatedToPost)
    )
  })

  return relatedsPosts.slice(0, 6)
}
