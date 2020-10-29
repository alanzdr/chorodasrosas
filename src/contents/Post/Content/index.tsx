import React from 'react';

import styled from 'styles/post.module.css'

interface Props {
  title: string,
  content: string
}

const Content: React.FC<Props> = ({title, content}) => {
  return (
    <div className={styled.postContent}>
      <h1 className={styled.title}>{title}</h1>
      <div 
        className={styled.content} 
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
    </div>
  );
}

export default Content;