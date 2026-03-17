import AnimatedSection from 'components/AnimatedSection'
import React from 'react'

import { animate } from '@/utils/animate'

interface Props {
  title: string
  content?: string
}

const Content: React.FC<Props> = ({ title, content }) => {
  return (
    <AnimatedSection Tag="main" className="mt-0!">
      <div className="container flex flex-col items-center justify-center text-center">
        <h1 className={animate({ className: 'text-7xl text-red' })}>{title}</h1>
        {content && (
          <div
            className={animate({
              className: 'mt-10 text-base md:text-lg',
              index: 1,
            })}
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        )}
      </div>
    </AnimatedSection>
  )
}

export default Content
