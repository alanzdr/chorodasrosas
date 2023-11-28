import React from 'react'
import { Metadata } from 'next'

import PostLayout from 'layouts/Post'
import { getPostsSlugs, getPostBySlug, getRelatedsPosts } from 'services/posts'
import { getMetadata } from 'utils/seo'

interface Props {
  params: {
    slug: string
  }
}

const Page = async ({ params }: Props) => {
  const data = await getPostBySlug(params.slug)
  const relateds = await getRelatedsPosts(data)

  return <PostLayout data={data} relateds={relateds} />
}

export async function generateMetadata (
  { params }: Props
): Promise<Metadata> {
  const data = await getPostBySlug(params.slug)
  const description = `Clique para ler o poema '${data.title}' e outros, esse é meu atelier online de poemas, fique à vontade`

  return getMetadata({
    title: `${data.title} - Poema | Choro das Rosas`,
    description,
    url: `/${params.slug}`
  })
}

export async function generateStaticParams () {
  const slugs = await getPostsSlugs()

  return slugs.map(slug => {
    return {
      slug
    }
  })
}

export default Page
