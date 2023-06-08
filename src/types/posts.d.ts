declare module 'types/posts' {
  export interface IPost {
    title: string,
    thumb: string,
    slug: string,
    tags: string[],
    date: string,
    content?: string,
  }
}
