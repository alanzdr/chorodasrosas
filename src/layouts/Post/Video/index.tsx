import AnimatedSection from 'components/AnimatedSection'
import YoutubePlayer from 'components/YoutubePlayer'
import META from 'data/meta.json'
import React from 'react'
import { animate } from 'zelindro-ui/utils/animation'

interface Props {
  title: string
  videoId: string
}

const Relateds: React.FC<Props> = ({ videoId, title }) => {
  return (
    <AnimatedSection className="container my-16 md:my-24">
      <div className={animate({ className: 'w-full text-center' })}>
        <h2 className="text-4xl text-red md:text-5xl">
          {META.glossary.musicAi}
        </h2>
        <p className="text-sm">
          Ouça o poema em versão musical feita por uma IA
        </p>
      </div>
      <div
        className={animate({
          className: 'container mt-8 w-full',
          index: 1,
        })}
        style={{
          maxWidth: 720,
        }}
      >
        <YoutubePlayer
          video={{
            id: videoId,
            title,
          }}
        />
      </div>
    </AnimatedSection>
  )
}

export default Relateds
