import React from 'react'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute z-0 left-0 top-0 w-full h-full">
        <Image
          src='https://images.pexels.com/photos/3817928/pexels-photo-3817928.jpeg'
          alt="Imagem de fundo"
          className='w-full h-full object-cover object-bottom'
          height={700}
          width={1400}
          priority
        />
      </div>
      <h1 className="absolute top-6 left-8 z-10 text-9xl font-amatic text-white">
        Choro<br />
        Das<br />
        Rosas
      </h1>
      <a href="#poemas" className="flex flex-col items-center justify-center absolute z-10 bottom-4 left-1/2 -translate-x-1/2 text-white font-bold transition-opacity hover:opacity-75">
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
