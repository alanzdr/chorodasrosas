'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'

import { useIntersectObserver } from '@/hooks/use-intersect-observer'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  Tag: React.ElementType
}

const AnimationController: React.FC<Props> = ({
  children,
  className,
  Tag,
  ...rest
}) => {
  const [isVisible, intersectReference] = useIntersectObserver()

  return (
    <Tag
      ref={intersectReference}
      className={twMerge(className, isVisible && 'animation-visible')}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default AnimationController
