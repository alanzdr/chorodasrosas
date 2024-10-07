'use client'

import Select from 'components/Select'
import React, { useCallback } from 'react'

interface Props {
  tags: string[]
}

const HIDDEN_CLASS = 'hide'
const SHOW_CLASS = 'show'

const PoemsFilter: React.FC<Props> = ({ tags }) => {
  const onChangeTags = useCallback((tag: string) => {
    const container = document.getElementById('posts-container') as HTMLElement

    const posts = container.querySelectorAll('.post') as NodeListOf<HTMLElement>

    if (!tag) {
      posts.forEach((post) => {
        post.classList.remove(HIDDEN_CLASS)
        post.classList.add(SHOW_CLASS)
      })
    } else {
      posts.forEach((post) => {
        const postTags = post.dataset.tags
        if (postTags?.includes(tag)) {
          post.classList.remove(HIDDEN_CLASS)
          post.classList.add(SHOW_CLASS)
        } else {
          post.classList.add(HIDDEN_CLASS)
          post.classList.remove(SHOW_CLASS)
        }
      })
    }
  }, [])

  return (
    <Select
      values={tags}
      name="tags"
      label="Filtro por Tags:"
      containerClassName="text-right md:text-left max-w-[11rem] md:max-w-[16.25rem]"
      placeholder="Todas as Tags"
      onChange={(e) => onChangeTags(e.target.value)}
    />
  )
}

export default PoemsFilter
