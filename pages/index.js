import Head from 'next/head'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Features from '../components/features/Features'

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Head>
        <title>Uvelancia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div>
        <div>
          <HeroSection />
          <Features />
      <Footer />
        </div>
      </div>
    </div>
  )
}
