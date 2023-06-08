import React from 'react'
import { Metadata } from 'next'

import PostLayout from 'layouts/Post'
import { getAllPosts, getPostBySlug } from 'services/posts'

interface Props {
  params: {
    slug: string
  }
}

const Page = async ({ params }: Props) => {
  const data = await getPostBySlug(params.slug)

  return <PostLayout data={data}/>
}

export async function generateMetadata (
  { params }: Props
): Promise<Metadata> {
  const data = await getPostBySlug(params.slug)
  const description = `Leia o poema ${data.title} e outros, esse é meu atelier de poemas online, fique à vontade`

  return {
    title: `${data.title} - Poema | Choro das Rosas`,
    description
  }
}

export async function generateStaticParams () {
  const posts = await getAllPosts()

  return posts.map(post => {
    return {
      slug: post.slug
    }
  })
}

export default Page
