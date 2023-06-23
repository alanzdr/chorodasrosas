/* eslint-disable camelcase */
import React from 'react'
import Script from 'next/script'
import classNames from 'classnames'
import { Roboto, Amatic_SC } from 'next/font/google'

import 'styles/global.css'

const amaticSC = Amatic_SC({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-amaticsc'
})

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-roboto'
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
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
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://chorodasrosas.com/thumbnail.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Choro das Rosas" />
        <meta property="og:image" content="https://chorodasrosas.com/thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" />
        <meta name="author" content="Alanderson Zelindro da Rosa" />
        <meta name="keywords" content="Poema" />
      </head>
      <body className={classNames(amaticSC.variable, roboto.variable, 'relative font-roboto')}>
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X6CQH7YMH7"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X6CQH7YMH7');
          `}
        </Script>
      </body>
    </html>
  )
}
