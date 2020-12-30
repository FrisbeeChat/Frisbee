import '../styles/globals.css'

import { ConfigProvider } from '../components/context'


import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp;
