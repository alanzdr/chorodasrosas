import AnimatedSection from 'components/AnimatedSection'
import Article from 'components/Article'
import dynamic from 'next/dynamic'
import React, { useMemo } from 'react'
import { IPost } from 'types/posts'
import { animate } from 'zelindro-ui/utils/animation'

interface Props {
  posts: IPost[]
}

const Filter = dynamic(() => import('./filter'), { ssr: false })

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
    <AnimatedSection id="poemas" className="container my-10 md:my-20">
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
    </AnimatedSection>
  )
}

export default Poems
