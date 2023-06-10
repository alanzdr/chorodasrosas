import React from 'react'
import Image from 'next/image'

import { IPost } from 'types/posts'

interface Props {
  data: IPost
}

const Thumbnail: React.FC<Props> = ({ data }) => {
  return (
    <div className="fixed w-full top-0 left-0 z-0 h-72 md:h-[25rem] lg:h-[27rem] xl:h-[30rem] bg-gray-dark">
      <Image
        src={data.thumb}
        alt="Thumbnail do Poema"
        height={400}
        width={1400}
        className='w-full h-full object-cover object-[center,30%]'
        priority
      />
    </div>
  )
}

export default Thumbnail
