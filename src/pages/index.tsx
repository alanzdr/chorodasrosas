import Head from 'next/head'

import HomeContent from 'contents/Home'


const Home = () => {
  return (
    <>
      <Head>
        <title>Choro das Rosas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContent />
    </>
  )
}

export default Home;
