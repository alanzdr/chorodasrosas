import Image from 'next/image'
import React from 'react'
import { IPost } from 'types/posts'

interface Props {
  data: IPost
}

const Thumbnail: React.FC<Props> = ({ data }) => {
  return (
    <div className="fixed left-0 top-0 z-0 h-72 w-full bg-gray-dark md:h-[25rem] lg:h-[27rem] xl:h-[30rem]">
      <Image
        src={data.thumb}
        alt="Thumbnail do Poema"
        height={400}
        width={1400}
        className="h-full w-full object-cover object-[center,30%]"
        priority
        sizes="100vw"
      />
    </div>
  )
}

export default Thumbnail
