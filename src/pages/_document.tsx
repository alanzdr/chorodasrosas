import React from 'react'
import NextDocument, {
  Html, Head, Main, NextScript, DocumentContext
} from 'next/document'

class Document extends NextDocument {
  static async getInitialProps (ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return initialProps
  }

  render () {
    return (
      <Html lang="pt-BR">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
