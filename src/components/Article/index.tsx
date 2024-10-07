import YoutubeIcon from 'assets/icons/youtube.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IPost } from 'types/posts'

interface Props {
  post: IPost
}

const PoemArticle: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`/poemas/${post.slug}`} className="post" data-tags={post.tags}>
      <article className="relative flex h-48 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-dark shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0">
        <div className="absolute left-0 top-0 z-0 h-full w-full">
          <Image
            src={post.thumb}
            alt={`Thumbnail do poema ${post.title}`}
            height={192}
            width={400}
            className="h-full w-full object-cover object-center brightness-[0.75] contrast-[1.1] saturate-[0.75]"
            sizes="100vw"
          />
        </div>
        <h3 className="z-20 text-center font-amatic text-[2.5rem] leading-tight text-white">
          {post.title}
        </h3>
        {post.music && (
          <>
            <div
              style={{ height: '200%' }}
              className="absolute right-0 top-0 z-10 w-1/2 rotate-45 bg-gradient-to-r from-red/0 to-red/50"
            />
            <div className="group absolute bottom-3 right-3 z-20 h-8 w-8">
              <p
                style={{ right: `calc(100% + 8px)` }}
                className="card pointer-events-none absolute top-1/2 origin-right -translate-y-1/2 scale-0 text-nowrap break-keep bg-white px-2.5 py-1 text-xs leading-none opacity-0 transition-all group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100"
              >
                Com musica em IA
              </p>
              <Image
                src={YoutubeIcon}
                alt="Ícone do Youtube"
                className="h-full w-full"
                width={32}
                height={32}
              />
            </div>
          </>
        )}
      </article>
    </Link>
  )
}

export default PoemArticle
