import AnimatedSection from 'components/AnimatedSection'
import Article from 'components/Article'
import React from 'react'
import { IPost } from 'types/posts'
import { animate } from 'zelindro-ui/utils/animation'

interface Props {
  posts: IPost[]
}

const Relateds: React.FC<Props> = ({ posts }) => {
  return (
    <AnimatedSection className="container my-10 md:my-20">
      <div className={animate({ className: 'w-full text-center' })}>
        <h2 className="text-5xl text-red md:text-6xl">Continue Lendo</h2>
      </div>
      <main
        className={animate({
          className:
            'mt-10 grid w-full gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3',
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

export default Relateds
