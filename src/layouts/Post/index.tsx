import React from 'react'

import Thumbnail from './Thumbnail'
import Content from './Content'
import Relateds from './Relateds'
import Footer from 'components/Footer'
import { IPost } from 'types/posts'

interface Props {
  data: IPost
  relateds: IPost[]
}

const Post: React.FC<Props> = ({ data, relateds }) => {
  return (
    <article className='w-full'>
      <Thumbnail data={data} />
      <div className="relative z-10 mt-72 md:mt-[25rem] lg:mt-[27rem] xl:mt-[29rem] w-full bg-gray-light">
        <Content title={data.title} content={data.content} />
        <Relateds posts={relateds} />
        <Footer single />
      </div>
    </article>
  )
}

export default Post
