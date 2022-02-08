import React from 'react'
import Image from 'next/image'

import styled from './styles.module.css'
import { IPost } from 'pages/api/posts'
import Link from 'next/link'

interface Props {
  posts: IPost[]
}

const Poems: React.FC<Props> = ({ posts }) => {
  return (
    <section id="poemas" className={styled.container}>
      {posts.map((item) => (
        <Link href={`/${item.slug}`} key={item.slug} >
          <a className={styled.item}>
            <div className={styled.thumbnail}>
              <Image
                src={item.thumb}
                alt={item.title}
                height={160}
                width={400}
              />
            </div>
            <h2>{item.title}</h2>
          </a>
        </Link>
      ))}
    </section>
  )
}

export default Poems
