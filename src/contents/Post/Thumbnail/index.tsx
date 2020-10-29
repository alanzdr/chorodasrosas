import React, { useState } from 'react';
import Image from 'next/image'

import styled from 'styles/post.module.css'

import { Size } from './sizes'

interface Props {
  src: string
}

const Thumbnail: React.FC<Props> = ({src}) => {
  const [size, setSize] = useState<Size>({
    height: 400,
    width: 400
  })
  return (
    <div className={styled.thumbnail}>
      <Image
        src={src}
        alt="Thumbnail do Poema"
        height={size.height}
        width={size.width}
      />
    </div>
  );
}

export default Thumbnail;