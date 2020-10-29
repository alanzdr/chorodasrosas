import React from 'react';

import Hero from './Hero';
import Poems from './Poems';
import Footer from 'components/Footer';
import { IPost } from 'pages/api/posts';

interface Props {
  posts: IPost[]
}

const Home: React.FC<Props> = ({posts}) => {
  return (
    <>
      <Hero />
      <Poems posts={posts} />
      <Footer />
    </>
  );
}

export default Home;