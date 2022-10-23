import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/Hero'
import Nav from '../Components/Nav'
import Music from '../Components/Music'
import Merch from '../Components/Merch'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bungalow Jonathan</title>
        <meta name="Bungalow Jonathan" content="Bungalow Jonathan" />
        <link rel="icon" href="favicon.ico?v=1.1" />
      </Head>

      <main>
        <Hero />
        <Nav />
        <Music />
        <Merch />
       
      </main>

      {/* <footer>
      </footer> */}
    </div>
  )
}
