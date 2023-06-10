'use client'

import classNames from 'classnames'
import useScrollAnimation from 'hooks/use-scroll-animation'
import React from 'react'

interface Props {
  title: string,
  content?: string
}

const Content: React.FC<Props> = ({ title, content }) => {
  const { animate, scrollAnimationRef } = useScrollAnimation()

  return (
    <main ref={scrollAnimationRef as any} className="container pt-12 flex flex-col items-center justify-center text-center">
      <h1 className={classNames('text-7xl text-red', animate())}>{title}</h1>
      {content && (
        <div
          className={classNames('mt-10 text-base md:text-lg', animate(1))}
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      )}
    </main>
  )
}

export default Content
