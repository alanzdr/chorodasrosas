declare module 'types/posts' {
  export interface IPost {
    title: string
    thumb: string
    thumbPosition?: 'center' | 'top' | 'bottom'
    slug: string
    tags: string[]
    date: string
    music?: string
    content?: string
  }
}
