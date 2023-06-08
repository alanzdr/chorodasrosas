import matter from 'gray-matter'
import { marked } from 'marked'
import { IPost } from 'types/posts'

marked.use({
  headerIds: false,
  mangle: false
})

export async function getAllPosts () : Promise<IPost[]> {
  const context = require.context('../data', false, /\.md$/)
  const posts : IPost[] = []

  for (const key of context.keys()) {
    // console.log(key.slice(0, 4))
    if (key.slice(0, 4) !== 'data') {
      const post = key.slice(2)
      const content = await import(`../data/${post}`)
      const meta = matter(content.default)

      posts.push({
        slug: post.replace('.md', ''),
        title: meta.data.title,
        thumb: meta.data.thumb,
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

export async function getPostBySlug (slug: string) : Promise<IPost> {
  const fileContent = await import(`../data/${slug}.md`)

  const meta = matter(fileContent.default)
  const content = marked.parse(meta.content)

  return {
    title: meta.data.title,
    thumb: meta.data.thumb,
    date: meta.data.date,
    content,
    slug
  }
}
