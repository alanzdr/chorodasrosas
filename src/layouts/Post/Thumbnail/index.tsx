import Image from 'next/image'
import React from 'react'
import { tv } from 'tailwind-variants'
import { IPost } from 'types/posts'

interface Props {
  data: IPost
}

const imageClassName = tv({
  base: 'h-full w-full object-cover',
  variants: {
    position: {
      center: 'object-center',
      top: 'object-[center,25%]',
      bottom: 'object-[center,75%]',
    },
  },
})

const Thumbnail: React.FC<Props> = ({ data }) => {
  return (
    <div className="fixed left-0 top-0 z-0 h-72 w-full bg-gray-dark md:h-[25rem] lg:h-[27rem] xl:h-[30rem]">
      <Image
        src={data.thumb}
        alt="Thumbnail do Poema"
        height={400}
        width={1400}
        className={imageClassName({ position: data.thumbPosition || 'center' })}
        priority
        sizes="100vw"
      />
    </div>
  )
}

export default Thumbnail
