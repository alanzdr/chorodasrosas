import AnimatedSection from 'components/AnimatedSection'
import React from 'react'
import { animate } from 'zelindro-ui/utils/animation'

interface Props {
  title: string
  content?: string
}

const Content: React.FC<Props> = ({ title, content }) => {
  return (
    <AnimatedSection
      Tag="main"
      className="container flex flex-col items-center justify-center pt-12 text-center"
    >
      <h1 className={animate({ className: 'text-7xl text-red' })}>{title}</h1>
      {content && (
        <div
          className={animate({ className: 'mt-10 text-base md:text-lg' })}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      )}
    </AnimatedSection>
  )
}

export default Content
