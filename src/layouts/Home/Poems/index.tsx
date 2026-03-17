import AnimatedSection from 'components/AnimatedSection'
import Article from 'components/Article'
import React, { useMemo } from 'react'

import type { IPost } from '@/types/posts'
import { animate } from '@/utils/animate'

import Filter from './filter'

interface Props {
  posts: IPost[]
}

const Poems: React.FC<Props> = ({ posts }) => {
  const postsTags = useMemo(
    () =>
      posts.reduce((acc, current) => {
        current.tags?.forEach((tag) => {
          if (tag && !acc.includes(tag)) {
            acc.push(tag)
          }
        })
        return acc
      }, [] as string[]),
    []
  )

  return (
    <AnimatedSection id="poemas">
      <div className="container">
        <div
          className={animate({
            className: 'flex items-end justify-between',
          })}
        >
          <h2 className="text-5xl text-red md:text-6xl">Poemas</h2>
          <Filter tags={postsTags} />
        </div>
        <main
          id="posts-container"
          className={animate({
            className:
              'relative mt-8 grid w-full gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3',
            index: 1,
          })}
        >
          {posts.map((item) => (
            <Article key={item.slug} post={item} />
          ))}
        </main>
      </div>
    </AnimatedSection>
  )
}

export default Poems
