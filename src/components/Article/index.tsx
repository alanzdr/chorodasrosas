import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IPost } from 'types/posts'

interface Props {
  post: IPost
}

const PoemArticle: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`/${post.slug}`} className="post" data-tags={post.tags}>
      <article className="relative flex h-48 w-full cursor-pointer items-center justify-center rounded-lg bg-gray-dark shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0">
        <div className="absolute left-0 top-0 z-0 h-full w-full">
          <Image
            src={post.thumb}
            alt={`Thumbnail do poema ${post.title}`}
            height={192}
            width={400}
            className="h-full w-full overflow-hidden rounded-lg object-cover object-center brightness-[0.8] contrast-[1.1] saturate-[0.8]"
            sizes="100vw"
          />
        </div>
        <h3 className="z-20 text-center font-amatic text-[2.5rem] leading-tight text-white">
          {post.title}
        </h3>
      </article>
    </Link>
  )
}

export default PoemArticle
