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
      className=""
    >
      <article className='relative h-48 w-full flex items-center justify-center cursor-pointer after:absolute after:bg-black after:opacity-25 after:left-0 after:top-0 after:z-10 after:w-full after:h-full after:transition-opacity hover:after:opacity-60'>

        <div className="absolute left-0 top-0 w-full h-full z-0">
          <Image
            src={post.thumb}
            alt={`Thumbnail do poema ${post.title}`}
            height={192}
            width={400}
            className='w-full h-full object-cover object-center'
          />
        </div>
        <h3 className='text-center text-4xl z-20 text-white font-amatic'>{post.title}</h3>
      </article>
    </Link>
  )
}

export default PoemArticle
