import Footer from 'components/Footer'
import React from 'react'
import { IPost } from 'types/posts'

import Content from './Content'
import Relateds from './Relateds'
import Thumbnail from './Thumbnail'
import Video from './Video'

interface Props {
  data: IPost
  relateds: IPost[]
}

const Post: React.FC<Props> = ({ data, relateds }) => {
  return (
    <article className="w-full">
      <Thumbnail data={data} />
      <div className="relative z-10 mt-72 w-full bg-gray-light md:mt-[25rem] lg:mt-[27rem] xl:mt-[29rem]">
        <Content title={data.title} content={data.content} />
        {data.music && <Video videoId={data.music} title={data.title} />}
        <Relateds posts={relateds} />
        <Footer single />
      </div>
    </article>
  )
}

export default Post
