import React from 'react'
import Image from 'next/image'

import styled from '../styles.module.css'
import { IPost } from 'pages/api/posts'

interface Props {
  data: IPost
}

const Thumbnail: React.FC<Props> = ({ data }) => {
  return (
    <div className={styled.thumbnail}>
      <Image
        src={data.thumb}
        alt="Thumbnail do Poema"
        height={400}
        width={1400}
      />
    </div>
  )
}

export default Thumbnail
