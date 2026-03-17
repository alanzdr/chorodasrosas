import PostLayout from 'layouts/Post'
import type { Metadata } from 'next'
import { ViewTransition } from 'react'
import { getPostBySlug, getPostsSlugs, getRelatedsPosts } from 'services/posts'
import { getMetadata } from 'utils/seo'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = await getPostsSlugs()

  return slugs.map((slug) => {
    return {
      slug,
    }
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const data = await getPostBySlug(slug)

  return getMetadata('poem', {
    title: data.title,
    description: data.title,
    url: `/poemas/${slug}`,
  })
}

const Page = async ({ params }: Props) => {
  const { slug } = await params

  const data = await getPostBySlug(slug)
  const relateds = await getRelatedsPosts(data)

  return (
    <ViewTransition name="page">
      <PostLayout data={data} relateds={relateds} />
    </ViewTransition>
  )
}

export default Page
