import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globalStyle'


export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
