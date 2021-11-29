import '../styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * @description
 * _app component
 * https://nextjs.org/docs/advanced-features/custom-app
*/

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
