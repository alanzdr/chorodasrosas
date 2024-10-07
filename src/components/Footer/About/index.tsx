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
          <h2 className={animate(1, 'text-4xl text-red md:text-5xl')}>
            Sobre o Autor
          </h2>
          <div className={animate(2)}>
            <h3 className="font-amatic text-2xl">
              Alanderson Zelindro da Rosa
            </h3>
            <p className="text-sm font-bold">Desenvolvedor sênior</p>
          </div>
          <div
            className={animate(
              3,
              'flex max-w-[17.5rem] flex-col gap-2 text-sm md:max-w-full'
            )}
          >
            <p>
              Eu sempre gostei de escrever, mas por conta do meu TDAH sempre
              tive dificuldade de terminar qualquer conto que comecei, mas
              descobri na poesia uma forma de me expressar, com menos linhas.
            </p>
          </div>
          <div
            className={animate(
              4,
              'mt-4 flex flex-col items-center md:mt-0 md:items-start'
            )}
          >
            <h3 className="text-2xl text-red">Siga-me</h3>
            <a
              href="https://www.instagram.com/chorodasrosas"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 transition-colors hover:text-red"
            >
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
