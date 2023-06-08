import React from 'react'
import { Metadata } from 'next'

import Home from 'layouts/Home'
import { getAllPosts } from 'services/posts'

export const metadata: Metadata = {
  title: 'Choro das Rosas - Atelier de Poemas',
  description: 'A pagina nasceu com objetivo de ficar como um atelier online e manter meus poemas para que outras pessoas possam ver e talvez sentir um pouco do que eu estava sentindo quando escrevi.'
}

export default async function Page () {
  const posts = await getAllPosts()

  return <Home posts={posts}/>
}
