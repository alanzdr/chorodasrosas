import Home from 'layouts/Home'
import React from 'react'
import { ViewTransition } from 'react'
import { getAllPosts } from 'services/posts'

export default async function Page() {
  const posts = await getAllPosts()
  return (
    <ViewTransition name="page">
      <Home posts={posts} />
    </ViewTransition>
  )
}
