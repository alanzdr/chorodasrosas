import React from 'react';
import Image from 'next/image'

import styled from 'styles/home/poems.module.css'
import Link from 'components/Link';

interface PoemData {
  img: string,
  slug: string,
  title: string
}

const DATA_EXAMPLE : PoemData[] = [
  {
    img: 'https://images.pexels.com/photos/5443678/pexels-photo-5443678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    slug: 'post-01',
    title: 'Post 01'
  },
  {
    img: 'https://images.pexels.com/photos/1322136/pexels-photo-1322136.jpeg',
    slug: 'post-02',
    title: 'Post 02'
  },
  {
    img: 'https://images.pexels.com/photos/194040/pexels-photo-194040.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    slug: 'post-03',
    title: 'Vênus'
  },
  {
    img: 'https://images.pexels.com/photos/850216/pexels-photo-850216.jpeg',
    slug: 'post-04',
    title: 'Será que la diria sim?'
  },
  {
    img: 'https://images.pexels.com/photos/2282000/pexels-photo-2282000.jpeg',
    slug: 'post-05',
    title: 'Lagrimas no espelho'
  },
  {
    img: 'https://images.pexels.com/photos/1161931/pexels-photo-1161931.jpeg',
    slug: 'vermelho',
    title: 'Vermelho'
  }
]

const Poems: React.FC = () => {
  return (
    <section id="poemas" className={styled.container}>
      {DATA_EXAMPLE.map((item) => (
        <Link href="/post" key={item.slug} >
          <a className={styled.item}>
            <div className={styled.thumbnail}>
              <Image
                src={item.img}
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
  );
}

export default Poems;