import { IDataType, IPageMeta } from 'data/meta.json'
import META from 'data/meta.json'
import { Metadata } from 'next'

export const getMetadata = (type: IDataType, pageMeta: IPageMeta): Metadata => {
  const metaData = META.generator[type]

  const title = metaData.title.replace(/%s/g, pageMeta.title)
  const description = metaData.description.replace(
    /%s/g,
    pageMeta.description || META.siteDescription
  )

  const url = pageMeta.url || process.env.SITE_URL

  return {
    metadataBase: new URL(process.env.SITE_URL as string),
    title,
    description,
    twitter: {
      title,
      description,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'pt-BR',
      siteName: META.siteName,
      images: [
        {
          url: process.env.SITE_URL + '/thumbnail.png',
          width: 1200,
          height: 630,
          alt: META.siteName,
        },
      ],
    },
    authors: [META.author],
  }
}
