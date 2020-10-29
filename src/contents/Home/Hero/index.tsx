import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import styled from 'styles/home/hero.module.css';

import { BackgroundInfo, getBackground } from './background'



const Hero: React.FC = () => {
  const [background, setBackground] = useState<BackgroundInfo>(() => getBackground(0))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBackground(getBackground(window.innerWidth))
    }
  }, [])

  return (
    <section className={styled.container}>
      <div className={styled.background}>
        <Image
          src={background.src}
          alt="Imagem de fundo"
          height={background.height}
          width={background.width}
        />
      </div>
      <h1 className={styled.hero}>
        Choro<br />
        Das<br />
        Rosas
      </h1>
      <a href="#poemas" className={styled.more}>
        <p>POEMAS</p>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    </section>
  );
}

export default Hero;