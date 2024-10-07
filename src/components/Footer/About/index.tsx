import AboutImage from 'assets/about.png'
import AnimatedSection from 'components/AnimatedSection'
import Image from 'next/image'
import React from 'react'
import { animate } from 'zelindro-ui/utils/animation'

const About: React.FC = () => {
  return (
    <AnimatedSection Tag="div" className="container max-w-[50rem]">
      <div className="flex grid-cols-[5fr,6fr] flex-col gap-10 md:grid">
        <div className={animate(0, 'flex items-center justify-end')}>
          <Image
            src={AboutImage}
            alt="Alanderson Zelindro da Rosa"
            className="h-auto w-full rounded-full shadow-2xl"
            quality={90}
            width={345}
            height={345}
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center md:items-start md:text-left">
          <div className={animate(1)}>
            <h2 className="text-5xl text-red md:text-6xl">Sobre o Autor</h2>
            <p className="font-amatic text-2xl">
              - Alanderson Zelindro da Rosa
            </p>
          </div>
          <div
            className={animate(
              2,
              'flex max-w-[17.5rem] flex-col gap-2 text-sm md:max-w-full'
            )}
          >
            <p>
              Eu sempre gostei de escrever, desde a adolescência, mas por conta
              do meu TDAH sempre tive dificuldade de terminar qualquer conto que
              comecei.
            </p>
            <p>
              Então, inspirado pelo meu irmão, resolvi começar a escrever
              poemas, e descobri nessa forma de arte, uma maneira de me
              expressar, e em poucas palavras falar o que eu preciso contar, ou
              dos sentimentos que estão dentro de mim.
            </p>
          </div>
          <div
            className={animate(
              3,
              'mt-4 flex flex-col items-center md:mt-0 md:items-start'
            )}
          >
            <h3 className="text-3xl text-red">Siga-me</h3>
            <a
              href="https://www.instagram.com/chorodasrosas"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-4 transition-colors hover:text-red"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              @chorodasrosas
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default About
