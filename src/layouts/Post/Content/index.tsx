import classNames from 'classnames'
import AnimatedSection from 'components/AnimatedSection'
import React from 'react'
import { animate } from 'utils/animation'

interface Props {
  title: string,
  content?: string
}

const Content: React.FC<Props> = ({ title, content }) => {
  return (
    <AnimatedSection Tag="main" className="container pt-12 flex flex-col items-center justify-center text-center">
      <h1 className={classNames('text-7xl text-red', animate())}>{title}</h1>
      {content && (
        <div
          className={classNames('mt-10 text-base md:text-lg', animate(1))}
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      )}
    </AnimatedSection>
  )
}

export default Content
