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
        <title>Choro das Rosas - Atelier de Poemas</title>
        
        <meta property="og:title" content="Título da página ou artigo" />
        <meta name="description" content="A pagina nasceu com objetivo de ficar como um atelier online e manter meus poemas para que outras pessoas possam ver e talvez sentir um pouco do que eu estava sentindo quando escrevi." />
        <meta property="og:description" content="A pagina nasceu com objetivo de ficar como um atelier online e manter meus poemas para que outras pessoas possam ver e talvez sentir um pouco do que eu estava sentindo quando escrevi." />
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
