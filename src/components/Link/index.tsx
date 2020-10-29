import React from 'react'
import NextJsLink, { LinkProps } from 'next/link'

// const prefix = process.env.APP_PREFIX

const Link : React.FC<LinkProps> = ({ href, ...rest }) => (
  <NextJsLink href={href} as={href} passHref {...rest} />
)

export default Link
