import '@/styles/index.css'

import META from 'data/meta.json'
import type { Metadata } from 'next'
import { Amatic_SC, Roboto } from 'next/font/google'
import Script from 'next/script'
import React, { ViewTransition } from 'react'
import { twMerge } from 'tailwind-merge'
import { getMetadata } from 'utils/seo'

const amaticSC = Amatic_SC({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-family-amaticsc',
})

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-family-roboto',
})

export async function generateViewport() {
  return {
    themeColor: META.themeColor,
  }
}

export const metadata: Metadata = getMetadata('page', {
  title: META.siteName,
  description: '',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ViewTransition default="none">
      <html
        lang="pt-BR"
        className={twMerge(amaticSC.variable, roboto.variable, 'font-roboto')}
      >
        <head />
        <body>
          {children}
          <Script
            async
            defer
            src="https://www.googletagmanager.com/gtag/js?id=G-X6CQH7YMH7"
            strategy="lazyOnload"
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
    </ViewTransition>
  )
}
