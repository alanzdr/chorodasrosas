import React, { useEffect, useState } from 'react';
import Image from 'next/image'

import styled from 'styles/post.module.css'

import { Size, getSizes } from './sizes'

interface Props {
  src: string
}

const Thumbnail: React.FC<Props> = ({src}) => {
  const [size, setSize] = useState<Size>(() => getSizes(0))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSize(getSizes(window.innerWidth))
    }
  }, [])

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