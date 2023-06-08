'use client'

import React from 'react'
import Image from 'next/image'
import useScrollAnimation from 'hooks/use-scroll-animation'
import classNames from 'classnames'

const Hero: React.FC = () => {
  const { animate, scrollAnimationRef } = useScrollAnimation()

  return (
    <section
      ref={scrollAnimationRef as any}
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="absolute z-0 left-0 top-0 w-full h-full">
        <Image
          src='https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg'
          alt="Imagem de fundo"
          className='w-full h-full object-cover object-[5%,center] lg:object-center'
          height={933}
          width={1400}
          priority
        />
      </div>
      <div className="absolute top-8 left-0 w-full z-10">
        <div className='container'>
          <h1 className={classNames('text-9xl font-amatic text-white', animate())}>
            Choro<br />
            Das<br />
            Rosas
          </h1>
          <p className={classNames('text-white mt-4', animate(1))}>Meu atelier pessoal<br />de poemas</p>

        </div>
      </div>
      <a href="#poemas" className={classNames('flex flex-col items-center justify-center absolute z-10 bottom-10 md:bottom-4 left-1/2 -translate-x-1/2 text-white font-bold transition-opacity hover:opacity-75', animate(2))}>
        <p>POEMAS</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    </section>
  )
}

export default Hero
