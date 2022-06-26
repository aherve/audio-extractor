import Head from 'next/head'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import '../styles/globals.css'

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

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Audio extractor</title>
        <meta
          name="description"
          content="Extract audio links from an url"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
