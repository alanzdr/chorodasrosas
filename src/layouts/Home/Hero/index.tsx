import AnimatedSection from 'components/AnimatedSection'
import Image from 'next/image'
import React from 'react'
import { animate } from 'zelindro-ui/utils/animation'

const Hero: React.FC = () => {
  return (
    <AnimatedSection className="relative h-screen w-full overflow-hidden">
      <div className="absolute left-0 top-0 z-0 h-full w-full">
        <Image
          src="https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg"
          alt="Imagem de fundo"
          className="h-full w-full object-cover object-[5%,center] lg:object-center"
          height={933}
          width={1400}
          priority
          loading="eager"
          sizes="100vw"
        />
      </div>
      <div className="absolute left-0 top-8 z-10 w-full">
        <div className="container">
          <h1
            className={animate({
              className: 'font-amatic text-9xl text-white',
            })}
          >
            Choro
            <br />
            Das
            <br />
            Rosas
          </h1>
          <p className={animate({ className: 'mt-4 text-white', index: 1 })}>
            Atelier de poemas
          </p>
        </div>
      </div>
      <div
        className={animate({
          className: 'absolute bottom-20 left-1/2 z-10 md:bottom-4',
          index: 2,
        })}
      >
        <a
          href="#poemas"
          className="flex -translate-x-1/2 flex-col items-center justify-center font-bold text-white transition-opacity ease-out hover:opacity-75"
        >
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
