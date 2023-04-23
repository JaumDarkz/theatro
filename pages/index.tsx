import Head from 'next/head'

import Navbar from '@/components/Navbar'
import LandingPage from '@/components/LandingPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Theatro</title>
        <meta name="description" content="Official Theatro Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <LandingPage />
    </>
  )
}
