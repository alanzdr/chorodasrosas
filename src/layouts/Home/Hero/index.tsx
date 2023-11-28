import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import AnimatedSection from 'components/AnimatedSection'
import { animate } from 'utils/animation'

const Hero: React.FC = () => {
  return (
    <AnimatedSection
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
          loading='eager'
          sizes='100vw'
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
      <div className={classNames('absolute z-10 bottom-20 md:bottom-4 left-1/2', animate(2))}>
        <a href="#poemas" className='flex flex-col items-center justify-center text-white font-bold -translate-x-1/2 transition-opacity ease-out hover:opacity-75'>
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
      </div>
    </AnimatedSection>
  )
}

export default Hero
