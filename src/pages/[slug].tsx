import Head from 'next/head'
import { getPostBySlug, getAllPosts } from './api/posts';
import { GetStaticPropsContext } from "next";

import PostContent from 'contents/Post'
import { IPost } from './api/posts'

interface Props {
  data: IPost
}

const Post : React.FC<Props> = ({data}) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostContent data={data} />
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      data: await getPostBySlug(context.params.slug as string)
    }
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  const paths = posts.map(post => {
    return {
      params: { slug: post.slug }
    }
  });

  return {
    paths: paths,
    fallback: false
  }
}

export default Post;
