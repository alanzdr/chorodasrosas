import React from 'react'
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

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
            href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto:wght@300&display=swap" 
            rel="stylesheet" 
          />
          <link 
            rel="icon" 
            type="image/png" 
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link 
            rel="icon" 
            type="image/png" 
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link 
            rel="icon" 
            type="image/png" 
            sizes="16x16" 
            href="/favicon-16x16.png"
          />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Choro das Rosas" />
          <meta property="og:image" content="https://chorodasrosas.com/thumbnail.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:type" content="article" />
          <meta name="author" content="Alanderson Zelindro da Rosa" />
          <meta name="keywords" content="Poema" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-X6CQH7YMH7" />
          <script 
            dangerouslySetInnerHTML={{
              __html:`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-X6CQH7YMH7');
                `
              }}
          />
        </body>
      </Html>
    )
  }
}

export default Document
