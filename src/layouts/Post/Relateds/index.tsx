'use client'

import classNames from 'classnames'
import Article from 'components/Article'
import useScrollAnimation from 'hooks/use-scroll-animation'
import React from 'react'
import { IPost } from 'types/posts'

interface Props {
  posts: IPost[]
}

const Relateds: React.FC<Props> = ({ posts }) => {
  const { animate, scrollAnimationRef } = useScrollAnimation()

  return (
    <section ref={scrollAnimationRef as any} className='container my-10 md:my-20'>
      <div className={classNames('w-full text-center', animate())}>
        <h2 className='text-red text-5xl md:text-6xl'>Continue Lendo</h2>
      </div>
      <main className={classNames('w-full mt-10 grid gap-6 md:gap-4 md:grid-cols-2 lg:grid-cols-3 ', animate(1))}>
        {posts.map((item) => (
          <Article key={item.slug} post={item} />
        ))}
      </main>
    </section>
  )
}

export default Relateds
