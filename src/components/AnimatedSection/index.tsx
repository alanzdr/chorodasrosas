import React from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'


import AnimatedController from './animation-controller'

interface Props extends React.HTMLProps<HTMLDivElement> {
  Tag?: React.ElementType // HTML tag for the section, defaults to 'section'
  firstElement?: boolean // Indicates if this is the first element in the section
  lcp?: boolean // Indicates if this is the first element or should be prioritized for LCP
  spacing?: 'none' | 'margin' | 'padding' // Spacing type
  distance?: 'small' | 'medium' | 'large' // Spacing between sections size
  relative?: boolean // Position relative or not (default is true)
}

const blockClass = tv({
  base: 'section z-10 w-full',
  variants: {
    spacing: {
      none: 'section-no-spacing',
      margin: 'section-margin',
      padding: 'section-padding',
    },
    distance: {
      small: 'section-small',
      medium: 'section-medium',
      large: 'section-large',
    },
    relative: {
      true: 'relative',
      false: '',
    },
  },
  defaultVariants: {
    spacing: 'margin',
    distance: 'medium',
    relative: true,
  },
})

const AnimatedSection: React.FC<Props> = ({

  className,
  children,
  Tag = 'section',
  spacing,
  distance,
  relative,
  firstElement,
  lcp,
  ...rest
}) => {
  const isFirstElement = firstElement || lcp

  if (isFirstElement) {
    return (
      <Tag
        className={twMerge(
          className,
          'animation-visible animation-keyframes',
          blockClass({
            spacing,
            distance,
            relative,
          })
        )}
        {...rest}
      >
        {children}
      </Tag>
    )
  }

  return (
    <AnimatedController
      className={twMerge(
        className,
        blockClass({
          spacing,
          distance,
          relative,
        })
      )}
      Tag={Tag}
      {...rest}
    >
      {children}
    </AnimatedController>
  )
}

export default AnimatedSection
