/* eslint-disable camelcase */
import React from 'react'
import Script from 'next/script'
import classNames from 'classnames'
import { Roboto, Amatic_SC } from 'next/font/google'

import 'styles/global.css'
import { Metadata } from 'next'
import { getMetadata } from 'utils/seo'

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

export async function generateViewport () {
  return {
    themeColor: '#b40f20'
  }
}

export const metadata: Metadata = getMetadata({
  title: 'Choro das Rosas - Atelier de Poemas',
  description: 'A pagina nasceu com objetivo de ficar como um atelier online e manter meus poemas para que outras pessoas possam ver e talvez sentir um pouco do que eu estava sentindo quando escrevi.'
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body className={classNames(amaticSC.variable, roboto.variable, 'relative font-roboto')}>
        {children}
        <Script
          async
          defer
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
