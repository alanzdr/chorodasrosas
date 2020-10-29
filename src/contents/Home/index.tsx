import React from 'react';

import Hero from './Hero';
import Poems from './Poems';
import Footer from 'components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Poems />
      <Footer />
    </>
  );
}

export default Home;