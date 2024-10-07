'use client'

import useIntersectObserver from 'hooks/use-intersect-observer'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  Tag?: React.ElementType
}

const AnimatedSection: React.FC<Props> = ({
  className,
  children,
  Tag = 'section',
  ...rest
}) => {
  const [isVisible, intersectReference] = useIntersectObserver()

  return (
    <Tag
      ref={intersectReference}
      className={twMerge(
        'animation-container',
        className,
        isVisible ? 'animation-visible' : ''
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default AnimatedSection
