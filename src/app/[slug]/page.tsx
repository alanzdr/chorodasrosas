import PostLayout from 'layouts/Post'
import { Metadata } from 'next'
import React from 'react'
import { getPostBySlug, getPostsSlugs, getRelatedsPosts } from 'services/posts'
import { getMetadata } from 'utils/seo'

interface Props {
  params: {
    slug: string
  }
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
  const data = await getPostBySlug(params.slug)

  return getMetadata('poem', {
    title: data.title,
    description: data.title,
    url: `/${params.slug}`,
  })
}

const Page = async ({ params }: Props) => {
  const data = await getPostBySlug(params.slug)
  const relateds = await getRelatedsPosts(data)

  return <PostLayout data={data} relateds={relateds} />
}

export default Page
