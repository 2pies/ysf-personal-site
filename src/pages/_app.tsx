import type { AppProps } from 'next/app'
import '@/styles/global.css'

import { Roboto, Noto_Sans_HK } from 'next/font/google'

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

export default function App({ Component, pageProps }: AppProps) {
  const chineseFont = notoSanaHK.style.fontFamily.split(',')[0]
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${chineseFont}, ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
