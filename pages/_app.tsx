import Head from 'next/head'
import { useEffect } from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import '../styles/globals.css'

import * as ga from '../lib/ga'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f1f8ff',
      100: '#e0efff',
      200: '#b3d9fe',
      300: '#65b2ff',
      400: '#a6aeff',
      500: '#4f5eff',
      600: '#0015fa',
      700: '#000ea7',
      800: '#381fa2',
    },
  },
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Exomodule: next generation bioinformatics platform</title>
        <meta
          name="description"
          content="Exomodule empowers biologists and bioinformaticians with cutting edge cloud services and infrastructure."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
