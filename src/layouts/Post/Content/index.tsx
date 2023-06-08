import React from 'react'

interface Props {
  title: string,
  content?: string
}

const Content: React.FC<Props> = ({ title, content }) => {
  return (
    <main className="container pt-12 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl text-red">{title}</h1>
      {content && (
        <div
          className="mt-10 text-base md:text-lg"
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      )}
    </main>
  )
}

export default Content
