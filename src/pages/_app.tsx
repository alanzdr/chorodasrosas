import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Script from 'next/script'

import 'styles/global.css'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    if ('gtag' in window) {
      window.gtag('event', 'page_view', {
        page_path: router.asPath
      })
    }
    console.log(`navigate to ${router.asPath}`)
  }, [router.asPath])

  return (
    <>
      <Head>

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
      <Component {...pageProps} />
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
    </>

  )
}

export default MyApp
