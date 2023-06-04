import React from 'react'
import Head from 'next/head'
import { GetStaticPropsContext } from 'next'

import PostContent from 'contents/Post'
import { getPostBySlug, getAllPosts, IPost } from './api/posts'
import { getPoemDescription } from 'utils/seo'

interface Props {
  data: IPost
}

const Post : React.FC<Props> = ({ data }) => {
  const title = `${data.title} - Poema | Choro das Rosas`
  const description = getPoemDescription(data.title)
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </Head>
      <PostContent data={data} />
    </>
  )
}

export async function getStaticProps (context: GetStaticPropsContext) {
  return {
    props: {
      data: await getPostBySlug(context.params.slug as string)
    }
  }
}

export async function getStaticPaths () {
  const posts = await getAllPosts()

  const paths = posts.map(post => {
    return {
      params: { slug: post.slug }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export default Post
