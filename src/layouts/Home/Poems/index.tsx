'use client'

import React, { useMemo, useState } from 'react'

import Article from 'components/Article'
import { IPost } from 'types/posts'
import Select from 'components/Select'
import useScrollAnimation from 'hooks/use-scroll-animation'
import classNames from 'classnames'

interface Props {
  posts: IPost[]
}

const Poems: React.FC<Props> = ({ posts }) => {
  const [selectedTag, setSelectedTag] = useState('')
  const { animate, scrollAnimationRef } = useScrollAnimation()

  const postsTags = useMemo(() => posts.reduce((acc, current) => {
    current.tags?.forEach((tag) => {
      if (tag && !acc.includes(tag)) {
        acc.push(tag)
      }
    })
    return acc
  }, [] as string[]), [])

  const filteredPosts = useMemo(() => {
    if (!selectedTag) {
      return posts
    }
    return posts.filter((post) => {
      if (post.tags?.includes(selectedTag)) {
        return true
      }
      return false
    })
  }, [posts, selectedTag])

  return (
    <section ref={scrollAnimationRef as any} id="poemas" className="my-10 md:my-20 container">
      <div className={classNames('flex items-end justify-between', animate())}>
        <h2 className='text-red text-5xl md:text-6xl'>Poemas</h2>
        <Select
          values={postsTags}
          name="tags"
          label="Filtro por Tags:"
          containerClassName='text-right md:text-left max-w-[11rem] md:max-w-[16.25rem]'
          placeholder='Todas as Tags'
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        />
      </div>
      <main className={classNames('w-full mt-8 grid gap-6 md:gap-4 md:grid-cols-2 lg:grid-cols-3 ', animate(1))}>
        {filteredPosts.map((item) => (
          <Article key={item.slug} post={item} />
        ))}
      </main>
    </section>
  )
}

export default Poems
