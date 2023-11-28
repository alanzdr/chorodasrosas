import React, { useMemo } from 'react'

import Article from 'components/Article'
import { IPost } from 'types/posts'
import classNames from 'classnames'
import AnimatedSection from 'components/AnimatedSection'
import { animate } from 'utils/animation'
import dynamic from 'next/dynamic'

interface Props {
  posts: IPost[]
}

const Filter = dynamic(() => import('./filter'), { ssr: false })

const Poems: React.FC<Props> = ({ posts }) => {
  const postsTags = useMemo(() => posts.reduce((acc, current) => {
    current.tags?.forEach((tag) => {
      if (tag && !acc.includes(tag)) {
        acc.push(tag)
      }
    })
    return acc
  }, [] as string[]), [])

  return (
    <AnimatedSection id="poemas" className="my-10 md:my-20 container">
      <div className={classNames('flex items-end justify-between', animate())}>
        <h2 className='text-red text-5xl md:text-6xl'>Poemas</h2>
        <Filter
          tags={postsTags}
        />
      </div>
      <main id="posts-container" className={classNames('relative w-full mt-8 grid gap-6 md:gap-4 md:grid-cols-2 lg:grid-cols-3 ', animate(1))}>
        {posts.map((item) => (
          <Article key={item.slug} post={item} />
        ))}
      </main>
    </AnimatedSection>
  )
}

export default Poems
