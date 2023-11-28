import { Metadata } from 'next'

interface Props {
  title: string
  description: string
  url?: string
}

export const getMetadata = ({ title, description, url = '/' }: Props): Metadata => {
  return {
    metadataBase: new URL(process.env.SITE_URL as string),
    title,
    description,
    twitter: {
      title,
      description
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'pt_BR',
      siteName: 'Choro das Rosas',
      images: [
        {
          url: process.env.SITE_URL + '/thumbnail.png',
          width: 1200,
          height: 630,
          alt: 'Choro das Rosas'
        }
      ]
    },
    authors: [
      {
        name: 'Alanderson Zelindro da Rosa',
        url: 'https://www.instagram.com/alandersonzdr'
      }
    ]
  }
}
