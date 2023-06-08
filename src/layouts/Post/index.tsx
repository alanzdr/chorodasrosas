import React from 'react'

import Thumbnail from './Thumbnail'
import Content from './Content'
import Footer from 'components/Footer'
import { IPost } from 'types/posts'

interface Props {
  data: IPost
}

const Post: React.FC<Props> = ({ data }) => {
  return (
    <article className='w-full'>
      <Thumbnail data={data} />
      <div className="relative z-10 mt-72 md:mt-[25rem] w-full bg-gray-light">
        <Content title={data.title} content={data.content} />
        <Footer single />
      </div>
    </article>
  )
}

export default Post
