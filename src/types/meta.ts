declare module 'data/meta.json' {
  export type IDataType = 'page' | 'poem'

  export interface IPageMetaData {
    title: string
    description: string
  }

  export interface IPageMeta {
    title: string
    description?: string
    url?: string
  }

  export interface IMetaAuthor {
    name: string
    url: string
  }

  export interface IGlossary {
    musicAi: string
  }

  export interface IMeta {
    siteName: string
    siteDescription: string
    author: IMetaAuthor
    themeColor: string
    generator: Record<IDataType, IPageMetaData>
    glossary: IGlossary
  }

  const meta: IMeta
  export default meta
}
