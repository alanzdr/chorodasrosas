import React from 'react'

import Article from './article'
import { IPost } from 'types/posts'

interface Props {
  posts: IPost[]
}

const Poems: React.FC<Props> = ({ posts }) => {
  return (
    <section id="poemas" className="w-full">
      <main className="w-full flex flex-col sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((item) => (
          <Article key={item.slug} post={item} />
        ))}
      </main>
    </section>
  )
}

export default Poems
