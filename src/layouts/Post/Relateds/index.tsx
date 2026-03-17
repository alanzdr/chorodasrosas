import AnimatedSection from 'components/AnimatedSection'
import Article from 'components/Article'
import React from 'react'

import type { IPost } from '@/types/posts'
import { animate } from '@/utils/animate'

interface Props {
  posts: IPost[]
}

const Relateds: React.FC<Props> = ({ posts }) => {
  return (
    <AnimatedSection className="container my-16 md:my-24">
      <div className={animate({ className: 'w-full text-center' })}>
        <h2 className="text-4xl text-red md:text-5xl">Continue Lendo</h2>

        <p className="text-sm">
          Leia outros poemas parecidos com este que você acabou de ler.
        </p>
      </div>
      <div
        className={animate({
          className:
            'mt-8 grid w-full gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3',
          index: 1,
        })}
      >
        {posts.map((item) => (
          <Article key={item.slug} post={item} />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default Relateds
