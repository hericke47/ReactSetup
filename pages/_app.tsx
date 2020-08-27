import React from 'react'
import { AppProps } from 'next/app' // para o componente entender que ele recebe as props do component

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
