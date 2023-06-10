import { Metadata } from 'next'

interface Props {
  title: string
  description: string
  url: string
}

export const getMetadata = ({ title, description, url }: Props): Metadata => {
  return {
    title,
    description,
    twitter: {
      title,
      description
    },
    openGraph: {
      title,
      description,
      url
    }
  }
}
