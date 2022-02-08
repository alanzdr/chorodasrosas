import React from 'react'

import Thumbnail from './Thumbnail'
import Content from './Content'
import Footer from 'components/Footer'
import { IPost } from 'pages/api/posts'

import styled from './styles.module.css'

interface Props {
  data: IPost
}

const Post: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Thumbnail data={data} />
      <div className={styled.container}>
        <Content title={data.title} content={data.content} />
        <Footer single />
      </div>
    </>
  )
}

export default Post
