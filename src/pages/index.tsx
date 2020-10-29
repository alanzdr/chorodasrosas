import Head from 'next/head'

import HomeContent from 'contents/Home'
import { getAllPosts, IPost } from './api/posts'

interface Props {
  posts: IPost[]
}

const Home: React.FC<Props> = ({posts}) => {

  const sortedPosts = posts.sort((a, b) => {
    if ( a.date < b.date ){
      return 1;
    }
    if ( a.date > b.date ){
      return -1;
    }
    return 0;
  })

  return (
    <>
      <Head>
        <title>Choro das Rosas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContent posts={sortedPosts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: { posts }
  }
}

export default Home;
