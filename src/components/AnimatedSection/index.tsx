'use client'

import classNames from 'classnames'
import React from 'react'
import useIntersectObserver from 'hooks/use-intersect-observer'

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
      className={classNames('animated-section', className, {
        'animation-visible': isVisible
      })}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default AnimatedSection
