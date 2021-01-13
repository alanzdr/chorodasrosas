import React from 'react';

import Thumbnail from './Thumbnail'
import Content from './Content'
import Footer from 'components/Footer'
import { IPost } from 'pages/api/posts';

import styled from 'styles/post.module.css'

interface Props {
  data: IPost
}

const Post: React.FC<Props> = ({data}) => {
  return (
    <>
      <Thumbnail src={data.thumb} />
      <div className={styled.container}>
        <Content title={data.title} content={data.content} />
        <Footer single />
      </div>
    </>
  );
}

export default Post;