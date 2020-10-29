import React from 'react';

import Thumbnail from './Thumbnail'
import Content from './Content'
import Footer from 'components/Footer'
import { IPost } from 'pages/api/posts';

interface Props {
  data: IPost
}

const Post: React.FC<Props> = ({data}) => {
  return (
    <>
      <Thumbnail src={data.thumb} />
      <Content title={data.title} content={data.content} />
      <Footer single />
    </>
  );
}

export default Post;