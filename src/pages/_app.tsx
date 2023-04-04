import type { AppProps } from 'next/app'
import '@/styles/global.css'

import { Roboto, Noto_Sans_HK } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const notoSanaHK = Noto_Sans_HK({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

const config = {
  metaTitle: 'Siu Fong Yeung',
  metaDescription: `Yeung Siu Fong (楊小芳) graduated from RMIT University Bachelor of Arts (Fine Art). Yeung's creative works attempt to recognize the "body" see the as an object from different perspectives and observations, she explores relationships between the soul and the physique with her "body" and expresses it via various media. Her recent series comprises paintings, ceramics, video, sound, and installation. Apart from participating in artistic creation, Yeung is also a performance artist.`,
}

export default function App({ Component, pageProps }: AppProps) {
  const chineseFont = notoSanaHK.style.fontFamily.split(',')[0]
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${chineseFont}, ${roboto.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>{config.metaTitle}</title>
        <meta property="og:title" content={config.metaTitle} />
        <meta name="description" content={config.metaDescription} />
        <meta property="og:site_name" content={config.metaTitle} />
        <meta property="og:description" content={config.metaDescription} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
