import React from 'react'
import Head from 'next/head'

import rocketseatLogo from '../assets/rocketseat.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <img src={rocketseatLogo} alt="" />

        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Home
