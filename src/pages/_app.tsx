import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { NextSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo />
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
