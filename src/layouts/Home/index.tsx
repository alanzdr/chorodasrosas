import Footer from 'components/Footer'
import React from 'react'
import { IPost } from 'types/posts'

import Hero from './Hero'
import Poems from './Poems'

interface Props {
  posts: IPost[]
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Hero />
      <Poems posts={posts} />
      <Footer />
    </>
  )
}

export default Home
