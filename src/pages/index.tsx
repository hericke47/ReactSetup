import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJs Structure</h1>
      <p>A ReactJs + Next.js structure made by Rocketseat.</p>
    </Container>
  )
}

export default Home
