import classNames from 'classnames'
import AnimatedSection from 'components/AnimatedSection'
import Article from 'components/Article'
import React from 'react'
import { IPost } from 'types/posts'
import { animate } from 'utils/animation'

interface Props {
  posts: IPost[]
}

const Relateds: React.FC<Props> = ({ posts }) => {
  return (
    <AnimatedSection className='container my-10 md:my-20'>
      <div className={classNames('w-full text-center', animate())}>
        <h2 className='text-red text-5xl md:text-6xl'>Continue Lendo</h2>
      </div>
      <main className={classNames('w-full mt-10 grid gap-6 md:gap-4 md:grid-cols-2 lg:grid-cols-3 ', animate(1))}>
        {posts.map((item) => (
          <Article key={item.slug} post={item} />
        ))}
      </main>
    </AnimatedSection>
  )
}

export default Relateds
