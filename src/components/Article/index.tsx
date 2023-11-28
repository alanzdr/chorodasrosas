import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IPost } from 'types/posts'

interface Props {
  post: IPost
}

const PoemArticle: React.FC<Props> = ({ post }) => {
  return (
    <Link
      href={`/${post.slug}`}
      className='post'
      data-tags={post.tags}
    >
      <article className='relative h-48 w-full rounded-lg bg-gray-dark flex items-center justify-center cursor-pointer transition-[transform,box-shadow] duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-1 active:translate-y-0'>
        <div className="absolute left-0 top-0 w-full h-full z-0">
          <Image
            src={post.thumb}
            alt={`Thumbnail do poema ${post.title}`}
            height={192}
            width={400}
            className='w-full h-full rounded-lg overflow-hidden brightness-[0.8] saturate-[0.8] contrast-[1.1] object-cover object-center'
            sizes='100vw'
          />
        </div>
        <h3 className='text-center text-[2.5rem] leading-tight z-20 text-white font-amatic'>{post.title}</h3>
      </article>
    </Link>
  )
}

export default PoemArticle
